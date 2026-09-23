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
 * Opens as a clip-path wipe from the rect of whatever was clicked (featured
 * card or index row) out to the full viewport — the same "the thing you
 * clicked becomes the page" move Lusion makes with a route change — and
 * closes back into that rect if it is still on screen, or wipes down if not.
 *
 * Radix Dialog still owns focus trapping, Escape, scroll lock and aria; we
 * only intercept the close so it can animate first.
 */

const CONTENT_FROM = { y: 40, autoAlpha: 0 };
const CONTENT_TO = { y: 0, autoAlpha: 1, duration: 0.9, ease: "expo.out" };

type Rect = { top: number; left: number; width: number; height: number };

function insetFrom(r: Rect | null) {
  if (!r) return "inset(100% 0% 0% 0% round 0px)";
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const top = Math.max(0, r.top);
  const left = Math.max(0, r.left);
  const right = Math.max(0, vw - (r.left + r.width));
  const bottom = Math.max(0, vh - (r.top + r.height));
  return `inset(${top}px ${right}px ${bottom}px ${left}px round 18px)`;
}

/** Rect of an on-screen element that opens project `i` (featured card or
 *  index row — whichever is visible), or null. */
function originRect(i: number): Rect | null {
  for (const el of document.querySelectorAll<HTMLElement>(`[data-case-origin="${i}"]`)) {
    const r = el.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight && r.width > 0) {
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    }
  }
  return null;
}

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
  const curtain = useRef<HTMLDivElement>(null);
  const closing = useRef(false);
  // The project on screen can lag `index` during the next-project wipe.
  const [shown, setShown] = useState<number | null>(index);
  if (index !== null && shown === null) setShown(index);

  const indexRef = useRef(index);
  indexRef.current = index;

  // Open: wipe out from the origin rect. Radix portals the content a render
  // after `open` flips, so this hangs off a callback ref, not an effect.
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const attachSheet = useCallback((el: HTMLDivElement | null) => {
    sheet.current = el;
    const i = indexRef.current;
    if (!el || i === null) return;
    // StrictMode attaches refs twice; restart cleanly rather than stacking.
    openTl.current?.kill();
    closing.current = false;
    sfx.open();
    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: "none" });
      return;
    }
    openTl.current = gsap
      .timeline()
      .fromTo(
        el,
        { clipPath: insetFrom(originRect(i)) },
        { clipPath: "inset(0px 0px 0px 0px round 0px)", duration: 1.05, ease: "expo.inOut" },
      )
      .fromTo(el.querySelectorAll(".case-in"), CONTENT_FROM, { ...CONTENT_TO, stagger: 0.06 }, 0.55)
      .set(el, { clipPath: "none" });
  }, []);

  const requestClose = useCallback(() => {
    if (index === null || closing.current) return;
    closing.current = true;
    sfx.close();
    const done = () => {
      onIndexChange(null);
      setShown(null);
    };
    if (prefersReducedMotion() || !sheet.current) return done();
    const origin = shown !== null ? originRect(shown) : null;
    gsap.to(sheet.current, {
      clipPath: insetFrom(origin),
      duration: origin ? 0.85 : 0.7,
      ease: "expo.inOut",
      onComplete: done,
    });
  }, [index, shown, onIndexChange]);

  const goTo = useCallback(
    (next: number) => {
      sfx.click();
      const swap = () => {
        onIndexChange(next);
        setShown(next);
        if (scroller.current) scroller.current.scrollTop = 0;
      };
      if (prefersReducedMotion() || !curtain.current) return swap();
      gsap
        .timeline()
        .fromTo(
          curtain.current,
          { scaleY: 0, transformOrigin: "50% 100%" },
          { scaleY: 1, duration: 0.6, ease: "expo.in" },
        )
        .call(swap)
        .set(curtain.current, { transformOrigin: "50% 0%" }, "+=0.08")
        .to(curtain.current, { scaleY: 0, duration: 0.75, ease: "expo.out" })
        .add(() => {
          const els = sheet.current?.querySelectorAll(".case-in");
          if (els?.length) gsap.fromTo(els, CONTENT_FROM, { ...CONTENT_TO, stagger: 0.06 });
        }, "<0.1");
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
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          {p && shown !== null && (
            <div ref={scroller} className="modal-scroll h-full overflow-y-auto overscroll-contain">
              {/* top bar */}
              <div className="sticky top-0 z-10 border-b border-hair bg-background/80 backdrop-blur-xl">
                <div className="shell flex items-center justify-between gap-6 py-4">
                  <p className="font-mono text-xs tabular-nums text-ink-faint">
                    <span className="text-primary-glow">{String(shown + 1).padStart(2, "0")}</span>{" "}
                    / {total}
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
                <DialogPrimitive.Title className="case-in font-display h-display max-w-5xl text-foreground">
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

                <div className="case-in relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-hair bg-muted/30 sm:mt-16">
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
                      <dd className="font-display text-5xl tabular-nums text-foreground sm:text-6xl">
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
                className="group block w-full border-t border-hair py-16 text-left transition-colors hover:bg-card/60 sm:py-24"
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
          <div
            ref={curtain}
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 origin-bottom scale-y-0 bg-primary"
          />
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
        <p className="mb-6 font-mono text-xs text-ink-faint">
          <span className="text-primary-glow">({n})</span>{" "}
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
          <span className="pt-1 font-mono text-xs tabular-nums text-ink-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}
