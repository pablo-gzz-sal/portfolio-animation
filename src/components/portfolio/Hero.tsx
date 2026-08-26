import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";
import { useMagnetic } from "@/hooks/use-magnetic";
import { HeroMosaic } from "./HeroMosaic";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const t = useT();
  const primaryCta = useMagnetic<HTMLAnchorElement>();
  const secondaryCta = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      id="top"
      /* Full-height, content anchored to the bottom — the work fills the space
         above it rather than sitting beside it. */
      className="relative flex min-h-svh items-end overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <HeroMosaic />
      <div className="grid-veil" />

      {/* Corner brackets — frames the viewport as a plate, the way a technical
          drawing marks its own bounds. */}
      <div aria-hidden className="pointer-events-none absolute inset-6 sm:inset-10">
        <span className="frame-corner frame-corner-tl" />
        <span className="frame-corner frame-corner-tr" />
        <span className="frame-corner frame-corner-bl" />
        <span className="frame-corner frame-corner-br" />
      </div>

      <div className="shell relative pt-32 pb-24 sm:pb-28">
        <h1 className="font-display h-display text-foreground">
          <span className="hero-line">
            <span style={d(100)}>{t.hero.title1}</span>
          </span>
          <span className="hero-line">
            <span style={d(200)} className="text-primary-glow">
              {t.hero.titleEm}
            </span>
          </span>
        </h1>

        <p
          className="hero-item mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          style={d(380)}
        >
          {t.hero.description}
        </p>

        <div className="hero-item mt-9 flex flex-wrap items-center gap-3" style={d(470)}>
          <a ref={primaryCta} href="#work" className="pill pill-solid press group">
            {t.hero.viewWork}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a ref={secondaryCta} href="#contact" className="pill press">
            {t.hero.startConversation}
          </a>
        </div>
      </div>

      <div
        className="hero-item pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        style={d(900)}
      >
        <span className="font-mono-eyebrow text-ink-faint">{t.hero.scrollHint}</span>
      </div>
    </section>
  );
}

/**
 * Credibility band, directly beneath the hero. This copy used to live inside
 * the hero column; the bottom-anchored composition has no room for it, and a
 * hairline-ruled row reads stronger here than a third stacked block did there.
 */
export function HeroStats() {
  const t = useT();

  return (
    <section className="relative">
      <div className="shell">
        <dl className="grid grid-cols-1 border-t border-hair sm:grid-cols-3">
          {t.hero.stats.map((m, i) => (
            <div
              key={m.k}
              className={
                i === 0
                  ? "py-8 sm:py-10 sm:pr-10"
                  : "border-t border-hair py-8 sm:border-t-0 sm:border-l sm:py-10 sm:pl-10 sm:pr-10"
              }
            >
              <dt className="font-mono-eyebrow text-ink-faint">{m.k}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-foreground/90">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
