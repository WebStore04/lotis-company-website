import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Lotis builds software, including the flagship RWA project.",
};

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Approach</p>
      <h1 className="mt-4 text-4xl tracking-tight text-zinc-50 sm:text-5xl">
        Software with a real file behind it.
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-400">
        Lotis is a development company. We ship systems. On the RWA project, the chain is the
        transfer book. It does not replace the custodian or the recorder.
      </p>

      <ol className="mt-14 space-y-10">
        {steps.map((step) => (
          <li key={step.n} className="border-t border-white/10 pt-8">
            <p className="font-mono text-sm text-[#c4a05a]">{step.n}</p>
            <h2 className="mt-2 text-2xl text-zinc-50">{step.title}</h2>
            <p className="mt-3 leading-7 text-zinc-400">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-14 leading-7 text-zinc-500">
        If you want a permissionless coin with a gold photo on the website, this is the wrong
        shop. If you need software, or a lot that still exists when a lawyer asks for the file,{" "}
        <Link href="/contact" className="text-[#c4a05a] hover:underline">
          start here
        </Link>
        .
      </p>
    </div>
  );
}
