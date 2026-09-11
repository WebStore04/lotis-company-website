import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/about-hero";
import { AboutKaos } from "@/components/about-kaos";
import { MediaFill } from "@/components/media-fill";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { aboutTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lotis is a software development company. Flagship project: real-world asset tokenization.",
};

const ticker = [
  "TypeScript",
  "APIs",
  "Holder books",
  "Restricted transfers",
  "Property",
  "Allocated metal",
  "Production",
];

export default function AboutPage() {
  const loop = [...ticker, ...ticker, ...ticker];

  return (
    <div>
      <AboutHero />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <Reveal>
          <h2 className="font-heading max-w-[16ch] text-4xl text-zinc-50 sm:text-5xl">
            A company built by engineers, for the systems that have to stay up.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="space-y-5 text-base leading-8 text-zinc-400">
          <p>
            Lotis is a software development company. We write client products, internal tools,
            protocol software, and holder books. Headquarters is listed in New York, United States.
            The work is remote-friendly.
          </p>
          <p>
            The flagship project is real-world asset tokenization: property, allocated gold and
            silver, and titled financial lots. Gold and silver are tracks inside that project, not
            the firm.
          </p>
        </Reveal>
      </section>

      <AboutKaos />

      <section className="relative min-h-[72svh] overflow-hidden">
        <MediaFill
          image="/media/about-gathering.png"
          video="/media/clip-about-gather.mp4"
          className="animate-kenburns motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-[#07080A]/55" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-5 py-16 sm:px-8">
          <SectionKicker>The bench</SectionKicker>
          <h2 className="font-heading mt-4 max-w-3xl text-4xl text-zinc-50 sm:text-6xl">
            Small room. Production problems.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300">
            No stadium keynote. A working studio in New York and a remote-friendly bench. Reviews,
            written decisions, and software that still matches the file.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl overflow-hidden px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] lg:min-h-[520px] lg:rounded-r-none">
            <MediaFill image="/media/about-reliability.png" video="/media/clip-about-reli.mp4" />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-center rounded-[1.75rem] border border-white/10 bg-[#0c0d10] p-8 sm:p-12 lg:rounded-l-none lg:border-l-0">
          <SectionKicker>Reliability</SectionKicker>
          <h2 className="font-heading mt-4 text-3xl text-zinc-50 sm:text-5xl">
            Battle-tested software, not a launch-week stunt.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
            We focus on production systems: tests, ownership, and a path a team can still operate
            next year. Client products and the RWA register share that standard. Hype is cheap.
            Uptime is the work.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl overflow-hidden px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:pb-24">
        <Reveal className="flex flex-col justify-center rounded-[1.75rem] border border-white/10 bg-[#0c0d10] p-8 sm:p-12 lg:order-1 lg:rounded-r-none">
          <SectionKicker>Real-world work</SectionKicker>
          <h2 className="font-heading mt-4 text-3xl text-zinc-50 sm:text-5xl">
            Pathways for lots that already exist.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
            On the flagship, the chain is the transfer book. It does not replace the custodian or
            the recorder. We write the software that keeps those lanes clean so a lawyer can still
            ask for the file.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] lg:order-2 lg:min-h-[520px] lg:rounded-l-none">
          <MediaFill image="/media/about-file.png" video="/media/clip-about-file.mp4" />
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionKicker>What we build</SectionKicker>
            <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50 sm:text-5xl">
              One bench. Client software and a flagship register.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {aboutTracks.map((track, i) => (
              <Reveal key={track.title} delay={i * 0.06}>
                <article className="group relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10">
                  <MediaFill image={track.image} video={track.video} sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/50 to-black/10" />
                  <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6">
                    <h3 className="font-heading text-2xl text-zinc-50">{track.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{track.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-6 top-10 hidden h-64 w-24 overflow-hidden sm:block">
          <div className="animate-ticker-y flex flex-col motion-reduce:animate-none">
            {loop.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="py-3 text-[11px] tracking-[0.28em] text-zinc-600 uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionKicker>New York</SectionKicker>
            <h2 className="font-heading mt-4 text-4xl text-zinc-50 sm:text-5xl">
              Listed in the United States. Built wherever the file lives.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
              We do not invent a street address. The company is listed in New York. The hours follow
              the project. Meet when the work needs a room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/culture"
                className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm text-zinc-100 hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
              >
                Culture
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm text-zinc-100 hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-[#c4a05a] px-5 text-sm font-medium text-[#1a1408] hover:bg-[#d4b36a]"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.75rem] lg:min-h-[440px]">
              <MediaFill image="/media/about-street.png" video="/media/clip-about-street.mp4" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative min-h-[56svh] overflow-hidden">
        <MediaFill image="/media/about-systems.png" video="/media/clip-about-systems.mp4" />
        <div className="absolute inset-0 bg-[#07080A]/60" />
        <div className="relative mx-auto flex min-h-[56svh] max-w-7xl flex-col justify-end px-5 py-16 sm:px-8">
          <p className="font-heading max-w-3xl text-3xl text-zinc-50 sm:text-5xl">
            If you want software that has to hold up in production, this is the work.
          </p>
          <Link href="/careers" className="mt-8 text-sm text-zinc-300 hover:text-[#c4a05a]">
            Careers →
          </Link>
        </div>
      </section>
    </div>
  );
}
