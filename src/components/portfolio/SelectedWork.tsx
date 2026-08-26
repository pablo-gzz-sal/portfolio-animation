import { useState, type PointerEvent } from "react";
import { ArrowUpRight, ExternalLink, Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useT } from "@/i18n";
import imgJoseph from "@/assets/images/joseph.png";
import imgBclg from "@/assets/images/bclg.png";
import imgEsencial from "@/assets/images/esencial.png";
import imgTravane from "@/assets/images/travane.png";
import imgDiocletiansDream from "@/assets/images/diocletiansdream.png";
import tileJoseph from "@/assets/images/tiles/joseph-tile.webp";
import tileBclg from "@/assets/images/tiles/bclg-tile.webp";
import tileEsencial from "@/assets/images/tiles/esencial-tile.webp";
import tileTravane from "@/assets/images/tiles/travane-tile.webp";
import tileDiocletiansDream from "@/assets/images/tiles/diocletiansdream-tile.webp";

/**
 * Language-neutral visuals + stack chips per project, index-matched to the
 * dict order in i18n.tsx. `tile` is the 640px WebP the hero mosaic uses — the
 * full-size PNGs are far too heavy to sit above the fold. Exported so the
 * mosaic reads from here rather than keeping its own parallel array.
 */
export const PROJECT_META: { image: string; tile: string; stack: string[] }[] = [
  {
    image: imgJoseph,
    tile: tileJoseph,
    stack: ["Angular", "PostgreSQL", "Node.js", "Swagger"],
  },
  {
    image: imgDiocletiansDream,
    tile: tileDiocletiansDream,
    stack: ["Angular", "SSG", "WordPress", "SEO"],
  },
  { image: imgBclg, tile: tileBclg, stack: ["Angular", "Express", "MongoDB", "CI/CD"] },
  {
    image: imgEsencial,
    tile: tileEsencial,
    stack: ["Angular", "Express", "MongoDB", "Stripe"],
  },
  { image: imgTravane, tile: tileTravane, stack: ["Angular", "TypeScript", "Tailwind"] },
];

// Asymmetric spans for the non-featured projects (md:grid-cols-12)
const GRID_SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

/** Tracks the pointer for the specular sheen layer. */
function trackSheen(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

type Project = ReturnType<typeof useT>["selectedWork"]["projects"][number] & {
  image: string;
  stack: string[];
};

function CardMedia({
  project,
  hoverLabel,
  className,
}: {
  project: Project;
  hoverLabel: string;
  className?: string;
}) {
  return (
    <div className={cn("clip-reveal relative rounded-xl bg-muted/40 overflow-hidden", className)}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 rounded-xl bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center pointer-events-none">
        <span className="text-sm text-foreground/90 font-medium bg-card/90 backdrop-blur px-3 py-1.5 rounded-full border border-border">
          {hoverLabel}
        </span>
      </div>
    </div>
  );
}

function CardBody({
  project,
  roleLabel,
  outcomeLabel,
  titleClass = "h-card",
}: {
  project: Project;
  roleLabel: string;
  outcomeLabel: string;
  titleClass?: string;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono-eyebrow text-muted-foreground">{project.tag}</p>
          <h3 className={cn("font-display mt-2 text-foreground leading-tight", titleClass)}>
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-4 text-xs">
        <div>
          <p className="font-mono-eyebrow text-muted-foreground">{roleLabel}</p>
          <p className="mt-1 text-foreground/90">{project.role}</p>
        </div>
        <div>
          <p className="font-mono-eyebrow text-muted-foreground">{outcomeLabel}</p>
          <p className="mt-1 text-foreground/90">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-hair bg-background/40 px-2.5 py-1 font-mono-eyebrow text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </>
  );
}

export function SelectedWork() {
  const t = useT();
  const projects: Project[] = t.selectedWork.projects.map((p, i) => ({
    ...p,
    image: PROJECT_META[i].image,
    stack: PROJECT_META[i]?.stack ?? [],
  }));

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? projects[openIdx] : null;

  const cardClass =
    "group relative w-full text-left rounded-2xl border border-hair bg-card/70 backdrop-blur-xl tilt-card hover:tilt-card-hover overflow-hidden shadow-[0_12px_40px_rgb(0_0_0/0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="shell">
        <Reveal>
          <h2 className="font-display h-section text-foreground max-w-3xl leading-[1.05]">
            {t.selectedWork.title1} {t.selectedWork.titleEm}
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">{t.selectedWork.description}</p>
        </Reveal>

        {/* Featured project — full width, image-led */}
        <Reveal className="mt-16">
          <button
            type="button"
            onClick={() => setOpenIdx(0)}
            onPointerMove={trackSheen}
            className={cn(cardClass, "grid gap-6 lg:grid-cols-[1.4fr_1fr] p-6 sm:p-8")}
          >
            <div className="card-sheen" aria-hidden />
            <CardMedia
              project={featured}
              hoverLabel={t.selectedWork.viewCaseStudy}
              className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
            />
            <div className="flex flex-col justify-center lg:py-4">
              <CardBody
                project={featured}
                roleLabel={t.selectedWork.role}
                outcomeLabel={t.selectedWork.outcome}
                titleClass="text-3xl sm:text-4xl"
              />
            </div>
          </button>
        </Reveal>

        {/* Remaining projects — asymmetric grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          {rest.map((p, i) => {
            const idx = i + 1;
            const wide = GRID_SPANS[i] === "md:col-span-12";
            return (
              <Reveal key={p.title} delay={(i % 2) * 70} className={cn("h-full", GRID_SPANS[i])}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(idx)}
                  onPointerMove={trackSheen}
                  className={cn(
                    cardClass,
                    "h-full p-6 sm:p-7",
                    wide && "grid gap-6 md:grid-cols-[1.2fr_1fr] items-center",
                  )}
                >
                  <div className="card-sheen" aria-hidden />
                  <CardMedia
                    project={p}
                    hoverLabel={t.selectedWork.viewCaseStudy}
                    className={cn("aspect-[16/10]", !wide && "mb-6")}
                  />
                  <div>
                    <CardBody
                      project={p}
                      roleLabel={t.selectedWork.role}
                      outcomeLabel={t.selectedWork.outcome}
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(v) => !v && setOpenIdx(null)}>
        <DialogContent
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain modal-scroll bg-card/95 backdrop-blur-xl border-border p-0 [&>button]:hidden"
        >
          {active && (
            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono-eyebrow text-muted-foreground">{active.tag}</p>
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
                      className="press mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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
                  className="press shrink-0 grid h-10 w-10 place-items-center rounded-full border border-hair bg-background/60 hover:bg-background transition-colors"
                  aria-label={t.selectedWork.closeCase}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 grid gap-8">
                <div className="relative aspect-[16/9] rounded-2xl bg-muted/30 border border-hair overflow-hidden">
                  {active.video ? (
                    <video
                      src={active.video}
                      controls
                      playsInline
                      poster={active.image}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0">
                      <img
                        src={active.image}
                        alt={active.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                        <div className="flex items-center gap-2 rounded-full border border-hair bg-card/80 backdrop-blur px-4 py-2 text-sm text-muted-foreground">
                          <Play className="h-3.5 w-3.5" />
                          {t.selectedWork.videoComingSoon}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {active.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-hair bg-card/70 p-4 text-center"
                    >
                      <p className="font-display font-semibold text-2xl sm:text-3xl text-primary-glow">
                        {m.value}
                      </p>
                      <p className="mt-1 font-mono-eyebrow text-muted-foreground">{m.label}</p>
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
                  <p className="mt-2 text-foreground/90 leading-relaxed">{active.problem}</p>
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
                        className="rounded-2xl border border-hair bg-card/60 p-4"
                      >
                        <p className="font-mono-eyebrow text-muted-foreground">{group.label}</p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {group.items.map((it) => (
                            <span
                              key={it}
                              className="rounded-full border border-hair bg-background/40 px-2.5 py-1 font-mono-eyebrow text-foreground/85"
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
