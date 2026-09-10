import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/locations", label: "Locations" },
  { href: "/approach", label: "Approach" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <Image
          src="/media/footer-night.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#07080A]/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[13px] tracking-[0.28em] text-zinc-200">LOTIS</p>
            <p className="font-heading mt-4 max-w-md text-3xl leading-tight text-zinc-50 sm:text-4xl">
              Software that ships. A register that still matches the file.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Software development company. Flagship project: real-world asset tokenization.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-zinc-100">
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={`mailto:${company.email}`}
              className="text-sm text-zinc-300 transition hover:text-[#c4a05a]"
            >
              {company.email}
            </a>
          </div>
        </div>
        <p className="mt-14 text-xs tracking-[0.18em] text-zinc-600 uppercase">
          New York · United States
        </p>
      </div>
    </footer>
  );
}
