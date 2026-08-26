import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

export function Process() {
  const t = useT();
  return (
    <section id="process" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="shell">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="font-display h-section text-foreground leading-[1.05] max-w-md">
                {t.process.title1} {t.process.titleEm}
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">{t.process.description}</p>
            </Reveal>
          </div>

          <ol>
            {t.process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <li className="group border-t border-hair py-8 sm:py-10 grid grid-cols-[72px_1fr] sm:grid-cols-[104px_1fr] gap-5 sm:gap-8">
                  <span className="font-mono text-3xl sm:text-5xl leading-none pt-1 text-foreground/15 transition-colors duration-500 group-hover:text-primary-glow/70">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display h-card text-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <div className="border-t border-hair" />
          </ol>
        </div>
      </div>
    </section>
  );
}
