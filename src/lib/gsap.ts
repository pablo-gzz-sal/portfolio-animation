import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

/**
 * Single registration point for GSAP. Import gsap and its plugins from here,
 * never from "gsap" directly, so the plugins are guaranteed to be registered
 * before any component's useGSAP body runs.
 *
 * Registration is client-only: the SSR pass imports this module too, and
 * ScrollTrigger touches `window` on register.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  gsap.defaults({ ease: "expo.out", duration: 0.9 });
}

/** matchMedia conditions, shared so every set piece gates on the same rules. */
export const MQ = {
  /** Any motion at all. Everything animated sits behind this. */
  motion: "(prefers-reduced-motion: no-preference)",
  /** The heavy pieces — pins, WebGL, pointer effects — are desktop-only. */
  desktop:
    "(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (hover: hover) and (pointer: fine)",
} as const;

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(MQ.motion).matches === false;
}

export function isDesktopPointer() {
  return typeof window !== "undefined" && window.matchMedia(MQ.desktop).matches;
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
