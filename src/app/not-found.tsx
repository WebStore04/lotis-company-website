import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image src="/media/hero-skyline.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#07080A]/75" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8">
        <p className="text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase">404</p>
        <h1 className="font-heading mt-4 max-w-xl text-5xl text-zinc-50 sm:text-6xl">This page is not on the register.</h1>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-[#c4a05a] px-7 text-sm font-medium text-[#1a1408]"
        >
          Back to Lotis
        </Link>
      </div>
    </div>
  );
}
