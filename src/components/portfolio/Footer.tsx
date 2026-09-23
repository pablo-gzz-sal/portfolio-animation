import type { CSSProperties } from "react";
import { ArrowUp } from "lucide-react";
import { useT } from "@/i18n";
import { sfx } from "@/lib/sound";
import { LocalTime } from "./Header";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

/**
 * Lusion-sized sign-off. The CTA is a mailto whose letters roll on hover:
 * each glyph is stacked over a copy of itself and the pair slides up with a
 * per-letter delay, so the word "turns over" left to right.
 */
export function Footer() {
  const t = useT();
  return (
    <footer className="relative overflow-hidden border-t border-hair pt-28 sm:pt-40">
      <div className="shell">
        <Reveal>
          <p className="font-mono-eyebrow text-ink-faint">
            <span className="text-primary-glow">—</span> {t.ui.footerSay}
          </p>
        </Reveal>
        <SplitReveal as="p" className="mt-8 font-display h-mega text-foreground">
          {t.ui.footerCta1} <span className="text-primary-glow">{t.ui.footerCtaEm}</span>
        </SplitReveal>

        <Reveal className="mt-14" delay={120}>
          <a
            href="mailto:pablo.gzz.sal@gmail.com"
            onMouseEnter={sfx.hover}
            onClick={sfx.click}
            className="roll group inline-flex items-center gap-5 font-display text-[clamp(1.5rem,3.4vw,3.25rem)] tracking-[-0.04em] text-foreground"
            aria-label="pablo.gzz.sal@gmail.com"
          >
            <span aria-hidden className="roll-word">
              {[..."pablo.gzz.sal@gmail.com"].map((c, i) => (
                <span key={i} className="roll-char" style={{ "--i": i } as CSSProperties}>
                  <span>{c}</span>
                  <span className="text-primary-glow">{c}</span>
                </span>
              ))}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-hair-2 text-xl transition-all duration-500 group-hover:rotate-45 group-hover:border-primary-glow group-hover:text-primary-glow">
              ↗
            </span>
          </a>
        </Reveal>

        <div className="mt-24 grid gap-8 border-t border-hair py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:mt-32 md:grid-cols-4 md:items-center">
          <span>© {new Date().getFullYear()} Pablo Salcido</span>
          <span className="normal-case tracking-normal md:justify-self-center">
            <LocalTime label={t.ui.localTime} className="!inline-flex !px-0" />
          </span>
          <span className="flex gap-6 md:justify-self-center">
            <a href="https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/" target="_blank" rel="noreferrer" className="nav-link hover:text-foreground">
              LinkedIn
            </a>
            <a href="https://github.com/pablo-gzz-sal" target="_blank" rel="noreferrer" className="nav-link hover:text-foreground">
              GitHub
            </a>
          </span>
          <a
            href="#top"
            onMouseEnter={sfx.hover}
            className="group inline-flex items-center gap-2 hover:text-foreground md:justify-self-end"
          >
            {t.ui.backToTop}
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
