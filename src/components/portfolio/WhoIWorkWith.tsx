import { useRef } from "react";
import { useI18n } from "@/i18n";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { Reveal } from "./Reveal";

/**
 * Manifesto band. The statement is set large and its words light up one by
 * one as it scrolls through the viewport (scrubbed, so scrolling back dims
 * them again) — reading pace set by the reader's own scroll.
 *
 * Words are split in JSX, not by SplitText, so React owns every node and a
 * language switch is an ordinary re-render.
 */
export function WhoIWorkWith() {
  const { t, lang } = useI18n();
  const root = useRef<HTMLElement>(null);
  const words = `${t.whoIWorkWith.title1} ${t.whoIWorkWith.titleEm}`.split(" ");
  const emFrom = t.whoIWorkWith.title1.split(" ").length;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          ".mf-word",
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ".mf-statement", start: "top 80%", end: "bottom 40%", scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true },
  );

  return (
    <section ref={root} className="relative py-28 sm:py-40">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[200px_1fr] lg:gap-10">
          <Reveal className="flex items-baseline gap-3 lg:flex-col lg:gap-2 lg:pt-4">
            <span className="font-mono text-xs text-primary-glow">—</span>
            <span className="font-mono-eyebrow text-ink-dim">{t.whoIWorkWith.eyebrow}</span>
          </Reveal>
          <p className="mf-statement font-display text-[clamp(2.4rem,5.6vw,6rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
            {words.map((w, i) => (
              <span key={`${lang}-${i}`} className={i >= emFrom ? "mf-word text-primary-glow" : "mf-word"}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:mt-28 lg:ml-[240px] lg:grid-cols-3">
          {t.whoIWorkWith.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="bg-background">
              <article className="group h-full p-7 transition-colors duration-500 hover:bg-card sm:p-9">
                <span className="font-mono text-xs tabular-nums text-ink-faint transition-colors group-hover:text-primary-glow">
                  0{i + 1}
                </span>
                <h3 className="mt-10 font-display h-card text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
