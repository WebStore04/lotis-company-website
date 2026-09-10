import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a Lotis software project or talk about the RWA register.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-xs tracking-[0.28em] text-[#c4a05a] uppercase">Contact</p>
        <h1 className="mt-4 text-4xl tracking-tight text-zinc-50">Start a project</h1>
        <p className="mt-5 leading-7 text-zinc-400">
          Product software, protocol work, or the RWA register. Say which, and what has to exist
          when we are done.
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          Direct:{" "}
          <a href={`mailto:${company.email}`} className="text-zinc-300 hover:text-[#c4a05a]">
            {company.email}
          </a>
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-6 sm:p-8">
        <InquiryForm />
      </div>
    </div>
  );
}
