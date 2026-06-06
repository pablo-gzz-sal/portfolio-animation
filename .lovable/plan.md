## Goal
Rebuild pablosalcido.com as a premium, single-page dark portfolio that mirrors the structure, voice, and editorial feel of the existing live site — broadened to target **SaaS founders and small/medium businesses** (not restaurant-specific) — with subtle Three.js, scroll-reveal motion, and a working contact form.

## Reference & positioning
- Visual reference: pablosalcido.com (deep black canvas, cream/off-white serif display headlines, asymmetric hero with portrait card, soft circular glows in negative space, monospace eyebrows, pill chips, "Available for selective builds" badge, numbered process, grouped stack).
- Tagline direction (broadened):
  - H1: "Full-stack engineering with taste and discipline."
  - Sub: "I design and ship polished frontends, Node.js APIs, and production systems for SaaS founders and growing businesses that need one senior builder from first brief to launch."
- Audience targeting throughout copy: SaaS founders, small & medium businesses, independent founders, content/service platforms. No restaurant-only framing.

## Design system (`src/styles.css`, oklch tokens)
- `--background` near-black `#07090a`; `--card`/surface `#0f1316`; `--foreground` warm cream `#f3efe6`; `--muted-foreground` soft gray.
- `--primary` deep teal `#0d7a5f`; `--primary-glow` `#5cbdb9` (used sparingly on CTAs, ring, accent dots).
- `--border` low-alpha cream; `--ring` teal.
- Tokens: `--gradient-hero`, `--shadow-elegant`, `--shadow-glow`, `--radius` 1rem.
- Typography (Google Fonts in `__root.tsx` head):
  - Display: **Instrument Serif** (hero H1, section H2s) — matches the live site's serif voice.
  - Body/UI: **Inter**.
  - Eyebrows: **JetBrains Mono** uppercase tracked.
- Components use semantic tokens only — no raw hex in JSX.

## Page structure (single page on `/`, composed in `src/components/portfolio/`)
1. **StickyHeader** — "Pablo Salcido" wordmark with avatar dot, anchor nav (Projects, Process, Stack, Contact), persistent "Work together" CTA. Sheet menu on mobile.
2. **Hero** — "Available for selective builds" pill, big serif H1, sub, two CTAs ("View selected work" / "Start a conversation"), portrait card on the right (placeholder — user can drop in `me.jpeg` later), Proof / Range / Based-in meta row, "Current signal" callout card. Subtle Three.js soft-glow orbs in background.
3. **WhoIWorkWith** — three cards: SaaS founders, Small & medium businesses, Independent operators & content platforms.
4. **SelectedWork** — section heading "Real products, shipped with care." 6 case-style cards: Joseph Battisti (Salon booking), Lending Group TX (lead-gen), Esencial360 (subscription content), Travane (logistics), La Kochina (restaurant brand), plus one SaaS placeholder. Each card: tag eyebrow, title, one-line summary, Role/Outcome meta, tech chips, hover parallax + value reveal. Placeholder mock UI graphics in SVG (no stock photos).
5. **Process** — "Clarity first. Architecture second. Production always." Numbered 01–05 timeline (Clarity, Structure, Execution, Quality, Launch) — text lifted from current site.
6. **Stack** — grouped pill chips: Frontend, Mobile, Backend, Databases, Infra & tooling, Security.
7. **Testimonials/Social proof** — short placeholder quotes; Airbus / Bosch / independent-client signal row.
8. **Contact** — "Have a product that needs senior execution?" short form (name, email, company, message) + direct Email / LinkedIn / GitHub links.
9. **Footer** — wordmark, socials, "Munich, Germany. Remote-first.", copyright.

SEO: route `head()` sets `<title>Pablo Salcido — Senior Full-Stack Engineer</title>`, meta description, OG/Twitter. Single H1 in hero. Semantic landmarks.

## 3D hero
Lightweight Three.js scene behind the hero — a slow-drifting soft-glow orb / wireframe form with subtle mouse parallax, capped DPR, paused offscreen, disabled when `prefers-reduced-motion`. Client-only dynamic import in `src/components/portfolio/HeroCanvas.tsx`. Add `three`.

## Animations
- Scroll reveals via a small `useInView` hook + existing `animate-fade-in` utilities.
- Card hover: CSS tilt + value-prop reveal.
- Sticky header gains backdrop blur + border after scroll.
- Restrained — no bouncy easing.

## Contact form (Lovable Cloud + email)
- Enable Lovable Cloud.
- Trigger email-domain setup dialog (prerequisite for sending).
- `contact_submissions` table (id, name, email, company, message, created_at) + GRANTs + RLS (insert via service-role inside the public route only; select restricted to service-role).
- Public action route `src/routes/api/public/contact.ts`: zod validation, insert via `supabaseAdmin`, then send two app emails via the scaffolded `/lovable/email/transactional/send`:
  - Notification to **pablo.gzz.sal@gmail.com** (`contact-notification.tsx`).
  - Confirmation to the submitter (`contact-confirmation.tsx`).
- Frontend form: loading state, sonner toast on success/failure, inline validation.

## Technical notes
- New code under `src/components/portfolio/` and `src/lib/email-templates/`.
- Replace placeholder content in `src/routes/index.tsx` entirely.
- Add deps: `three`, `@types/three`.
- Do not edit `routeTree.gen.ts`.
- Mobile-first responsive; sticky header collapses to existing shadcn `sheet`.
- Accessibility: focus rings, alt text on graphics, reduced-motion respected.

## Out of scope (this pass)
- Real portrait photo upload, Spanish (ES) locale toggle, blog/CMS, analytics, booking-link integration (CTAs use mailto until a Cal.com URL is provided).