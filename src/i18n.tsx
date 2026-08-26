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
  nav: { projects: string; process: string; stack: string; contact: string };
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
    videoComingSoon: string;
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
    steps: { n: string; eyebrow: string; title: string; body: string }[];
  };
  stack: {
    eyebrow: string;
    title1: string;
    titleEm: string;
    description: string;
    groups: { title: string; items: string[] }[];
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
};

const en: Dict = {
  nav: {
    projects: "Projects",
    process: "Process",
    stack: "Stack",
    contact: "Contact",
  },
  cta: { workTogether: "Work together", openMenu: "Open menu" },
  hero: {
    availability: "Available for selective builds",
    scrollHint: "Scroll to explore",
    title1: "Full-stack engineering with",
    titleEm: "taste and discipline.",
    description:
      "I design and ship polished frontends, Node.js APIs, and production systems for SaaS founders and growing businesses that need one senior builder from first brief to launch.",
    viewWork: "View selected work",
    startConversation: "Start a conversation",
    stats: [
      { k: "Proof", v: "Airbus, Bosch, EU & LATAM client work" },
      { k: "Range", v: "Frontend, backend, payments, deployment" },
      { k: "Based in", v: "Munich, Germany. Remote-first." },
    ],
    currentSignal: "Current signal",
    currentSignalBody:
      "Enterprise consulting experience with Airbus and Bosch, paired with end-to-end product work for SaaS founders and independent businesses.",
    senior: "Senior Full-Stack Engineer",
  },
  whoIWorkWith: {
    eyebrow: "Who I work with",
    title1: "Senior execution for the teams that",
    titleEm: "cannot afford a miss.",
    items: [
      {
        title: "SaaS founders",
        body: "0→1 product builds, MVP-to-scale rewrites, and the unglamorous integrations that make a product feel real.",
      },
      {
        title: "Small & medium businesses",
        body: "Booking, lead generation, internal tools, and brand-forward sites that turn into a measurable sales channel.",
      },
      {
        title: "Independent operators",
        body: "Content platforms, subscription products, and service businesses that need one senior builder from brief to launch.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    title1: "Real products,",
    titleEm: "shipped with care.",
    description:
      "A focused selection across booking, cultural heritage, lead generation, subscription content, and logistics — paired with brand-forward execution.",
    viewCaseStudy: "View case study",
    role: "Role",
    outcome: "Outcome",
    closeCase: "Close case study",
    viewLive: "View live site",
    videoComingSoon: "Video coming soon",
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
        title: "Joseph Battisti, NY Salon",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651842/barber_kgabs3.mp4",
        summary:
          "Booking platform with Shopify integration and real-time scheduling for a Manhattan salon.",
        role: "Full-stack build",
        outcome: "Premium booking flow",
        client: "Independent Manhattan salon — luxury hair brand.",
        timeline: "8 weeks · solo build",
        problem:
          "The salon was juggling DMs, calls, and a spreadsheet to manage bookings. Their Shopify storefront and scheduling were disconnected, so loyal clients had a clumsy path to rebook.",
        approach: [
          "Mapped the real-world booking flow with the owner — service, stylist, time, deposit, confirmation.",
          "Built a custom scheduling engine in Node.js + PostgreSQL with stylist availability rules and buffer time.",
          "Integrated Shopify for product upsells inside the booking confirmation step.",
          "Designed an admin view to manage stylists, services, deposits and no-shows.",
        ],
        results: [
          "Bookings collected directly online, including paid deposits.",
          "Front-desk time on phone scheduling cut significantly.",
          "Single source of truth for the calendar, accessible from any device.",
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
        tag: "Headless CMS + SEO",
        title: "Diocletian's Dream, Split VR Museum",
        liveUrl: "https://diocletiansdream.com",
        summary:
          "Bilingual prerendered site for a VR heritage museum, with a headless WordPress blog and booking conversions that actually report.",
        role: "Full-stack build",
        outcome: "Bookings tracked, content indexed",
        client: "Virtual reality heritage museum at Diocletian's Palace in Split, Croatia.",
        timeline: "Ongoing · live since July 2026",
        problem:
          "Paid bookings were landing without ever registering as conversions, so ad spend flew blind. Content lived in WordPress, but the marketing site needed to be fast, indexable, and available in Croatian.",
        approach: [
          "Built the site as a prerendered Angular static build — every route ships as HTML, served as plain files with no Node runtime.",
          "Ran WordPress headless as the content source, normalising Elementor markup, image URLs, and SEO metadata at render time.",
          "Shipped a full Croatian tree — routes, hreflang pairs, sitemap — bridging the CMS language data the REST API didn't expose.",
          "Wired the booking provider's thank-you page to GA4 and Google Ads so completed bookings report with their real value.",
        ],
        results: [
          "Bookings register as conversions with value attached, after a month of firing pageviews only.",
          "76 routes prerendered and sitemapped, each language under exactly one canonical path.",
          "Editors publish in WordPress; a rebuild ships that content as static HTML.",
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
        tag: "Lead generation",
        title: "Lending Group, Texas",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651847/bclg_d1h8ur.mp4",
        summary:
          "Lead-generation application for an employment and lending firm with clean intake and routing.",
        role: "Full-stack build",
        outcome: "Cleaner lead pipeline",
        client: "US lending and employment firm with multiple offices.",
        timeline: "6 weeks · solo build",
        problem:
          "Leads arrived via PDFs, calls, and email. Routing was manual, follow-ups slipped, and the team had no visibility into pipeline health.",
        approach: [
          "Designed a focused intake form with conditional logic and validation.",
          "Built routing rules per office, product line, and case type.",
          "Shipped an internal dashboard with status, owner, and SLA timers.",
          "Wired CI/CD on every push for safe weekly improvements.",
        ],
        results: [
          "Every lead lands in one inbox with an owner.",
          "Drop-off in intake reduced by tightening the form.",
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
        title: "Esencial360, Yoga & Meditation",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651843/esencial_sdxj51.mp4",
        summary:
          "Subscription platform with BunnyStream video delivery, Stripe billing, and admin tooling.",
        role: "Platform build",
        outcome: "Premium content access",
        client: "Wellness brand offering paid yoga and meditation content.",
        timeline: "10 weeks · solo build",
        problem:
          "The founder wanted a recurring revenue product without giving up brand control to a generic course platform.",
        approach: [
          "Built a subscription gate on top of Stripe with monthly and annual tiers.",
          "Delivered video via BunnyStream with signed URLs to protect content.",
          "Designed an admin console for uploading, categorizing, and scheduling releases.",
          "Crafted a member-area UX that feels editorial, not corporate.",
        ],
        results: [
          "Paid subscriptions live with self-serve billing and cancellation.",
          "Founder publishes new sessions without engineering help.",
          "Brand-led member experience, no third-party watermarks.",
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
      {
        tag: "Frontend experience",
        title: "Travane, Logistics",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651837/travane_b48uyg.mp4",
        summary:
          "Brand-forward logistics site focused on trust, services, and client acquisition.",
        role: "Frontend build",
        outcome: "Sharper sales presence",
        client: "B2B logistics operator across LATAM corridors.",
        timeline: "4 weeks · frontend engagement",
        problem:
          "The existing site read as a brochure and didn't communicate the operational depth the sales team relied on.",
        approach: [
          "Restructured information architecture around services, corridors, and proof.",
          "Designed a trust-first hero with concrete capabilities.",
          "Built reusable section primitives so the team can extend content themselves.",
        ],
        results: [
          "Sales conversations open with a stronger first impression.",
          "Content team can add corridors and services without dev help.",
          "Fast, accessible, mobile-first across the funnel.",
        ],
        metrics: [
          { value: "4 wks", label: "From brief to live" },
          { value: "A11y", label: "WCAG-aware build" },
          { value: "≤1s", label: "Hero render" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Content", items: ["Structured JSON", "Image pipeline"] },
          { label: "Ops", items: ["Static hosting", "CDN cache"] },
        ],
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title1: "Clarity first. Architecture second.",
    titleEm: "Production always.",
    description:
      "I keep the engagement disciplined: define the valuable version, build the system in vertical slices, and leave behind code that can be operated.",
    steps: [
      { n: "01", eyebrow: "Clarity", title: "Shape the brief", body: "Translate unclear goals into user flows, constraints, risks, and a version that can ship value." },
      { n: "02", eyebrow: "Structure", title: "Design the system", body: "Define contracts, data models, authentication, and service boundaries before implementation gets expensive." },
      { n: "03", eyebrow: "Execution", title: "Build vertical slices", body: "Move from interface to API to data in thin, testable increments with clean component boundaries." },
      { n: "04", eyebrow: "Quality", title: "Harden the release", body: "Add validation, edge case handling, documentation, and quality checks before production." },
      { n: "05", eyebrow: "Launch", title: "Ship and support", body: "Deploy, monitor, and leave the product with a clean path for maintenance and iteration." },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title1: "The tools are broad.",
    titleEm: "The decisions stay focused.",
    description:
      "I choose boring foundations where reliability matters and reserve craft for the places customers actually feel.",
    groups: [
      { title: "Frontend", items: ["Angular", "React", "Vue", "TypeScript", "Tailwind", "RxJS"] },
      { title: "Mobile", items: ["React Native", "Ionic", "Expo", "Android Studio"] },
      { title: "Backend", items: ["Node.js", "Express", "NestJS", ".NET", "Python", "REST APIs", "Auth0"] },
      { title: "Databases", items: ["PostgreSQL", "MongoDB", "MariaDB"] },
      { title: "Infra & tooling", items: ["Docker", "Swagger/OpenAPI", "Stripe", "CI/CD", "Azure"] },
      { title: "Security", items: ["Kali", "PortSwigger", "Red/Blue Team", "Pentesting"] },
    ],
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
        quote: "Pablo turned an unclear product idea into something that actually shipped — and kept shipping every week after that.",
        name: "SaaS founder",
        role: "Early-stage operator",
        videoSrc: "/testimonials/founder-1.mp4",
        poster: "/testimonials/founder-1.jpg",
      },
      { quote: "Senior judgement without the agency overhead. Architecture decisions held up six months later.", name: "CTO", role: "Series A startup" },
      {
        quote: "He owns the whole stack. We didn't need a frontend agency, a backend dev, and a project manager.",
        name: "Founder",
        role: "SMB services",
        videoSrc: "/testimonials/founder-2.mp4",
        poster: "/testimonials/founder-2.jpg",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title1: "Have a product that needs",
    titleEm: "senior execution?",
    description:
      "I take on a small number of focused builds. Send the problem, the timeline, and the outcome you need.",
    fields: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@company.com",
      company: "Company",
      companyPh: "Optional",
      project: "Project",
      projectPh: "Problem, timeline, outcome you need.",
    },
    send: "Send message",
    sending: "Sending…",
    reply: "I read every message. Expect a reply within 1–2 business days.",
    errors: {
      required: "Please fill in name, email, and a short message.",
      generic: "Something went wrong.",
    },
    success: "Message sent — I'll reply within 1–2 business days.",
  },
  footer: {
    tagline: "Pablo Salcido · Munich, Germany · Remote-first",
    rights: "All rights reserved.",
  },
};

const es: Dict = {
  nav: {
    projects: "Proyectos",
    process: "Proceso",
    stack: "Stack",
    contact: "Contacto",
  },
  cta: { workTogether: "Trabajemos juntos", openMenu: "Abrir menú" },
  hero: {
    availability: "Disponible para proyectos selectos",
    scrollHint: "Desliza para explorar",
    title1: "Ingeniería full-stack con",
    titleEm: "gusto y disciplina.",
    description:
      "Diseño y entrego frontends pulidos, APIs en Node.js y sistemas en producción para fundadores SaaS y negocios en crecimiento que necesitan un ingeniero senior de principio a fin.",
    viewWork: "Ver proyectos",
    startConversation: "Iniciar una conversación",
    stats: [
      { k: "Prueba", v: "Trabajo con Airbus, Bosch y clientes en EU y LATAM" },
      { k: "Alcance", v: "Frontend, backend, pagos y despliegue" },
      { k: "Ubicación", v: "Múnich, Alemania. Remoto." },
    ],
    currentSignal: "Señal actual",
    currentSignalBody:
      "Experiencia consultiva en empresa con Airbus y Bosch, junto con producto de principio a fin para fundadores SaaS y negocios independientes.",
    senior: "Ingeniero Full-Stack Senior",
  },
  whoIWorkWith: {
    eyebrow: "Con quién trabajo",
    title1: "Ejecución senior para equipos que",
    titleEm: "no pueden fallar.",
    items: [
      {
        title: "Fundadores SaaS",
        body: "Productos de 0→1, reescrituras de MVP a escala y las integraciones poco glamorosas que hacen que un producto se sienta real.",
      },
      {
        title: "Pequeñas y medianas empresas",
        body: "Reservas, generación de leads, herramientas internas y sitios orientados a marca que se convierten en un canal de ventas medible.",
      },
      {
        title: "Operadores independientes",
        body: "Plataformas de contenido, productos por suscripción y negocios de servicio que necesitan un solo ingeniero senior de principio a fin.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Trabajo seleccionado",
    title1: "Productos reales,",
    titleEm: "lanzados con cuidado.",
    description:
      "Una selección enfocada en reservas, patrimonio cultural, generación de leads, contenido por suscripción y logística — con ejecución orientada a marca.",
    viewCaseStudy: "Ver caso de estudio",
    role: "Rol",
    outcome: "Resultado",
    closeCase: "Cerrar caso de estudio",
    viewLive: "Ver sitio en vivo",
    videoComingSoon: "Video en camino",
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
        title: "Joseph Battisti, Salón NY",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651842/barber_kgabs3.mp4",
        summary:
          "Plataforma de reservas con integración a Shopify y agenda en tiempo real para un salón de Manhattan.",
        role: "Desarrollo full-stack",
        outcome: "Flujo de reservas premium",
        client: "Salón independiente en Manhattan — marca de lujo en cabello.",
        timeline: "8 semanas · construcción en solitario",
        problem:
          "El salón gestionaba reservas entre DMs, llamadas y una hoja de cálculo. Su tienda en Shopify y la agenda estaban desconectadas, por lo que reservar era torpe para clientes leales.",
        approach: [
          "Mapeé el flujo real de reservas con la dueña — servicio, estilista, horario, depósito, confirmación.",
          "Construí un motor de agenda en Node.js + PostgreSQL con reglas de disponibilidad y tiempos de buffer por estilista.",
          "Integré Shopify para upsells de producto dentro del paso de confirmación.",
          "Diseñé una vista de administración para gestionar estilistas, servicios, depósitos y no-shows.",
        ],
        results: [
          "Reservas recibidas directamente en línea, incluyendo depósitos pagados.",
          "Tiempo de recepción al teléfono reducido significativamente.",
          "Una sola fuente de verdad para el calendario, accesible desde cualquier dispositivo.",
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
        tag: "CMS headless + SEO",
        title: "Diocletian's Dream, Museo VR en Split",
        liveUrl: "https://diocletiansdream.com",
        summary:
          "Sitio bilingüe prerenderizado para un museo de realidad virtual, con blog en WordPress headless y conversiones de reserva que sí se registran.",
        role: "Desarrollo full-stack",
        outcome: "Reservas medidas, contenido indexado",
        client: "Museo de realidad virtual en el Palacio de Diocleciano, Split, Croacia.",
        timeline: "En curso · en vivo desde julio de 2026",
        problem:
          "Las reservas pagadas llegaban sin registrarse nunca como conversiones, así que la inversión publicitaria iba a ciegas. El contenido vivía en WordPress, pero el sitio necesitaba ser rápido, indexable y estar disponible en croata.",
        approach: [
          "Construí el sitio como un build estático de Angular prerenderizado: cada ruta se publica como HTML, servida como archivos planos sin runtime de Node.",
          "Usé WordPress headless como fuente de contenido, normalizando el marcado de Elementor, las URLs de imágenes y los metadatos SEO al renderizar.",
          "Publiqué el árbol completo en croata —rutas, pares hreflang, sitemap— resolviendo los datos de idioma que la API REST del CMS no exponía.",
          "Conecté la página de agradecimiento del proveedor de reservas con GA4 y Google Ads para que cada reserva reporte su valor real.",
        ],
        results: [
          "Las reservas se registran como conversiones con valor, tras un mes disparando solo pageviews.",
          "76 rutas prerenderizadas y en el sitemap, cada idioma bajo una única URL canónica.",
          "El equipo publica en WordPress; una recompilación entrega ese contenido como HTML estático.",
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
        tag: "Generación de leads",
        title: "Lending Group, Texas",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651847/bclg_d1h8ur.mp4",
        summary:
          "Aplicación de generación de leads para una firma de empleo y préstamos con captura y enrutamiento limpios.",
        role: "Desarrollo full-stack",
        outcome: "Pipeline de leads más limpio",
        client: "Firma estadounidense de préstamos y empleo con varias oficinas.",
        timeline: "6 semanas · construcción en solitario",
        problem:
          "Los leads llegaban por PDFs, llamadas y correo. El enrutamiento era manual, los seguimientos se perdían y el equipo no tenía visibilidad del pipeline.",
        approach: [
          "Diseñé un formulario de captura enfocado, con lógica condicional y validación.",
          "Construí reglas de enrutamiento por oficina, línea de producto y tipo de caso.",
          "Lancé un dashboard interno con estado, responsable y SLAs.",
          "Configuré CI/CD en cada push para mejoras semanales seguras.",
        ],
        results: [
          "Cada lead llega a una sola bandeja con un responsable asignado.",
          "Abandono en captura reducido al ajustar el formulario.",
          "Despliegues semanales sin tiempos de caída.",
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
        title: "Esencial360, Yoga y Meditación",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651843/esencial_sdxj51.mp4",
        summary:
          "Plataforma por suscripción con video vía BunnyStream, cobros en Stripe y herramientas de administración.",
        role: "Construcción de plataforma",
        outcome: "Acceso premium a contenido",
        client: "Marca de bienestar con contenido pagado de yoga y meditación.",
        timeline: "10 semanas · construcción en solitario",
        problem:
          "La fundadora quería un producto de ingreso recurrente sin ceder control de marca a una plataforma de cursos genérica.",
        approach: [
          "Construí una capa de suscripción sobre Stripe con planes mensual y anual.",
          "Entregué video por BunnyStream con URLs firmadas para proteger el contenido.",
          "Diseñé una consola de administración para subir, categorizar y programar lanzamientos.",
          "Cuidé una UX del área de miembros que se siente editorial, no corporativa.",
        ],
        results: [
          "Suscripciones pagadas en vivo con autogestión de cobro y cancelación.",
          "La fundadora publica nuevas sesiones sin ayuda de ingeniería.",
          "Experiencia de marca propia, sin marcas de agua de terceros.",
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
      {
        tag: "Experiencia de frontend",
        title: "Travane, Logística",
        video: "https://res.cloudinary.com/doinkgfam/video/upload/v1782651837/travane_b48uyg.mp4",
        summary:
          "Sitio de logística orientado a marca, enfocado en confianza, servicios y captación de clientes.",
        role: "Desarrollo frontend",
        outcome: "Presencia comercial más sólida",
        client: "Operador B2B de logística en corredores de LATAM.",
        timeline: "4 semanas · proyecto de frontend",
        problem:
          "El sitio existente parecía un folleto y no comunicaba la profundidad operativa en la que confiaba el equipo comercial.",
        approach: [
          "Reestructuré la arquitectura de información en servicios, corredores y pruebas.",
          "Diseñé un hero centrado en confianza con capacidades concretas.",
          "Construí primitivos de sección reutilizables para que el equipo extienda contenido por su cuenta.",
        ],
        results: [
          "Las conversaciones de ventas abren con una mejor primera impresión.",
          "El equipo de contenido agrega corredores y servicios sin ayuda de desarrollo.",
          "Rápido, accesible y mobile-first en todo el funnel.",
        ],
        metrics: [
          { value: "4 sem", label: "De brief a en vivo" },
          { value: "A11y", label: "Construido con WCAG" },
          { value: "≤1s", label: "Render del hero" },
        ],
        stackDetail: [
          { label: "Frontend", items: ["Angular", "TypeScript", "Tailwind"] },
          { label: "Contenido", items: ["JSON estructurado", "Pipeline de imagen"] },
          { label: "Operaciones", items: ["Hosting estático", "Cache CDN"] },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajo",
    title1: "Claridad primero. Arquitectura después.",
    titleEm: "Producción siempre.",
    description:
      "Mantengo el proyecto disciplinado: definir la versión valiosa, construir el sistema en cortes verticales y dejar código que se pueda operar.",
    steps: [
      { n: "01", eyebrow: "Claridad", title: "Definir el brief", body: "Traduzco metas poco claras en flujos de usuario, restricciones, riesgos y una versión que puede entregar valor." },
      { n: "02", eyebrow: "Estructura", title: "Diseñar el sistema", body: "Defino contratos, modelos de datos, autenticación y fronteras de servicios antes de que la implementación se vuelva costosa." },
      { n: "03", eyebrow: "Ejecución", title: "Construir cortes verticales", body: "Voy de interfaz a API y datos en incrementos delgados y testeables, con fronteras de componente limpias." },
      { n: "04", eyebrow: "Calidad", title: "Endurecer el release", body: "Agrego validación, manejo de casos límite, documentación y revisiones de calidad antes de producción." },
      { n: "05", eyebrow: "Lanzamiento", title: "Lanzar y dar soporte", body: "Despliego, monitoreo y entrego el producto con un camino claro para mantenimiento e iteración." },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title1: "Las herramientas son amplias.",
    titleEm: "Las decisiones, enfocadas.",
    description:
      "Elijo fundamentos aburridos donde la fiabilidad importa, y reservo el oficio para los lugares que el cliente sí siente.",
    groups: [
      { title: "Frontend", items: ["Angular", "React", "Vue", "TypeScript", "Tailwind", "RxJS"] },
      { title: "Móvil", items: ["React Native", "Ionic", "Expo", "Android Studio"] },
      { title: "Backend", items: ["Node.js", "Express", "NestJS", ".NET", "Python", "REST APIs", "Auth0"] },
      { title: "Bases de datos", items: ["PostgreSQL", "MongoDB", "MariaDB"] },
      { title: "Infraestructura", items: ["Docker", "Swagger/OpenAPI", "Stripe", "CI/CD", "Azure"] },
      { title: "Seguridad", items: ["Kali", "PortSwigger", "Red/Blue Team", "Pentesting"] },
    ],
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
        quote: "Pablo convirtió una idea poco clara en algo que realmente se lanzó — y siguió lanzando cada semana.",
        name: "Fundador SaaS",
        role: "Etapa temprana",
        videoSrc: "/testimonials/founder-1.mp4",
        poster: "/testimonials/founder-1.jpg",
      },
      { quote: "Criterio senior sin el sobrecosto de una agencia. Las decisiones de arquitectura aguantaron seis meses después.", name: "CTO", role: "Startup Series A" },
      {
        quote: "Dueña todo el stack. No necesitamos una agencia de frontend, un dev backend y un PM por separado.",
        name: "Fundadora",
        role: "Servicios PYME",
        videoSrc: "/testimonials/founder-2.mp4",
        poster: "/testimonials/founder-2.jpg",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title1: "¿Tienes un producto que necesita",
    titleEm: "ejecución senior?",
    description:
      "Tomo un número pequeño de proyectos enfocados. Envía el problema, los tiempos y el resultado que necesitas.",
    fields: {
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@empresa.com",
      company: "Empresa",
      companyPh: "Opcional",
      project: "Proyecto",
      projectPh: "Problema, tiempos, resultado que necesitas.",
    },
    send: "Enviar mensaje",
    sending: "Enviando…",
    reply: "Leo cada mensaje. Espera respuesta en 1–2 días hábiles.",
    errors: {
      required: "Por favor llena nombre, correo y un mensaje corto.",
      generic: "Algo salió mal.",
    },
    success: "Mensaje enviado — te responderé en 1–2 días hábiles.",
  },
  footer: {
    tagline: "Pablo Salcido · Múnich, Alemania · Remoto",
    rights: "Todos los derechos reservados.",
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
