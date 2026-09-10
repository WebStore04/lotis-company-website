import { marqueeItems } from "@/lib/content";

export function CapabilityMarquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0a0b0e]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0b0e] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0b0e] to-transparent sm:w-28" />
      <div className="flex w-max animate-marquee gap-0 py-4 motion-reduce:animate-none">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center px-5 text-[11px] tracking-[0.28em] text-zinc-400 uppercase"
          >
            <span className="mr-5 inline-block size-1 rounded-full bg-[#c4a05a]/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
