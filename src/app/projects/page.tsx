import type { Metadata } from "next";
import Link from "next/link";
import { rwaTracks, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Lotis software work, and the flagship real-world asset tokenization project.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Projects</p>
      <h1 className="mt-4 max-w-3xl text-4xl tracking-tight text-zinc-50 sm:text-5xl">
        Software first. RWA as the flagship.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Lotis takes software work. The project we are putting in front is real-world asset
        tokenization. Gold and silver are tracks inside that project.
      </p>

      <div className="mt-14 space-y-6">
        {services.map((service) => (
          <article
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{service.kicker}</p>
            <h2 className="mt-2 text-2xl text-zinc-50">{service.title}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{service.summary}</p>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-500">{service.detail}</p>
          </article>
        ))}
      </div>

      <div id="rwa" className="mt-16 scroll-mt-24">
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Flagship project</p>
        <h2 className="mt-3 text-3xl text-zinc-50">Real-world asset tokenization</h2>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Restricted on-chain units against a legal file. We write the software. Title desks and
          vaults still hold the asset.
        </p>
        <div className="mt-8 space-y-6">
          {rwaTracks.map((track) => (
            <article
              key={track.slug}
              id={track.slug}
              className="scroll-mt-24 rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{track.kicker}</p>
              <h3 className="mt-2 text-2xl text-zinc-50">{track.title}</h3>
              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{track.summary}</p>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-500">{track.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-12 text-sm text-zinc-500">
        Software build, or a titled lot?{" "}
        <Link href="/contact" className="text-[#c4a05a] hover:underline">
          Start a project
        </Link>
        .
      </p>
    </div>
  );
}
