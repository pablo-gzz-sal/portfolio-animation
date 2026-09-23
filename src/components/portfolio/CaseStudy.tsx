import { useCallback, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, ArrowDown, Play, X } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { sfx } from "@/lib/sound";
import { useT } from "@/i18n";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import type { Project } from "./SelectedWork";

/**
 * Full-screen case study.
 *
 * Opening is a shared-element flight: the image you were looking at (the
 * index's floating preview, a touch thumbnail, or the featured card) lifts
 * off the page and lands as the case study's hero media while the sheet
 * fades up around it, then the copy rises in. If no image is on screen the
 * sheet simply fades and rises. Closing flies the hero back to its source
 * when that is still visible, otherwise the sheet fades away.
 *
 * "Next project" is an in-place swap: current content lifts out, the sheet
 * scrolls to top, the next project's media unmasks and its copy rises in.
 *
 * Radix Dialog still owns focus trapping, Escape, scroll lock and aria; we
 * only intercept the close so it can animate first.
 */

const CONTENT_FROM = { y: 40, autoAlpha: 0 };
const CONTENT_TO = { y: 0, autoAlpha: 1, duration: 0.9, ease: "expo.out" };

type Rect = { top: number; left: number; width: number; height: number };

const onScreen = (r: DOMRect) => r.bottom > 0 && r.top < window.innerHeight && r.width > 0;

/** Rect of a visible image showing project `i` — the index's floating
 *  preview, a touch thumbnail, or the featured card image — or null. */
function sourceRect(i: number): Rect | null {
  for (const el of document.querySelectorAll<HTMLElement>(`[data-case-media="${i}"]`)) {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.5) continue;
    const r = el.getBoundingClientRect();
    if (onScreen(r)) return { top: r.top, left: r.left, width: r.width, height: r.height };
  }
  return null;
}

/** The sharp still if the browser already has it (the index preloads it on
 *  hover), otherwise the light tile — never wait on a 3MB PNG mid-flight. */
function flightSrc(p: Project) {
  const probe = new Image();
  probe.src = p.image;
  return probe.complete && probe.naturalWidth > 0 ? p.image : p.tile;
}

/** A fixed-position copy of the project still, for the flight between rects. */
function makeFlyer(src: string, r: Rect, radius: number) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.setAttribute("aria-hidden", "true");
  Object.assign(img.style, {
    position: "fixed",
    top: `${r.top}px`,
    left: `${r.left}px`,
    width: `${r.width}px`,
    height: `${r.height}px`,
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: `${radius}px`,
    zIndex: "90",
    pointerEvents: "none",
    boxShadow: "0 40px 90px -30px rgb(0 0 0 / 0.75)",
  });
  document.body.appendChild(img);
  return img;
}

const rectOf = (el: Element): Rect => {
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
};

export function CaseStudy({
  projects,
  index,
  onIndexChange,
}: {
  projects: Project[];
  index: number | null;
  onIndexChange: (i: number | null) => void;
}) {
  const t = useT();
  const sheet = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const closing = useRef(false);
  // The project on screen can lag `index` during the next-project wipe.
  const [shown, setShown] = useState<number | null>(index);
  if (index !== null && shown === null) setShown(index);

  const indexRef = useRef(index);
  indexRef.current = index;
  const projectsRef = useRef(projects);
  projectsRef.current = projects;
  const flyer = useRef<HTMLImageElement | null>(null);
  const dropFlyer = () => {
    flyer.current?.remove();
    flyer.current = null;
  };

  // Open. Radix portals the content a render after `open` flips, so this
  // hangs off a callback ref, not an effect.
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const attachSheet = useCallback((el: HTMLDivElement | null) => {
    sheet.current = el;
    const i = indexRef.current;
    if (!el || i === null) return;
    // StrictMode attaches refs twice; restart cleanly rather than stacking.
    openTl.current?.kill();
    dropFlyer();
    closing.current = false;
    sfx.open();
    const copy = el.querySelectorAll(".case-in");
    const media = el.querySelector<HTMLElement>(".case-media");
    if (prefersReducedMotion() || !media) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }

    const from = sourceRect(i);
    const tl = gsap.timeline();
    openTl.current = tl;
    tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55, ease: "power2.out" }, 0);

    if (from) {
      const to = rectOf(media);
      const img = makeFlyer(flightSrc(projectsRef.current[i]), from, 12);
      flyer.current = img;
      gsap.set(media, { autoAlpha: 0 });
      tl.to(img, { ...to, borderRadius: 16, duration: 1.05, ease: "expo.inOut" }, 0)
        .set(media, { autoAlpha: 1 })
        .to(img, { autoAlpha: 0, duration: 0.25, onComplete: dropFlyer });
    } else {
      tl.fromTo(
        media,
        { clipPath: "inset(100% 0% 0% 0% round 16px)", scale: 1.04 },
        { clipPath: "inset(0% 0% 0% 0% round 16px)", scale: 1, duration: 1.1, ease: "expo.out" },
        0.2,
      );
    }
    tl.fromTo(copy, CONTENT_FROM, { ...CONTENT_TO, stagger: 0.07 }, 0.3);
  }, []);

  const requestClose = useCallback(() => {
    if (index === null || closing.current) return;
    closing.current = true;
    sfx.close();
    openTl.current?.kill();
    dropFlyer();
    const done = () => {
      dropFlyer();
      onIndexChange(null);
      setShown(null);
    };
    const el = sheet.current;
    if (prefersReducedMotion() || !el || shown === null) return done();

    const media = el.querySelector<HTMLElement>(".case-media");
    const mr = media?.getBoundingClientRect();
    // Fly home only if both ends are visible: the hero in the sheet, and a
    // still of this project on the page behind it (e.g. the featured card).
    const home = media && mr && onScreen(mr) ? sourceRect(shown) : null;
    const tl = gsap.timeline({ onComplete: done });
    if (media && home) {
      const img = makeFlyer(flightSrc(projectsRef.current[shown]), rectOf(media), 16);
      flyer.current = img;
      gsap.set(media, { autoAlpha: 0 });
      tl.to(img, { ...home, borderRadius: 12, duration: 0.85, ease: "expo.inOut" }, 0).to(
        el,
        { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" },
        0.1,
      );
    } else {
      tl.to(el.querySelectorAll(".case-in, .case-media"), {
        y: -24,
        autoAlpha: 0,
        duration: 0.35,
        stagger: 0.03,
        ease: "power2.in",
      }).to(el, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" }, 0.15);
    }
  }, [index, shown, onIndexChange]);

  const goTo = useCallback(
    (next: number) => {
      sfx.click();
      const el = sheet.current;
      const swap = () => {
        onIndexChange(next);
        setShown(next);
        if (scroller.current) scroller.current.scrollTop = 0;
      };
      if (prefersReducedMotion() || !el) return swap();
      gsap
        .timeline()
        .to(el.querySelectorAll(".case-in, .case-media, .case-next"), {
          y: -30,
          autoAlpha: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.in",
        })
        .call(swap)
        // New content mounts on the swap; animate it on the next frame.
        .add(() => {
          requestAnimationFrame(() => {
            const media = el.querySelector(".case-media");
            if (media)
              gsap.fromTo(
                media,
                { clipPath: "inset(100% 0% 0% 0% round 16px)", scale: 1.04, y: 0, autoAlpha: 1 },
                {
                  clipPath: "inset(0% 0% 0% 0% round 16px)",
                  scale: 1,
                  duration: 1.1,
                  ease: "expo.out",
                },
              );
            gsap.fromTo(el.querySelectorAll(".case-in"), CONTENT_FROM, {
              ...CONTENT_TO,
              stagger: 0.07,
            });
            gsap.set(el.querySelectorAll(".case-next"), { y: 0, autoAlpha: 1 });
          });
        }, "+=0.05");
    },
    [onIndexChange],
  );

  const p = shown !== null ? projects[shown] : null;
  const next = shown !== null ? (shown + 1) % projects.length : 0;
  const total = String(projects.length).padStart(2, "0");

  return (
    <DialogPrimitive.Root open={index !== null} onOpenChange={(o) => !o && requestClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          ref={attachSheet}
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            requestClose();
          }}
          className="fixed inset-0 z-[70] bg-background outline-none"
        >
          {p && shown !== null && (
            <div ref={scroller} className="modal-scroll h-full overflow-y-auto overscroll-contain">
              {/* top bar */}
              <div className="sticky top-0 z-10 border-b border-hair bg-background/80 backdrop-blur-xl">
                <div className="shell flex items-center justify-between gap-6 py-4">
                  <p className="flex items-baseline font-num text-lg italic leading-none text-ink-faint">
                    <span className="text-primary-glow">{String(shown + 1).padStart(2, "0")}</span>
                    &nbsp;/ {total}
                    <span className="mx-3 text-hair-2">—</span>
                    <span className="font-mono-eyebrow">{p.tag}</span>
                  </p>
                  <DialogPrimitive.Close asChild>
                    <button
                      type="button"
                      onMouseEnter={sfx.hover}
                      className="press group inline-flex items-center gap-3 rounded-full border border-hair py-1.5 pl-4 pr-1.5 font-mono-eyebrow text-foreground transition-colors hover:border-hair-2"
                      aria-label={t.selectedWork.closeCase}
                    >
                      {t.ui.close}
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-90">
                        <X className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </DialogPrimitive.Close>
                </div>
              </div>

              <article key={shown} className="shell pb-10 pt-16 sm:pt-24">
                <DialogPrimitive.Title className="case-in font-display h-section max-w-4xl text-foreground">
                  {p.title}
                </DialogPrimitive.Title>
                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <DialogPrimitive.Description className="case-in max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    {p.summary}
                  </DialogPrimitive.Description>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={sfx.hover}
                      className="case-in pill pill-solid press self-start"
                    >
                      {t.selectedWork.viewLive}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="case-media relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-hair bg-muted/30 sm:mt-14">
                  {p.video ? (
                    <video
                      src={p.video}
                      controls
                      playsInline
                      poster={p.image}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-hair bg-background/70 px-4 py-2 font-mono-eyebrow text-ink-dim backdrop-blur">
                        <Play className="h-3 w-3" />
                        {t.selectedWork.videoComingSoon}
                      </div>
                    </>
                  )}
                </div>

                {/* metrics */}
                <dl className="mt-12 grid grid-cols-1 border-y border-hair sm:grid-cols-3">
                  {p.metrics.map((m, i) => (
                    <Reveal
                      key={m.label}
                      delay={i * 80}
                      className={
                        i === 0
                          ? "py-8 sm:pr-8"
                          : "border-t border-hair py-8 sm:border-l sm:border-t-0 sm:px-8"
                      }
                    >
                      <dd className="font-num text-6xl leading-none text-foreground sm:text-7xl">
                        <CountUp value={m.value} />
                      </dd>
                      <dt className="mt-3 font-mono-eyebrow text-ink-faint">{m.label}</dt>
                    </Reveal>
                  ))}
                </dl>

                {/* meta rail + narrative */}
                <div className="mt-16 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20 sm:mt-24">
                  <aside className="lg:sticky lg:top-28 lg:self-start">
                    <Reveal>
                      <dl className="space-y-6 text-sm">
                        {[
                          [t.selectedWork.sections.client, p.client],
                          [t.selectedWork.sections.role, p.role],
                          [t.selectedWork.sections.timeline, p.timeline],
                        ].map(([k, v]) => (
                          <div key={k} className="border-t border-hair pt-4">
                            <dt className="font-mono-eyebrow text-ink-faint">{k}</dt>
                            <dd className="mt-2 text-foreground/90">{v}</dd>
                          </div>
                        ))}
                        <div className="border-t border-hair pt-4">
                          <dt className="font-mono-eyebrow text-ink-faint">
                            {t.selectedWork.sections.techStack}
                          </dt>
                          <dd className="mt-3 flex flex-wrap gap-1.5">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-hair px-2.5 py-1 font-mono-eyebrow text-foreground/80"
                              >
                                {s}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </Reveal>
                  </aside>

                  <div className="space-y-16">
                    <CaseBlock n="01" label={t.selectedWork.sections.problem}>
                      <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                        {p.problem}
                      </p>
                    </CaseBlock>
                    <CaseBlock n="02" label={t.selectedWork.sections.approach}>
                      <List items={p.approach} />
                    </CaseBlock>
                    <CaseBlock n="03" label={t.selectedWork.sections.results}>
                      <List items={p.results} />
                    </CaseBlock>
                    <CaseBlock n="04" label={t.selectedWork.sections.techStack}>
                      <div className="grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2">
                        {p.stackDetail.map((g) => (
                          <div key={g.label} className="bg-background p-5">
                            <p className="font-mono-eyebrow text-ink-faint">{g.label}</p>
                            <p className="mt-2 text-foreground/90">{g.items.join(" · ")}</p>
                          </div>
                        ))}
                      </div>
                    </CaseBlock>
                  </div>
                </div>
              </article>

              {/* next project */}
              <button
                type="button"
                onClick={() => goTo(next)}
                onMouseEnter={sfx.hover}
                className="case-next group block w-full border-t border-hair py-16 text-left transition-colors hover:bg-card/60 sm:py-24"
              >
                <div className="shell">
                  <p className="flex items-center gap-3 font-mono-eyebrow text-ink-faint">
                    {t.ui.next}
                    <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1" />
                  </p>
                  <p className="mt-4 font-display h-section text-foreground transition-colors duration-500 group-hover:text-primary-glow">
                    {projects[next].title}
                  </p>
                </div>
              </button>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function CaseBlock({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <p className="mb-6 flex items-baseline gap-2 text-ink-faint">
          <span className="font-num text-lg italic text-primary-glow">({n})</span>
          <span className="font-mono-eyebrow">{label}</span>
        </p>
        {children}
      </section>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-hair border-y border-hair">
      {items.map((a, i) => (
        <li
          key={a}
          className="grid grid-cols-[40px_1fr] gap-4 py-5 text-base leading-relaxed text-foreground/85 sm:text-lg"
        >
          <span className="font-num text-xl italic leading-snug text-ink-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}
