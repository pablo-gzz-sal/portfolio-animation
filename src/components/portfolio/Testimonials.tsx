import { useCallback, useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { gsap, isDesktopPointer, MQ, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { TESTIMONIALS, formatDuration, testimonialMedia } from "./testimonial-media";

type Reel = {
  n: string;
  client: string;
  context: string;
  tag: string;
  duration: string;
  media: ReturnType<typeof testimonialMedia>;
};

/** How far each column drifts against the scroll (desktop). Neighbouring reels
 *  alternate between shallow and deep so the row never reads as a flat strip. */
const DRIFT = [
  [40, -40],
  [140, -60],
  [80, -80],
  [160, -40],
];

/**
 * Testimonials as a row of portrait "reels" — the clips are phone selfies,
 * so they keep their 9:16 frame rather than being cropped into cards.
 *
 * Desktop: the reels unmask as the row enters and drift at different rates
 * while you scroll; hovering one plays a short silent loop. Touch: a snap
 * scroller with posters only. Either way, opening a reel flies its frame
 * into a full-screen player with sound.
 */
export function Testimonials() {
  const { t } = useI18n();
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const reels: Reel[] = TESTIMONIALS.map((m, i) => {
    const p = t.selectedWork.projects.find((x) => x.id === m.projectId);
    const [client, ...rest] = (p?.title ?? "").split(", ");
    return {
      n: String(i + 1).padStart(2, "0"),
      client,
      context: rest.join(", "),
      tag: p?.tag ?? "",
      duration: formatDuration(m.duration),
      media: testimonialMedia(m.asset),
    };
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.from(".reel-frame", {
          clipPath: "inset(100% 0% 0% 0% round 20px)",
          duration: 1.3,
          ease: "expo.inOut",
          stagger: 0.12,
          clearProps: "clipPath",
          scrollTrigger: { trigger: ".reel-row", start: "top 80%", once: true },
        });
      });
      mm.add(MQ.desktop, () => {
        gsap.utils.toArray<HTMLElement>(".reel-col").forEach((col, i) => {
          const [from, to] = DRIFT[i % DRIFT.length];
          gsap.fromTo(
            col,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: ".reel-row",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const openReel = (i: number) => {
    sfx.click();
    setOpen(i);
  };

  return (
    <section
      ref={root}
      id="testimonials"
      data-nav="testimonials"
      className="relative scroll-mt-24 overflow-x-clip py-28 sm:py-40"
    >
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow={t.testimonials.eyebrow}
          title={
            <>
              {t.testimonials.title1}{" "}
              <span className="text-primary-glow">{t.testimonials.titleEm}</span>
            </>
          }
          description={t.testimonials.description}
        />
      </div>

      <div className="reel-row mt-16 sm:mt-24 lg:shell">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-8 lg:overflow-visible lg:px-0 lg:pb-[140px] [&::-webkit-scrollbar]:hidden">
          {reels.map((r, i) => (
            <li key={r.n} className="reel-col w-[72%] shrink-0 snap-center sm:w-[44%] lg:w-auto">
              <ReelCard reel={r} index={i} onOpen={() => openReel(i)} label={t.testimonials.play} />
            </li>
          ))}
        </ul>
      </div>

      <ReelPlayer reels={reels} index={open} onIndexChange={setOpen} />
    </section>
  );
}

function ReelCard({
  reel,
  index,
  onOpen,
  label,
}: {
  reel: Reel;
  index: number;
  onOpen: () => void;
  label: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  // The preview loop is only fetched once someone actually hovers — posters
  // are all the page pays for up front.
  const enter = () => {
    sfx.hover();
    if (!isDesktopPointer()) return;
    const v = video.current;
    if (!v) return;
    if (!v.src) v.src = reel.media.preview;
    v.play().then(
      () => setPreviewing(true),
      () => {},
    );
  };
  const leave = () => {
    setPreviewing(false);
    video.current?.pause();
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      aria-label={`${label}: ${reel.client}`}
      className="group block w-full text-left focus:outline-none"
    >
      <div
        data-reel-media={index}
        className="reel-frame relative aspect-[9/16] overflow-hidden rounded-[20px] border border-hair bg-card group-focus-visible:ring-2 group-focus-visible:ring-primary"
      >
        <img
          src={reel.media.poster}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            previewing ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in oklab, var(--background) 55%, transparent) 30%, transparent 60%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <span className="font-num text-2xl italic leading-none text-foreground/90">{reel.n}</span>
          <span className="rounded-full border border-hair bg-background/50 px-2.5 py-1 font-mono text-[11px] tabular-nums text-foreground/80 backdrop-blur-md">
            {reel.duration}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="font-mono-eyebrow text-primary-glow">{reel.tag}</p>
            <p className="mt-2 font-display text-2xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-3xl">
              {reel.client}
            </p>
            {reel.context && (
              <p className="mt-1 truncate text-sm text-muted-foreground">{reel.context}</p>
            )}
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
            <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
          </span>
        </div>
      </div>
    </button>
  );
}

/**
 * Full-screen player. Opening flies the frame from the reel you clicked
 * (FLIP on the player's own box, so the video element never remounts);
 * closing reverses it when that reel is still on screen. Radix owns focus,
 * Escape and scroll lock; we intercept the close to animate first.
 */
function ReelPlayer({
  reels,
  index,
  onIndexChange,
}: {
  reels: Reel[];
  index: number | null;
  onIndexChange: (i: number | null) => void;
}) {
  const { t } = useI18n();
  const frame = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const closing = useRef(false);
  const indexRef = useRef(index);
  indexRef.current = index;

  const reel = index === null ? null : reels[index];

  /** Transform that puts the player frame exactly over reel `i`'s card. */
  const flipFrom = (i: number) => {
    const el = frame.current;
    const src = document.querySelector<HTMLElement>(`[data-reel-media="${i}"]`);
    if (!el || !src) return null;
    const a = src.getBoundingClientRect();
    if (a.bottom < 0 || a.top > window.innerHeight) return null;
    const b = el.getBoundingClientRect();
    return {
      x: a.left + a.width / 2 - (b.left + b.width / 2),
      y: a.top + a.height / 2 - (b.top + b.height / 2),
      scale: a.width / b.width,
    };
  };

  const attachFrame = useCallback((el: HTMLDivElement | null) => {
    frame.current = el;
    const i = indexRef.current;
    if (!el || i === null) return;
    closing.current = false;
    sfx.open();
    video.current?.play().catch(() => {});
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      overlay.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
    );
    gsap.fromTo(
      ".player-in",
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, delay: 0.45, stagger: 0.06 },
    );
    const from = flipFrom(i);
    gsap.fromTo(
      el,
      from ? { ...from, borderRadius: 20 / from.scale } : { y: 60, scale: 0.92, autoAlpha: 0 },
      { x: 0, y: 0, scale: 1, autoAlpha: 1, borderRadius: 20, duration: 1, ease: "expo.inOut" },
    );
  }, []);

  const close = () => {
    const el = frame.current;
    const i = indexRef.current;
    if (closing.current || i === null) return;
    closing.current = true;
    sfx.close();
    video.current?.pause();
    if (!el || prefersReducedMotion()) return onIndexChange(null);
    const to = flipFrom(i);
    const tl = gsap.timeline({ onComplete: () => onIndexChange(null) });
    tl.to(".player-in", { autoAlpha: 0, duration: 0.25 }, 0)
      .to(
        el,
        to
          ? { ...to, borderRadius: 20 / to.scale, duration: 0.8, ease: "expo.inOut" }
          : { y: 40, autoAlpha: 0, duration: 0.45, ease: "power2.in" },
        0,
      )
      .to(overlay.current, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, 0.3);
  };

  const step = (dir: -1 | 1) => {
    if (index === null) return;
    sfx.click();
    onIndexChange((index + dir + reels.length) % reels.length);
  };

  // Swapping reels in place: fade the frame through, keep playing.
  useEffect(() => {
    if (index === null || !frame.current || closing.current) return;
    video.current?.play().catch(() => {});
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <DialogPrimitive.Root open={index !== null} onOpenChange={(o) => !o && close()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          ref={overlay}
          className="fixed inset-0 z-[80] bg-background/85 backdrop-blur-xl"
        />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-[85] flex items-center justify-center p-4 focus:outline-none sm:p-8"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          {reel && (
            <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-16">
              <div
                ref={attachFrame}
                className="relative aspect-[9/16] h-[min(78svh,calc((100vw-2rem)*16/9))] max-h-full overflow-hidden rounded-[20px] border border-hair bg-card shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75)] will-change-transform lg:h-[min(86svh,760px)]"
              >
                <video
                  key={reel.media.full}
                  ref={video}
                  src={reel.media.full}
                  poster={reel.media.poster}
                  autoPlay
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full bg-black object-cover"
                  onEnded={() => index !== null && index < reels.length - 1 && step(1)}
                />
              </div>

              <div className="w-full max-w-[min(100%,calc(78svh*9/16))] lg:max-w-xs">
                <p className="player-in font-mono-eyebrow text-ink-faint">
                  <span className="mr-1 font-num text-lg normal-case italic tracking-normal text-primary-glow">
                    {reel.n}
                  </span>{" "}
                  / {String(reels.length).padStart(2, "0")} · {reel.duration}
                </p>
                <DialogPrimitive.Title className="player-in mt-3 hidden font-display text-4xl leading-[1.02] tracking-[-0.04em] text-foreground sm:block lg:text-5xl">
                  {reel.client}
                </DialogPrimitive.Title>
                <p className="player-in mt-2 hidden text-muted-foreground sm:block">
                  {reel.context} · {reel.tag}
                </p>
                <div className="player-in mt-4 flex items-center gap-2 lg:mt-10">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    onMouseEnter={sfx.hover}
                    aria-label={t.testimonials.prev}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hair bg-card/60 text-foreground transition-colors hover:border-primary-glow/50 hover:bg-card"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    onMouseEnter={sfx.hover}
                    aria-label={t.testimonials.next}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hair bg-card/60 text-foreground transition-colors hover:border-primary-glow/50 hover:bg-card"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    onMouseEnter={sfx.hover}
                    className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                  >
                    <X className="h-4 w-4" />
                    {t.ui.close}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
