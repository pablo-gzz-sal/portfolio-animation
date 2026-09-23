import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Counts the leading number of a metric string up from zero when it scrolls
 * into view: "100%" → 0…100%, "8 wks" → 0…8 wks, "3.5×" keeps one decimal.
 * Anything without a leading number ("Solo", "Live") renders as-is.
 *
 * The final string is what's server-rendered, so no-JS and reduced motion
 * both simply show the value.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const m = /^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/.exec(value);
    if (!el || !m || prefersReducedMotion()) return;
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(",", "."));
    const decimals = num.includes(".") || num.includes(",") ? num.split(/[.,]/)[1].length : 0;
    const counter = { v: 0 };
    let tween: gsap.core.Tween | null = null;

    el.textContent = `${pre}${(0).toFixed(decimals)}${post}`;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        tween = gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = `${pre}${counter.v.toFixed(decimals)}${post}`;
          },
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween?.kill();
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
