import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useI18n, a as useT } from "./router-BI9_RUra.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { W as WebGLRenderer, S as Scene, O as OrthographicCamera, a as ShaderMaterial, V as Vector2, P as PlaneGeometry, M as Mesh } from "../_libs/three.mjs";
import { M as Menu, A as ArrowUpRight, E as ExternalLink, X, P as Play, Q as Quote, C as ChevronLeft, a as ChevronRight, b as Mail, L as Linkedin, G as Github, c as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useMagnetic(strength = 0.25, max = 6) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches)
      return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
      return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      const settled = Math.abs(cx - tx) < 0.05 && Math.abs(cy - ty) < 0.05 && tx === 0 && ty === 0;
      if (settled) {
        el.style.translate = "";
        raf = 0;
        return;
      }
      el.style.translate = `${cx.toFixed(2)}px ${cy.toFixed(2)}px`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      tx = Math.max(-max, Math.min(max, dx * strength));
      ty = Math.max(-max, Math.min(max, dy * strength));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.translate = "";
    };
  }, [strength, max]);
  return ref;
}
const meImg = "/assets/me-CwN4ryf4.jpeg";
function Header() {
  const { lang, setLang, t, isTransitioning } = useI18n();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const ctaRef = useMagnetic();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const NAV = [
    { href: "#work", label: t.nav.projects, n: "01" },
    { href: "#process", label: t.nav.process, n: "02" },
    { href: "#stack", label: t.nav.stack, n: "03" },
    { href: "#contact", label: t.nav.contact, n: "04" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "fixed left-0 right-0 z-50 transition-[top] duration-300 ease-out",
          scrolled ? "top-3 sm:top-4" : "top-4 sm:top-6"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: cn(
              "mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border/60 px-3 pl-4 py-2 transition-[background-color,box-shadow,backdrop-filter] duration-300",
              scrolled ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-card/40 backdrop-blur-md"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: meImg,
                    alt: "Pablo Salcido",
                    className: "h-8 w-8 rounded-full object-cover object-top border border-border"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-sm font-medium tracking-tight", children: "Pablo Salcido" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: item.href,
                  className: "nav-link hover:text-foreground transition-colors",
                  children: item.label
                }
              ) }, item.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, { lang, setLang, disabled: isTransitioning }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    ref: ctaRef,
                    href: "#contact",
                    className: "press hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
                    children: t.cta.workTogether
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setMenuOpen(true),
                    className: "press md:hidden grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-card/60 transition-colors",
                    "aria-label": t.cta.openMenu,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MobileMenu,
      {
        open: menuOpen,
        onClose: () => setMenuOpen(false),
        nav: NAV,
        lang,
        setLang,
        isTransitioning,
        cta: t.cta.workTogether
      }
    )
  ] });
}
function MobileMenu({
  open,
  onClose,
  nav,
  lang,
  setLang,
  isTransitioning,
  cta
}) {
  const [mounted, setMounted] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(
        () => requestAnimationFrame(() => setVisible(true))
      );
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [open]);
  reactExports.useEffect(() => {
    if (!open) return;
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[60] flex flex-col transition-opacity duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0"
      ),
      style: { background: "var(--background)" },
      "aria-modal": "true",
      role: "dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full",
              style: {
                background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full",
              style: {
                background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "relative flex items-center justify-between px-6 pt-5 transition-all duration-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            ),
            style: { transitionDelay: visible ? "40ms" : "0ms" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#top",
                  onClick: onClose,
                  className: "flex items-center gap-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: meImg,
                        alt: "Pablo Salcido",
                        className: "h-8 w-8 rounded-full object-cover object-top border border-border"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium tracking-tight text-foreground", children: "Pablo Salcido" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground hover:bg-card transition-colors",
                  "aria-label": "Close menu",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "relative flex-1 flex flex-col justify-center px-6", children: nav.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: item.href,
            onClick: onClose,
            className: cn(
              "group flex items-center justify-between border-b border-border/30 py-5 transition-all duration-500 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            ),
            style: { transitionDelay: visible ? `${i * 70 + 100}ms` : "0ms" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground/50 tracking-widest select-none", children: item.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[2.6rem] leading-none text-foreground group-hover:text-primary-glow transition-colors duration-200", children: item.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground/30 group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" })
            ]
          },
          item.href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "relative flex items-center justify-between px-6 pb-10 transition-all duration-500 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ),
            style: { transitionDelay: visible ? "380ms" : "0ms" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, { lang, setLang, disabled: isTransitioning }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  onClick: onClose,
                  className: "group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
                  children: [
                    cta,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" }) })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function LangToggle({
  lang,
  setLang,
  disabled
}) {
  const groupRef = reactExports.useRef(null);
  const handleKeyDown = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    const buttons = groupRef.current?.querySelectorAll("button");
    buttons?.[next === "en" ? 0 : 1]?.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: groupRef,
      role: "radiogroup",
      "aria-label": "Language",
      className: "relative inline-flex items-center rounded-full border border-border bg-background/60 p-[3px] text-xs font-medium",
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "pointer-events-none absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-full bg-foreground transition-all duration-200 ease-out",
              lang === "en" ? "left-[3px]" : "left-[calc(50%)]"
            ),
            "aria-hidden": "true"
          }
        ),
        ["en", "es"].map((l) => {
          const active = lang === l;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": active,
              disabled,
              onClick: () => setLang(l),
              "aria-label": l === "en" ? "Switch to English" : "Cambiar a Español",
              className: cn(
                "relative z-10 px-2.5 py-1 rounded-full uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background",
                active ? "text-background" : "text-muted-foreground hover:text-foreground",
                disabled && "opacity-50 cursor-not-allowed"
              ),
              children: l
            },
            l
          );
        })
      ]
    }
  );
}
const d = (ms) => ({ "--d": `${ms}ms` });
function Hero() {
  const t = useT();
  const primaryCta = useMagnetic();
  const secondaryCta = useMagnetic();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "top",
      className: "relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36",
      style: { background: "var(--gradient-hero)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-item", style: d(0), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-eyebrow text-foreground/80", children: t.hero.availability })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-8 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1] tracking-[-0.03em] text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: d(100), children: t.hero.title1 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: d(200), className: "text-primary-glow", children: t.hero.titleEm }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "hero-item mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",
              style: d(380),
              children: t.hero.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-item mt-9 flex flex-wrap gap-3", style: d(470), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                ref: primaryCta,
                href: "#work",
                className: "group press inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
                children: [
                  t.hero.viewWork,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                ref: secondaryCta,
                href: "#contact",
                className: "press inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 transition-colors",
                children: t.hero.startConversation
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "dl",
            {
              className: "hero-item mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl",
              style: d(560),
              children: t.hero.stats.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground", children: m.k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-2 text-sm text-foreground/90 leading-relaxed", children: m.v })
              ] }, m.k))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative lg:mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "hero-media relative aspect-[4/5] w-full rounded-3xl border border-border overflow-hidden",
              style: { boxShadow: "var(--shadow-elegant)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: meImg,
                    alt: "Pablo Salcido",
                    className: "absolute inset-0 h-full w-full object-cover object-top"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-0 mix-blend-soft-light",
                    style: {
                      background: "linear-gradient(165deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 55%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "absolute inset-x-0 bottom-0 h-1/3",
                    style: {
                      background: "linear-gradient(to top, color-mix(in oklab, var(--background) 55%, transparent), transparent)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "hero-item mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5",
              style: d(700),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.14em] font-medium text-muted-foreground", children: t.hero.currentSignal }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/90 leading-relaxed", children: t.hero.currentSignalBody })
              ]
            }
          )
        ] })
      ] }) })
    }
  );
}
function useReveal(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
          break;
        }
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}
function Reveal({ children, delay = 0, className, as = "div" }) {
  const { ref, shown } = useReveal();
  const Tag = as;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: cn("reveal", shown && "reveal-in", className),
      style: delay ? { transitionDelay: `${delay}ms` } : void 0,
      children
    }
  );
}
function WhoIWorkWith() {
  const t = useT();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] text-foreground max-w-md", children: [
      t.whoIWorkWith.title1,
      " ",
      t.whoIWorkWith.titleEm
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      t.whoIWorkWith.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group border-t border-border py-8 sm:py-10 grid sm:grid-cols-[72px_1fr] gap-4 sm:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm text-primary-glow/70 pt-1.5 transition-colors duration-300 group-hover:text-primary-glow", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl text-foreground leading-snug", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed max-w-lg", children: item.body })
        ] })
      ] }) }, item.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border" })
    ] })
  ] }) }) });
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/70 modal-backdrop",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg modal-content",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const imgJoseph = "/assets/joseph-KKYy4_MQ.png";
const imgBclg = "/assets/bclg-DGjS_ekn.png";
const imgEsencial = "/assets/esencial-Dj_Q8ZGA.png";
const imgTravane = "/assets/travane-hJxOVszi.png";
const imgKochina = "/assets/kochina-DuxHB4rJ.png";
const PROJECT_META = [
  { image: imgJoseph, stack: ["Angular", "PostgreSQL", "Node.js", "Swagger"] },
  { image: imgBclg, stack: ["Angular", "Express", "MongoDB", "CI/CD"] },
  { image: imgEsencial, stack: ["Angular", "Express", "MongoDB", "Stripe"] },
  { image: imgTravane, stack: ["Angular", "TypeScript", "Tailwind"] },
  { image: imgKochina, stack: ["Angular", "TypeScript", "Tailwind"] },
  { image: null, mock: "saas", stack: ["React", "Node.js", "PostgreSQL", "Stripe"] }
];
const GRID_SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-12"
];
function SaasMock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-0 rounded-xl border border-border overflow-hidden",
      style: { background: "var(--card)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 grid grid-cols-3 gap-2 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 rounded-md bg-muted-foreground/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 grid grid-rows-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-primary/25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-muted-foreground/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-muted-foreground/15" })
        ] })
      ] })
    }
  );
}
function trackSheen(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}
function CardMedia({
  project,
  hoverLabel,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "clip-reveal relative rounded-xl bg-muted/40 overflow-hidden",
        className
      ),
      children: [
        project.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: project.image,
            alt: project.title,
            className: "absolute inset-0 h-full w-full object-cover rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(SaasMock, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/90 font-medium bg-card/90 backdrop-blur px-3 py-1.5 rounded-full border border-border", children: hoverLabel }) })
      ]
    }
  );
}
function CardBody({
  project,
  roleLabel,
  outcomeLabel,
  titleClass = "text-2xl"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: project.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: cn(
              "font-display mt-2 text-foreground leading-tight",
              titleClass
            ),
            children: project.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: project.summary }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-4 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: roleLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground/90", children: project.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: outcomeLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground/90", children: project.outcome })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: project.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground",
        children: s
      },
      s
    )) })
  ] });
}
function SelectedWork() {
  const t = useT();
  const projects = t.selectedWork.projects.map((p, i) => ({
    ...p,
    image: PROJECT_META[i]?.image ?? null,
    stack: PROJECT_META[i]?.stack ?? []
  }));
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const active = openIdx !== null ? projects[openIdx] : null;
  const cardClass = "group relative w-full text-left rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl tilt-card hover:tilt-card-hover overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const [featured, ...rest] = projects;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "relative py-28 sm:py-36 scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]", children: [
          t.selectedWork.title1,
          " ",
          t.selectedWork.titleEm
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground", children: t.selectedWork.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpenIdx(0),
          onPointerMove: trackSheen,
          className: cn(cardClass, "grid gap-6 lg:grid-cols-[1.4fr_1fr] p-6 sm:p-8"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-sheen", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardMedia,
              {
                project: featured,
                hoverLabel: t.selectedWork.viewCaseStudy,
                className: "aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center lg:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CardBody,
              {
                project: featured,
                roleLabel: t.selectedWork.role,
                outcomeLabel: t.selectedWork.outcome,
                titleClass: "text-3xl sm:text-4xl"
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 md:grid-cols-12", children: rest.map((p, i) => {
        const idx = i + 1;
        const wide = GRID_SPANS[i] === "md:col-span-12";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Reveal,
          {
            delay: i % 2 * 70,
            className: cn("h-full", GRID_SPANS[i]),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenIdx(idx),
                onPointerMove: trackSheen,
                className: cn(
                  cardClass,
                  "h-full p-6 sm:p-7",
                  wide && "grid gap-6 md:grid-cols-[1.2fr_1fr] items-center"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-sheen", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CardMedia,
                    {
                      project: p,
                      hoverLabel: t.selectedWork.viewCaseStudy,
                      className: cn("aspect-[16/10]", !wide && "mb-6")
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CardBody,
                    {
                      project: p,
                      roleLabel: t.selectedWork.role,
                      outcomeLabel: t.selectedWork.outcome
                    }
                  ) })
                ]
              }
            )
          },
          p.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!active, onOpenChange: (v) => !v && setOpenIdx(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContent,
      {
        "data-lenis-prevent": true,
        onWheel: (e) => e.stopPropagation(),
        onTouchMove: (e) => e.stopPropagation(),
        className: "max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain modal-scroll bg-card/95 backdrop-blur-xl border-border p-0 [&>button]:hidden",
        children: active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: active.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display mt-3 text-3xl sm:text-4xl text-foreground leading-[1.05]", children: active.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-3 text-muted-foreground max-w-xl", children: active.summary }),
              active.liveUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: active.liveUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "press mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
                  children: [
                    t.selectedWork.viewLive,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-background group-hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpenIdx(null),
                className: "press shrink-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 hover:bg-background transition-colors",
                "aria-label": t.selectedWork.closeCase,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] rounded-2xl bg-muted/30 border border-border overflow-hidden", children: active.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                src: active.video,
                controls: true,
                playsInline: true,
                poster: active.image ?? void 0,
                className: "absolute inset-0 h-full w-full object-cover"
              }
            ) : active.image ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: active.image,
                  alt: active.title,
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5" }),
                "Video coming soon"
              ] }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SaasMock, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: active.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl border border-border bg-card/70 p-4 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-3xl text-primary-glow", children: m.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono-eyebrow text-muted-foreground", children: m.label })
                ]
              },
              m.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.client }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-foreground/90", children: active.client })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-foreground/90", children: active.role })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.timeline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-foreground/90", children: active.timeline })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.problem }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground/90 leading-relaxed", children: active.problem })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.approach }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2.5", children: active.approach.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a })
                  ]
                },
                a
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.results }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2.5", children: active.results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
                  ]
                },
                r
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.selectedWork.sections.techStack }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid sm:grid-cols-2 gap-3", children: active.stackDetail.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl border border-border bg-card/60 p-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: group.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 flex flex-wrap gap-1.5", children: group.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-foreground/85",
                        children: it
                      },
                      it
                    )) })
                  ]
                },
                group.label
              )) })
            ] })
          ] })
        ] })
      }
    ) })
  ] });
}
function Process() {
  const t = useT();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "relative py-28 sm:py-44 scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-foreground leading-[1.05] max-w-md", children: [
        t.process.title1,
        " ",
        t.process.titleEm
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-muted-foreground", children: t.process.description })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { children: [
      t.process.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group border-t border-border py-8 sm:py-10 grid grid-cols-[72px_1fr] sm:grid-cols-[104px_1fr] gap-5 sm:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-3xl sm:text-5xl leading-none pt-1 text-foreground/15 transition-colors duration-500 group-hover:text-primary-glow/70", children: step.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl text-foreground leading-snug", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: step.body })
        ] })
      ] }) }, step.n)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border" })
    ] })
  ] }) }) });
}
function Marquee({
  items,
  duration = 40,
  reverse,
  className
}) {
  const stream = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "marquee group relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "marquee-track flex w-max gap-12 will-change-transform",
          style: {
            animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : ""}`
          },
          children: stream.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center", children: item }, i))
        }
      )
    }
  );
}
function Stack() {
  const t = useT();
  const mid = Math.ceil(t.stack.groups.length / 2);
  const rows = [t.stack.groups.slice(0, mid), t.stack.groups.slice(mid)];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "stack", className: "relative py-20 sm:py-28 scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]", children: [
        t.stack.title1,
        " ",
        t.stack.titleEm
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground", children: t.stack.description })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-14 space-y-7", delay: 80, children: rows.map((groups, rowIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Marquee,
      {
        duration: rowIdx === 0 ? 70 : 85,
        reverse: rowIdx === 1,
        items: groups.flatMap((g) => [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-mono text-xs uppercase tracking-[0.2em] text-primary-glow/80",
              children: g.title
            },
            `${g.title}-label`
          ),
          ...g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-lg sm:text-xl text-foreground/70",
              children: it
            },
            `${g.title}-${it}`
          ))
        ])
      },
      rowIdx
    )) })
  ] });
}
function SocialProof() {
  const t = useT();
  const scrollerRef = reactExports.useRef(null);
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const [playingIdx, setPlayingIdx] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll("[data-testimonial-card]"));
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
  const scrollByDir = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const scrollToIdx = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll("[data-testimonial-card]")[i];
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 sm:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-foreground max-w-3xl leading-[1.05]", children: [
        t.socialProof.title1,
        " ",
        t.socialProof.titleEm
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-muted-foreground", children: t.socialProof.logos.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "font-display text-xl sm:text-2xl text-foreground/50",
          children: n
        },
        n
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scrollerRef,
          className: "testimonial-scroller flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 sm:px-[max(2rem,calc((100vw-72rem)/2+2rem))] pb-4",
          children: t.socialProof.quotes.map((q, i) => {
            const hasVideo = !!q.videoSrc;
            const isPlaying = playingIdx === i;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                "data-testimonial-card": true,
                className: "snap-center shrink-0 w-[88%] sm:w-[520px] md:w-[600px] rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden flex flex-col",
                children: [
                  hasVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video bg-muted/40", children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "video",
                    {
                      src: q.videoSrc,
                      poster: q.poster,
                      autoPlay: true,
                      controls: true,
                      playsInline: true,
                      className: "absolute inset-0 h-full w-full object-cover",
                      onEnded: () => setPlayingIdx(null)
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPlayingIdx(i),
                      "aria-label": t.socialProof.playVideo,
                      className: "group absolute inset-0 h-full w-full",
                      children: [
                        q.poster ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: q.poster,
                            alt: "",
                            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                            loading: "lazy"
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-background" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary-glow/40 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 translate-x-[1px]", fill: "currentColor" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-4 left-5 right-5 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block font-mono-eyebrow text-xs text-foreground/80", children: [
                          q.name,
                          " · ",
                          q.role
                        ] }) })
                      ]
                    }
                  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 bg-gradient-to-r from-primary/60 via-primary-glow/60 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 sm:p-8 flex-1 flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Quote,
                      {
                        "aria-hidden": true,
                        className: "h-6 w-6 text-primary-glow/60"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-3 text-foreground/90 leading-relaxed text-lg", children: q.quote }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-5 border-t border-border/60 font-mono-eyebrow text-muted-foreground text-xs", children: [
                      q.name,
                      " · ",
                      q.role
                    ] })
                  ] })
                ]
              },
              q.name + i
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 mt-6 flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: t.socialProof.quotes.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Go to testimonial ${i + 1}`,
          "aria-current": i === activeIdx,
          onClick: () => scrollToIdx(i),
          className: `h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "w-8 bg-primary-glow" : "w-3 bg-foreground/20 hover:bg-foreground/40"}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => scrollByDir(-1),
            "aria-label": t.socialProof.prev,
            className: "h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => scrollByDir(1),
            "aria-label": t.socialProof.next,
            className: "h-10 w-10 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card hover:border-primary-glow/50 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ] })
    ] })
  ] });
}
function Contact() {
  const t = useT();
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim() || void 0,
      message: String(data.get("message") || "").trim()
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error(t.contact.errors.required);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      toast.success(t.contact.success);
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : t.contact.errors.generic;
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "contact",
      className: "relative py-28 sm:py-40 scroll-mt-24",
      style: {
        background: "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-eyebrow text-muted-foreground", children: t.contact.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-4 text-4xl sm:text-5xl text-foreground leading-[1.05]", children: [
            t.contact.title1,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-glow", children: t.contact.titleEm })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed max-w-md", children: t.contact.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:pablo.gzz.sal@gmail.com",
                className: "inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                  "pablo.gzz.sal@gmail.com",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 opacity-70" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
                  "LinkedIn",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 opacity-70" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://github.com/pablo-gzz-sal",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                  "GitHub",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 opacity-70" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit,
            className: "rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8",
            style: { boxShadow: "var(--shadow-elegant)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    label: t.contact.fields.name,
                    name: "name",
                    required: true,
                    placeholder: t.contact.fields.namePh
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    label: t.contact.fields.email,
                    name: "email",
                    type: "email",
                    required: true,
                    placeholder: t.contact.fields.emailPh
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field,
                {
                  label: t.contact.fields.company,
                  name: "company",
                  placeholder: t.contact.fields.companyPh
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-eyebrow text-muted-foreground", children: t.contact.fields.project }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    name: "message",
                    required: true,
                    rows: 5,
                    maxLength: 5e3,
                    placeholder: t.contact.fields.projectPh,
                    className: "mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: loading,
                  className: "press mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary-glow transition-colors disabled:opacity-60",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                    t.contact.sending
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    t.contact.send,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: t.contact.reply })
            ]
          }
        ) })
      ] }) })
    }
  );
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-eyebrow text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        name,
        required,
        placeholder,
        maxLength: 320,
        className: "mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      }
    )
  ] });
}
function Footer() {
  const t = useT();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm", children: "PS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t.footer.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/",
            target: "_blank",
            rel: "noreferrer",
            className: "hover:text-foreground transition-colors",
            children: "LinkedIn"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/pablo-gzz-sal",
            target: "_blank",
            rel: "noreferrer",
            className: "hover:text-foreground transition-colors",
            children: "GitHub"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:pablo.gzz.sal@gmail.com",
            className: "hover:text-foreground transition-colors",
            children: "Email"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 mt-8 text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Pablo Salcido. ",
      t.footer.rights
    ] })
  ] });
}
function SmoothScroll() {
  reactExports.useEffect(() => {
    const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2
    });
    const root = document.documentElement;
    const onScroll = ({ progress }) => {
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { progress } })
      );
    };
    lenis.on("scroll", onScroll);
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -96, duration: 1.2 });
    };
    document.addEventListener("click", onClick);
    let raf = 0;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
const VERTEX = (
  /* glsl */
  `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`
);
const FRAGMENT = (
  /* glsl */
  `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

  float t = uTime * 0.035;
  vec2 drift = vec2(t * 0.55 + uScroll * 0.9, -t * 0.4 + uScroll * 0.6);

  // double domain warp — the source of the smoke-like motion
  vec2 q = vec2(
    fbm(p * 1.3 + drift),
    fbm(p * 1.3 + vec2(5.2, 1.3) - drift * 0.8)
  );
  vec2 r = vec2(
    fbm(p * 1.3 + 1.9 * q + vec2(1.7, 9.2) + uMouse * 0.35),
    fbm(p * 1.3 + 1.9 * q + vec2(8.3, 2.8) - uMouse * 0.25)
  );
  float f = fbm(p * 1.5 + 2.1 * r);

  // brighter toward the edges, calm in the center where content lives
  float edge = smoothstep(0.25, 1.05, length(p));

  // palette: near-black canvas, deep teal bands, rare bright wisps.
  // scroll cools the teal toward blue-green as you descend.
  vec3 base = vec3(0.052, 0.056, 0.064);
  vec3 teal = mix(vec3(0.07, 0.34, 0.32), vec3(0.05, 0.24, 0.30), uScroll);
  vec3 glow = vec3(0.42, 0.76, 0.73);

  float band = smoothstep(0.38, 0.85, f);
  float wisp = smoothstep(0.62, 0.98, f + q.x * 0.22);

  vec3 col = base;
  col = mix(col, teal, band * (0.16 + 0.5 * edge));
  col += glow * wisp * (0.05 + 0.16 * edge);

  // gentle breathing tied to scroll position
  col *= 0.96 + 0.06 * sin(uScroll * 3.14159);

  gl_FragColor = vec4(col, 1.0);
}
`
);
function SceneCanvas() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const RENDER_SCALE = 0.6;
    const renderer = new WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "low-power"
    });
    renderer.setPixelRatio(1);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new Vector2(0, 0) },
      uResolution: { value: new Vector2(1, 1) }
    };
    const material = new ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      depthTest: false,
      depthWrite: false
    });
    const geometry = new PlaneGeometry(2, 2);
    scene.add(new Mesh(geometry, material));
    const applySize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      renderer.setSize(
        Math.round(w * RENDER_SCALE),
        Math.round(h * RENDER_SCALE),
        false
      );
      uniforms.uResolution.value.set(w, h);
    };
    applySize();
    const ro = new ResizeObserver(() => {
      applySize();
      if (reduceMotion) renderer.render(scene, camera);
    });
    ro.observe(container);
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };
    let scrollProgress = 0;
    let scrollTarget = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    const onLenis = (e) => {
      const ce = e;
      scrollTarget = ce.detail?.progress ?? scrollTarget;
    };
    if (reduceMotion) {
      uniforms.uTime.value = 40;
      renderer.render(scene, camera);
      return () => {
        ro.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lenis-scroll", onLenis);
    onScroll();
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      mouse.x += (mouse.tx - mouse.x) * 0.03;
      mouse.y += (mouse.ty - mouse.y) * 0.03;
      scrollProgress += (scrollTarget - scrollProgress) * 0.06;
      uniforms.uTime.value = (now - start) / 1e3;
      uniforms.uScroll.value = scrollProgress;
      uniforms.uMouse.value.set(mouse.x, mouse.y);
      renderer.render(scene, camera);
    };
    const startLoop = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stopLoop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener("visibilitychange", onVisibility);
    startLoop();
    return () => {
      stopLoop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", onLenis);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 -z-20"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 -z-10",
        style: {
          background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--background) 55%, transparent) 0%, color-mix(in oklab, var(--background) 22%, transparent) 45%, transparent 75%)"
        }
      }
    )
  ] });
}
function Atmosphere() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "noise-overlay" });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Atmosphere, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SceneCanvas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhoIWorkWith, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectedWork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProof, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "bottom-right" })
  ] });
}
export {
  Home as component
};
