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
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { progress } }));
    };
    lenis.on("scroll", onScroll);

    // Lenis owns anchor navigation (native scroll-behavior is disabled
    // so the two never fight over the scroll position).
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -96, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
