import { MediaFill } from "@/components/media-fill";
import { aboutKaos } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export function AboutKaos() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0b0e] py-16 sm:py-24">
      <p className="mx-auto mb-10 max-w-7xl px-5 text-[11px] tracking-[0.32em] text-[#c4a05a] uppercase sm:px-8">
        Kaos / the work in motion
      </p>

      <div className="grid grid-cols-2 gap-3 px-5 sm:hidden">
        {aboutKaos.map((tile) => (
          <div key={tile.video} className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
            <MediaFill image={tile.image} video={tile.video} sizes="50vw" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto hidden h-[78vh] max-w-7xl sm:block">
        {aboutKaos.map((tile) => (
          <div
            key={tile.video}
            className={cn(
              "pointer-events-none absolute aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
              tile.className
            )}
            style={{ "--tilt": tile.tilt } as CSSProperties}
          >
            <MediaFill image={tile.image} video={tile.video} sizes="40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
