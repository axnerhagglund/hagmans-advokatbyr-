// config/client.ts
// -----------------------------------------------
// Alla kundspecifika värden samlas här.
// Ändra endast den här filen när du sätter upp en ny kund.
// -----------------------------------------------
//
// OBS — Tailwind v4:
// Det här projektet använder Tailwind v4 (ingen tailwind.config.ts).
// Färgerna nedan speglas i src/styles/globals.css under @theme {}.
// Håll dem synkroniserade manuellt om du byter färger.
// -----------------------------------------------

export const client = {

  // ── GRUNDINFO ──────────────────────────────────────
  name: "Hagmans Familjerättsbyrå",
  tagline: "Familjerätt utan krångel",
  logo: "/assets/logo.svg",
  favicon: "/assets/favicon.ico",

  // ── FÄRGER ─────────────────────────────────────────
  // Speglas i src/styles/globals.css @theme {}
  colors: {
    primary: "#c9521a",    // orange — accent, CTA
    secondary: "#ffeb3b",  // yellow — highlight, mark
    background: "#fafaf8", // cream — sidans bakgrund
    text: "#0a0a0a",       // ink — brödtext och rubriker
  },

  // ── KONTAKT ────────────────────────────────────────
  contact: {
    phone: "08-123 456 78",
    email: "hej@hagmans.se",
    address: "Storgatan 12, 111 23 Stockholm",
    orgNumber: "556789-0123",
  },

  // ── ÖPPETTIDER ─────────────────────────────────────
  hours: [
    { day: "Måndag–Fredag", time: "08:00–17:00" },
    { day: "Lördag", time: "Stängt" },
    { day: "Söndag", time: "Stängt" },
  ],

  // ── TJÄNSTER ───────────────────────────────────────
  services: [
    {
      title: "Skilsmässa",
      description: "Juridisk hjälp genom separation — tydligt och respektfullt.",
      icon: "scale",
    },
    {
      title: "Vårdnad & umgänge",
      description: "Vi hjälper dig att skydda relationen med dina barn.",
      icon: "heart",
    },
    {
      title: "Bodelning",
      description: "Rättvis fördelning av tillgångar efter separation.",
      icon: "home",
    },
    {
      title: "Arv & testamente",
      description: "Trygga dina nära med ett välformulerat testamente.",
      icon: "document",
    },
    {
      title: "Samboavtal",
      description: "Skydda dig och din partner — innan det behövs.",
      icon: "shield",
    },
  ],

  // ── SOCIALA MEDIER ─────────────────────────────────
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // ── SEO ────────────────────────────────────────────
  seo: {
    title: "Hagmans Familjerättsbyrå — Familjerätt utan krångel",
    description:
      "Familjerätt utan krångel. Vi är advokaterna du faktiskt vågar ringa – proffsiga, raka och mänskliga.",
    keywords: [
      "familjerätt",
      "advokat",
      "skilsmässa",
      "vårdnad",
      "bodelning",
      "testamente",
      "stockholm",
    ],
  },

  // ── CMS (SANITY) ───────────────────────────────────
  // Sanity-konfigurationen läses primärt från miljövariabler (.env.local).
  // Dessa värden används endast som dokumentation / fallback-referens.
  // Sätt NEXT_PUBLIC_SANITY_PROJECT_ID i .env.local för att aktivera CMS-koppling.
  sanity: {
    projectId: "",   // Fyll i ditt Sanity-projekt-ID här eller i .env.local
    dataset: "production",
    // CMS-innehåll som hanteras via Sanity:
    // - Blogginlägg (post)
    // - Medarbetare (teamMember)
    // - Tjänster (service)
    // - FAQ (faqItem)
    // - Prispaket (pricingPackage)
  },

  // ── ADDONS ─────────────────────────────────────────
  addons: {
    chatbot: {
      enabled: false,
      provider: "tidio" as "tidio" | "intercom" | "claude",
      snippetId: "",
    },
    ecommerce: {
      enabled: false,
      stripePublicKey: "",
    },
  },

} as const;

export type ClientConfig = typeof client;
