"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FilmSlide = {
  href: string;
  image: string;
  kicker: string;
  title: string;
  summary: string;
};

const INTERVAL_MS = 7000;

export function FilmSlider({ slides, label }: { slides: readonly FilmSlide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const go = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0d10]" aria-roledescription="carousel" aria-label={label}>
      <div className="grid lg:grid-cols-[1.45fr_1fr]">
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">
          {slides.map((item, i) => (
            <div
              key={item.image}
              className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0c0d10]" />
          <div className="absolute inset-x-4 bottom-4 z-10 flex justify-between sm:inset-x-6 sm:bottom-6">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#07080A]/70 text-zinc-100 backdrop-blur-sm transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setIndex((current) => (current + 1) % slides.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#07080A]/70 text-zinc-100 backdrop-blur-sm transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase">{slide.kicker}</p>
            <h3 className="font-heading mt-4 text-3xl text-zinc-50 sm:text-4xl">{slide.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">{slide.summary}</p>
            <Link
              href={slide.href}
              className="mt-6 inline-flex items-center text-sm text-zinc-200 transition hover:text-[#c4a05a]"
            >
              Open project
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div
            className="mt-10 flex items-center justify-between gap-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex gap-2">
              {slides.map((item, i) => (
                <button
                  key={item.href}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#c4a05a]" : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(index - 1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(index + 1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-zinc-200 transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
