import Image from "next/image";
import { SectionKicker } from "@/components/section-kicker";

export function PageHero({
  image,
  kicker,
  title,
  children,
}: {
  image: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover animate-kenburns motion-reduce:animate-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/75 to-[#07080A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/30 to-black/25" />
      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <SectionKicker>{kicker}</SectionKicker>
        <h1 className="font-heading mt-5 max-w-[16ch] text-4xl leading-[1.05] text-zinc-50 sm:text-6xl lg:text-[4.2rem]">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
