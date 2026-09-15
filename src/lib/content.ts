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
    video: "/media/clip-city.mp4",
    kicker: "Software development company",
    title: "Production software for the modern internet.",
    body: "Web products, APIs, and on-chain systems, built to ship and stay up.",
  },
  {
    image: "/media/studio-systems.png",
    video: "/media/clip-studio.mp4",
    kicker: "What we build",
    title: "Interfaces, data, and the path to production.",
    body: "Client product work and internal tools from the same engineering bench.",
  },
  {
    image: "/media/property-lot.png",
    video: "/media/clip-architecture.mp4",
    kicker: "Flagship project",
    title: "Real-world assets, on a real register.",
    body: "Tokenization for property, allocated metal, and titled financial lots.",
  },
  {
    image: "/media/gold-vault.png",
    video: "/media/clip-vault.mp4",
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
    image: "/media/careers-product.png",
  },
  {
    title: "Protocol and registers",
    body: "On-chain and off-chain registers, restricted transfers, and the glue between legal files and running code.",
    image: "/media/careers-protocol.png",
  },
  {
    title: "RWA tokenization",
    body: "The flagship project. Issue units against property, allocated gold and silver, and financial lots without losing the real file.",
    image: "/media/careers-rwa.png",
  },
  {
    title: "Developer infrastructure",
    body: "Tooling, environments, and the unglamorous path from spec to production.",
    image: "/media/careers-infra.png",
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

export const openRoles: {
  title: string;
  department: string;
  location: string;
  href: string;
}[] = [
  {
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote-friendly, New York listed",
    href: "https://lotistoken.notion.site/Senior-Blockchain-Developer-3dc7049a82818070a7c3c3144d8a6087",
  },
];

export const services = [
  {
    slug: "product-software",
    title: "Product software",
    kicker: "What we are",
    image: "/media/studio-systems.png",
    detailImage: "/media/projects-product.png",
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
    detailImage: "/media/projects-protocol.png",
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
    detailImage: "/media/projects-property.png",
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
    detailImage: "/media/projects-gold.png",
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
    detailImage: "/media/projects-silver.png",
    summary: "The same register used for gold, applied to silver. Allocated bars, not unallocated claims.",
    detail:
      "Custody confirmation, serials, and a restricted holder book. Built as software, not as a metal brand.",
  },
  {
    slug: "credit-funds",
    title: "Credit and funds",
    kicker: "RWA project",
    image: "/media/funds-register.png",
    detailImage: "/media/projects-funds.png",
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
    image: "/media/step-scope.png",
  },
  {
    n: "02",
    title: "Build in production shape",
    body: "Interfaces, data model, permissions, and the unglamorous ops path. Same standard for client software and for RWA.",
    image: "/media/step-build.png",
  },
  {
    n: "03",
    title: "Connect the real file",
    body: "On the RWA project: title, assay, vault, or true sale. If that file is weak, we do not issue a unit.",
    image: "/media/step-file.png",
  },
  {
    n: "04",
    title: "Ship and operate",
    body: "Deploy, report, restrict transfers, and keep the books in sync. Software that a team can still run next year.",
    image: "/media/step-ship.png",
  },
] as const;

export const cultureBench = [
  {
    image: "/media/culture-person-window.png",
    alt: "An engineer looking out over the city from a loft window",
  },
  {
    image: "/media/culture-person-hall.png",
    alt: "Two colleagues talking in a studio hallway",
  },
  {
    image: "/media/culture-person-eng.png",
    alt: "An engineer pausing during a review",
  },
  {
    image: "/media/culture-person-remote.png",
    alt: "An engineer working from a sunlit apartment",
  },
] as const;

export const culturePillars = [
  {
    title: "A culture of technical depth",
    image: "/media/culture-depth-engineer.png",
    alt: "An engineer working late at a dual-monitor desk",
    body: "Lotis attracts people who like hard production problems. Product software, protocol work, and the RWA register share one bench. Curiosity, careful reviews, and the freedom to pick a better design over a faster one.",
  },
  {
    title: "Remote by design",
    image: "/media/culture-remote-call.png",
    alt: "An engineer on a morning call from a home kitchen table",
    body: "Headquarters is listed in New York, United States. The work is remote-friendly. We collaborate asynchronously and meet when the project needs a room, not a ritual.",
  },
  {
    title: "Builders of production software",
    image: "/media/culture-builders-pair.png",
    alt: "Two engineers pairing at a shared desk",
    body: "We ship systems a team can still operate next year. Web products, APIs, holder books, restricted transfers. The flagship is real-world asset tokenization, sitting on the same bench as the rest of the software.",
  },
  {
    title: "Learning in the work",
    image: "/media/culture-learning-review.png",
    alt: "Two engineers reviewing work together at a table",
    body: "Mentorship and reviews are part of the job. You grow by owning interfaces, data, and the path to production, including the unglamorous ops that keep a register honest.",
  },
  {
    title: "A small, global bench",
    image: "/media/culture-collective-team.png",
    alt: "A small team talking around a loft table at night",
    body: "What unites the team is a preference for software that matches the file. Thoughtful debate, written decisions, and the kind of ownership you only get on a small bench.",
  },
] as const;

export const cultureVoices = [
  {
    image: "/media/culture-person-eng.png",
    alt: "Engineer in the studio",
    kicker: "How we work",
    quote: "People are here for the work, not the pose. Production software has to hold up after launch day.",
    label: "Engineering",
  },
  {
    image: "/media/culture-person-remote.png",
    alt: "Engineer working remotely",
    kicker: "How we work",
    quote: "Build from where you work best. New York is listed. The hours follow the project, not an office badge.",
    label: "Remote-friendly",
  },
  {
    image: "/media/culture-person-product.png",
    alt: "Engineer with product sketches",
    kicker: "How we work",
    quote: "You want to work on something that lasts. A product, a register, a transfer book that still matches the file.",
    label: "Product and protocol",
  },
  {
    image: "/media/culture-person-review.png",
    alt: "Engineer during a review",
    kicker: "How we work",
    quote: "Curiosity is part of the job. Show the tradeoff. Write it down. Ship the version you can stand behind.",
    label: "Reviews",
  },
] as const;

export const cultureValues = [
  {
    title: "Autonomy over hierarchy",
    body: "Self-directed engineers who own the problem. Decisions follow reasoning and outcomes, not a title on a slide.",
  },
  {
    title: "Think past the ticket",
    body: "Client products and the RWA register need the same standard: a design that still works when launch week is over. We keep legal files, custody, and software in their own lanes.",
  },
  {
    title: "Learning is the default",
    body: "New surfaces, new jurisdictions, same standard. We share what we are building, including the parts that are still ugly.",
  },
] as const;

export const aboutKaos = [
  {
    image: "/media/about-hero.png",
    className: "left-[4%] top-[8%] w-[42%]",
    tilt: "-7deg",
  },
  {
    image: "/media/about-reliability.png",
    className: "right-[6%] top-[2%] w-[36%]",
    tilt: "8deg",
  },
  {
    image: "/media/about-file.png",
    className: "left-[28%] top-[38%] w-[34%]",
    tilt: "3deg",
  },
  {
    image: "/media/about-gathering.png",
    className: "right-[8%] top-[42%] w-[40%]",
    tilt: "-5deg",
  },
  {
    image: "/media/about-street.png",
    className: "left-[6%] bottom-[4%] w-[30%]",
    tilt: "6deg",
  },
  {
    image: "/media/about-systems.png",
    className: "right-[32%] bottom-[2%] w-[28%]",
    tilt: "-9deg",
  },
] as const;

export const aboutTracks = [
  {
    title: "Product software",
    body: "Web products, internal tools, APIs. The operational software a team can still run next year.",
    image: "/media/about-focus.png",
  },
  {
    title: "Protocol and registers",
    body: "Restricted transfers, holder books, and the glue between a legal file and running code.",
    image: "/media/about-systems.png",
  },
  {
    title: "RWA flagship",
    body: "Property, allocated gold and silver, titled lots. The chain is the transfer book. The file stays the source of truth.",
    image: "/media/about-file.png",
  },
] as const;
