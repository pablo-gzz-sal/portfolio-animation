import { useEffect, useRef } from "react";

/**
 * Magnetic hover: the element leans a few pixels toward the cursor and
 * settles back when it leaves, with lerped inertia. Uses the independent
 * CSS `translate` property so the `transform`-based press feedback
 * (`:active { transform: scale(0.97) }`) still composes with it.
 *
 * Inactive on touch devices and under prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.25, max = 6) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      const settled = Math.abs(cx - tx) < 0.05 && Math.abs(cy - ty) < 0.05 && tx === 0 && ty === 0;
      if (settled) {
        el.style.translate = "";
        raf = 0;
        return;
      }
      el.style.translate = `${cx.toFixed(2)}px ${cy.toFixed(2)}px`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      tx = Math.max(-max, Math.min(max, dx * strength));
      ty = Math.max(-max, Math.min(max, dy * strength));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.translate = "";
    };
  }, [strength, max]);

  return ref;
}
