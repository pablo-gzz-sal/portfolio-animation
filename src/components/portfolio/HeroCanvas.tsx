import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle hero background: a slow-drifting wireframe icosahedron with a
 * soft teal glow and gentle mouse parallax. Capped DPR, paused when offscreen,
 * disabled for reduced motion.
 */
export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
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
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    const wire = new THREE.WireframeGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x5cbdb9,
      transparent: true,
      opacity: 0.35,
    });
    const mesh = new THREE.LineSegments(wire, lineMat);
    scene.add(mesh);

    // soft inner glow sphere
    const glowGeo = new THREE.SphereGeometry(1, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x0d7a5f,
      transparent: true,
      opacity: 0.18,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.tx = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
      mouse.ty = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let visible = true;
    const io = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    io.observe(container);

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = (now - start) / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      if (!reduceMotion) {
        mesh.rotation.x = t * 0.12 + mouse.y * 0.5;
        mesh.rotation.y = t * 0.16 + mouse.x * 0.5;
      }
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      io.disconnect();
      renderer.dispose();
      geo.dispose();
      wire.dispose();
      lineMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-90"
    />
  );
}
