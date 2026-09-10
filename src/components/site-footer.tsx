import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] tracking-[0.22em] text-zinc-200">LOTIS</p>
          <p className="mt-2 max-w-sm text-sm text-zinc-500">
            Real-world asset tokenization. Property, allocated gold and silver, and other titled
            lots.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <Link href="/projects" className="hover:text-zinc-200">
            Projects
          </Link>
          <Link href="/locations" className="hover:text-zinc-200">
            Locations
          </Link>
          <Link href="/approach" className="hover:text-zinc-200">
            Approach
          </Link>
          <Link href="/contact" className="hover:text-zinc-200">
            Contact
          </Link>
          <a href="mailto:hello@lotis.gold" className="hover:text-zinc-200">
            hello@lotis.gold
          </a>
        </div>
      </div>
    </footer>
  );
}
