import { MediaFill } from "@/components/media-fill";
import { SectionKicker } from "@/components/section-kicker";

const words = ["Building", "software", "that", "has", "to", "stay", "up."];

const ticker = [
  "Software development",
  "New York",
  "Remote-friendly",
  "Product software",
  "Registers",
  "RWA flagship",
  "Property",
  "Gold",
  "Silver",
];

export function AboutHero() {
  const loop = [...ticker, ...ticker];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <MediaFill
        image="/media/about-hero.png"
        video="/media/clip-about.mp4"
        priority
        className="animate-breathe motion-reduce:animate-none"
      />
      <div className="pointer-events-none absolute -right-[8%] top-[18%] hidden h-[38%] w-[32%] overflow-hidden rounded-[1.4rem] border border-white/15 shadow-2xl lg:block">
        <MediaFill image="/media/about-street.png" video="/media/clip-about-street.mp4" className="animate-film-jitter" />
      </div>
      <div className="pointer-events-none absolute -left-[6%] bottom-[12%] hidden h-[32%] w-[28%] overflow-hidden rounded-[1.4rem] border border-white/15 shadow-2xl md:block">
        <MediaFill image="/media/about-reliability.png" video="/media/clip-about-reli.mp4" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/80 to-[#07080A]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/35 to-black/30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-28">
        <SectionKicker>About</SectionKicker>
        <h1 className="font-heading mt-5 max-w-[14ch] text-5xl leading-[0.95] text-zinc-50 sm:text-7xl lg:text-[5.4rem]">
          {words.map((word, i) => (
            <span
              key={word}
              className="about-word mr-[0.28em] last:mr-0"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
          Lotis is a software development company. A small bench of engineers on web products, APIs,
          protocol software, and the flagship: real-world asset tokenization.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/10 bg-[#07080A]/70 backdrop-blur-md">
        <div className="flex w-max animate-marquee-reverse gap-0 py-3 motion-reduce:animate-none">
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
    </section>
  );
}
