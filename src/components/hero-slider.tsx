"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { heroSlides } from "@/lib/content";

const INTERVAL_MS = 6500;

export function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => go(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [go, index, paused, reduce]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <section
      className="relative h-[100svh] min-h-[640px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Lotis work"
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${reduce ? "" : "animate-kenburns"}`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/70 to-[#07080A]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/25 to-black/20" />

      <div className="relative flex h-full flex-col justify-end px-5 pb-10 pt-28 sm:px-10 sm:pb-14 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium tracking-[0.32em] text-[#c4a05a] uppercase">
              {slide.kicker}
            </p>
            <h1 className="font-heading mt-5 max-w-[18ch] text-[2.6rem] leading-[1.05] text-zinc-50 sm:text-6xl lg:text-[4.4rem]">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              {slide.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#c4a05a] px-7 text-sm font-medium text-[#1a1408] transition hover:bg-[#d4b36a]"
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm text-zinc-100 transition hover:bg-white/10"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div className="flex w-full max-w-md flex-col gap-4 lg:items-end">
            <div className="flex w-full gap-2" role="tablist" aria-label="Slides">
              {heroSlides.map((item, i) => (
                <button
                  key={item.image}
                  type="button"
                  aria-label={`Show slide ${i + 1}: ${item.kicker}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => go(i)}
                  className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/20"
                >
                  <span
                    key={`${i}-${i === index ? index : "idle"}-${paused}`}
                    className={`absolute inset-y-0 left-0 bg-[#c4a05a] ${
                      i === index && !reduce && !paused ? "animate-slide-progress" : ""
                    }`}
                    style={{
                      width: i === index ? (reduce || paused ? "100%" : undefined) : i < index ? "100%" : "0%",
                    }}
                  />
                </button>
              ))}
            </div>
            <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
