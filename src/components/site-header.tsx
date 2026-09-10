"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/locations", label: "Locations" },
  { href: "/approach", label: "Approach" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-colors duration-500",
        overlay ? "border-b border-transparent bg-transparent" : "border-b border-white/10 bg-[#07080A]/92 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/lotis-logo.png"
            alt="Lotis"
            width={36}
            height={36}
            className="size-9 rounded-sm object-cover"
            priority
          />
          <span className="text-[13px] font-medium tracking-[0.28em] text-zinc-100">LOTIS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] tracking-wide transition-colors",
                pathname === link.href ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-full bg-[#c4a05a] px-4 text-[13px] font-medium text-[#1a1408] transition hover:bg-[#d4b36a]"
          >
            Start a project
          </Link>
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
        <div className="fixed inset-0 top-[4.25rem] bg-[#07080A] md:hidden">
          <nav className="flex h-full flex-col justify-between px-6 py-8">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-heading py-2 text-4xl text-zinc-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#c4a05a] text-sm font-medium text-[#1a1408]"
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
