import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n";

export function SocialProof() {
  const t = useT();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  // Index of the testimonial whose video is currently playing inline
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  // Track which card is most centered for the pager dots
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-testimonial-card]"));
      if (!cards.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const cardCenter = c.offsetLeft + c.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActiveIdx(bestIdx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [t.socialProof.quotes.length]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-testimonial-card]")[i];
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <h2 className="font-display h-section text-foreground max-w-3xl leading-[1.05]">
            {t.socialProof.title1} {t.socialProof.titleEm}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-muted-foreground">
            {t.socialProof.logos.map((n) => (
              <span key={n} className="font-display h-card text-foreground/50">
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 relative">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10"
        />

        <div
          ref={scrollerRef}
          className="testimonial-scroller flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 sm:px-[max(2rem,calc((100vw-72rem)/2+2rem))] pb-4"
        >
          {t.socialProof.quotes.map((q, i) => {
            const hasVideo = !!q.videoSrc;
            const isPlaying = playingIdx === i;
            return (
              <article
                key={q.name + i}
                data-testimonial-card
                className="snap-center shrink-0 w-[88%] sm:w-[520px] md:w-[600px] rounded-2xl border border-hair bg-card/60 backdrop-blur-sm overflow-hidden flex flex-col"
              >
                {hasVideo ? (
                  <div className="relative aspect-video bg-muted/40">
                    {isPlaying ? (
                      <video
                        src={q.videoSrc}
                        poster={q.poster}
                        autoPlay
                        controls
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                        onEnded={() => setPlayingIdx(null)}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingIdx(i)}
                        aria-label={t.socialProof.playVideo}
                        className="group absolute inset-0 h-full w-full"
                      >
                        {q.poster ? (
                          <img
                            src={q.poster}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-background" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary-glow/40 transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-[1px]" fill="currentColor" />
                        </span>
                        <span className="absolute bottom-4 left-5 right-5 text-left">
                          <span className="block font-mono-eyebrow text-xs text-foreground/80">
                            {q.name} · {q.role}
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="relative h-2 bg-gradient-to-r from-primary/60 via-primary-glow/60 to-transparent" />
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  <Quote aria-hidden className="h-6 w-6 text-primary-glow/60" />
                  <blockquote className="mt-3 text-foreground/90 leading-relaxed text-lg">
                    {q.quote}
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-hair/60 font-mono-eyebrow text-muted-foreground text-xs">
                    {q.name} · {q.role}
                  </figcaption>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="shell mt-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {t.socialProof.quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === activeIdx}
              onClick={() => scrollToIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "w-8 bg-primary-glow"
                  : "w-3 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label={t.socialProof.prev}
            className="h-10 w-10 rounded-full border border-hair bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label={t.socialProof.next}
            className="h-10 w-10 rounded-full border border-hair bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
