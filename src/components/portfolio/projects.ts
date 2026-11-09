import tileJoseph from "@/assets/images/tiles/joseph-tile.webp";
import tileFirmexa from "@/assets/images/tiles/firmexa-tile.webp";
import tileBclg from "@/assets/images/tiles/bclg-tile.webp";
import tileEsencial from "@/assets/images/tiles/esencial-tile.webp";
import tileDiocletiansDream from "@/assets/images/tiles/diocletiansdream-tile.webp";
import tileDisplayConSentido from "@/assets/images/tiles/displayconsentido-tile.webp";
import veilJoseph from "@/assets/images/tiles/joseph-hq.webp";
import veilFirmexa from "@/assets/images/tiles/firmexa-hq.webp";
import veilBclg from "@/assets/images/tiles/bclg-hq.webp";
import veilEsencial from "@/assets/images/tiles/esencial-hq.webp";
import veilDiocletiansDream from "@/assets/images/tiles/diocletiansdream-hq.webp";
import veilDisplayConSentido from "@/assets/images/tiles/displayconsentido-hq.webp";

/** Desktop captures of each live site, 1920×1200 WebP, in gallery order. */
const SHOT_FILES = import.meta.glob<string>("../../assets/images/projects/*/*.webp", {
  eager: true,
  import: "default",
});

function shotsFor(id: string) {
  return Object.keys(SHOT_FILES)
    .filter((path) => path.includes(`/projects/${id}/`))
    .sort()
    .map((path) => SHOT_FILES[path]);
}

export type ProjectMeta = {
  id: string;
  /** Screenshots of the live site; the first one is the project's cover. */
  shots: string[];
  tile: string;
  veil: string;
  stack: string[];
};

/**
 * Language-neutral visuals + stack chips per project, keyed by the same slug
 * the dict uses. `tile` is the 640px WebP the hero mosaic uses — the
 * full-size captures are too heavy to sit above the fold. Exported so the
 * mosaic reads from here rather than keeping its own parallel array. `veil`
 * is the sharper 1280px WebP the desktop hero veil swaps in once it loads.
 */
export const PROJECT_META: ProjectMeta[] = [
  {
    id: "joseph",
    shots: shotsFor("joseph"),
    tile: tileJoseph,
    veil: veilJoseph,
    stack: ["Angular", "PostgreSQL", "Node.js", "Swagger"],
  },
  {
    id: "firmexa",
    shots: shotsFor("firmexa"),
    tile: tileFirmexa,
    veil: veilFirmexa,
    stack: ["NestJS", "Angular", "PostgreSQL", "Twilio"],
  },
  {
    id: "diocletians-dream",
    shots: shotsFor("diocletians-dream"),
    tile: tileDiocletiansDream,
    veil: veilDiocletiansDream,
    stack: ["Angular", "SSG", "WordPress", "SEO"],
  },
  {
    id: "display-con-sentido",
    shots: shotsFor("display-con-sentido"),
    tile: tileDisplayConSentido,
    veil: veilDisplayConSentido,
    stack: ["Angular", "SSR", "Cloudinary", "Vercel"],
  },
  {
    id: "lending-group",
    shots: shotsFor("lending-group"),
    tile: tileBclg,
    veil: veilBclg,
    stack: ["Angular", "Express", "MongoDB", "CI/CD"],
  },
  {
    id: "esencial360",
    shots: shotsFor("esencial360"),
    tile: tileEsencial,
    veil: veilEsencial,
    stack: ["Angular", "Express", "MongoDB", "Stripe"],
  },
];

/** Look up a project's visuals by slug. Returns undefined for an unknown id. */
export function projectMeta(id: string) {
  return PROJECT_META.find((m) => m.id === id);
}
