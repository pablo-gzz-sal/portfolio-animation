import { useEffect, useRef } from "react";
import * as THREE from "three";
import { onIntroDone } from "@/lib/intro";
import { PROJECT_META } from "./projects";

/**
 * The hero's centrepiece — an Unveil-style "pixel veil" over a wall of work.
 *
 * Two passes:
 *  1. Trail — a low-res ping-pong float target. Each frame the previous field
 *     decays and the pointer splats a gaussian into it, its radius and weight
 *     growing with pointer speed. That field is the "disturbance".
 *  2. Veil — the screen is cut into square cells. A cell's disturbance decides
 *     what it shows: nothing (just a faint grid dot), a frosted teal square,
 *     or — as it saturates — the project stills underneath, with a lens bulge
 *     around the pointer. Cells close their gaps as they fill, so a hard swipe
 *     opens a clean window onto the work.
 *
 * With no pointer activity a "ghost" pointer drifts on a Lissajous path so the
 * hero is never static, and on intro the ghost sweeps the whole plate once —
 * the unveil.
 *
 * Desktop + fine pointer + motion-OK only; the parent decides. Pauses when
 * off-screen or the tab is hidden.
 */

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const TRAIL_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPrev;
uniform vec2 uPoint;
uniform vec2 uVel;
uniform float uAspect;
uniform float uRadius;
uniform float uStrength;
void main() {
  // Drag the field a touch along the motion so fast swipes leave a comet tail.
  vec2 uv = vUv - uVel * 0.35;
  float prev = texture2D(uPrev, uv).r;
  prev = max(prev * 0.962 - 0.0025, 0.0);
  vec2 d = vUv - uPoint;
  d.x *= uAspect;
  float splat = exp(-dot(d, d) / (uRadius * uRadius)) * uStrength;
  gl_FragColor = vec4(min(prev + splat, 1.0), 0.0, 0.0, 1.0);
}
`;

const VEIL_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTrail;
uniform sampler2D uWall;
uniform vec2 uRes;        // css px
uniform vec2 uPoint;      // 0..1, y up
uniform vec2 uCover;      // wall uv scale for object-fit: cover
uniform float uCell;      // cell size, css px
uniform float uTime;
uniform float uIntro;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  vec2 px = vUv * uRes;
  vec2 cell = floor(px / uCell);
  vec2 cellUv = (cell + 0.5) * uCell / uRes;
  vec2 local = fract(px / uCell) - 0.5;

  float t = texture2D(uTrail, cellUv).r * uIntro;

  // lens bulge around the pointer
  vec2 d = vUv - uPoint;
  vec2 da = d * vec2(uRes.x / uRes.y, 1.0);
  float lens = exp(-dot(da, da) / 0.03);
  vec2 warped = vUv - d * lens * 0.22;

  // low disturbance samples one colour per cell (pixelated),
  // saturation blends to the continuous, lensed image
  float smoothAmt = smoothstep(0.55, 0.95, t);
  vec2 suv = mix(cellUv - d * lens * 0.22, warped, smoothAmt);
  suv = (suv - 0.5) * uCover + 0.5;
  vec3 img = texture2D(uWall, suv).rgb;

  // cell shape: a square that grows with t, gaps closing once saturated
  float hs = mix(0.0, 0.5, smoothstep(0.03, 0.4, t)) - mix(0.06, 0.0, smoothAmt);
  float sq = 1.0 - smoothstep(hs - 0.02, hs, max(abs(local.x), abs(local.y)));
  sq = max(sq, smoothAmt);

  // occasional per-cell flicker in the frosted band — the "scan" feel
  float flick = step(0.93, hash(cell + floor(uTime * 9.0))) * smoothstep(0.08, 0.3, t) * (1.0 - smoothAmt);

  vec3 teal = vec3(0.16, 0.52, 0.5);
  vec3 glow = vec3(0.55, 0.86, 0.82);
  vec3 frost = mix(teal * 0.55, img * 0.8 + teal * 0.25, smoothstep(0.15, 0.55, t));
  vec3 col = mix(frost, img, smoothAmt);
  col += glow * flick * 0.35;

  float a = sq * smoothstep(0.02, 0.18, t) * mix(0.72, 0.96, smoothAmt);

  // idle grid dots, fading under active cells
  float dotMask = (1.0 - smoothstep(0.035, 0.06, length(local))) * 0.16 * uIntro;
  vec3 dotCol = vec3(0.95, 0.94, 0.9);

  vec3 outCol = col * a + dotCol * dotMask * (1.0 - a);
  float outA = a + dotMask * (1.0 - a);
  gl_FragColor = vec4(outCol, outA);
}
`;

/** Paint the five project stills into one staggered wall texture. */
async function buildWall(): Promise<HTMLCanvasElement> {
  const W = 2048;
  const H = 1152;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext("2d")!;
  g.fillStyle = "#08090b";
  g.fillRect(0, 0, W, H);

  const imgs = await Promise.all(
    PROJECT_META.map(
      (m) =>
        new Promise<HTMLImageElement | null>((resolve) => {
          const img = new Image();
          img.src = m.tile;
          img.decode().then(() => resolve(img), () => resolve(null));
        }),
    ),
  );
  const ok = imgs.filter(Boolean) as HTMLImageElement[];
  if (!ok.length) return canvas;

  // 4 columns, staggered vertically, tiles repeated to fill.
  const cols = 4;
  const gap = 28;
  const tw = (W - gap * (cols + 1)) / cols;
  const th = tw * 0.66;
  let n = 0;
  for (let c = 0; c < cols; c++) {
    const offset = c % 2 === 0 ? -th * 0.35 : 0;
    for (let y = offset + gap; y < H; y += th + gap) {
      const img = ok[n++ % ok.length];
      const x = gap + c * (tw + gap);
      // cover-fit into the slot
      const s = Math.max(tw / img.width, th / img.height);
      const sw = tw / s;
      const sh = th / s;
      g.save();
      g.beginPath();
      g.roundRect(x, y, tw, th, 18);
      g.clip();
      g.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, x, y, tw, th);
      g.restore();
    }
  }
  return canvas;
}

export function HeroVeil() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      premultipliedAlpha: true,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.PlaneGeometry(2, 2);

    // --- trail ping-pong ---
    const rtOpts: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
    };
    let rtA = new THREE.WebGLRenderTarget(8, 8, rtOpts);
    let rtB = new THREE.WebGLRenderTarget(8, 8, rtOpts);
    const trailUniforms = {
      uPrev: { value: rtA.texture as THREE.Texture },
      uPoint: { value: new THREE.Vector2(0.5, 0.5) },
      uVel: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: 1 },
      uRadius: { value: 0.08 },
      uStrength: { value: 0 },
    };
    const trailMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: TRAIL_FRAG,
      uniforms: trailUniforms,
      depthTest: false,
      depthWrite: false,
    });
    const trailScene = new THREE.Scene();
    trailScene.add(new THREE.Mesh(quad, trailMat));

    // --- veil ---
    const wallTex = new THREE.Texture();
    // Raw sRGB in, raw sRGB out — the ShaderMaterial does no colour management.
    wallTex.colorSpace = THREE.NoColorSpace;
    wallTex.minFilter = THREE.LinearFilter;
    wallTex.generateMipmaps = false;
    const veilUniforms = {
      uTrail: { value: rtB.texture as THREE.Texture },
      uWall: { value: wallTex },
      uRes: { value: new THREE.Vector2(1, 1) },
      uPoint: { value: new THREE.Vector2(0.5, 0.5) },
      uCover: { value: new THREE.Vector2(1, 1) },
      uCell: { value: 26 },
      uTime: { value: 0 },
      uIntro: { value: 0 },
    };
    const veilMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: VEIL_FRAG,
      uniforms: veilUniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      premultipliedAlpha: true,
    });
    const veilScene = new THREE.Scene();
    veilScene.add(new THREE.Mesh(quad, veilMat));

    let disposed = false;
    buildWall().then((canvas) => {
      if (disposed) return;
      wallTex.image = canvas;
      wallTex.needsUpdate = true;
    });

    const WALL_ASPECT = 2048 / 1152;
    const applySize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      renderer.setSize(w, h, false);
      veilUniforms.uRes.value.set(w, h);
      veilUniforms.uCell.value = Math.round(Math.max(20, Math.min(34, w / 56)));
      const a = w / h;
      veilUniforms.uCover.value.set(a > WALL_ASPECT ? 1 : a / WALL_ASPECT, a > WALL_ASPECT ? WALL_ASPECT / a : 1);
      trailUniforms.uAspect.value = a;
      const tw = Math.max(32, Math.round(w / 10));
      const th = Math.max(32, Math.round(h / 10));
      rtA.setSize(tw, th);
      rtB.setSize(tw, th);
    };
    applySize();
    const ro = new ResizeObserver(applySize);
    ro.observe(container);

    // --- pointer + ghost ---
    const point = { x: 0.5, y: 0.5, px: 0.5, py: 0.5 };
    let lastMove = -1e9;
    let rect = container.getBoundingClientRect();
    const onMove = (e: PointerEvent) => {
      rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return;
      point.x = x;
      point.y = y;
      lastMove = performance.now();
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // intro sweep: ghost crosses the plate on a shallow diagonal
    let introStart = -1;
    const INTRO_DUR = 1.6;
    const offIntro = onIntroDone(() => {
      introStart = performance.now();
    });

    let raf = 0;
    let visible = true;
    const start = performance.now();
    let speed = 0;

    const tick = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      raf = requestAnimationFrame(tick);
      const time = (now - start) / 1000;

      let tx = point.x;
      let ty = point.y;
      let ghost = false;
      if (introStart >= 0 && (now - introStart) / 1000 < INTRO_DUR) {
        const p = (now - introStart) / 1000 / INTRO_DUR;
        const e = 1 - Math.pow(1 - p, 3);
        tx = -0.1 + e * 1.2;
        ty = 0.78 - e * 0.45 + Math.sin(e * Math.PI * 2) * 0.08;
        ghost = true;
      } else if (now - lastMove > 2200) {
        tx = 0.62 + Math.sin(time * 0.43) * 0.3;
        ty = 0.62 + Math.sin(time * 0.61 + 1.3) * 0.22;
        ghost = true;
      }

      // the veil only wakes once the intro has begun
      const introTarget = introStart >= 0 ? 1 : 0;
      veilUniforms.uIntro.value += (introTarget - veilUniforms.uIntro.value) * 0.06;

      const vx = tx - point.px;
      const vy = ty - point.py;
      const inst = Math.hypot(vx * trailUniforms.uAspect.value, vy);
      speed += (inst - speed) * 0.25;
      point.px = tx;
      point.py = ty;

      trailUniforms.uPoint.value.set(tx, ty);
      trailUniforms.uVel.value.set(vx * 0.5, vy * 0.5);
      trailUniforms.uRadius.value = 0.045 + Math.min(speed * 1.6, 0.09);
      const base = ghost ? 0.1 : 0.06;
      trailUniforms.uStrength.value = Math.min(base + speed * (ghost ? 5 : 9), 0.55);

      // ping-pong
      trailUniforms.uPrev.value = rtA.texture;
      renderer.setRenderTarget(rtB);
      renderer.render(trailScene, camera);
      renderer.setRenderTarget(null);
      const tmp = rtA;
      rtA = rtB;
      rtB = tmp;

      veilUniforms.uTrail.value = rtA.texture;
      const lp = veilUniforms.uPoint.value;
      lp.set(lp.x + (tx - lp.x) * 0.12, lp.y + (ty - lp.y) * 0.12);
      veilUniforms.uTime.value = time;
      renderer.render(veilScene, camera);
    };
    const startLoop = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      startLoop();
    });
    io.observe(container);
    const onVis = () => startLoop();
    document.addEventListener("visibilitychange", onVis);
    startLoop();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      offIntro();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      rtA.dispose();
      rtB.dispose();
      wallTex.dispose();
      trailMat.dispose();
      veilMat.dispose();
      quad.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0" />;
}
