"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/locations", label: "Locations" },
  { href: "/approach", label: "Approach" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07080A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/lotis-logo.png"
            alt="Lotis"
            width={36}
            height={36}
            className="size-9 rounded-sm"
            priority
          />
          <span className="text-[15px] font-medium tracking-[0.22em] text-zinc-100">
            LOTIS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <Button
            render={<Link href="/contact" />}
            className="h-9 rounded-full bg-[#c4a05a] px-4 text-sm text-[#1a1408] hover:bg-[#d4b36a]"
          >
            Start a project
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-zinc-200 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm text-zinc-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="pt-2 text-sm text-[#c4a05a]"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
