import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "@/components/image-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations",
  description: "Jurisdictions for the Lotis RWA project.",
};

export default function LocationsPage() {
  return (
    <div>
      <PageHero
        image="/media/locations-hero.png"
        video="/media/clip-world.mp4"
        kicker="RWA project"
        title="Browse by where the asset lives."
      >
        These locations are for the flagship RWA project, not a claim that Lotis is a local escrow
        brand. Software is built remotely. The underlying file still has a jurisdiction.
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {locations.map((location, i) => (
            <Reveal key={location.region} delay={i * 0.05}>
              <article className="overflow-hidden rounded-[1.6rem] border border-white/10">
                <ImageCard
                  image={location.image}
                  kicker={location.focus}
                  title={location.region}
                  className="min-h-[360px] rounded-none border-0 sm:min-h-[420px]"
                />
                <p className="bg-[#0c0d10] px-6 py-5 text-sm leading-6 text-zinc-400">{location.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-[1.6rem] border border-white/10">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px]">
              <Image src="/media/locations-cta.png" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="bg-[#0c0d10] p-8 sm:p-12">
              <h2 className="font-heading text-3xl text-zinc-50">We can still help</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                If the lot sits outside this list, send the jurisdiction and the file. If you need
                product software with no RWA involved, that is still a Lotis project.
              </p>
              <Link href="/contact" className="mt-6 inline-block text-sm text-[#c4a05a] hover:underline">
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
