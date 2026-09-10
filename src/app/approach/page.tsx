import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Lotis issues real-world asset lots without replacing title or custody.",
};

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Approach</p>
      <h1 className="mt-4 text-4xl tracking-tight text-zinc-50 sm:text-5xl">
        The chain is the transfer book.
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-400">
        Lotis is for teams that already have an asset, a vault, a title file, or a true sale, and
        need a restricted on-chain unit that does not lie about it. We build the issuance software.
        We do not replace the custodian or the recorder.
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
        shop. If you want a lot that still exists when a lawyer asks for the file,{" "}
        <Link href="/contact" className="text-[#c4a05a] hover:underline">
          start here
        </Link>
        .
      </p>
    </div>
  );
}
