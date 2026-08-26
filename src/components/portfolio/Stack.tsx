import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { useT } from "@/i18n";

export function Stack() {
  const t = useT();

  // Two counter-flowing streams: first half of the groups, then the rest.
  const mid = Math.ceil(t.stack.groups.length / 2);
  const rows = [t.stack.groups.slice(0, mid), t.stack.groups.slice(mid)];

  return (
    <section id="stack" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="shell">
        <Reveal>
          <h2 className="font-display h-section text-foreground max-w-3xl leading-[1.05]">
            {t.stack.title1} {t.stack.titleEm}
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">{t.stack.description}</p>
        </Reveal>
      </div>

      <Reveal className="mt-14 space-y-7" delay={80}>
        {rows.map((groups, rowIdx) => (
          <Marquee
            key={rowIdx}
            duration={rowIdx === 0 ? 70 : 85}
            reverse={rowIdx === 1}
            items={groups.flatMap((g) => [
              <span
                key={`${g.title}-label`}
                className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow/80"
              >
                {g.title}
              </span>,
              ...g.items.map((it) => (
                <span key={`${g.title}-${it}`} className="text-lg sm:text-xl text-foreground/70">
                  {it}
                </span>
              )),
            ])}
          />
        ))}
      </Reveal>
    </section>
  );
}
