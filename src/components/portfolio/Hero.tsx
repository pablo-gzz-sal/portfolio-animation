import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";
import meImg from "@/assets/images/me.jpeg";

export function Hero() {
  const t = useT();
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
              </span>
              <span className="font-mono-eyebrow text-foreground/80">
                {t.hero.availability}
              </span>
            </div>

            <h1 className="font-display mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-foreground">
              {t.hero.title1}{" "}
              <span className="italic text-primary-glow">{t.hero.titleEm}</span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                data-magnetic
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t.hero.viewWork}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#contact"
                data-magnetic
                className="inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {t.hero.startConversation}
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              {t.hero.stats.map((m) => (
                <div key={m.k}>
                  <dt className="font-mono-eyebrow text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd className="mt-2 text-sm text-foreground/90 leading-relaxed">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:mt-6">
            <div
              className="relative aspect-[4/5] w-full rounded-3xl border border-border overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={meImg}
                alt="Pablo Salcido"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5">
              <p className="font-mono-eyebrow text-muted-foreground">
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
