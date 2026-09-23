import { useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

/**
 * Process as a pinned stepper (the pulseo "day walkthrough" pattern).
 *
 * Desktop: the section pins; scroll progress picks the active step, snapping
 * between them. Each step carries a thin progress rail that fills as you
 * scroll through it, the active step's body opens, and the panel on the right
 * swaps to that step's log. Clicking a step scrolls to its position.
 *
 * Below lg — or with reduced motion — nothing pins: steps are a plain list
 * with every body open and the log lines inline.
 */
export function Process() {
  const { t, lang } = useI18n();
  const steps = t.process.steps;
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const st = useRef<ScrollTrigger | null>(null);
  const last = steps.length - 1;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.desktop, () => {
        const rails = gsap.utils.toArray<HTMLElement>(".step-rail");
        st.current = ScrollTrigger.create({
          trigger: ".process-pin",
          start: "top top",
          end: () => `+=${window.innerHeight * last * 0.75}`,
          pin: true,
          snap: {
            snapTo: 1 / last,
            duration: { min: 0.2, max: 0.5 },
            ease: "power2.inOut",
            delay: 0.05,
          },
          onUpdate(self) {
            const pos = self.progress * last;
            const i = Math.round(pos);
            setActive((cur) => (cur === i ? cur : i));
            rails.forEach((r, k) => {
              r.style.transform = `scaleY(${gsap.utils.clamp(0, 1, pos - k + 0.5)})`;
            });
          },
        });
        return () => {
          st.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true },
  );

  const go = (i: number) => {
    sfx.click();
    const s = st.current;
    if (!s) return setActive(i);
    window.scrollTo({ top: s.start + ((s.end - s.start) * i) / last, behavior: "smooth" });
  };

  return (
    <section ref={root} id="process" data-nav="process" className="relative scroll-mt-24">
      <div className="process-pin flex min-h-svh flex-col justify-center py-24 lg:py-0">
        <div className="shell">
          <SectionHeader
            index="02"
            eyebrow={t.process.eyebrow}
            title={
              <>
                {t.process.title1} <span className="text-primary-glow">{t.process.titleEm}</span>
              </>
            }
          />

          <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pl-[240px]">
            <ol className="border-t border-hair">
              {steps.map((s, i) => {
                const on = active === i;
                return (
                  <li key={s.n} className="relative border-b border-hair">
                    {/* per-step progress rail (desktop) */}
                    <span
                      aria-hidden
                      className="absolute -left-4 top-0 hidden h-full w-px bg-hair lg:block"
                    >
                      <span className="step-rail block h-full w-full origin-top scale-y-0 bg-primary-glow" />
                    </span>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      onMouseEnter={sfx.hover}
                      aria-current={on ? "step" : undefined}
                      className="group grid w-full grid-cols-[56px_1fr_auto] items-baseline gap-4 py-5 text-left focus:outline-none focus-visible:bg-card/60"
                    >
                      <span
                        className={cn(
                          "font-num text-2xl italic transition-colors duration-500",
                          on ? "text-primary-glow" : "text-ink-faint",
                        )}
                      >
                        {s.n}
                      </span>
                      <span
                        className={cn(
                          "font-display text-2xl tracking-[-0.03em] transition-colors duration-500 sm:text-3xl",
                          on
                            ? "text-foreground"
                            : "text-foreground lg:text-foreground/35 lg:group-hover:text-foreground/70",
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="hidden font-mono-eyebrow text-ink-faint sm:block">
                        {s.eyebrow}
                      </span>
                    </button>
                    <div
                      className={cn(
                        "step-body grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        on ? "lg:grid-rows-[1fr]" : "lg:grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-md pb-6 pl-[72px] leading-relaxed text-muted-foreground">
                          {s.body}
                        </p>
                        {/* log inline on small screens */}
                        <ul className="space-y-1.5 pb-6 pl-[72px] font-mono text-xs text-ink-dim lg:hidden">
                          {s.log.map((l) => (
                            <li key={l}>› {l}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* log panel (desktop) */}
            <div aria-hidden className="relative hidden lg:block">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-hair bg-card/60 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-hair px-5 py-3">
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-hair-2" />
                    <span className="h-2 w-2 rounded-full bg-hair-2" />
                    <span className="h-2 w-2 rounded-full bg-hair-2" />
                  </span>
                  <span className="font-mono text-[11px] text-ink-faint">
                    step-{steps[active].n}.log
                  </span>
                </div>
                <div className="grid-veil opacity-50" />
                {steps.map((s, i) => (
                  <div
                    key={s.n}
                    className={cn(
                      "absolute inset-x-0 bottom-0 top-[45px] flex flex-col justify-between p-7 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active === i
                        ? "translate-y-0 opacity-100"
                        : active > i
                          ? "-translate-y-6 opacity-0"
                          : "translate-y-6 opacity-0",
                    )}
                  >
                    <span className="font-num text-[clamp(6rem,11vw,11rem)] italic leading-[0.8] text-primary-glow/90">
                      {s.n}
                    </span>
                    <ul className="space-y-3 font-mono text-[13px]">
                      {s.log.map((l, k) => (
                        <li
                          key={l}
                          className="grid grid-cols-[70px_1fr] gap-3 border-t border-hair pt-3"
                        >
                          <span className="tabular-nums text-ink-faint">
                            {`0${9 + i}`.slice(-2)}:{String(k * 20).padStart(2, "0")}
                          </span>
                          <span className="text-foreground/85">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
