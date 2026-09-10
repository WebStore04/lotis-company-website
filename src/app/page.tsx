import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { locations, rwaTracks, services, steps } from "@/lib/content";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/lotis-cover.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/25 via-[#07080A]/60 to-[#07080A]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">
            Software development company
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight text-zinc-50 sm:text-6xl">
            We write software.
            <br />
            RWA is the main project.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Lotis is a software shop. We build products, APIs, and registers. Our flagship project
            is real-world asset tokenization: property, allocated gold and silver, and titled lots.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/projects" />}
              className="h-11 rounded-full bg-[#c4a05a] px-6 text-[#1a1408] hover:bg-[#d4b36a]"
            >
              View work
            </Button>
            <Button
              variant="outline"
              render={<Link href="/contact" />}
              className="h-11 rounded-full border-white/20 bg-transparent px-6 text-zinc-100 hover:bg-white/5"
            >
              Start a project
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl tracking-tight text-zinc-50 sm:text-3xl">
            Not an RWA company that also codes.
          </h2>
          <p className="mt-4 leading-7 text-zinc-400">
            The company is software development. The RWA register is what we are shipping first,
            the way a protocol team ships one network and still remains a software firm.
          </p>
        </div>
        <div className="space-y-4 leading-7 text-zinc-400">
          <p>
            Client product work and the RWA project share the same bench: TypeScript, APIs,
            permissions, and code that has to keep running after launch.
          </p>
          <p>
            We are not a memecoin factory. If a project needs a ticker more than it needs
            software, it is the wrong fit.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">What we are</p>
          <h2 className="mt-3 text-2xl text-zinc-50 sm:text-3xl">Software we build</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/projects#${service.slug}`}
                className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 transition-colors hover:border-[#c4a05a]/40"
              >
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{service.kicker}</p>
                <h3 className="mt-3 text-xl text-zinc-50">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Flagship project</p>
            <h2 className="mt-3 text-2xl text-zinc-50 sm:text-3xl">Real-world asset tokenization</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              The main project. Property, gold, silver, and financial lots on one software
              register. Gold and silver are workstreams, not the company name.
            </p>
          </div>
          <Link href="/projects#rwa" className="hidden text-sm text-zinc-400 hover:text-zinc-100 sm:block">
            Project detail
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rwaTracks.map((track) => (
            <Link
              key={track.slug}
              href={`/projects#${track.slug}`}
              className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 transition-colors hover:border-[#c4a05a]/40"
            >
              <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{track.kicker}</p>
              <h3 className="mt-3 text-xl text-zinc-50">{track.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{track.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Approach</p>
          <h2 className="mt-3 text-2xl text-zinc-50 sm:text-3xl">How a Lotis project runs</h2>
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
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">RWA locations</p>
              <h2 className="mt-3 max-w-lg text-2xl text-zinc-50 sm:text-3xl">
                Where the flagship project can sit
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
