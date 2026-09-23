import { useRef, useState } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { markIntroDone } from "@/lib/intro";
import { useT } from "@/i18n";
import { PROJECT_META } from "./SelectedWork";

const SEEN_KEY = "intro-seen";

/** Read once per page load — StrictMode runs effects twice, and the second
 *  run must not mistake the first run's write for a previous visit. */
let seenAtLoad: boolean | null = null;
function introSeen() {
  if (seenAtLoad === null) {
    try {
      seenAtLoad = sessionStorage.getItem(SEEN_KEY) === "1";
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      seenAtLoad = false;
    }
  }
  return seenAtLoad;
}
/** Never hold the page hostage to a slow asset — cap the wait. */
const ASSET_TIMEOUT = 2800;

function waitForAssets(): Promise<void> {
  const fonts = document.fonts?.ready ?? Promise.resolve();
  const images = PROJECT_META.map(
    (m) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = m.tile;
        img.decode().then(resolve, resolve);
      }),
  );
  const all = Promise.all([fonts, ...images]).then(() => undefined);
  const timeout = new Promise<void>((r) => setTimeout(r, ASSET_TIMEOUT));
  return Promise.race([all, timeout]);
}

/**
 * Full-screen curtain with a 000→100 counter, then a wipe that hands straight
 * into the hero's entrance.
 *
 * It is server-rendered so it covers the page from the very first paint — the
 * hero sets its own pre-animation state on hydrate, and without the curtain
 * that state change would flash. Consequences handled here:
 *  - no JS: a <noscript> style in the root hides it;
 *  - JS failure: a CSS failsafe animation fades it after 7s regardless;
 *  - repeat visit in the same tab, or reduced motion: a quick fade instead of
 *    the full count.
 */
export function Preloader() {
  const t = useT();
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const html = document.documentElement;
      html.style.overflow = "hidden";
      const finish = () => {
        html.style.overflow = "";
        markIntroDone();
        setGone(true);
      };

      if (introSeen() || prefersReducedMotion()) {
        // Release the hero first so its entrance plays through the fade.
        markIntroDone();
        gsap.to(el, { autoAlpha: 0, duration: 0.45, ease: "power2.out", onComplete: finish });
        return;
      }

      const progress = { v: 0 };
      const render = () => {
        if (counter.current) counter.current.textContent = String(Math.round(progress.v)).padStart(3, "0");
        if (bar.current) bar.current.style.transform = `scaleX(${progress.v / 100})`;
      };

      // The first stretch runs on a clock so the curtain always has a beat;
      // the count only completes once fonts and hero stills are decoded.
      const clock = gsap.to(progress, { v: 72, duration: 1.3, ease: "power2.inOut", onUpdate: render });
      let exit: gsap.core.Timeline | null = null;
      Promise.all([clock.then(), waitForAssets()]).then(() => {
        exit = gsap
          .timeline()
          .to(progress, { v: 100, duration: 0.55, ease: "power3.out", onUpdate: render })
          .to(".pl-roll", { yPercent: -110, duration: 0.7, ease: "expo.in", stagger: 0.04 }, "+=0.15")
          .to(".pl-bar", { scaleY: 0, transformOrigin: "50% 0%", duration: 0.4, ease: "expo.in" }, "<")
          .call(markIntroDone, [], "+=0.05")
          .to(
            el,
            { clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: "expo.inOut", onComplete: finish },
            "<-0.1",
          );
      });
      // Belt and braces: never leave the page locked.
      const safety = setTimeout(finish, 7000);
      return () => {
        clearTimeout(safety);
        exit?.kill();
      };
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="preloader fixed inset-0 z-[80] flex flex-col justify-between bg-background px-[clamp(1.25rem,3vw,3rem)] py-8"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="flex items-start justify-between gap-6 overflow-hidden">
        <span className="pl-roll font-mono-eyebrow text-ink-dim">{t.ui.intro}</span>
        <span className="pl-roll font-mono-eyebrow text-ink-faint">{t.ui.preloader}</span>
      </div>

      <div>
        <div className="overflow-hidden">
          <span
            ref={counter}
            className="pl-roll block font-display h-mega tabular-nums text-foreground"
          >
            000
          </span>
        </div>
        <div className="pl-bar mt-6 h-px w-full bg-hair">
          <div ref={bar} className="h-full w-full origin-left scale-x-0 bg-primary-glow" />
        </div>
      </div>
    </div>
  );
}
