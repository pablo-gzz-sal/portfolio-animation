import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  /** seconds per loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  items,
  duration = 40,
  reverse,
  className,
}: MarqueeProps) {
  const stream = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee group relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div
        className="marquee-track flex w-max gap-12 will-change-transform"
        style={{
          animation: `marquee ${duration}s linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {stream.map((item, i) => (
          <div key={i} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
