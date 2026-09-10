import type { Metadata } from "next";
import Link from "next/link";
import { careerHighlights, careerWork, company, hiringSteps, openRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Lotis, a software development company. Flagship project: real-world asset tokenization.",
};

export default function CareersPage() {
  return (
    <div>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Careers</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl">
            Engineers building production software at Lotis.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Lotis is a software development company. We ship products, APIs, and on-chain systems.
            Our flagship project is real-world asset tokenization. If you want to write software
            that has to hold up in production, this is the work.
          </p>
          <a
            href={`mailto:${company.careersEmail}`}
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[#c4a05a] px-6 text-sm font-medium text-[#1a1408] hover:bg-[#d4b36a]"
          >
            Email {company.careersEmail}
          </a>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {careerHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 p-5">
              <h2 className="text-lg text-zinc-50">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">What you will work on</p>
        <h2 className="mt-3 max-w-2xl text-3xl tracking-tight text-zinc-50">
          Client software and the RWA register, same standard.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {careerWork.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl text-zinc-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Why Lotis</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-xl text-zinc-50">A software organization</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                We are a development company. Tokenization is the lead project, not a substitute
                for shipping product software.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-zinc-50">Remote-friendly, New York listed</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Collaborate asynchronously. Headquarters is New York, United States. Meet when the
                work needs it.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-zinc-50">High-ownership work</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Small team. You own interfaces, data, and the path to production. Mentorship and
                reviews are part of the job, not a perk list.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Open roles</p>
        <h2 className="mt-3 text-3xl tracking-tight text-zinc-50">Current openings</h2>
        {openRoles.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 px-6 py-12 text-center">
            <p className="text-lg text-zinc-200">No jobs are currently available.</p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
              We still read thoughtful notes. If you build production software and want to work on
              product systems or the RWA project, send a CV to{" "}
              <a href={`mailto:${company.careersEmail}`} className="text-[#c4a05a] hover:underline">
                {company.careersEmail}
              </a>
              .
            </p>
          </div>
        ) : (
          <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
            {openRoles.map((role) => (
              <li key={role.title} className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-zinc-50">{role.title}</p>
                  <p className="text-sm text-zinc-500">{role.location}</p>
                </div>
                <a
                  href={`mailto:${company.careersEmail}?subject=${encodeURIComponent(role.title)}`}
                  className="text-sm text-[#c4a05a] hover:underline"
                >
                  Apply
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Hiring process</p>
          <h2 className="mt-3 max-w-2xl text-3xl tracking-tight text-zinc-50">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            If you apply for a role at Lotis, we keep the process short, written down, and
            respectful. You hear from us at each stage.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step) => (
              <li key={step.n}>
                <p className="font-mono text-sm text-[#c4a05a]">{step.n}</p>
                <h3 className="mt-2 text-lg text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-zinc-500">
            Questions:{" "}
            <a href={`mailto:${company.careersEmail}`} className="text-zinc-300 hover:text-[#c4a05a]">
              {company.careersEmail}
            </a>
            . Tech notes can go to{" "}
            <a
              href={`mailto:${company.techEmail}`}
              className="text-zinc-300 hover:text-[#c4a05a]"
            >
              {company.techEmail}
            </a>
            . Client work still starts on{" "}
            <Link href="/contact" className="text-zinc-300 hover:text-[#c4a05a]">
              the contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
