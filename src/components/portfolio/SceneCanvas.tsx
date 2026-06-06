import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Global fixed-position 3D backdrop.
 *
 * Design goals:
 *  - Premium, restrained — never competes with content.
 *  - Two slowly drifting wireframe shapes anchored to opposite corners,
 *    so the center of the viewport (where cards live) stays clean.
 *  - Reacts subtly to scroll (rotation + small parallax + opacity dip
 *    inside dense content sections).
 *  - A radial vignette overlay darkens the center to guarantee card
 *    contrast over the moving wireframes.
 */
export function SceneCanvas() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- shape A: faceted icosahedron, top-right ---
    const geoA = new THREE.IcosahedronGeometry(1.35, 1);
    const wireA = new THREE.LineSegments(
      new THREE.WireframeGeometry(geoA),
      new THREE.LineBasicMaterial({
        color: 0x5cbdb9,
        transparent: true,
        opacity: 0.22,
      })
    );
    const glowA = new THREE.Mesh(
      new THREE.SphereGeometry(1, 24, 24),
      new THREE.MeshBasicMaterial({
        color: 0x0d7a5f,
        transparent: true,
        opacity: 0.1,
      })
    );
    glowA.scale.setScalar(1.3);
    const groupA = new THREE.Group();
    groupA.add(wireA);
    groupA.add(glowA);
    groupA.position.set(3.4, 1.7, 0);
    scene.add(groupA);

    // --- shape B: torus knot, bottom-left ---
    const geoB = new THREE.TorusKnotGeometry(0.95, 0.28, 120, 14);
    const wireB = new THREE.LineSegments(
      new THREE.WireframeGeometry(geoB),
      new THREE.LineBasicMaterial({
        color: 0x9be7e2,
        transparent: true,
        opacity: 0.16,
      })
    );
    const groupB = new THREE.Group();
    groupB.add(wireB);
    groupB.position.set(-3.6, -1.9, -0.5);
    scene.add(groupB);

    // --- particles, very faint ---
    const PARTICLE_COUNT = 260;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x5cbdb9,
      size: 0.018,
      transparent: true,
      opacity: 0.28,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // --- interaction state ---
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMove);

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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lenis-scroll", onLenis as EventListener);
    onScroll();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const t = (now - start) / 1000;

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      scrollProgress += (scrollTarget - scrollProgress) * 0.07;

      if (!reduceMotion) {
        const sp = scrollProgress;

        // Shape A — scroll drives a full sweep: rotates, dives across
        // the viewport, and pushes back into depth as you scroll.
        groupA.rotation.x = t * 0.08 + sp * Math.PI * 2 + mouse.y * 0.25;
        groupA.rotation.y = t * 0.11 + sp * Math.PI * 2.5 + mouse.x * 0.25;
        groupA.rotation.z = sp * Math.PI * 1.2;
        groupA.position.x = 3.4 + Math.sin(t * 0.2) * 0.2 + mouse.x * 0.2 - sp * 2.2;
        groupA.position.y = 1.7 - sp * 3.4;
        groupA.position.z = -sp * 2.5;
        groupA.scale.setScalar(1 + sp * 0.35);

        // Shape B — counter-sweep: comes forward and across as A retreats.
        groupB.rotation.x = -t * 0.06 - sp * Math.PI * 1.8 + mouse.y * 0.2;
        groupB.rotation.y = -t * 0.09 - sp * Math.PI * 2.2 - mouse.x * 0.2;
        groupB.rotation.z = -sp * Math.PI * 1.4;
        groupB.position.x = -3.6 + Math.cos(t * 0.18) * 0.2 + sp * 2.4;
        groupB.position.y = -1.9 + sp * 3.6;
        groupB.position.z = sp * 1.6;
        groupB.scale.setScalar(1 + sp * 0.25);

        // Particle field flows past the camera
        points.rotation.y = t * 0.015 + sp * 0.6;
        points.rotation.x = sp * 0.3;
        points.position.y = -sp * 2.2;
        points.position.z = sp * 3;

        // Camera dolly + scroll-driven tilt for cinematic depth
        camera.position.z = 7 - sp * 1.6;
        camera.position.x = mouse.x * 0.2 + Math.sin(sp * Math.PI) * 0.4;
        camera.position.y = -mouse.y * 0.2 - sp * 0.5;
        camera.rotation.z = sp * 0.08;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", onLenis as EventListener);
      ro.disconnect();
      renderer.dispose();
      geoA.dispose();
      geoB.dispose();
      (wireA.geometry as THREE.BufferGeometry).dispose();
      (wireB.geometry as THREE.BufferGeometry).dispose();
      (wireA.material as THREE.Material).dispose();
      (wireB.material as THREE.Material).dispose();
      (glowA.geometry as THREE.BufferGeometry).dispose();
      (glowA.material as THREE.Material).dispose();
      pGeo.dispose();
      pMat.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
      />
      {/* Readability vignette: darkens center so cards stay legible
          while the wireframes glow at the edges. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--background) 78%, transparent) 0%, color-mix(in oklab, var(--background) 40%, transparent) 45%, transparent 80%)",
        }}
      />
    </>
  );
}
