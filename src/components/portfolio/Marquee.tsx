import { useRef, type ReactNode } from "react";
import { gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  /** seconds per loop at rest */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Endless strip whose speed answers the scroll, Unveil-style: scrolling
 * surges it (and flips it with scroll direction), skews it a few degrees
 * with velocity, then it eases back to cruising speed.
 *
 * Reduced motion: a static, masked row.
 */
export function Marquee({ items, duration = 40, reverse, className }: MarqueeProps) {
  const root = useRef<HTMLDivElement>(null);
  const stream = [...items, ...items];

  useGSAP(
    () => {
      const track = root.current?.querySelector<HTMLElement>(".marquee-track");
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const loop = gsap.fromTo(
          track,
          { xPercent: reverse ? -50 : 0 },
          { xPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1 },
        );
        const skew = gsap.quickTo(track, "skewX", { duration: 0.6, ease: "power3.out" });
        let settle: gsap.core.Tween | null = null;
        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate(self) {
            const v = self.getVelocity();
            const boost = Math.min(Math.abs(v) / 250, 7);
            settle?.kill();
            loop.timeScale(self.direction * (1 + boost));
            settle = gsap.to(loop, { timeScale: self.direction, duration: 1.2, ease: "power2.out", delay: 0.05 });
            skew(gsap.utils.clamp(-7, 7, v / -180));
            gsap.delayedCall(0.12, () => skew(0));
          },
          onLeave: () => loop.pause(),
          onLeaveBack: () => loop.pause(),
          onEnter: () => loop.play(),
          onEnterBack: () => loop.play(),
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className={cn(
        "marquee relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="marquee-track flex w-max items-center gap-10 will-change-transform">
        {stream.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
