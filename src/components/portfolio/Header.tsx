import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/i18n";
import meImg from "@/assets/images/me.jpeg";

export function Header() {
  const { lang, setLang, t, isTransitioning } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const NAV = [
    { href: "#work", label: t.nav.projects, n: "01" },
    { href: "#process", label: t.nav.process, n: "02" },
    { href: "#stack", label: t.nav.stack, n: "03" },
    { href: "#contact", label: t.nav.contact, n: "04" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "top-3 sm:top-4" : "top-4 sm:top-6"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border/60 px-3 pl-4 py-2 transition-all duration-300",
            scrolled
              ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]"
              : "bg-card/40 backdrop-blur-md"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <img
              src={meImg}
              alt="Pablo Salcido"
              className="h-8 w-8 rounded-full object-cover object-top border border-border"
            />
            <span className="hidden sm:inline text-sm font-medium tracking-tight">
              Pablo Salcido
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} disabled={isTransitioning} />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.cta.workTogether}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-card/60 transition-colors"
              aria-label={t.cta.openMenu}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        nav={NAV}
        lang={lang}
        setLang={setLang}
        isTransitioning={isTransitioning}
        cta={t.cta.workTogether}
      />
    </>
  );
}

type NavItem = { href: string; label: string; n: string };

function MobileMenu({
  open,
  onClose,
  nav,
  lang,
  setLang,
  isTransitioning,
  cta,
}: {
  open: boolean;
  onClose: () => void;
  nav: NavItem[];
  lang: Lang;
  setLang: (l: Lang) => void;
  isTransitioning: boolean;
  cta: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col transition-opacity duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ background: "var(--background)" }}
      aria-modal="true"
      role="dialog"
    >
      {/* ambient glow decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* top bar */}
      <div
        className={cn(
          "relative flex items-center justify-between px-6 pt-5 transition-all duration-300",
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}
        style={{ transitionDelay: visible ? "40ms" : "0ms" }}
      >
        <a
          href="#top"
          onClick={onClose}
          className="flex items-center gap-2.5"
        >
          <img
            src={meImg}
            alt="Pablo Salcido"
            className="h-8 w-8 rounded-full object-cover object-top border border-border"
          />
          <span className="text-sm font-medium tracking-tight text-foreground">
            Pablo Salcido
          </span>
        </a>
        <button
          type="button"
          onClick={onClose}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground hover:bg-card transition-colors"
          aria-label="Close menu"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* nav links */}
      <nav className="relative flex-1 flex flex-col justify-center px-6">
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "group flex items-center justify-between border-b border-border/30 py-5 transition-all duration-500 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: visible ? `${i * 70 + 100}ms` : "0ms" }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-muted-foreground/50 tracking-widest select-none">
                {item.n}
              </span>
              <span className="font-display text-[2.6rem] leading-none text-foreground group-hover:text-primary-glow transition-colors duration-200">
                {item.label}
              </span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
          </a>
        ))}
      </nav>

      {/* bottom bar */}
      <div
        className={cn(
          "relative flex items-center justify-between px-6 pb-10 transition-all duration-500 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: visible ? "380ms" : "0ms" }}
      >
        <LangToggle lang={lang} setLang={setLang} disabled={isTransitioning} />
        <a
          href="#contact"
          onClick={onClose}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {cta}
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
}

function LangToggle({
  lang,
  setLang,
  disabled,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  disabled?: boolean;
}) {
  const groupRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    const buttons =
      groupRef.current?.querySelectorAll<HTMLButtonElement>("button");
    buttons?.[next === "en" ? 0 : 1]?.focus();
  };

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full border border-border bg-background/60 p-[3px] text-xs font-medium"
      onKeyDown={handleKeyDown}
    >
      <span
        className={cn(
          "pointer-events-none absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-full bg-foreground transition-all duration-200 ease-out",
          lang === "en" ? "left-[3px]" : "left-[calc(50%)]"
        )}
        aria-hidden="true"
      />
      {(["en", "es"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            onClick={() => setLang(l)}
            aria-label={l === "en" ? "Switch to English" : "Cambiar a Español"}
            className={cn(
              "relative z-10 px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background",
              active ? "text-background" : "text-muted-foreground hover:text-foreground",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
