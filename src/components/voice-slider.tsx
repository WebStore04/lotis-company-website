"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cultureVoices } from "@/lib/content";

const INTERVAL_MS = 8000;

export function VoiceSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const voice = cultureVoices[index];
  const count = cultureVoices.length;

  const go = useCallback((next: number) => {
    setPaused(true);
    setIndex(((next % count) + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0d10]"
      aria-roledescription="carousel"
      aria-label="How we work"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px]">
          {cultureVoices.map((item, i) => (
            <div
              key={item.label}
              className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c0d10]" />
          <div className="absolute inset-x-4 bottom-4 z-20 flex justify-between sm:inset-x-6 sm:bottom-6">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => go(index - 1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#07080A]/70 text-zinc-100 backdrop-blur-sm transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => go(index + 1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#07080A]/70 text-zinc-100 backdrop-blur-sm transition hover:border-[#c4a05a]/50 hover:text-[#c4a05a]"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
        <div
          className="relative z-20 flex flex-col justify-between p-8 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div>
            <p className="text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase">{voice.kicker}</p>
            <blockquote
              key={voice.label}
              className="font-heading mt-6 text-2xl leading-snug text-zinc-50 sm:text-3xl"
            >
              “{voice.quote}”
            </blockquote>
            <p className="mt-6 text-sm tracking-[0.18em] text-zinc-400 uppercase">{voice.label}</p>
          </div>
          <div className="relative z-20 mt-10 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {cultureVoices.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#c4a05a]" : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
