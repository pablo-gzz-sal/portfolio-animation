import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";
import { projectMeta } from "./projects";

/**
 * Decorative field of work stills drifting behind the hero headline.
 *
 * Purely ornamental — aria-hidden, pointer-events-none. The real, navigable
 * project list is SelectedWork; nothing here is the only route to any content.
 *
 * `project` is the project slug, shared with PROJECT_META. Two projects appear
 * twice at different scales so the field reads as a wall rather than a row of
 * five, which is also why positions are hand-placed instead of gridded.
 */
type Tile = {
  project: string;
  /** left / top as viewport percentages of the hero box */
  left: string;
  top: string;
  width: string;
  opacity: number;
  /** drift duration + offset, so no two tiles breathe in sync */
  dur: string;
  delay: string;
  /** the small tiles are noise on phones — drop them below md */
  desktopOnly?: boolean;
};

const TILES: Tile[] = [
  { project: "joseph", left: "-2%", top: "6%", width: "clamp(140px, 17vw, 268px)", opacity: 0.34, dur: "23s", delay: "0ms" },
  { project: "esencial360", left: "17%", top: "-6%", width: "clamp(120px, 14vw, 224px)", opacity: 0.26, dur: "27s", delay: "900ms", desktopOnly: true },
  { project: "firmexa", left: "31%", top: "18%", width: "clamp(150px, 19vw, 300px)", opacity: 0.4, dur: "21s", delay: "400ms" },
  { project: "lending-group", left: "55%", top: "2%", width: "clamp(130px, 16vw, 252px)", opacity: 0.3, dur: "25s", delay: "1300ms", desktopOnly: true },
  { project: "diocletians-dream", left: "72%", top: "22%", width: "clamp(140px, 17vw, 272px)", opacity: 0.38, dur: "22s", delay: "700ms" },
  { project: "firmexa", left: "88%", top: "-2%", width: "clamp(120px, 15vw, 236px)", opacity: 0.24, dur: "29s", delay: "200ms", desktopOnly: true },
  { project: "lending-group", left: "6%", top: "40%", width: "clamp(120px, 15vw, 232px)", opacity: 0.2, dur: "26s", delay: "1700ms", desktopOnly: true },
];

export function HeroMosaic() {
  const t = useT();
  const projects = t.selectedWork.projects;
  const ref = useRef<HTMLDivElement | null>(null);
  const [idle, setIdle] = useState(false);

  // The hero is 100vh at the top of a 9000px page, so these tiles spend most
  // of the visit off-screen. Park the animation while they are.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setIdle(!entry.isIntersecting));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        idle && "mosaic-idle",
      )}
    >
      {TILES.map((tile, i) => {
        const project = projects.find((p) => p.id === tile.project);
        const meta = projectMeta(tile.project);
        if (!project || !meta) return null;

        return (
          <figure
            key={`${tile.project}-${i}`}
            className={cn("mosaic-tile absolute", tile.desktopOnly && "hidden md:block")}
            style={
              {
                left: tile.left,
                top: tile.top,
                width: tile.width,
                opacity: tile.opacity,
                "--dur": tile.dur,
                "--d": tile.delay,
              } as CSSProperties
            }
          >
            <div
              className="overflow-hidden rounded-xl border border-hair"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img src={meta.tile} alt="" className="block w-full" />
            </div>
            {/* Two-tier caption: name over category, both mono, both quiet. */}
            <figcaption className="mt-2 px-0.5">
              <p className="truncate font-mono text-[11px] font-medium tracking-tight text-foreground/90">
                {project.title}
              </p>
              <p className="truncate font-mono text-[10px] tracking-tight text-ink-dim">
                {project.tag}
              </p>
            </figcaption>
          </figure>
        );
      })}

      {/* Scrim — the headline sits on this, so it has to win decisively. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--background) 34%, color-mix(in oklab, var(--background) 72%, transparent) 62%, color-mix(in oklab, var(--background) 30%, transparent) 100%)",
        }}
      />
    </div>
  );
}
