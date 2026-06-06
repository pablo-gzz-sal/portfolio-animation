import { Rocket, Building2, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

const ICONS = [Rocket, Building2, Users];

export function WhoIWorkWith() {
  const t = useT();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono-eyebrow text-muted-foreground">
            {t.whoIWorkWith.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl text-foreground max-w-2xl leading-[1.05]">
            {t.whoIWorkWith.title1}{" "}
            <span className="italic text-primary-glow">
              {t.whoIWorkWith.titleEm}
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.whoIWorkWith.items.map((item, i) => {
            const Icon = ICONS[i] ?? Rocket;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="group h-full rounded-2xl border border-border bg-card/40 p-7 tilt-card hover:tilt-card-hover">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary-glow ring-1 ring-primary/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
