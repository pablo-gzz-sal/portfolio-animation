import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, MQ, SplitText, useGSAP } from "@/lib/gsap";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

interface SplitRevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "lines" slides masked lines up; "chars" staggers each letter. */
  by?: "lines" | "chars";
  delay?: number;
  /** ScrollTrigger start. */
  start?: string;
}

/**
 * Masked text reveal — the line-by-line rise used on Unveil and Lusion.
 *
 * SplitText rewrites the heading's DOM, which React also owns. To keep the
 * two from fighting, the split element is keyed by language: a language
 * switch unmounts it wholesale (React never reconciles the split nodes) and
 * a fresh element is split again. `autoSplit` re-splits on resize and after
 * web fonts land, so line breaks always match what is on screen.
 *
 * With JS off, or reduced motion on, the heading is just a heading.
 */
export function SplitReveal({
  children,
  as: Tag = "h2",
  className,
  by = "lines",
  delay = 0,
  start = "top 85%",
}: SplitRevealProps) {
  const { lang } = useI18n();
  return (
    <SplitInner key={lang} Tag={Tag} className={className} by={by} delay={delay} start={start}>
      {children}
    </SplitInner>
  );
}

function SplitInner({
  Tag,
  children,
  className,
  by,
  delay,
  start,
}: {
  Tag: ElementType;
  children: ReactNode;
  className?: string;
  by: "lines" | "chars";
  delay: number;
  start: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const split = SplitText.create(el, {
          type: by === "chars" ? "words,lines,chars" : "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(by === "chars" ? self.chars : self.lines, {
              yPercent: 115,
              duration: by === "chars" ? 0.9 : 1.15,
              stagger: by === "chars" ? 0.018 : 0.09,
              delay: delay / 1000,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start, once: true },
            });
          },
        });
        return () => split.revert();
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn("split-reveal", className)}>
      {children}
    </Tag>
  );
}
