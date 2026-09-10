export const company = {
  name: "Lotis",
  tagline: "A software development company. Flagship project: real-world asset tokenization.",
  email: "hello@lotistoken.com",
  careersEmail: "careers@lotistoken.com",
  techEmail: "tech@lotistoken.com",
};

export const marqueeItems = [
  "Product software",
  "TypeScript",
  "APIs",
  "Cloud applications",
  "Protocol engineering",
  "Smart contracts",
  "Holder registers",
  "RWA tokenization",
  "Property",
  "Allocated gold",
  "Allocated silver",
  "Credit and funds",
] as const;

export const heroSlides = [
  {
    image: "/media/hero-skyline.png",
    kicker: "Software development company",
    title: "Production software for the modern internet.",
    body: "Web products, APIs, and on-chain systems, built to ship and stay up.",
  },
  {
    image: "/media/studio-systems.png",
    kicker: "What we build",
    title: "Interfaces, data, and the path to production.",
    body: "Client product work and internal tools from the same engineering bench.",
  },
  {
    image: "/media/property-lot.png",
    kicker: "Flagship project",
    title: "Real-world assets, on a real register.",
    body: "Tokenization for property, allocated metal, and titled financial lots.",
  },
  {
    image: "/media/gold-vault.png",
    kicker: "RWA tracks",
    title: "The file stays the source of truth.",
    body: "Title desks and vaults still hold the asset. We write the software around it.",
  },
] as const;

export const careerHighlights = [
  {
    title: "Software company first",
    body: "Lotis is a development shop. Client product work and the RWA register share the same bench.",
  },
  {
    title: "Remote-friendly",
    body: "Build from where you work best. Headquarters is listed in New York, United States.",
  },
  {
    title: "Flagship: RWA",
    body: "The lead project is real-world asset tokenization: property, allocated gold and silver, and titled lots.",
  },
  {
    title: "Production systems",
    body: "Web products, APIs, protocol software, and registers that have to keep running after launch.",
  },
] as const;

export const careerWork = [
  {
    title: "Product software",
    body: "Customer-facing apps, internal tools, and APIs. TypeScript and the operational software companies actually run.",
    image: "/media/studio-systems.png",
  },
  {
    title: "Protocol and registers",
    body: "On-chain and off-chain registers, restricted transfers, and the glue between legal files and running code.",
    image: "/media/protocol-fiber.png",
  },
  {
    title: "RWA tokenization",
    body: "The flagship project. Issue units against property, allocated gold and silver, and financial lots without losing the real file.",
    image: "/media/property-lot.png",
  },
  {
    title: "Developer infrastructure",
    body: "Tooling, environments, and the unglamorous path from spec to production.",
    image: "/media/careers-atelier.png",
  },
] as const;

export const hiringSteps = [
  {
    n: "01",
    title: "Apply",
    body: "Send a CV and a short note to careers@lotistoken.com. You hear back either way.",
  },
  {
    n: "02",
    title: "Intro call",
    body: "A conversation about the role, how Lotis works, and the project you would join.",
  },
  {
    n: "03",
    title: "Technical conversation",
    body: "A structured look at how you build: systems, tradeoffs, and code you can stand behind.",
  },
  {
    n: "04",
    title: "Decision",
    body: "A clear yes or no. If we offer, the scope, location, and compensation are written down.",
  },
] as const;

export const openRoles: { title: string; location: string }[] = [];

export const services = [
  {
    slug: "product-software",
    title: "Product software",
    kicker: "What we are",
    image: "/media/studio-systems.png",
    summary:
      "Web products, internal tools, and customer-facing apps. TypeScript, APIs, and the operational software companies actually run.",
    detail:
      "Lotis is a software shop first. We design, build, and ship systems with clear ownership, tests, and a path to production. RWA work sits on this same bench.",
  },
  {
    slug: "protocol-engineering",
    title: "Protocol and register software",
    kicker: "What we are",
    image: "/media/protocol-fiber.png",
    summary:
      "On-chain and off-chain registers, restricted transfers, and the glue between legal files and running code.",
    detail:
      "When the product is a register, we treat it as software: schemas, permissions, audit trails, and interfaces a non-crypto team can still operate.",
  },
] as const;

export const rwaTracks = [
  {
    slug: "property",
    title: "Property",
    kicker: "RWA project",
    image: "/media/property-lot.png",
    summary:
      "Software that issues units against deeds, leaseholds, and fractional interests. The official record stays the source of title.",
    detail:
      "Each issuance maps to a legal description, a jurisdiction, and a holder register. Transfers follow restrictions a title desk already understands.",
  },
  {
    slug: "gold",
    title: "Allocated gold",
    kicker: "RWA project",
    image: "/media/gold-vault.png",
    summary:
      "Software for serial-numbered gold lots in custody. A bar list you can audit, not a pooled promise.",
    detail:
      "Assay, vault, and serial data sit on the lot. Units cannot move to a wallet that is not on the register.",
  },
  {
    slug: "silver",
    title: "Allocated silver",
    kicker: "RWA project",
    image: "/media/silver-allocated.png",
    summary: "The same register used for gold, applied to silver. Allocated bars, not unallocated claims.",
    detail:
      "Custody confirmation, serials, and a restricted holder book. Built as software, not as a metal brand.",
  },
  {
    slug: "credit-funds",
    title: "Credit and funds",
    kicker: "RWA project",
    image: "/media/funds-register.png",
    summary:
      "Fund interests, notes, and receivables when there is a true sale, a servicer, and a register of holders.",
    detail:
      "The originator, the custodian, and the transfer book have to exist before a unit is issued. We write the software around that file.",
  },
] as const;

export const locations = [
  {
    region: "United States",
    focus: "RWA: property, funds, private credit",
    note: "Title, onshore vehicles, and software that talks to how US closings actually work.",
    image: "/media/loc-us.png",
  },
  {
    region: "United Kingdom",
    focus: "RWA: property and funds",
    note: "Land Registry-backed interests and sterling accounts, with software on top of the existing file.",
    image: "/media/loc-uk.png",
  },
  {
    region: "Switzerland",
    focus: "RWA: allocated gold and silver",
    note: "Vaulted bullion lots. Serials, allocation letters, and redemption against the same bars.",
    image: "/media/loc-ch.png",
  },
  {
    region: "Singapore",
    focus: "RWA: funds and metals",
    note: "Fund vehicles and regional custody. Software for cross-border registers.",
    image: "/media/loc-sg.png",
  },
  {
    region: "United Arab Emirates",
    focus: "RWA: property and metals",
    note: "Free-zone vehicles, titled real estate, and vaulted metal as the underlying lot.",
    image: "/media/loc-ae.png",
  },
  {
    region: "European Union",
    focus: "RWA: funds and notes",
    note: "Transfer-restricted fund units where the register, not the ticker, is the product.",
    image: "/media/loc-eu.png",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Scope the system",
    body: "What has to exist in software, and what must stay in the legal or custody file. We do not blur those.",
    image: "/media/hero-skyline.png",
  },
  {
    n: "02",
    title: "Build in production shape",
    body: "Interfaces, data model, permissions, and the unglamorous ops path. Same standard for client software and for RWA.",
    image: "/media/studio-systems.png",
  },
  {
    n: "03",
    title: "Connect the real file",
    body: "On the RWA project: title, assay, vault, or true sale. If that file is weak, we do not issue a unit.",
    image: "/media/gold-vault.png",
  },
  {
    n: "04",
    title: "Ship and operate",
    body: "Deploy, report, restrict transfers, and keep the books in sync. Software that a team can still run next year.",
    image: "/media/protocol-fiber.png",
  },
] as const;
