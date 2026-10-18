const CLOUDINARY = "https://res.cloudinary.com/doinkgfam/video/upload";

export type TestimonialMeta = {
  /** Project slug — the client name and tag come from that project's copy. */
  projectId: string;
  /** Cloudinary "v…/public_id" of the uploaded clip, without extension. */
  asset: string;
  /** Running time in seconds, for the "0:52" label. */
  duration: number;
};

/**
 * Video testimonials, language-neutral. The clips are portrait phone
 * recordings; every rendition is derived from the one upload with Cloudinary
 * transforms so there is nothing to re-encode or host locally.
 */
export const TESTIMONIALS: TestimonialMeta[] = [
  { projectId: "joseph", asset: "v1792340114/josephbattisti_obxxqn", duration: 51 },
  { projectId: "diocletians-dream", asset: "v1792080945/diocletiansdream_obkp2b", duration: 69 },
  { projectId: "lending-group", asset: "v1792080945/bclg_atkftl", duration: 53 },
  { projectId: "display-con-sentido", asset: "v1792080944/dissen_nbcgpv", duration: 23 },
];

export const testimonialMedia = (asset: string) => ({
  /** A still from two seconds in — past the "is it recording?" frame. */
  poster: `${CLOUDINARY}/so_2,w_720,q_auto,f_jpg/${asset}.jpg`,
  /** Short, silent, small loop for the hover preview. */
  preview: `${CLOUDINARY}/du_8,w_480,q_auto:eco,ac_none/${asset}.mp4`,
  /** The full clip with sound, for the player. */
  full: `${CLOUDINARY}/q_auto/${asset}.mp4`,
});

export const formatDuration = (s: number) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
