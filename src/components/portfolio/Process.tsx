import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

export function Process() {
  const t = useT();
  return (
    <section id="process" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono-eyebrow text-muted-foreground">
            {t.process.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]">
            {t.process.title1}{" "}
            <span className="italic text-primary-glow">
              {t.process.titleEm}
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {t.process.description}
          </p>
        </Reveal>

        <ol className="mt-14 space-y-3">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <li className="group grid gap-6 md:grid-cols-[140px_180px_1fr] items-start rounded-2xl border border-border bg-card/30 p-6 sm:p-7 tilt-card hover:tilt-card-hover">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl text-primary-glow">
                    {step.n}
                  </span>
                  <span className="font-mono-eyebrow text-muted-foreground">
                    {step.eyebrow}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
