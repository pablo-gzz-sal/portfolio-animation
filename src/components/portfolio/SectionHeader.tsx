import type { ReactNode } from "react";
import { SplitReveal } from "./SplitReveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export const SECTION_TOTAL = "04";

interface SectionHeaderProps {
  /** "01" … — omit for unnumbered sections (the rail then shows a dash). */
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  /** Extra content under the description, still inside the right column. */
  children?: ReactNode;
}

/**
 * The section opener every block shares: a narrow left rail carrying the
 * index ("01 / 04") and a mono eyebrow, the headline and lede beside it.
 * Borrowed from the pulseo redesign — it is what makes a long single page
 * read as a document with chapters instead of a stack of cards.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <header className={cn("grid gap-6 lg:grid-cols-[200px_1fr] lg:gap-10", className)}>
      <Reveal className="flex items-baseline gap-3 lg:flex-col lg:gap-2 lg:pt-3">
        <span className="font-mono text-xs tabular-nums text-ink-faint">
          {index ? (
            <>
              <span className="text-primary-glow">{index}</span> / {SECTION_TOTAL}
            </>
          ) : (
            <span className="text-primary-glow">—</span>
          )}
        </span>
        <span className="font-mono-eyebrow text-ink-dim">{eyebrow}</span>
      </Reveal>
      <div>
        <SplitReveal className="font-display h-section max-w-4xl text-foreground">
          {title}
        </SplitReveal>
        {description && (
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
