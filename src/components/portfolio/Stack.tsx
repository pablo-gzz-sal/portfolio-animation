import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { SectionHeader } from "./SectionHeader";
import { useT } from "@/i18n";

/**
 * Stack: two oversized, counter-flowing marquees for feel (decorative,
 * aria-hidden), then the same groups as a plain hairline grid you can
 * actually read.
 */
export function Stack() {
  const t = useT();
  const mid = Math.ceil(t.stack.groups.length / 2);
  const rows = [t.stack.groups.slice(0, mid), t.stack.groups.slice(mid)];

  return (
    <section id="stack" data-nav="stack" className="relative scroll-mt-24 py-28 sm:py-40">
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow={t.stack.eyebrow}
          title={
            <>
              {t.stack.title1} <span className="text-primary-glow">{t.stack.titleEm}</span>
            </>
          }
          description={t.stack.description}
        />
      </div>

      <div className="mt-20 space-y-2 sm:mt-28">
        {rows.map((groups, rowIdx) => (
          <Marquee
            key={rowIdx}
            duration={rowIdx === 0 ? 55 : 65}
            reverse={rowIdx === 1}
            items={groups.flatMap((g) => [
              <span key={`${g.title}-label`} className="font-mono-eyebrow text-primary-glow">
                ({g.title})
              </span>,
              ...g.items.map((it) => (
                <span
                  key={`${g.title}-${it}`}
                  className="font-display text-[clamp(2.5rem,6.5vw,6.5rem)] leading-[1.05] tracking-[-0.05em] text-foreground/85"
                >
                  {it}
                  <span className="ml-10 text-primary-glow/60">·</span>
                </span>
              )),
            ])}
          />
        ))}
      </div>

      <div className="shell mt-20 sm:mt-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 lg:ml-[240px] lg:grid-cols-3">
          {t.stack.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 70} className="bg-background">
              <div className="h-full p-6 sm:p-7">
                <p className="font-mono-eyebrow text-ink-faint">
                  <span className="text-primary-glow">{String(i + 1).padStart(2, "0")}</span> {g.title}
                </p>
                <p className="mt-4 leading-relaxed text-foreground/85">{g.items.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
