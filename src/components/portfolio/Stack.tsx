import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

export function Stack() {
  const t = useT();
  return (
    <section id="stack" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono-eyebrow text-muted-foreground">
            {t.stack.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]">
            {t.stack.title1}{" "}
            <span className="italic text-primary-glow">{t.stack.titleEm}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {t.stack.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.stack.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-6 tilt-card hover:tilt-card-hover">
                <h3 className="text-base font-medium text-foreground">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
