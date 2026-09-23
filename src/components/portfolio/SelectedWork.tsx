import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n, useT } from "@/i18n";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { sfx } from "@/lib/sound";
import { CaseStudy } from "./CaseStudy";
import { SectionHeader } from "./SectionHeader";
import { WorkIndex } from "./WorkIndex";
import { projectMeta } from "./projects";

export type Project = ReturnType<typeof useT>["selectedWork"]["projects"][number] & {
  image: string;
  tile: string;
  stack: string[];
};

export function SelectedWork() {
  const t = useT();
  const projects: Project[] = t.selectedWork.projects.map((p) => {
    const meta = projectMeta(p.id);
    return { ...p, image: meta?.image ?? "", tile: meta?.tile ?? "", stack: meta?.stack ?? [] };
  });
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const open = (i: number) => {
    sfx.click();
    setOpenIdx(i);
  };

  return (
    <section id="work" data-nav="work" className="relative scroll-mt-24 pt-28 sm:pt-40">
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow={t.selectedWork.eyebrow}
          title={
            <>
              {t.selectedWork.title1}{" "}
              <span className="text-primary-glow">{t.selectedWork.titleEm}</span>
            </>
          }
          description={t.selectedWork.description}
        />
      </div>

      <Featured project={projects[0]} onOpen={() => open(0)} />

      <div className="shell pb-28 sm:pb-40">
        <WorkIndex projects={projects} onOpen={open} />
      </div>

      <CaseStudy projects={projects} index={openIdx} onIndexChange={setOpenIdx} />
    </section>
  );
}

/**
 * The lead project as a pinned set piece: a framed card that opens to full
 * bleed as you scroll, its caption and metrics landing once it fills the
 * screen. Desktop only — on phones it's a plain, tappable card.
 */
function Featured({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, lang } = useI18n();
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.desktop, () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=130%",
              pin: true,
              scrub: 0.8,
            },
          })
          .fromTo(
            ".feat-card",
            { clipPath: "inset(14% 9% 14% 9% round 32px)" },
            { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "power2.inOut", duration: 1 },
            0,
          )
          .fromTo(".feat-img", { scale: 1.35 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
          .fromTo(".feat-label", { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 }, 0)
          .from(
            ".feat-in",
            { y: 60, autoAlpha: 0, stagger: 0.06, duration: 0.4, ease: "power3.out" },
            0.7,
          )
          // hold the final frame for a beat before the pin releases
          .to({}, { duration: 0.35 });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="relative mt-16 lg:mt-24 lg:h-svh">
      <button
        type="button"
        data-case-origin={0}
        onClick={onOpen}
        onMouseEnter={sfx.hover}
        className="feat-card group relative mx-auto block w-[calc(100%-2*clamp(1.25rem,3vw,3.5rem))] overflow-hidden rounded-2xl border border-hair text-left lg:absolute lg:inset-0 lg:mx-0 lg:w-full lg:rounded-none lg:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* media: its own block on touch, the full-bleed backdrop on desktop */}
        <div className="relative aspect-[16/10] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
          <img
            src={project.image}
            alt={project.title}
            className="feat-img absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in oklab, var(--background) 70%, transparent) 32%, transparent 65%)",
          }}
        />

        {/* label shown while the card is still framed */}
        <span className="feat-label absolute left-1/2 top-[17%] hidden -translate-x-1/2 font-mono-eyebrow text-foreground/80 lg:block">
          {t.ui.featured} — ↓
        </span>

        <div className="relative bg-card/60 p-6 sm:p-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-transparent lg:p-[clamp(2.5rem,5vw,5rem)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="feat-in font-mono-eyebrow text-primary-glow">
                {t.ui.featured} · {project.tag}
              </p>
              <h3 className="feat-in mt-4 max-w-4xl font-display h-section text-foreground">
                {project.title}
              </h3>
              <p className="feat-in mt-5 max-w-xl text-muted-foreground">{project.summary}</p>
            </div>
            <div className="feat-in flex items-end gap-10">
              <dl className="hidden gap-10 sm:flex">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="font-display text-4xl tabular-nums text-foreground">
                      {m.value}
                    </dd>
                    <dt className="mt-1 font-mono-eyebrow text-ink-faint">{m.label}</dt>
                  </div>
                ))}
              </dl>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
