import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Lotis projects: property, allocated gold and silver, credit, and funds.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Projects</p>
      <h1 className="mt-4 max-w-3xl text-4xl tracking-tight text-zinc-50 sm:text-5xl">
        One register. Several kinds of lot.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Gold and silver are part of Lotis, not the whole company. Property, metals, and financial
        lots use the same issuance model.
      </p>

      <div className="mt-14 space-y-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-24 rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{project.kicker}</p>
            <h2 className="mt-2 text-2xl text-zinc-50">{project.title}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{project.summary}</p>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-500">{project.detail}</p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-sm text-zinc-500">
        Have a lot that does not fit these four?{" "}
        <Link href="/contact" className="text-[#c4a05a] hover:underline">
          Send it anyway
        </Link>
        .
      </p>
    </div>
  );
}
