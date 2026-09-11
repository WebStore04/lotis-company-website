import Image from "next/image";
import Link from "next/link";
import { MediaFill } from "@/components/media-fill";
import { CapabilityMarquee } from "@/components/marquee";
import { FilmSlider } from "@/components/film-slider";
import { HeroSlider } from "@/components/hero-slider";
import { ImageCard } from "@/components/image-card";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { locations, rwaTracks, services, steps } from "@/lib/content";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CapabilityMarquee />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <Reveal>
          <SectionKicker>The company</SectionKicker>
          <h2 className="font-heading mt-5 max-w-[12ch] text-4xl leading-[1.1] text-zinc-50 sm:text-5xl">
            A software shop with a flagship on-chain register.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="space-y-5 self-end text-base leading-8 text-zinc-400">
          <p>
            Lotis builds production systems: web products, APIs, protocol work, and holder books.
            Client software and the RWA project share the same bench.
          </p>
          <p>
            The flagship is real-world asset tokenization. Property, allocated gold and silver, and
            financial lots, each tied to a legal file and a restricted register.
          </p>
        </Reveal>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <ImageCard
                href={`/projects#${service.slug}`}
                image={service.image}
                kicker={service.kicker}
                title={service.title}
                body={service.summary}
                className="min-h-[460px] lg:min-h-[540px]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionKicker>Flagship project</SectionKicker>
            <h2 className="font-heading mt-4 max-w-xl text-4xl text-zinc-50 sm:text-5xl">
              Real-world asset tokenization
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              The main project. Property, gold, silver, and financial lots on one software register.
              Gold and silver are workstreams, not the company name.
            </p>
          </div>
          <Link href="/projects#rwa" className="text-sm text-zinc-400 transition hover:text-[#c4a05a]">
            Project detail →
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <FilmSlider
            label="RWA tracks"
            slides={rwaTracks.map((track) => ({
              href: `/projects#${track.slug}`,
              image: track.image,
              kicker: track.kicker,
              title: track.title,
              summary: track.summary,
            }))}
          />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionKicker>Approach</SectionKicker>
            <h2 className="font-heading mt-4 text-4xl text-zinc-50 sm:text-5xl">How a Lotis project runs</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <article className="group relative min-h-[280px] overflow-hidden rounded-[1.4rem] border border-white/10">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/50 to-black/10" />
                  <div className="relative flex h-full min-h-[280px] flex-col justify-end p-5">
                    <p className="font-mono text-sm text-[#c4a05a]">{step.n}</p>
                    <h3 className="mt-2 text-lg text-zinc-50">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Link href="/approach" className="mt-10 inline-block text-sm text-zinc-400 hover:text-[#c4a05a]">
            Read the approach →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionKicker>RWA locations</SectionKicker>
            <h2 className="font-heading mt-4 max-w-lg text-4xl text-zinc-50 sm:text-5xl">
              Where the flagship project can sit
            </h2>
          </div>
          <Link href="/locations" className="text-sm text-zinc-400 hover:text-[#c4a05a]">
            Browse locations →
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, i) => (
            <Reveal key={location.region} delay={i * 0.05}>
              <ImageCard
                href="/locations"
                image={location.image}
                kicker={location.focus}
                title={location.region}
                className="min-h-[280px] sm:min-h-[320px]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative min-h-[56svh] overflow-hidden border-y border-white/10">
        <MediaFill image="/media/lobby-still.jpg" video="/media/clip-lobby.mp4" />
        <div className="absolute inset-0 bg-[#07080A]/55" />
        <div className="relative mx-auto flex min-h-[56svh] max-w-7xl items-end px-5 py-16 sm:px-8">
          <p className="font-heading max-w-2xl text-3xl text-zinc-50 sm:text-5xl">
            Built in New York. Shipped wherever the file lives.
          </p>
        </div>
      </section>

      <section className="relative min-h-[56svh] overflow-hidden border-b border-white/10">
        <MediaFill image="/media/culture-counts.png" />
        <div className="absolute inset-0 bg-[#07080A]/65" />
        <div className="relative mx-auto flex min-h-[56svh] max-w-7xl flex-col justify-end px-5 py-16 sm:px-8">
          <SectionKicker>Culture</SectionKicker>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50 sm:text-5xl">
            A company built by engineers, for the systems that have to stay up.
          </h2>
          <Link href="/culture" className="mt-8 inline-block text-sm text-zinc-300 hover:text-[#c4a05a]">
            How we work →
          </Link>
        </div>
      </section>

      <section className="relative min-h-[70svh] overflow-hidden">
        <MediaFill image="/media/home-careers.png" />
        <div className="absolute inset-0 bg-[#07080A]/70" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 py-20 sm:px-8">
          <SectionKicker>Careers</SectionKicker>
          <h2 className="font-heading mt-4 max-w-xl text-4xl text-zinc-50 sm:text-5xl">
            Build production software at Lotis.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
            No open roles right now. We still read notes from engineers who want product work or
            the RWA project.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex h-12 w-fit items-center rounded-full border border-white/25 px-7 text-sm text-zinc-100 hover:bg-white/10"
          >
            View careers
          </Link>
        </div>
      </section>
    </div>
  );
}
