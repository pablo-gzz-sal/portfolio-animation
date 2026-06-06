import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth scrolling. Mounts Lenis once and drives it via rAF.
 * Exposes the current scroll progress on document.documentElement
 * as the CSS var --scroll-progress (0 → 1) so other components can react.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    const root = document.documentElement;
    const onScroll = ({ progress }: { progress: number }) => {
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { progress } })
      );
    };
    lenis.on("scroll", onScroll);

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
