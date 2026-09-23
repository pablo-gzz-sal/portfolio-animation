import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { useMagnetic } from "@/hooks/use-magnetic";
import { gsap, isDesktopPointer, MQ, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { sfx } from "@/lib/sound";
import { HeroMosaic } from "./HeroMosaic";
import { HeroVeil } from "./HeroVeil";
import { Reveal } from "./Reveal";

/**
 * Full-height plate, headline anchored to the bottom.
 *
 * Desktop: the WebGL pixel veil sits behind the type and the headline's
 * letters lean away from the pointer. Touch / small screens / reduced motion
 * keep the drifting mosaic instead — same content, none of the GPU cost.
 *
 * Entrance waits for the preloader; exit is scrubbed to scroll — the plate
 * insets into a rounded card while the copy lifts away.
 */
export function Hero() {
  const { t, lang } = useI18n();
  const root = useRef<HTMLElement>(null);
  const primaryCta = useMagnetic<HTMLAnchorElement>();
  const secondaryCta = useMagnetic<HTMLAnchorElement>();
  const [veil, setVeil] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MQ.desktop);
    const sync = () => setVeil(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const h1 = el.querySelector<HTMLElement>(".hero-title")!;
        let repel: (() => void) | undefined;
        let entered = false;
        // autoSplit re-splits on resize / font load so the line masks always
        // match the wrap; each fresh split is put back in the right state.
        const split = SplitText.create(h1, {
          type: "words,lines,chars",
          mask: "lines",
          linesClass: "split-line",
          charsClass: "hero-char",
          autoSplit: true,
          onSplit(self) {
            repel?.();
            repel = undefined;
            if (!entered) gsap.set(self.chars, { yPercent: 118 });
            else if (isDesktopPointer()) repel = letterRepel(el, self.chars as HTMLElement[]);
          },
        });
        gsap.set(".hero-fade", { autoAlpha: 0, y: 24 });
        gsap.set(".hero-rule", { scaleX: 0 });

        const off = onIntroDone(() => {
          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .to(split.chars, { yPercent: 0, duration: 1.35, stagger: 0.014 }, 0.1)
            .to(".hero-rule", { scaleX: 1, duration: 1.4, ease: "expo.inOut" }, 0.25)
            .to(".hero-fade", { autoAlpha: 1, y: 0, duration: 1, stagger: 0.07 }, 0.55)
            .call(() => {
              entered = true;
              if (isDesktopPointer()) repel = letterRepel(el, split.chars as HTMLElement[]);
            });
        });

        // Scroll exit — the plate becomes a card and falls back; copy lifts off.
        gsap
          .timeline({
            scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
          })
          .fromTo(
            ".hero-plate",
            { clipPath: "inset(0% 0% 0% 0% round 0px)" },
            { clipPath: "inset(7% 3% 16% 3% round 28px)", ease: "none" },
            0,
          )
          .to(".hero-copy", { yPercent: -18, autoAlpha: 0, ease: "power1.in" }, 0);

        return () => {
          off();
          repel?.();
          split.revert();
        };
      });

      return () => mm.revert();
    },
    // Re-split when the language (and therefore the headline) changes.
    { scope: root, dependencies: [lang], revertOnUpdate: true },
  );

  // Pins further down change the page height after first layout.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      ref={root}
      id="top"
      data-nav="top"
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      <div
        className="hero-plate absolute inset-0 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {veil ? <HeroVeil /> : <HeroMosaic />}
        <div className="grid-veil" />
        {/* Readability scrim — lighter than the mosaic's, the veil is sparse. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--background) 8%, color-mix(in oklab, var(--background) 55%, transparent) 38%, transparent 70%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-6 sm:inset-10">
          <span className="frame-corner frame-corner-tl" />
          <span className="frame-corner frame-corner-tr" />
          <span className="frame-corner frame-corner-bl" />
          <span className="frame-corner frame-corner-br" />
        </div>
      </div>

      <div className="hero-copy shell relative pt-36 pb-16 sm:pb-20">
        <div className="hero-fade mb-8 flex items-center justify-between gap-6 font-mono-eyebrow text-ink-faint">
          <span>{t.hero.senior}</span>
          <span className="hidden sm:inline">48.14°N — 11.58°E</span>
        </div>

        {/* Keyed so a language switch gives SplitText a fresh node to own. */}
        <h1 key={lang} className="hero-title font-display h-display text-foreground">
          {t.hero.title1} <span className="text-primary-glow">{t.hero.titleEm}</span>
        </h1>

        <div className="hero-rule mt-10 h-px origin-left bg-hair-2" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="hero-fade max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.description}
          </p>
          <div className="hero-fade flex flex-wrap items-center gap-3">
            <a
              ref={primaryCta}
              href="#work"
              onMouseEnter={sfx.hover}
              onClick={sfx.click}
              className="pill pill-solid press group"
            >
              {t.hero.viewWork}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              ref={secondaryCta}
              href="#contact"
              onMouseEnter={sfx.hover}
              onClick={sfx.click}
              className="pill press"
            >
              {t.hero.startConversation}
            </a>
          </div>
        </div>
      </div>

      <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
        <span className="scroll-cue font-mono-eyebrow text-ink-faint">{t.hero.scrollHint}</span>
      </div>
    </section>
  );
}

/**
 * Letters lean away from the pointer, Unveil-style. Char centres are cached
 * in page coordinates (they only move on resize — the scroll exit fades the
 * whole block, which is fine to ignore), and each char gets its own quickTo
 * so the motion stays on GSAP's ticker rather than React.
 */
function letterRepel(scope: HTMLElement, chars: HTMLElement[]) {
  const RADIUS = 150;
  const PUSH = 16;
  let centres: { x: number; y: number }[] = [];
  const measure = () => {
    centres = chars.map((c) => {
      const r = c.getBoundingClientRect();
      return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
    });
  };
  measure();
  const qx = chars.map((c) => gsap.quickTo(c, "x", { duration: 0.6, ease: "power3.out" }));
  const qy = chars.map((c) => gsap.quickTo(c, "y", { duration: 0.6, ease: "power3.out" }));

  let raf = 0;
  let px = -1e5;
  let py = -1e5;
  const apply = () => {
    raf = 0;
    for (let i = 0; i < chars.length; i++) {
      const dx = centres[i].x - px;
      const dy = centres[i].y - py;
      const d = Math.hypot(dx, dy);
      if (d < RADIUS) {
        const f = (1 - d / RADIUS) ** 2 * PUSH;
        qx[i]((dx / (d || 1)) * f);
        qy[i]((dy / (d || 1)) * f);
      } else {
        qx[i](0);
        qy[i](0);
      }
    }
  };
  const onMove = (e: PointerEvent) => {
    px = e.pageX;
    py = e.pageY;
    if (!raf) raf = requestAnimationFrame(apply);
  };
  const onLeave = () => {
    px = py = -1e5;
    if (!raf) raf = requestAnimationFrame(apply);
  };
  scope.addEventListener("pointermove", onMove);
  scope.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", measure);
  return () => {
    cancelAnimationFrame(raf);
    scope.removeEventListener("pointermove", onMove);
    scope.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("resize", measure);
    gsap.set(chars, { x: 0, y: 0 });
  };
}

/**
 * Credibility band under the hero — three hairline-ruled facts.
 */
export function HeroStats() {
  const { t } = useI18n();
  return (
    <section className="relative">
      <div className="shell">
        <dl className="grid grid-cols-1 border-t border-hair sm:grid-cols-3">
          {t.hero.stats.map((m, i) => (
            <Reveal
              key={m.k}
              delay={i * 90}
              className={
                i === 0
                  ? "py-8 sm:py-10 sm:pr-10"
                  : "border-t border-hair py-8 sm:border-t-0 sm:border-l sm:py-10 sm:pl-10 sm:pr-10"
              }
            >
              <dt className="font-mono text-xs tabular-nums text-ink-faint">
                <span className="text-primary-glow">0{i + 1}</span> — {m.k}
              </dt>
              <dd className="mt-3 font-display text-xl leading-snug text-foreground/90 sm:text-2xl">
                {m.v}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
