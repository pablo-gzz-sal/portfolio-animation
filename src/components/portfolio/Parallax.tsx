import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  /** px translation at full progress. Positive = moves up as you scroll. */
  speed?: number;
  className?: string;
}

/**
 * Lightweight parallax: translates child by `speed * progress` where
 * progress is element's position through the viewport (-1 at bottom, 1 at top).
 */
export function Parallax({ children, speed = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 when element bottom hits top, +1 when top hits bottom
      const center = rect.top + rect.height / 2;
      const p = (center - vh / 2) / vh; // ~ -1..1 across viewport
      el.style.transform = `translate3d(0, ${(-p * speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("lenis-scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("lenis-scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
