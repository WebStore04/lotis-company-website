import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { MediaFill } from "@/components/media-fill";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a Lotis software project or talk about the RWA register.",
};

export default function ContactPage() {
  return (
    <div className="grid min-h-[100svh] lg:grid-cols-2">
      <div className="relative hidden min-h-[420px] lg:block">
        <MediaFill image="/media/contact-nyc.png" video="/media/clip-rain.mp4" priority sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/30 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-12">
          <p className="text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase">New York</p>
          <p className="font-heading mt-3 max-w-sm text-4xl text-zinc-50">Tell us what has to exist when we are done.</p>
        </div>
      </div>
      <div className="relative h-64 lg:hidden">
        <MediaFill image="/media/contact-nyc.png" video="/media/clip-rain.mp4" sizes="100vw" />
        <div className="absolute inset-0 bg-[#07080A]/40" />
      </div>
      <div className="flex items-center bg-[#0a0b0e] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto w-full max-w-lg">
          <p className="text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase">Contact</p>
          <h1 className="font-heading mt-4 text-4xl text-zinc-50 sm:text-5xl">Start a project</h1>
          <p className="mt-5 leading-7 text-zinc-400">
            Product software, protocol work, or the RWA register. Say which, and what has to exist
            when we are done.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Direct:{" "}
            <a href={`mailto:${company.email}`} className="text-zinc-300 hover:text-[#c4a05a]">
              {company.email}
            </a>
          </p>
          <div className="mt-10">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
