import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FilmSlider } from "@/components/film-slider";
import { ImageCard } from "@/components/image-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { rwaTracks, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Lotis software work, and the flagship real-world asset tokenization project.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHero
        image="/media/projects-hero.png"
        video="/media/clip-projects.mp4"
        kicker="Projects"
        title="Software first. RWA as the flagship."
      >
        Lotis takes software work. The project we are putting in front is real-world asset
        tokenization. Gold and silver are tracks inside that project.
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-20 sm:px-8">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08}>
            <article id={service.slug} className="scroll-mt-28 grid gap-0 overflow-hidden rounded-[1.75rem] border border-white/10 lg:grid-cols-2">
              <div className={`relative min-h-[280px] lg:min-h-[440px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={service.detailImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center bg-[#0c0d10] p-8 sm:p-12">
                <p className="text-[11px] tracking-[0.28em] text-zinc-500 uppercase">{service.kicker}</p>
                <h2 className="font-heading mt-3 text-3xl text-zinc-50 sm:text-4xl">{service.title}</h2>
                <p className="mt-5 max-w-xl leading-7 text-zinc-300">{service.summary}</p>
                <p className="mt-4 max-w-xl leading-7 text-zinc-500">{service.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section id="rwa" className="scroll-mt-24 border-t border-white/10 bg-white/[0.02] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionKicker>Flagship project</SectionKicker>
            <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50 sm:text-5xl">
              Real-world asset tokenization
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Restricted on-chain units against a legal file. We write the software. Title desks and
              vaults still hold the asset.
            </p>
          </Reveal>
          <div className="mt-12">
            <FilmSlider
              label="RWA tracks"
              slides={rwaTracks.map((track) => ({
                href: `#${track.slug}`,
                image: track.detailImage,
                kicker: track.kicker,
                title: track.title,
                summary: track.summary,
              }))}
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {rwaTracks.map((track) => (
              <article
                key={track.slug}
                id={track.slug}
                className="scroll-mt-28 overflow-hidden rounded-[1.4rem] border border-white/10"
              >
                <ImageCard
                  image={track.detailImage}
                  kicker={track.kicker}
                  title={track.title}
                  body={track.detail}
                  className="min-h-[300px] rounded-none border-0"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 py-16 text-sm text-zinc-500 sm:px-8">
        Software build, or a titled lot?{" "}
        <Link href="/contact" className="text-[#c4a05a] hover:underline">
          Start a project
        </Link>
        .
      </p>
    </div>
  );
}
