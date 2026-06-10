import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

export function WhoIWorkWith() {
  const t = useT();
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] text-foreground max-w-md">
                {t.whoIWorkWith.title1} {t.whoIWorkWith.titleEm}
              </h2>
            </Reveal>
          </div>

          <div>
            {t.whoIWorkWith.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="group border-t border-border py-8 sm:py-10 grid sm:grid-cols-[72px_1fr] gap-4 sm:gap-8">
                  <span className="font-mono text-sm text-primary-glow/70 pt-1.5 transition-colors duration-300 group-hover:text-primary-glow">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
