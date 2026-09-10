import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a Lotis issuance for property, gold, silver, or another titled lot.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Contact</p>
        <h1 className="mt-4 text-4xl tracking-tight text-zinc-50">Start a lot</h1>
        <p className="mt-5 leading-7 text-zinc-400">
          Send the asset class, the jurisdiction, and where title or metal sits today. We reply on
          whether it can be issued as a Lotis lot.
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          Direct:{" "}
          <a href="mailto:hello@lotis.gold" className="text-zinc-300 hover:text-[#c4a05a]">
            hello@lotis.gold
          </a>
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 sm:p-8">
        <InquiryForm />
      </div>
    </div>
  );
}
