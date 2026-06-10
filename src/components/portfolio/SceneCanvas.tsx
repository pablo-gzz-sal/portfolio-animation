import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Global fixed-position backdrop: a bespoke GLSL "aurora" field.
 *
 * Design goals:
 *  - Premium, restrained — slow domain-warped flow noise in the brand teal,
 *    brighter toward the viewport edges so the center stays clean for content.
 *  - Reacts subtly to scroll (flow direction + hue temperature + intensity)
 *    and to the pointer (gentle drift). No camera gymnastics.
 *  - Cheap: renders a single fullscreen quad at reduced resolution,
 *    pauses when the tab is hidden, renders one static frame under
 *    prefers-reduced-motion.
 */

const VERTEX = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

  float t = uTime * 0.035;
  vec2 drift = vec2(t * 0.55 + uScroll * 0.9, -t * 0.4 + uScroll * 0.6);

  // double domain warp — the source of the smoke-like motion
  vec2 q = vec2(
    fbm(p * 1.3 + drift),
    fbm(p * 1.3 + vec2(5.2, 1.3) - drift * 0.8)
  );
  vec2 r = vec2(
    fbm(p * 1.3 + 1.9 * q + vec2(1.7, 9.2) + uMouse * 0.35),
    fbm(p * 1.3 + 1.9 * q + vec2(8.3, 2.8) - uMouse * 0.25)
  );
  float f = fbm(p * 1.5 + 2.1 * r);

  // brighter toward the edges, calm in the center where content lives
  float edge = smoothstep(0.25, 1.05, length(p));

  // palette: near-black canvas, deep teal bands, rare bright wisps.
  // scroll cools the teal toward blue-green as you descend.
  vec3 base = vec3(0.052, 0.056, 0.064);
  vec3 teal = mix(vec3(0.07, 0.34, 0.32), vec3(0.05, 0.24, 0.30), uScroll);
  vec3 glow = vec3(0.42, 0.76, 0.73);

  float band = smoothstep(0.38, 0.85, f);
  float wisp = smoothstep(0.62, 0.98, f + q.x * 0.22);

  vec3 col = base;
  col = mix(col, teal, band * (0.16 + 0.5 * edge));
  col += glow * wisp * (0.05 + 0.16 * edge);

  // gentle breathing tied to scroll position
  col *= 0.96 + 0.06 * sin(uScroll * 3.14159);

  gl_FragColor = vec4(col, 1.0);
}
`;

export function SceneCanvas() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Soft gradients survive heavy downsampling — render small, upscale via CSS.
    const RENDER_SCALE = 0.6;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(1);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const applySize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      renderer.setSize(Math.round(w * RENDER_SCALE), Math.round(h * RENDER_SCALE), false);
      uniforms.uResolution.value.set(w, h);
    };
    applySize();
    const ro = new ResizeObserver(() => {
      applySize();
      if (reduceMotion) renderer.render(scene, camera);
    });
    ro.observe(container);

    // --- interaction state (lerped in the tick for inertia) ---
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };

    let scrollProgress = 0;
    let scrollTarget = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    const onLenis = (e: Event) => {
      const ce = e as CustomEvent<{ progress: number }>;
      scrollTarget = ce.detail?.progress ?? scrollTarget;
    };

    if (reduceMotion) {
      // One static frame; no loop, no listeners.
      uniforms.uTime.value = 40;
      renderer.render(scene, camera);
      return () => {
        ro.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lenis-scroll", onLenis as EventListener);
    onScroll();

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);

      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;
      scrollProgress += (scrollTarget - scrollProgress) * 0.06;

      uniforms.uTime.value = (now - start) / 1000;
      uniforms.uScroll.value = scrollProgress;
      uniforms.uMouse.value.set(mouse.x, mouse.y);

      renderer.render(scene, camera);
    };

    const startLoop = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stopLoop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener("visibilitychange", onVisibility);
    startLoop();

    return () => {
      stopLoop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", onLenis as EventListener);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-20" />
      {/* Light readability vignette — the shader is content-aware dark
          already; this just steadies the very center. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--background) 55%, transparent) 0%, color-mix(in oklab, var(--background) 22%, transparent) 45%, transparent 75%)",
        }}
      />
    </>
  );
}
