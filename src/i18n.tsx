import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type ProjectCopy = {
  /** Stable slug. Pairs dict copy with PROJECT_META and the hero mosaic —
   *  these used to be matched by array position, which broke on reorder. */
  id: string;
  tag: string;
  title: string;
  summary: string;
  role: string;
  outcome: string;
  client: string;
  timeline: string;
  problem: string;
  approach: string[];
  results: string[];
  metrics: { value: string; label: string }[];
  stackDetail: { label: string; items: string[] }[];
  video?: string;
  liveUrl?: string;
};

type Dict = {
  nav: { projects: string; process: string; stack: string; testimonials: string; contact: string };
  cta: { workTogether: string; openMenu: string };
  hero: {
    availability: string;
    scrollHint: string;
    title1: string;
    titleEm: string;
    description: string;
    viewWork: string;
    startConversation: string;
    stats: { k: string; v: string }[];
    currentSignal: string;
    currentSignalBody: string;
    senior: string;
  };
  whoIWorkWith: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    items: { title: string; body: string }[];
  };
  selectedWork: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    viewCaseStudy: string;
    role: string;
    outcome: string;
    closeCase: string;
    viewLive: string;
    sections: {
      client: string;
      role: string;
      timeline: string;
      problem: string;
      approach: string;
      results: string;
      techStack: string;
    };
    projects: ProjectCopy[];
  };
  process: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    steps: { n: string; eyebrow: string; title: string; body: string; log: string[] }[];
  };
  stack: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  testimonials: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    play: string;
    prev: string;
    next: string;
  };
  socialProof: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    logos: string[];
    prev: string;
    next: string;
    playVideo: string;
    quotes: {
      quote: string;
      name: string;
      role: string;
      videoSrc?: string;
      poster?: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    fields: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      company: string;
      companyPh: string;
      project: string;
      projectPh: string;
    };
    send: string;
    sending: string;
    reply: string;
    errors: { required: string; generic: string };
    success: string;
  };
  footer: { tagline: string; rights: string };
  ui: {
    preloader: string;
    intro: string;
    featured: string;
    index: string;
    cols: { project: string; discipline: string; stack: string };
    next: string;
    close: string;
    soundOn: string;
    soundOff: string;
    localTime: string;
    backToTop: string;
    footerCta1: string;
    footerCtaEm: string;
    footerSay: string;
    sentence: {
      hi: string;
      name: string;
      from: string;
      company: string;
      need: string;
      topics: string[];
      reach: string;
      email: string;
      more: string;
      messagePh: string;
      topicsLabel: string;
    };
  };
};

const en: Dict = {
  nav: {
    projects: "Projects",
    process: "Process",
    stack: "Stack",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  cta: { workTogether: "Work together", openMenu: "Open menu" },
  hero: {
    availability: "Open to new projects",
    scrollHint: "Scroll",
    title1: "I build web products for",
    titleEm: "founders and small businesses.",
    description:
      "I build frontends, Node.js APIs and the systems that keep them running. One engineer, from first brief to launch.",
    viewWork: "View selected work",
    startConversation: "Start a conversation",
    stats: [
      { k: "Clients", v: "Airbus, Bosch, and teams across Europe and LATAM" },
      { k: "Covers", v: "Frontend, backend, payments, deployment" },
      { k: "Based in", v: "Munich, Germany. Remote." },
    ],
    currentSignal: "About",
    currentSignalBody:
      "Consulting work with Airbus and Bosch, and full products for SaaS founders and independent businesses.",
    senior: "Senior Full-Stack Engineer",
  },
  whoIWorkWith: {
    eyebrow: "Who I work with",
    title1: "For teams that want one engineer to",
    titleEm: "own the build.",
    items: [
      {
        title: "SaaS founders",
        body: "First versions, MVP rewrites and the integrations that make a product feel real.",
      },
      {
        title: "Small & medium businesses",
        body: "Booking, lead generation, internal tools and sites that bring in sales.",
      },
      {
        title: "Independent operators",
        body: "Content platforms, subscriptions and service businesses that need one person to build it.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    title1: "A few things",
    titleEm: "I've built.",
    description: "Booking, heritage, lead generation, subscriptions and collections.",
    viewCaseStudy: "View case study",
    role: "Role",
    outcome: "Outcome",
    closeCase: "Close case study",
    viewLive: "View live site",
    sections: {
      client: "Client",
      role: "Role",
      timeline: "Timeline",
      problem: "The problem",
      approach: "Approach",
      results: "Results",
      techStack: "Tech stack",
    },
    projects: [
      {
        tag: "Architecture + UX",
        id: "joseph",
        title: "Joseph Battisti, NY Salon",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/joseph_uocvsc.mp4",
        summary:
          "Booking platform with Shopify integration and real-time scheduling for a Manhattan salon.",
        role: "Full-stack build",
        outcome: "Online booking with deposits",
        client: "Independent hair salon in Manhattan.",
        timeline: "8 weeks · solo build",
        problem:
          "Bookings ran through DMs, calls and a spreadsheet, and the Shopify store wasn't connected to any of it.",
        approach: [
          "Mapped the booking flow with the owner: service, stylist, time, deposit, confirmation.",
          "Built the scheduling engine in Node.js and PostgreSQL, with availability rules and buffer time per stylist.",
          "Added Shopify upsells to the confirmation step, and an admin view for stylists, services, deposits and no-shows.",
        ],
        results: [
          "Clients book and pay deposits online.",
          "Much less phone scheduling for the front desk.",
          "One calendar, on any device.",
        ],
        metrics: [
          { value: "100%", label: "Online deposits" },
          { value: "8 wks", label: "Brief to launch" },
          { value: "1", label: "Senior builder" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Backend", items: ["Node.js", "Express", "Swagger / OpenAPI"] },
          { label: "Data", items: ["PostgreSQL", "Prisma"] },
          { label: "Integrations", items: ["Shopify Storefront", "Stripe"] },
        ],
      },
      {
        tag: "Platform + Compliance",
        id: "firmexa",
        title: "FIRMEXA, Debt Recovery Platform",
        liveUrl: "https://firmexa.mx",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/firmexa_bapzaq.mp4",
        summary:
          "Automated extrajudicial collections for the Mexican market: call engine, case state machine and audit trail in one system.",
        role: "Founding engineer",
        outcome: "Auditable call engine",
        client: "Debt recovery platform for the Mexican market. I designed and built all of it.",
        timeline: "10 weeks · founding build",
        problem:
          "Chasing overdue accounts by phone is repetitive, leaves no paper trail and is legally risky in a market regulated by CONDUSEF and PROFECO. Manual collection can't prove what it did or that it followed the rules.",
        approach: [
          "Modelled each case as a state machine with eight states and fourteen auditable transition reasons, so any decision can be replayed.",
          "Built a Twilio dialer that only calls inside the legal window, respects daily and weekly caps per debtor, and plays the recorded message only after answering machine detection confirms a human.",
          "Added four independent safety gates: a kill switch that fails closed, a destination allowlist, config checks across services and audio integrity checks.",
          "Kept the evidence by design: an append-only audit trail, an immutable payments ledger and a record of exactly which audio each person heard.",
        ],
        results: [
          "Deployed to production infrastructure and tested end to end with real, consented calls on synthetic data.",
          "Contract-first: zod schemas generate the OpenAPI document and the Angular client, and CI fails if they drift.",
          "Commercial launch waits on a legal review that engineering documented but won't sign off.",
        ],
        metrics: [
          { value: "10 wks", label: "First commit to deployed" },
          { value: "52", label: "API operations, CI-verified" },
          { value: "2,278", label: "Automated test cases" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular 20", "Tailwind v4", "TypeScript"] },
          { label: "Backend", items: ["NestJS 11", "Node.js", "Zod + OpenAPI"] },
          { label: "Data", items: ["PostgreSQL 18", "Drizzle ORM", "33 migrations"] },
          { label: "Platform", items: ["Twilio Voice", "Auth0", "Cloudflare R2", "Render"] },
        ],
      },
      {
        tag: "Headless CMS + SEO",
        id: "diocletians-dream",
        title: "Diocletian's Dream, Split VR Museum",
        liveUrl: "https://diocletiansdream.com",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/diocletians-dream_jeng9n.mp4",
        summary:
          "Bilingual prerendered site for a VR heritage museum, with a headless WordPress blog and tracked booking conversions.",
        role: "Full-stack build",
        outcome: "Bookings tracked, content indexed",
        client: "Virtual reality heritage museum at Diocletian's Palace in Split, Croatia.",
        timeline: "Ongoing · live since July 2026",
        problem:
          "Paid bookings never registered as conversions, so ad spend ran blind. Content lived in WordPress, but the site had to be fast, indexable and available in Croatian.",
        approach: [
          "Built a prerendered Angular site. Every route ships as plain HTML, with no Node runtime.",
          "Used WordPress headless for content, cleaning up Elementor markup, image URLs and SEO metadata at render time.",
          "Shipped a full Croatian version with routes, hreflang pairs and a sitemap, filling in language data the REST API didn't expose.",
          "Connected the booking provider's thank-you page to GA4 and Google Ads so each booking reports its value.",
        ],
        results: [
          "Bookings now register as conversions with their value, after a month of pageviews only.",
          "76 routes prerendered and in the sitemap, each language on one canonical path.",
          "Editors publish in WordPress, and a rebuild ships it as static HTML.",
        ],
        metrics: [
          { value: "76", label: "Prerendered routes" },
          { value: "2", label: "Languages, hreflang-paired" },
          { value: "GA4", label: "Booking conversions" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Static prerender"] },
          { label: "Content", items: ["Headless WordPress", "REST API", "Multilingual CMS"] },
          { label: "SEO", items: ["Generated sitemap", "hreflang", "Canonicals"] },
          { label: "Integrations", items: ["TuriTop booking", "GA4", "Google Ads"] },
        ],
      },
      {
        tag: "Brand site + SSR",
        id: "display-con-sentido",
        title: "DISSEN, Display Con Sentido",
        liveUrl: "https://www.displayconsentido.com",
        summary:
          "Bilingual site for a Mexican furniture and interior design studio, with a project gallery and a contact form that lands in their inbox.",
        role: "Design + full-stack build",
        outcome: "Portfolio online, leads by email",
        client: "Mexican studio for custom furniture, construction and interior design.",
        timeline: "~2 weeks · solo build",
        problem:
          "Twenty years of residential and retail work had no home online. The studio needed a site that showed it properly, worked in Spanish and English, and turned visits into inquiries.",
        approach: [
          "Built on Angular 20 with SSR. The landing page is prerendered and the rest renders on the server.",
          "Served the gallery from Cloudinary with automatic format and quality, responsive srcsets, Residential and Retail tabs, a carousel and a keyboard-friendly lightbox.",
          "Added Spanish and English copy with a signal-based i18n service that remembers the visitor's choice.",
          "Routed the contact form through a Vercel serverless function that emails each inquiry over SMTP.",
        ],
        results: [
          "Residential and retail projects in one gallery, sized for every screen.",
          "Inquiries land in the studio's inbox with name, phone and message.",
          "Respects reduced-motion settings, and the landing page ships as static HTML.",
        ],
        metrics: [
          { value: "2", label: "Languages, ES / EN" },
          { value: "SSR", label: "Prerendered landing" },
          { value: "3x", label: "Retina image srcsets" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular 20", "Signals", "Tailwind v4", "TypeScript"] },
          { label: "Rendering", items: ["Angular SSR", "Prerender", "Express"] },
          { label: "Media", items: ["Cloudinary", "f_auto / q_auto", "Responsive srcset"] },
          { label: "Platform", items: ["Vercel", "Serverless function", "Nodemailer SMTP"] },
        ],
      },
      {
        tag: "Lead generation",
        id: "lending-group",
        title: "Lending Group, Texas",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/lending-group_qwi2a8.mp4",
        summary: "Lead intake and routing app for an employment and lending firm.",
        role: "Full-stack build",
        outcome: "Cleaner lead pipeline",
        client: "US lending and employment firm with multiple offices.",
        timeline: "6 weeks · solo build",
        problem:
          "Leads arrived by PDF, phone and email. Routing was manual, follow-ups slipped and nobody could see the pipeline.",
        approach: [
          "Designed a short intake form with conditional logic and validation.",
          "Built routing rules per office, product line and case type.",
          "Shipped an internal dashboard with status, owner and SLA timers.",
          "Set up CI/CD on every push for safe weekly releases.",
        ],
        results: [
          "Every lead lands in one inbox with an owner.",
          "Less drop-off at intake after tightening the form.",
          "Weekly deploys without downtime.",
        ],
        metrics: [
          { value: "1 inbox", label: "For all leads" },
          { value: "<24h", label: "First-touch SLA" },
          { value: "Weekly", label: "Safe deploys" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "RxJS"] },
          { label: "Backend", items: ["Node.js", "Express", "JWT auth"] },
          { label: "Data", items: ["MongoDB", "Mongoose"] },
          { label: "Ops", items: ["GitHub Actions", "Docker"] },
        ],
      },
      {
        tag: "Content platform",
        id: "esencial360",
        title: "Esencial360, Yoga & Meditation",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/esencial360_sr8qub.mp4",
        summary:
          "Subscription platform with BunnyStream video, Stripe billing and an admin console.",
        role: "Platform build",
        outcome: "Paid content access",
        client: "Wellness brand offering paid yoga and meditation content.",
        timeline: "10 weeks · solo build",
        problem:
          "The founder wanted recurring revenue without handing brand control to a generic course platform.",
        approach: [
          "Built a subscription gate on Stripe with monthly and annual plans.",
          "Delivered video through BunnyStream with signed URLs to protect the content.",
          "Built an admin console to upload, categorize and schedule releases.",
          "Designed the member area around the brand's own look.",
        ],
        results: [
          "Paid subscriptions live, with self-serve billing and cancellation.",
          "The founder publishes new sessions without engineering help.",
          "Members get the brand's own experience, with no third-party watermarks.",
        ],
        metrics: [
          { value: "Stripe", label: "Self-serve billing" },
          { value: "Signed", label: "Video URLs" },
          { value: "100%", label: "Brand-owned UX" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Backend", items: ["Node.js", "Express", "Webhooks"] },
          { label: "Data", items: ["MongoDB", "S3 for assets"] },
          { label: "Integrations", items: ["Stripe Billing", "BunnyStream"] },
        ],
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title1: "How a project",
    titleEm: "usually goes.",
    description:
      "Agree on what to build, build it in small pieces, and hand over something you can run without me.",
    steps: [
      {
        n: "01",
        eyebrow: "Scope",
        title: "Agree on what to build",
        body: "Turn vague goals into user flows, constraints and a first version worth shipping.",
        log: [
          "Kickoff call on goals, users and constraints",
          "User flows mapped",
          "Scope cut to the first release",
        ],
      },
      {
        n: "02",
        eyebrow: "Plan",
        title: "Design the system",
        body: "Settle the data model, auth and API contracts before changes get expensive.",
        log: [
          "Data model and API contracts drafted",
          "Auth and roles decided up front",
          "Service boundaries reviewed",
        ],
      },
      {
        n: "03",
        eyebrow: "Build",
        title: "Ship in small slices",
        body: "Work from interface to API to database in small, testable steps.",
        log: [
          "Slice 1 deployed to staging",
          "Weekly demo on a live preview",
          "Components extracted as patterns repeat",
        ],
      },
      {
        n: "04",
        eyebrow: "Test",
        title: "Cover the edge cases",
        body: "Add validation, handle errors and write the docs before production.",
        log: [
          "Validation at every boundary",
          "Edge cases and empty states covered",
          "Docs for the next engineer",
        ],
      },
      {
        n: "05",
        eyebrow: "Launch",
        title: "Deploy and hand over",
        body: "Deploy, monitor, and leave a clear path for maintenance.",
        log: [
          "Production deploy with monitoring",
          "Error tracking and alerts",
          "Handover: runbook and roadmap",
        ],
      },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title1: "What I",
    titleEm: "work with.",
    description: "I default to proven tools and reach for new ones only when there's a reason.",
    groups: [
      { title: "Frontend", items: ["Angular", "React", "Vue", "TypeScript", "Tailwind", "RxJS"] },
      { title: "Mobile", items: ["React Native", "Ionic", "Expo", "Android Studio"] },
      {
        title: "Backend",
        items: ["Node.js", "Express", "NestJS", ".NET", "Python", "REST APIs", "Auth0"],
      },
      { title: "Databases", items: ["PostgreSQL", "MongoDB", "MariaDB"] },
      {
        title: "Infra & tooling",
        items: ["Docker", "Swagger/OpenAPI", "Stripe", "CI/CD", "Azure"],
      },
      { title: "Security", items: ["Kali", "PortSwigger", "Red/Blue Team", "Pentesting"] },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title1: "Clients,",
    titleEm: "in their own words.",
    description: "Short video notes from clients I've worked with.",
    play: "Play testimonial",
    prev: "Previous testimonial",
    next: "Next testimonial",
  },
  socialProof: {
    eyebrow: "Signal",
    title1: "Trusted by enterprises and",
    titleEm: "founders alike.",
    logos: ["Airbus", "Bosch", "Independent SaaS", "EU & LATAM SMBs"],
    prev: "Previous testimonial",
    next: "Next testimonial",
    playVideo: "Play video testimonial",
    quotes: [
      {
        quote:
          "Pablo turned an unclear product idea into something that actually shipped, and kept shipping every week after that.",
        name: "SaaS founder",
        role: "Early-stage operator",
        videoSrc: "/testimonials/founder-1.mp4",
        poster: "/testimonials/founder-1.jpg",
      },
      {
        quote:
          "Senior judgement without the agency overhead. Architecture decisions held up six months later.",
        name: "CTO",
        role: "Series A startup",
      },
      {
        quote:
          "He owns the whole stack. We didn't need a frontend agency, a backend dev, and a project manager.",
        name: "Founder",
        role: "SMB services",
        videoSrc: "/testimonials/founder-2.mp4",
        poster: "/testimonials/founder-2.jpg",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title1: "Got a project?",
    titleEm: "Let's talk.",
    description: "Tell me what you need built and by when.",
    fields: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@company.com",
      company: "Company",
      companyPh: "Optional",
      project: "Project",
      projectPh: "What you need and by when.",
    },
    send: "Send message",
    sending: "Sending…",
    reply: "I reply within 1 to 2 business days.",
    errors: {
      required: "Please fill in name, email, and a short message.",
      generic: "Something went wrong.",
    },
    success: "Message sent. I'll reply within 1 to 2 business days.",
  },
  footer: {
    tagline: "Pablo Salcido · Munich, Germany · Remote-first",
    rights: "All rights reserved.",
  },
  ui: {
    preloader: "Loading portfolio",
    intro: "Pablo Salcido · Full-stack engineer",
    featured: "Featured case",
    index: "Index",
    cols: { project: "Project", discipline: "Discipline", stack: "Stack" },
    next: "Next project",
    close: "Close",
    soundOn: "Sound on",
    soundOff: "Sound off",
    localTime: "Munich",
    backToTop: "Back to top",
    footerCta1: "Let's work",
    footerCtaEm: "together.",
    footerSay: "Say hello",
    sentence: {
      hi: "Hi Pablo, my name is",
      name: "your name",
      from: "and I’m reaching out from",
      company: "company (optional)",
      need: ". I need help with",
      topics: ["a new product", "a redesign", "APIs & backend", "something else"],
      reach: ". You can reach me at",
      email: "you@company.com",
      more: ". A bit more about it:",
      messagePh: "What you need and by when.",
      topicsLabel: "Topics",
    },
  },
};

const es: Dict = {
  nav: {
    projects: "Proyectos",
    process: "Proceso",
    stack: "Stack",
    testimonials: "Testimonios",
    contact: "Contacto",
  },
  cta: { workTogether: "Trabajemos juntos", openMenu: "Abrir menú" },
  hero: {
    availability: "Disponible para nuevos proyectos",
    scrollHint: "Desliza",
    title1: "Construyo productos web para",
    titleEm: "fundadores y pequeños negocios.",
    description:
      "Hago frontends, APIs en Node.js y los sistemas que los mantienen funcionando. Un solo ingeniero, del primer brief al lanzamiento.",
    viewWork: "Ver proyectos",
    startConversation: "Iniciar una conversación",
    stats: [
      { k: "Clientes", v: "Airbus, Bosch y equipos en Europa y LATAM" },
      { k: "Cubre", v: "Frontend, backend, pagos y despliegue" },
      { k: "Ubicación", v: "Múnich, Alemania. Remoto." },
    ],
    currentSignal: "Sobre mí",
    currentSignalBody:
      "Consultoría para Airbus y Bosch, y productos completos para fundadores SaaS y negocios independientes.",
    senior: "Ingeniero Full-Stack Senior",
  },
  whoIWorkWith: {
    eyebrow: "Con quién trabajo",
    title1: "Para equipos que quieren un ingeniero que",
    titleEm: "se haga cargo de todo.",
    items: [
      {
        title: "Fundadores SaaS",
        body: "Primeras versiones, reescrituras de MVP y las integraciones que hacen que un producto se sienta real.",
      },
      {
        title: "Pequeñas y medianas empresas",
        body: "Reservas, generación de leads, herramientas internas y sitios que generan ventas.",
      },
      {
        title: "Operadores independientes",
        body: "Plataformas de contenido, suscripciones y negocios de servicio que necesitan a una sola persona que lo construya.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Trabajo seleccionado",
    title1: "Algunas cosas",
    titleEm: "que he construido.",
    description: "Reservas, patrimonio, generación de leads, suscripciones y cobranza.",
    viewCaseStudy: "Ver caso de estudio",
    role: "Rol",
    outcome: "Resultado",
    closeCase: "Cerrar caso de estudio",
    viewLive: "Ver sitio en vivo",
    sections: {
      client: "Cliente",
      role: "Rol",
      timeline: "Tiempos",
      problem: "El problema",
      approach: "Enfoque",
      results: "Resultados",
      techStack: "Stack técnico",
    },
    projects: [
      {
        tag: "Arquitectura + UX",
        id: "joseph",
        title: "Joseph Battisti, Salón NY",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/joseph_uocvsc.mp4",
        summary:
          "Plataforma de reservas con integración a Shopify y agenda en tiempo real para un salón de Manhattan.",
        role: "Desarrollo full-stack",
        outcome: "Reservas en línea con depósito",
        client: "Salón de cabello independiente en Manhattan.",
        timeline: "8 semanas · construcción en solitario",
        problem:
          "Las reservas pasaban por DMs, llamadas y una hoja de cálculo, y la tienda de Shopify no estaba conectada a nada de eso.",
        approach: [
          "Mapeé el flujo de reservas con la dueña: servicio, estilista, horario, depósito y confirmación.",
          "Construí el motor de agenda en Node.js y PostgreSQL, con reglas de disponibilidad y tiempos de buffer por estilista.",
          "Agregué upsells de Shopify en la confirmación y una vista de administración para estilistas, servicios, depósitos y no-shows.",
        ],
        results: [
          "Los clientes reservan y pagan el depósito en línea.",
          "Mucho menos tiempo en el teléfono para recepción.",
          "Un solo calendario, en cualquier dispositivo.",
        ],
        metrics: [
          { value: "100%", label: "Depósitos en línea" },
          { value: "8 sem", label: "De brief a lanzamiento" },
          { value: "1", label: "Ingeniero senior" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Backend", items: ["Node.js", "Express", "Swagger / OpenAPI"] },
          { label: "Datos", items: ["PostgreSQL", "Prisma"] },
          { label: "Integraciones", items: ["Shopify Storefront", "Stripe"] },
        ],
      },
      {
        tag: "Plataforma + Cumplimiento",
        id: "firmexa",
        title: "FIRMEXA, Plataforma de Cobranza",
        liveUrl: "https://firmexa.mx",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/firmexa_bapzaq.mp4",
        summary:
          "Cobranza extrajudicial automatizada para el mercado mexicano: motor de llamadas, máquina de estados y bitácora de auditoría en un solo sistema.",
        role: "Ingeniero fundador",
        outcome: "Motor de llamadas auditable",
        client: "Plataforma de cobranza para el mercado mexicano. La diseñé y construí completa.",
        timeline: "10 semanas · construcción fundacional",
        problem:
          "Perseguir cartera vencida por teléfono es repetitivo, no deja rastro y es riesgoso en un mercado regulado por CONDUSEF y PROFECO. La gestión manual no puede demostrar lo que hizo ni que respetó las reglas.",
        approach: [
          "Modelé cada caso como una máquina de estados con ocho estados y catorce motivos de transición auditables, para poder reproducir cualquier decisión.",
          "Construí un marcador con Twilio que solo llama dentro de la ventana legal, respeta los topes diarios y semanales por deudor y reproduce el mensaje grabado únicamente cuando la detección de contestadora confirma a una persona.",
          "Agregué cuatro compuertas de seguridad independientes: un kill switch que falla cerrado, una lista de destinos permitidos, verificación de configuración entre servicios y revisión de integridad del audio.",
          "Dejé la evidencia en el diseño: bitácora de auditoría solo-anexable, ledger de pagos inmutable y registro de exactamente qué audio escuchó cada persona.",
        ],
        results: [
          "Desplegado en infraestructura productiva y validado de punta a punta con llamadas reales y consentidas sobre datos sintéticos.",
          "Contract-first: los esquemas zod generan el documento OpenAPI y el cliente Angular, y CI falla si se desincronizan.",
          "El lanzamiento comercial espera una revisión legal que ingeniería documentó pero no quiso firmar.",
        ],
        metrics: [
          { value: "10 sem", label: "Del primer commit al despliegue" },
          { value: "52", label: "Operaciones de API verificadas en CI" },
          { value: "2,278", label: "Casos de prueba automatizados" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular 20", "Tailwind v4", "TypeScript"] },
          { label: "Backend", items: ["NestJS 11", "Node.js", "Zod + OpenAPI"] },
          { label: "Datos", items: ["PostgreSQL 18", "Drizzle ORM", "33 migraciones"] },
          { label: "Plataforma", items: ["Twilio Voice", "Auth0", "Cloudflare R2", "Render"] },
        ],
      },
      {
        tag: "CMS headless + SEO",
        id: "diocletians-dream",
        title: "Diocletian's Dream, Museo VR en Split",
        liveUrl: "https://diocletiansdream.com",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/diocletians-dream_jeng9n.mp4",
        summary:
          "Sitio bilingüe prerenderizado para un museo de realidad virtual, con blog en WordPress headless y conversiones de reserva medidas.",
        role: "Desarrollo full-stack",
        outcome: "Reservas medidas, contenido indexado",
        client: "Museo de realidad virtual en el Palacio de Diocleciano, Split, Croacia.",
        timeline: "En curso · en vivo desde julio de 2026",
        problem:
          "Las reservas pagadas nunca se registraban como conversiones, así que la inversión en anuncios iba a ciegas. El contenido vivía en WordPress, pero el sitio tenía que ser rápido, indexable y estar en croata.",
        approach: [
          "Construí un sitio Angular prerenderizado. Cada ruta se publica como HTML plano, sin runtime de Node.",
          "Usé WordPress headless para el contenido, limpiando el marcado de Elementor, las URLs de imágenes y los metadatos SEO al renderizar.",
          "Publiqué la versión completa en croata con rutas, pares hreflang y sitemap, resolviendo los datos de idioma que la API REST no exponía.",
          "Conecté la página de agradecimiento del proveedor de reservas con GA4 y Google Ads para que cada reserva reporte su valor.",
        ],
        results: [
          "Las reservas ya se registran como conversiones con su valor, después de un mes midiendo solo pageviews.",
          "76 rutas prerenderizadas y en el sitemap, cada idioma bajo una única URL canónica.",
          "El equipo publica en WordPress y una recompilación lo entrega como HTML estático.",
        ],
        metrics: [
          { value: "76", label: "Rutas prerenderizadas" },
          { value: "2", label: "Idiomas con hreflang" },
          { value: "GA4", label: "Conversiones de reserva" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Prerender estático"] },
          { label: "Contenido", items: ["WordPress headless", "API REST", "CMS multilingüe"] },
          { label: "SEO", items: ["Sitemap generado", "hreflang", "Canónicas"] },
          { label: "Integraciones", items: ["Reservas TuriTop", "GA4", "Google Ads"] },
        ],
      },
      {
        tag: "Sitio de marca + SSR",
        id: "display-con-sentido",
        title: "DISSEN, Display Con Sentido",
        liveUrl: "https://www.displayconsentido.com",
        summary:
          "Sitio bilingüe para un estudio mexicano de mobiliario e interiorismo, con galería de proyectos y un formulario de contacto que llega directo a su correo.",
        role: "Diseño + desarrollo full-stack",
        outcome: "Portafolio en línea, leads por correo",
        client: "Estudio mexicano de mobiliario a la medida, obra e interiorismo.",
        timeline: "~2 semanas · construcción en solitario",
        problem:
          "Veinte años de proyectos residenciales y retail no tenían presencia en línea. El estudio necesitaba un sitio que mostrara el trabajo con calidad, funcionara en español e inglés y convirtiera visitas en solicitudes.",
        approach: [
          "Construí sobre Angular 20 con SSR. La landing se prerenderiza y el resto se renderiza en el servidor.",
          "Serví la galería desde Cloudinary con formato y calidad automáticos, srcsets responsivos, pestañas Residencial y Retail, carrusel y lightbox con teclado.",
          "Agregué contenido en español e inglés con un servicio de i18n basado en signals que recuerda la elección del visitante.",
          "Conecté el formulario a una función serverless en Vercel que envía cada solicitud por SMTP.",
        ],
        results: [
          "Proyectos residenciales y retail en una sola galería, optimizada para cada pantalla.",
          "Las solicitudes llegan al correo del estudio con nombre, teléfono y mensaje.",
          "Respeta reduced-motion y la landing se entrega como HTML estático.",
        ],
        metrics: [
          { value: "2", label: "Idiomas, ES / EN" },
          { value: "SSR", label: "Landing prerenderizada" },
          { value: "3x", label: "Srcsets para Retina" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular 20", "Signals", "Tailwind v4", "TypeScript"] },
          { label: "Renderizado", items: ["Angular SSR", "Prerender", "Express"] },
          { label: "Medios", items: ["Cloudinary", "f_auto / q_auto", "srcset responsivo"] },
          { label: "Plataforma", items: ["Vercel", "Función serverless", "Nodemailer SMTP"] },
        ],
      },
      {
        tag: "Generación de leads",
        id: "lending-group",
        title: "Lending Group, Texas",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/lending-group_qwi2a8.mp4",
        summary: "App de captura y enrutamiento de leads para una firma de empleo y préstamos.",
        role: "Desarrollo full-stack",
        outcome: "Pipeline de leads más limpio",
        client: "Firma estadounidense de préstamos y empleo con varias oficinas.",
        timeline: "6 semanas · construcción en solitario",
        problem:
          "Los leads llegaban por PDF, teléfono y correo. El enrutamiento era manual, los seguimientos se perdían y nadie veía el pipeline.",
        approach: [
          "Diseñé un formulario de captura corto, con lógica condicional y validación.",
          "Construí reglas de enrutamiento por oficina, línea de producto y tipo de caso.",
          "Entregué un dashboard interno con estado, responsable y SLAs.",
          "Configuré CI/CD en cada push para lanzar mejoras semanales con seguridad.",
        ],
        results: [
          "Cada lead llega a una sola bandeja con un responsable.",
          "Menos abandono en la captura tras ajustar el formulario.",
          "Despliegues semanales sin tiempo de caída.",
        ],
        metrics: [
          { value: "1 bandeja", label: "Para todos los leads" },
          { value: "<24h", label: "SLA de primer contacto" },
          { value: "Semanal", label: "Despliegues seguros" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "RxJS"] },
          { label: "Backend", items: ["Node.js", "Express", "JWT auth"] },
          { label: "Datos", items: ["MongoDB", "Mongoose"] },
          { label: "Operaciones", items: ["GitHub Actions", "Docker"] },
        ],
      },
      {
        tag: "Plataforma de contenido",
        id: "esencial360",
        title: "Esencial360, Yoga y Meditación",
        video:
          "https://res.cloudinary.com/doinkgfam/video/upload/v1790520401/esencial360_sr8qub.mp4",
        summary:
          "Plataforma por suscripción con video en BunnyStream, cobros con Stripe y consola de administración.",
        role: "Construcción de plataforma",
        outcome: "Acceso a contenido de pago",
        client: "Marca de bienestar con contenido pagado de yoga y meditación.",
        timeline: "10 semanas · construcción en solitario",
        problem:
          "La fundadora quería ingresos recurrentes sin ceder el control de su marca a una plataforma de cursos genérica.",
        approach: [
          "Construí la suscripción sobre Stripe con planes mensual y anual.",
          "Entregué el video con BunnyStream y URLs firmadas para proteger el contenido.",
          "Armé una consola para subir, categorizar y programar lanzamientos.",
          "Diseñé el área de miembros con el estilo propio de la marca.",
        ],
        results: [
          "Suscripciones de pago activas, con cobro y cancelación autogestionados.",
          "La fundadora publica nuevas sesiones sin ayuda de ingeniería.",
          "Los miembros viven la experiencia de la marca, sin marcas de agua de terceros.",
        ],
        metrics: [
          { value: "Stripe", label: "Cobro autogestionado" },
          { value: "Firmadas", label: "URLs de video" },
          { value: "100%", label: "UX propia de marca" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Backend", items: ["Node.js", "Express", "Webhooks"] },
          { label: "Datos", items: ["MongoDB", "S3 para assets"] },
          { label: "Integraciones", items: ["Stripe Billing", "BunnyStream"] },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajo",
    title1: "Cómo suele",
    titleEm: "ir un proyecto.",
    description:
      "Acordamos qué construir, lo hago en piezas pequeñas y te entrego algo que puedes operar sin mí.",
    steps: [
      {
        n: "01",
        eyebrow: "Alcance",
        title: "Acordar qué construir",
        body: "Convierto metas difusas en flujos de usuario, restricciones y una primera versión que valga la pena lanzar.",
        log: [
          "Llamada inicial sobre metas, usuarios y restricciones",
          "Flujos de usuario mapeados",
          "Alcance recortado a la primera versión",
        ],
      },
      {
        n: "02",
        eyebrow: "Plan",
        title: "Diseñar el sistema",
        body: "Defino el modelo de datos, la autenticación y los contratos de API antes de que los cambios salgan caros.",
        log: [
          "Modelo de datos y contratos de API",
          "Autenticación y roles definidos desde el inicio",
          "Fronteras de servicio revisadas",
        ],
      },
      {
        n: "03",
        eyebrow: "Construcción",
        title: "Entregar en cortes pequeños",
        body: "Voy de la interfaz a la API y la base de datos en pasos pequeños y testeables.",
        log: [
          "Corte 1 desplegado en staging",
          "Demo semanal en una URL de preview",
          "Componentes extraídos cuando se repiten patrones",
        ],
      },
      {
        n: "04",
        eyebrow: "Pruebas",
        title: "Cubrir los casos límite",
        body: "Agrego validación, manejo de errores y documentación antes de producción.",
        log: [
          "Validación en cada frontera",
          "Casos límite y estados vacíos cubiertos",
          "Documentación para el siguiente ingeniero",
        ],
      },
      {
        n: "05",
        eyebrow: "Lanzamiento",
        title: "Desplegar y entregar",
        body: "Despliego, monitoreo y dejo un camino claro para el mantenimiento.",
        log: [
          "Despliegue a producción con monitoreo",
          "Rastreo de errores y alertas",
          "Entrega: runbook y roadmap",
        ],
      },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title1: "Con qué",
    titleEm: "trabajo.",
    description: "Uso herramientas probadas por defecto y pruebo otras solo cuando hay una razón.",
    groups: [
      { title: "Frontend", items: ["Angular", "React", "Vue", "TypeScript", "Tailwind", "RxJS"] },
      { title: "Móvil", items: ["React Native", "Ionic", "Expo", "Android Studio"] },
      {
        title: "Backend",
        items: ["Node.js", "Express", "NestJS", ".NET", "Python", "REST APIs", "Auth0"],
      },
      { title: "Bases de datos", items: ["PostgreSQL", "MongoDB", "MariaDB"] },
      {
        title: "Infraestructura",
        items: ["Docker", "Swagger/OpenAPI", "Stripe", "CI/CD", "Azure"],
      },
      { title: "Seguridad", items: ["Kali", "PortSwigger", "Red/Blue Team", "Pentesting"] },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title1: "Clientes,",
    titleEm: "con sus propias palabras.",
    description: "Videos cortos de clientes con los que he trabajado.",
    play: "Reproducir testimonio",
    prev: "Testimonio anterior",
    next: "Siguiente testimonio",
  },
  socialProof: {
    eyebrow: "Señal",
    title1: "Confianza de empresas y",
    titleEm: "fundadores por igual.",
    logos: ["Airbus", "Bosch", "SaaS independientes", "PYMEs EU y LATAM"],
    prev: "Testimonio anterior",
    next: "Siguiente testimonio",
    playVideo: "Reproducir testimonio en video",
    quotes: [
      {
        quote:
          "Pablo convirtió una idea poco clara en algo que realmente se lanzó, y siguió lanzando cada semana.",
        name: "Fundador SaaS",
        role: "Etapa temprana",
        videoSrc: "/testimonials/founder-1.mp4",
        poster: "/testimonials/founder-1.jpg",
      },
      {
        quote:
          "Criterio senior sin el sobrecosto de una agencia. Las decisiones de arquitectura aguantaron seis meses después.",
        name: "CTO",
        role: "Startup Series A",
      },
      {
        quote:
          "Domina todo el stack. No necesitamos una agencia de frontend, un dev backend y un PM por separado.",
        name: "Fundadora",
        role: "Servicios PYME",
        videoSrc: "/testimonials/founder-2.mp4",
        poster: "/testimonials/founder-2.jpg",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title1: "¿Tienes un proyecto?",
    titleEm: "Hablemos.",
    description: "Cuéntame qué necesitas construir y para cuándo.",
    fields: {
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@empresa.com",
      company: "Empresa",
      companyPh: "Opcional",
      project: "Proyecto",
      projectPh: "Qué necesitas y para cuándo.",
    },
    send: "Enviar mensaje",
    sending: "Enviando…",
    reply: "Respondo en 1 o 2 días hábiles.",
    errors: {
      required: "Por favor llena nombre, correo y un mensaje corto.",
      generic: "Algo salió mal.",
    },
    success: "Mensaje enviado. Te responderé en 1 o 2 días hábiles.",
  },
  footer: {
    tagline: "Pablo Salcido · Múnich, Alemania · Remoto",
    rights: "Todos los derechos reservados.",
  },
  ui: {
    preloader: "Cargando portafolio",
    intro: "Pablo Salcido · Ingeniero full-stack",
    featured: "Caso destacado",
    index: "Índice",
    cols: { project: "Proyecto", discipline: "Disciplina", stack: "Stack" },
    next: "Siguiente proyecto",
    close: "Cerrar",
    soundOn: "Sonido activado",
    soundOff: "Sonido desactivado",
    localTime: "Múnich",
    backToTop: "Volver arriba",
    footerCta1: "Trabajemos",
    footerCtaEm: "juntos.",
    footerSay: "Escríbeme",
    sentence: {
      hi: "Hola Pablo, mi nombre es",
      name: "tu nombre",
      from: "y te escribo desde",
      company: "empresa (opcional)",
      need: ". Necesito ayuda con",
      topics: ["un producto nuevo", "un rediseño", "APIs y backend", "otra cosa"],
      reach: ". Puedes contactarme en",
      email: "tu@empresa.com",
      more: ". Un poco más de contexto:",
      messagePh: "Qué necesitas y para cuándo.",
      topicsLabel: "Temas",
    },
  },
};

const DICTS: Record<Lang, Dict> = { en, es };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; isTransitioning: boolean };

const I18nContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang") as Lang | null;
      if (stored === "en" || stored === "es") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    } catch {}
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setLangState(l);
        // Let React render new text before fading back in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(false);
          });
        });
      }, 150);
    },
    [isTransitioning]
  );

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: DICTS[lang], isTransitioning }),
    [lang, setLang, isTransitioning]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function TransitionWrapper({ children }: { children: ReactNode }) {
  const { isTransitioning } = useI18n();
  return (
    <div
      className="transition-opacity duration-200 ease-out"
      style={{ opacity: isTransitioning ? 0 : 1 }}
    >
      {children}
    </div>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}

export function useT(): Dict {
  return useI18n().t;
}
