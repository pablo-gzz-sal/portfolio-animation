import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";
import { useMagnetic } from "@/hooks/use-magnetic";
import meImg from "@/assets/images/me.jpeg";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const t = useT();
  const primaryCta = useMagnetic<HTMLAnchorElement>();
  const secondaryCta = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="hero-item" style={d(0)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
                </span>
                <span className="font-mono-eyebrow text-foreground/80">{t.hero.availability}</span>
              </div>
            </div>

            <h1 className="font-display mt-8 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1] tracking-[-0.03em] text-foreground">
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

            <div className="hero-item mt-9 flex flex-wrap gap-3" style={d(470)}>
              <a
                ref={primaryCta}
                href="#work"
                className="group press inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t.hero.viewWork}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              <a
                ref={secondaryCta}
                href="#contact"
                className="press inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {t.hero.startConversation}
              </a>
            </div>

            <dl
              className="hero-item mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl"
              style={d(560)}
            >
              {t.hero.stats.map((m) => (
                <div key={m.k}>
                  <dt className="text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd className="mt-2 text-sm text-foreground/90 leading-relaxed">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:mt-6">
            <div
              className="hero-media relative aspect-[4/5] w-full rounded-3xl border border-border overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={meImg}
                alt="Pablo Salcido"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* teal duotone wash so the portrait sits inside the palette */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  background:
                    "linear-gradient(165deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 55%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in oklab, var(--background) 55%, transparent), transparent)",
                }}
              />
            </div>

            <div
              className="hero-item mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5"
              style={d(700)}
            >
              <p className="text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground">
                {t.hero.currentSignal}
              </p>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                {t.hero.currentSignalBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
