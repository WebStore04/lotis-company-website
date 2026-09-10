import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { locations, projects, steps } from "@/lib/content";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/lotis-cover.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/30 via-[#07080A]/55 to-[#07080A]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">
            Real-world asset tokenization
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight text-zinc-50 sm:text-6xl">
            Issue the lot.
            <br />
            Keep the asset real.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Lotis is software for titled, vaulted, and allocated assets. Property first. Gold and
            silver as part of the same register. Not a ticker looking for an underlying.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/projects" />}
              className="h-11 rounded-full bg-[#c4a05a] px-6 text-[#1a1408] hover:bg-[#d4b36a]"
            >
              View projects
            </Button>
            <Button
              variant="outline"
              render={<Link href="/locations" />}
              className="h-11 rounded-full border-white/20 bg-transparent px-6 text-zinc-100 hover:bg-white/5"
            >
              Browse locations
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl tracking-tight text-zinc-50 sm:text-3xl">
            We are not a memecoin factory.
          </h2>
          <p className="mt-4 text-zinc-400 leading-7">
            The work is closer to a title desk and a vault than to a token launch. If the deed,
            the bar list, or the true-sale file cannot be shown, there is no lot to issue.
          </p>
        </div>
        <div className="space-y-4 text-zinc-400 leading-7">
          <p>
            Each unit on Lotis points at a real-world lot: a parcel, an allocated gold or silver
            position, a fund interest, or a receivable that has already moved.
          </p>
          <p>
            Holders are named. Transfers are restricted. The on-chain record is the transfer book,
            not a substitute for custody or title.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Projects</p>
              <h2 className="mt-3 text-2xl text-zinc-50 sm:text-3xl">What we tokenize</h2>
            </div>
            <Link href="/projects" className="hidden text-sm text-zinc-400 hover:text-zinc-100 sm:block">
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects#${project.slug}`}
                className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 transition-colors hover:border-[#c4a05a]/40"
              >
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{project.kicker}</p>
                <h3 className="mt-3 text-xl text-zinc-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Approach</p>
        <h2 className="mt-3 text-2xl text-zinc-50 sm:text-3xl">Four steps, one register</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n}>
              <p className="font-mono text-sm text-[#c4a05a]">{step.n}</p>
              <h3 className="mt-2 text-lg text-zinc-100">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
            </div>
          ))}
        </div>
        <Link href="/approach" className="mt-8 inline-block text-sm text-zinc-400 hover:text-zinc-100">
          Read the approach
        </Link>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Locations</p>
              <h2 className="mt-3 max-w-lg text-2xl text-zinc-50 sm:text-3xl">
                Where the underlying can sit
              </h2>
            </div>
            <Link href="/locations" className="hidden text-sm text-zinc-400 hover:text-zinc-100 sm:block">
              Browse locations
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.region}
                href="/locations"
                className="rounded-xl border border-white/10 px-5 py-4 hover:border-[#c4a05a]/40"
              >
                <p className="text-zinc-100">{location.region}</p>
                <p className="mt-1 text-sm text-zinc-500">{location.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
