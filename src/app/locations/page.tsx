import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations",
  description: "Jurisdictions where Lotis issues real-world asset lots.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Locations</p>
      <h1 className="mt-4 max-w-3xl text-4xl tracking-tight text-zinc-50 sm:text-5xl">
        Browse by where the asset lives.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Lotis does not invent a new country for each token. We issue against property, vaults, and
        vehicles that already have a jurisdiction. If we cannot name that place, we do not issue.
      </p>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {locations.map((location) => (
          <article
            key={location.region}
            className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6"
          >
            <h2 className="text-xl text-zinc-50">{location.region}</h2>
            <p className="mt-1 text-sm text-[#c4a05a]">{location.focus}</p>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{location.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 px-6 py-8">
        <h2 className="text-xl text-zinc-50">We can still help</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          If the lot sits outside this list, send the jurisdiction, the custodian or title file,
          and the holder restrictions. Remote originators are normal. Invented offshore wrappers
          are not.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block text-sm text-[#c4a05a] hover:underline"
        >
          Start a lot
        </Link>
      </div>
    </div>
  );
}
