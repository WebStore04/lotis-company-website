export const company = {
  name: "Lotis",
  tagline: "Real-world asset tokenization for property, gold, silver, and titled lots.",
  email: "hello@lotis.gold",
};

export const projects = [
  {
    slug: "property",
    title: "Property",
    kicker: "Title and location",
    summary:
      "Issue units against deeds, leaseholds, and fractional interests. The county record stays the source of title. The token is the transferable lot.",
    detail:
      "We map each issuance to a legal description, a jurisdiction, and a holder register. Transfers follow the same restrictions a title desk already understands: accredited books, lockups, and documented exceptions.",
  },
  {
    slug: "gold",
    title: "Allocated gold",
    kicker: "Vaulted metal",
    summary:
      "Serial-numbered gold lots, allocated in custody, issued as restricted units. Not a pooled promise. A bar list you can audit.",
    detail:
      "Each gold lot carries assay, vault, and serial data. Units cannot move to a wallet that is not on the register. Redemptions point back to the same allocated metal.",
  },
  {
    slug: "silver",
    title: "Allocated silver",
    kicker: "Vaulted metal",
    summary:
      "The same register used for gold, applied to silver. Allocated bars, not unallocated claims.",
    detail:
      "Silver issuances use the same lot model: custody confirmation, serials, and a restricted holder book. Useful for inventory financing and allocated-metal funds.",
  },
  {
    slug: "credit-funds",
    title: "Credit and funds",
    kicker: "Notes and vehicles",
    summary:
      "Tokenize fund interests, notes, and receivables when there is a true sale, a servicer, and a register of holders.",
    detail:
      "We do not wrap a spreadsheet and call it an RWA. The originator, the custodian, and the transfer book have to exist before a unit is issued.",
  },
] as const;

export const locations = [
  {
    region: "United States",
    focus: "Property, funds, private credit",
    note: "Title, Reg D books, and onshore vehicles. Closest analog to a Propy-style closing desk, built as software rather than an escrow brand.",
  },
  {
    region: "United Kingdom",
    focus: "Property and funds",
    note: "Land Registry-backed interests, unit trusts, and sterling metal accounts.",
  },
  {
    region: "Switzerland",
    focus: "Allocated gold and silver",
    note: "Vaulted bullion lots. Serials, allocation letters, and redemption against the same bars.",
  },
  {
    region: "Singapore",
    focus: "Funds and metals",
    note: "Fund vehicles and regional custody for allocated metal and cross-border registers.",
  },
  {
    region: "United Arab Emirates",
    focus: "Property and metals",
    note: "Free-zone vehicles, titled real estate, and vaulted metal used as the underlying lot.",
  },
  {
    region: "European Union",
    focus: "Funds and notes",
    note: "Transfer-restricted fund units and notes where the register, not the ticker, is the product.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Diligence the lot",
    body: "Title, assay, custody, or true sale. If the underlying file is weak, we do not issue.",
  },
  {
    n: "02",
    title: "Place the asset",
    body: "Custodian, vault, or official record. The legal lot is held before any unit exists.",
  },
  {
    n: "03",
    title: "Issue the unit",
    body: "A restricted on-chain lot that points at that file. Holders are named. Transfers are gated.",
  },
  {
    n: "04",
    title: "Service the register",
    body: "Reporting, NAV or inventory, redemptions, and corporate actions against the same books.",
  },
] as const;
