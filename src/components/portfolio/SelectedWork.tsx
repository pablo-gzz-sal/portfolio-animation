import { useState } from "react";
import { ArrowUpRight, ExternalLink, Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useT } from "@/i18n";
import imgJoseph from "@/assets/images/joseph.png";
import imgBclg from "@/assets/images/bclg.png";
import imgEsencial from "@/assets/images/esencial.png";
import imgTravane from "@/assets/images/travane.png";
import imgKochina from "@/assets/images/kochina.png";

type MockKind = "saas";

// Language-neutral visual + stack chips per project (matches dict order)
const PROJECT_META: { image: string | null; mock?: MockKind; stack: string[] }[] = [
  { image: imgJoseph, stack: ["Angular", "PostgreSQL", "Node.js", "Swagger"] },
  { image: imgBclg, stack: ["Angular", "Express", "MongoDB", "CI/CD"] },
  { image: imgEsencial, stack: ["Angular", "Express", "MongoDB", "Stripe"] },
  { image: imgTravane, stack: ["Angular", "TypeScript", "Tailwind"] },
  { image: imgKochina, stack: ["Angular", "TypeScript", "Tailwind"] },
  { image: null, mock: "saas", stack: ["React", "Node.js", "PostgreSQL", "Stripe"] },
];

function SaasMock() {
  return (
    <div
      className="absolute inset-0 rounded-xl border border-border overflow-hidden"
      style={{ background: "var(--card)" }}
    >
      <div className="p-4 grid grid-cols-3 gap-2 h-full">
        <div className="col-span-1 rounded-md bg-muted-foreground/10" />
        <div className="col-span-2 grid grid-rows-3 gap-2">
          <div className="rounded-md bg-primary/25" />
          <div className="rounded-md bg-muted-foreground/10" />
          <div className="rounded-md bg-muted-foreground/15" />
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const t = useT();
  const projects = t.selectedWork.projects.map((p, i) => ({
    ...p,
    image: PROJECT_META[i]?.image ?? null,
    stack: PROJECT_META[i]?.stack ?? [],
  }));

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? projects[openIdx] : null;

  return (
    <section id="work" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono-eyebrow text-muted-foreground">
            {t.selectedWork.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]">
            {t.selectedWork.title1}{" "}
            <span className="italic text-primary-glow">
              {t.selectedWork.titleEm}
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {t.selectedWork.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="group relative w-full text-left rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl p-6 sm:p-7 tilt-card hover:tilt-card-hover overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-[16/10] mb-6 rounded-xl bg-muted/40 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover rounded-xl"
                    />
                  ) : (
                    <SaasMock />
                  )}
                  <div className="absolute inset-0 rounded-xl bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center pointer-events-none">
                    <span className="text-sm text-foreground/90 font-medium bg-card/90 backdrop-blur px-3 py-1.5 rounded-full border border-border">
                      {t.selectedWork.viewCaseStudy}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {p.tag}
                    </p>
                    <h3 className="font-display mt-2 text-2xl text-foreground leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-xs">
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {t.selectedWork.role}
                    </p>
                    <p className="mt-1 text-foreground/90">{p.role}</p>
                  </div>
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {t.selectedWork.outcome}
                    </p>
                    <p className="mt-1 text-foreground/90">{p.outcome}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(v) => !v && setOpenIdx(null)}>
        <DialogContent
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain modal-scroll bg-card/95 backdrop-blur-xl border-border p-0 [&>button]:hidden"
        >

          {active && (
            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">
                    {active.tag}
                  </p>
                  <DialogTitle className="font-display mt-3 text-3xl sm:text-4xl text-foreground leading-[1.05]">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-muted-foreground max-w-xl">
                    {active.summary}
                  </DialogDescription>
                  {active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {t.selectedWork.viewLive}
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
                        <ExternalLink className="h-3 w-3" />
                      </span>
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIdx(null)}
                  className="shrink-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 hover:bg-background transition-colors"
                  aria-label={t.selectedWork.closeCase}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 grid gap-8">
                <div className="relative aspect-[16/9] rounded-2xl bg-muted/30 border border-border overflow-hidden">
                  {active.video ? (
                    <video
                      src={active.video}
                      controls
                      playsInline
                      poster={active.image ?? undefined}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : active.image ? (
                    <div className="absolute inset-0">
                      <img
                        src={active.image}
                        alt={active.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                        <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2 text-sm text-muted-foreground">
                          <Play className="h-3.5 w-3.5" />
                          Video coming soon
                        </div>
                      </div>
                    </div>
                  ) : (
                    <SaasMock />
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {active.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-border bg-card/70 p-4 text-center"
                    >
                      <p className="font-display text-2xl sm:text-3xl text-primary-glow">
                        {m.value}
                      </p>
                      <p className="mt-1 font-mono-eyebrow text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {t.selectedWork.sections.client}
                    </p>
                    <p className="mt-1.5 text-foreground/90">{active.client}</p>
                  </div>
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {t.selectedWork.sections.role}
                    </p>
                    <p className="mt-1.5 text-foreground/90">{active.role}</p>
                  </div>
                  <div>
                    <p className="font-mono-eyebrow text-muted-foreground">
                      {t.selectedWork.sections.timeline}
                    </p>
                    <p className="mt-1.5 text-foreground/90">{active.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">
                    {t.selectedWork.sections.problem}
                  </p>
                  <p className="mt-2 text-foreground/90 leading-relaxed">
                    {active.problem}
                  </p>
                </div>

                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">
                    {t.selectedWork.sections.approach}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {active.approach.map((a) => (
                      <li
                        key={a}
                        className="flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">
                    {t.selectedWork.sections.results}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {active.results.map((r) => (
                      <li
                        key={r}
                        className="flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">
                    {t.selectedWork.sections.techStack}
                  </p>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    {active.stackDetail.map((group) => (
                      <div
                        key={group.label}
                        className="rounded-2xl border border-border bg-card/60 p-4"
                      >
                        <p className="font-mono-eyebrow text-muted-foreground">
                          {group.label}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {group.items.map((it) => (
                            <span
                              key={it}
                              className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-foreground/85"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
