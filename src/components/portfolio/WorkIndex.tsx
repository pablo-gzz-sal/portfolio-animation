import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";
import { gsap, isDesktopPointer, useGSAP } from "@/lib/gsap";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { Project } from "./SelectedWork";

/**
 * The project index — Lusion's big list, Unveil's hover media.
 *
 * Desktop: rows of number / title / discipline / stack on hairlines. Hovering
 * a row dims the others and a media card follows the pointer, wiping between
 * project stills as you move down the list. The card leans with pointer
 * velocity so it feels carried rather than pinned to the cursor.
 *
 * Touch: the same rows, each with its own thumbnail — nothing depends on hover.
 */
export function WorkIndex({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (i: number) => void;
}) {
  const t = useT();
  const root = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const mover = useRef<{
    x: (v: number) => void;
    y: (v: number) => void;
    r: (v: number) => void;
  } | null>(null);
  const last = useRef({ x: 0, t: 0 });

  useGSAP(
    () => {
      if (!media.current) return;
      gsap.set(media.current, { xPercent: -50, yPercent: -50, scale: 0.6, autoAlpha: 0 });
      mover.current = {
        x: gsap.quickTo(media.current, "x", { duration: 0.65, ease: "power3.out" }),
        y: gsap.quickTo(media.current, "y", { duration: 0.65, ease: "power3.out" }),
        r: gsap.quickTo(media.current, "rotation", { duration: 0.8, ease: "power3.out" }),
      };
    },
    { scope: root },
  );

  const onMove = (e: React.PointerEvent) => {
    if (!mover.current || !root.current) return;
    const r = root.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    mover.current.x(x);
    mover.current.y(e.clientY - r.top);
    const now = performance.now();
    const vx = (x - last.current.x) / Math.max(now - last.current.t, 1);
    last.current = { x, t: now };
    mover.current.r(Math.max(-8, Math.min(8, vx * 6)));
  };

  const enter = (i: number) => {
    if (!isDesktopPointer()) return;
    // Warm the full-size still so the case study's opening flight is sharp.
    new Image().src = projects[i].image;
    sfx.hover();
    setActive(i);
    gsap.to(media.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 0.5,
      ease: "expo.out",
      overwrite: "auto",
    });
  };
  const leave = () => {
    setActive(null);
    gsap.to(media.current, {
      scale: 0.6,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={root}
      className="relative mt-24 sm:mt-32"
      onPointerMove={onMove}
      onPointerLeave={leave}
    >
      <Reveal className="hidden grid-cols-[80px_1.6fr_1fr_1fr_40px] gap-6 pb-4 font-mono-eyebrow text-ink-faint lg:grid">
        <span>{t.ui.index}</span>
        <span>{t.ui.cols.project}</span>
        <span>{t.ui.cols.discipline}</span>
        <span>{t.ui.cols.stack}</span>
        <span />
      </Reveal>

      <ul className="border-t border-hair">
        {projects.map((p, i) => (
          <li key={p.id} className="border-b border-hair">
            <Reveal delay={i * 60}>
              <button
                type="button"
                data-case-origin={i}
                onClick={() => onOpen(i)}
                onPointerEnter={() => enter(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={cn(
                  "group grid w-full grid-cols-[48px_1fr_auto] items-center gap-4 py-6 text-left transition-opacity duration-500 focus:outline-none focus-visible:bg-card/60 sm:py-8 lg:grid-cols-[80px_1.6fr_1fr_1fr_40px] lg:gap-6 lg:py-10",
                  active !== null && active !== i && "lg:opacity-30",
                )}
              >
                <span className="self-start font-num text-2xl italic leading-none text-ink-faint transition-colors group-hover:text-primary-glow lg:self-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[clamp(1.6rem,3.4vw,3.25rem)] leading-[1] tracking-[-0.04em] text-foreground transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover:translate-x-4">
                    {p.title}
                  </span>
                  {/* touch: inline thumbnail + discipline */}
                  <span className="mt-4 block lg:hidden">
                    <span className="block font-mono-eyebrow text-ink-dim">{p.tag}</span>
                    <img
                      data-case-media={i}
                      src={p.tile}
                      alt=""
                      loading="lazy"
                      className="mt-4 aspect-[16/10] w-full rounded-xl border border-hair object-cover object-top"
                    />
                  </span>
                </span>
                <span className="hidden font-mono-eyebrow text-ink-dim lg:block">{p.tag}</span>
                <span className="hidden font-mono text-xs text-ink-faint lg:block">
                  {p.stack.slice(0, 3).join(" / ")}
                </span>
                <ArrowUpRight className="h-5 w-5 self-start text-ink-faint transition-all duration-500 group-hover:rotate-45 group-hover:text-primary-glow lg:self-center" />
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* floating media — desktop only, purely decorative */}
      <div
        ref={media}
        aria-hidden
        data-case-media={active ?? -1}
        className="pointer-events-none absolute left-0 top-0 z-10 hidden aspect-[16/10] w-[clamp(280px,26vw,420px)] overflow-hidden rounded-xl border border-hair-2 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)] lg:block"
      >
        {projects.map((p, i) => (
          <img
            key={p.id}
            src={p.tile}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top transition-[clip-path,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: active === i ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
              transform: active === i ? "scale(1)" : "scale(1.15)",
              zIndex: active === i ? 2 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
