import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Lotis builds software, including the flagship RWA project.",
};

export default function ApproachPage() {
  return (
    <div>
      <PageHero
        image="/media/protocol-fiber.png"
        kicker="Approach"
        title="Software with a real file behind it."
      >
        Lotis is a development company. We ship systems. On the RWA project, the chain is the
        transfer book. It does not replace the custodian or the recorder.
      </PageHero>

      <ol className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-8 sm:py-24">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.05}>
            <li className="grid overflow-hidden rounded-[1.75rem] border border-white/10 lg:grid-cols-2">
              <div className={`relative min-h-[260px] lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={step.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/40 to-transparent" />
                <p className="font-heading absolute bottom-6 left-6 text-6xl text-white/80">{step.n}</p>
              </div>
              <div className="flex flex-col justify-center bg-[#0c0d10] p-8 sm:p-12">
                <h2 className="font-heading text-3xl text-zinc-50 sm:text-4xl">{step.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{step.body}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <p className="max-w-2xl leading-8 text-zinc-500">
          If you need software, or a lot that still exists when a lawyer asks for the file,{" "}
          <Link href="/contact" className="text-[#c4a05a] hover:underline">
            start here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
