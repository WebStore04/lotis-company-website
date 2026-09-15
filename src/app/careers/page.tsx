import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageCard } from "@/components/image-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionKicker } from "@/components/section-kicker";
import { careerHighlights, careerWork, company, hiringSteps, openRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Lotis, a software development company. Flagship project: real-world asset tokenization.",
};

export default function CareersPage() {
  return (
    <div>
      <PageHero
        image="/media/careers-atelier.png"
        video="/media/clip-careers.mp4"
        kicker="Careers"
        title="Engineers building production software at Lotis."
      >
        <p>
          Lotis is a software development company. We ship products, APIs, and on-chain systems. Our
          flagship project is real-world asset tokenization.
        </p>
      </PageHero>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {careerHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="rounded-[1.3rem] border border-white/10 bg-[#0c0d10] p-6">
                <h2 className="text-lg text-zinc-50">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionKicker>What you will work on</SectionKicker>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50 sm:text-5xl">
            Client software and the RWA register, same standard.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {careerWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <ImageCard
                image={item.image}
                kicker="Workstream"
                title={item.title}
                body={item.body}
                className="min-h-[380px]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10">
        <Image src="/media/careers-why.png" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#07080A]/80" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionKicker>Why Lotis</SectionKicker>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div>
              <h3 className="font-heading text-2xl text-zinc-50">A software organization</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                We are a development company. Tokenization is the lead project, not a substitute for
                shipping product software.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-zinc-50">Remote-friendly, New York listed</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Collaborate asynchronously. Headquarters is New York, United States. Meet when the
                work needs it.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-zinc-50">High-ownership work</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Small team. You own interfaces, data, and the path to production. Mentorship and
                reviews are part of the job, not a perk list.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionKicker>Open roles</SectionKicker>
          <h2 className="font-heading mt-4 text-4xl text-zinc-50 sm:text-5xl">Join the Collective</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            Production software on the Lotis bench, including protocol work on the RWA register.
          </p>
        </Reveal>
        {openRoles.length === 0 ? (
          <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-white/10">
            <div className="relative min-h-[220px]">
              <Image src="/media/careers-empty.png" alt="" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#07080A]/70" />
              <div className="relative flex min-h-[220px] flex-col items-center justify-center px-6 py-16 text-center">
                <p className="font-heading text-3xl text-zinc-50">No jobs are currently available.</p>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-300">
                  We still read thoughtful notes. If you build production software and want to work on
                  product systems or the RWA project, send a CV to{" "}
                  <a href={`mailto:${company.careersEmail}`} className="text-[#c4a05a] hover:underline">
                    {company.careersEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 overflow-x-auto rounded-[1.6rem] border border-white/10">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-[11px] tracking-[0.22em] text-zinc-500 uppercase">
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Department</th>
                  <th className="px-6 py-4 font-medium">Location</th>
                  <th className="px-6 py-4 font-medium">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {openRoles.map((role) => (
                  <tr key={role.title} className="border-b border-white/10 last:border-b-0">
                    <td className="px-6 py-5">
                      <a
                        href={role.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-zinc-50 transition hover:text-[#c4a05a]"
                      >
                        {role.title}
                      </a>
                    </td>
                    <td className="px-6 py-5 text-sm text-zinc-400">{role.department}</td>
                    <td className="px-6 py-5 text-sm text-zinc-400">{role.location}</td>
                    <td className="px-6 py-5 text-right">
                      <a
                        href={role.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center rounded-full bg-[#c4a05a] px-5 text-sm font-medium text-[#1a1408] hover:bg-[#d4b36a]"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionKicker>Hiring process</SectionKicker>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl text-zinc-50">How it works</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            If you apply for a role at Lotis, we keep the process short, written down, and
            respectful. You hear from us at each stage.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step) => (
              <li key={step.n}>
                <p className="font-mono text-sm text-[#c4a05a]">{step.n}</p>
                <h3 className="mt-2 text-lg text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-zinc-500">
            How we work:{" "}
            <Link href="/culture" className="text-zinc-300 hover:text-[#c4a05a]">
              culture
            </Link>
            . Questions:{" "}
            <a href={`mailto:${company.careersEmail}`} className="text-zinc-300 hover:text-[#c4a05a]">
              {company.careersEmail}
            </a>
            . Tech notes can go to{" "}
            <a href={`mailto:${company.techEmail}`} className="text-zinc-300 hover:text-[#c4a05a]">
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
