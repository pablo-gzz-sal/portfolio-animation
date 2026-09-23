import imgJoseph from "@/assets/images/joseph.png";
import imgFirmexa from "@/assets/images/firmexa.png";
import imgBclg from "@/assets/images/bclg.png";
import imgEsencial from "@/assets/images/esencial.png";
import imgDiocletiansDream from "@/assets/images/diocletiansdream.png";
import tileJoseph from "@/assets/images/tiles/joseph-tile.webp";
import tileFirmexa from "@/assets/images/tiles/firmexa-tile.webp";
import tileBclg from "@/assets/images/tiles/bclg-tile.webp";
import tileEsencial from "@/assets/images/tiles/esencial-tile.webp";
import tileDiocletiansDream from "@/assets/images/tiles/diocletiansdream-tile.webp";

export type ProjectMeta = { id: string; image: string; tile: string; stack: string[] };

/**
 * Language-neutral visuals + stack chips per project, keyed by the same slug
 * the dict uses. `tile` is the 640px WebP the hero mosaic uses — the
 * full-size PNGs are far too heavy to sit above the fold. Exported so the
 * mosaic reads from here rather than keeping its own parallel array.
 */
export const PROJECT_META: ProjectMeta[] = [
  {
    id: "joseph",
    image: imgJoseph,
    tile: tileJoseph,
    stack: ["Angular", "PostgreSQL", "Node.js", "Swagger"],
  },
  {
    id: "firmexa",
    image: imgFirmexa,
    tile: tileFirmexa,
    stack: ["NestJS", "Angular", "PostgreSQL", "Twilio"],
  },
  {
    id: "diocletians-dream",
    image: imgDiocletiansDream,
    tile: tileDiocletiansDream,
    stack: ["Angular", "SSG", "WordPress", "SEO"],
  },
  {
    id: "lending-group",
    image: imgBclg,
    tile: tileBclg,
    stack: ["Angular", "Express", "MongoDB", "CI/CD"],
  },
  {
    id: "esencial360",
    image: imgEsencial,
    tile: tileEsencial,
    stack: ["Angular", "Express", "MongoDB", "Stripe"],
  },
];

/** Look up a project's visuals by slug. Returns undefined for an unknown id. */
export function projectMeta(id: string) {
  return PROJECT_META.find((m) => m.id === id);
}
