import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MediaFill } from "@/components/media-fill";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { VoiceSlider } from "@/components/voice-slider";
import { cultureBench, culturePillars, cultureValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "How Lotis works. A software development company. Flagship project: real-world asset tokenization.",
};

export default function CulturePage() {
  return (
    <div>
      <PageHero
        image="/media/culture-hero-team.png"
        kicker="Culture"
        title="Engineers building production software."
      >
        Lotis is home to a small bench of engineers on web products, APIs, protocol software, and
        the RWA register. We are a software company. Tokenization is the flagship project, not the
        whole firm.
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:py-28">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/media/culture-intro-engineer.png"
              alt="An engineer sketching a system on glass"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="max-w-xl">
          <h2 className="font-heading max-w-[14ch] text-4xl text-zinc-50 sm:text-5xl">
            A company built by engineers, for the systems that have to stay up.
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-400">
            The work is production software: client products, internal tools, holder books, and
            restricted transfers. The flagship is real-world asset tokenization for property,
            allocated gold and silver, and titled financial lots.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 pb-16 sm:px-8 lg:grid-cols-4">
        {cultureBench.map((shot, i) => (
          <Reveal key={shot.image} delay={i * 0.04}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src={shot.image}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-5 pb-24 sm:px-8">
        {culturePillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.04}>
            <article className="grid overflow-hidden rounded-[1.75rem] border border-white/10 lg:grid-cols-2">
              <div
                className={`relative min-h-[260px] lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#0c0d10] p-8 sm:p-12">
                <SectionKicker>Life at Lotis</SectionKicker>
                <h2 className="font-heading mt-4 text-3xl text-zinc-50 sm:text-4xl">{pillar.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{pillar.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[60svh] overflow-hidden">
        <MediaFill image="/media/culture-counts-walk.png" />
        <div className="absolute inset-0 bg-[#07080A]/55" />
        <div className="relative mx-auto flex min-h-[60svh] max-w-7xl flex-col justify-end px-5 py-16 sm:px-8">
          <SectionKicker>Join the team</SectionKicker>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50 sm:text-5xl">
            If you want to write software that has to hold up in production, this is the work.
          </h2>
          <Link
            href="/careers"
            className="mt-8 inline-flex h-12 w-fit items-center rounded-full bg-[#c4a05a] px-7 text-sm font-medium text-[#1a1408] hover:bg-[#d4b36a]"
          >
            View careers
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mb-10">
          <SectionKicker>Hear from the work</SectionKicker>
          <h2 className="font-heading mt-4 text-4xl text-zinc-50 sm:text-5xl">How it feels to build here.</h2>
        </Reveal>
        <VoiceSlider />
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionKicker>Culture that counts</SectionKicker>
            <h2 className="font-heading mt-4 max-w-3xl text-4xl text-zinc-50 sm:text-5xl">
              Built around hard problems, not a perk list.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
              Lotis is built around production systems. Client software and the RWA register need
              the same standard: ownership, tests, and a path that still works next year. The
              problems are open-ended. Progress comes from people who take the file seriously and
              shape the software around it.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {cultureValues.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <h3 className="font-heading text-2xl text-zinc-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
