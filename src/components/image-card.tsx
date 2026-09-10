import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ImageCard({
  href,
  image,
  kicker,
  title,
  body,
  className,
}: {
  href?: string;
  image: string;
  kicker: string;
  title: string;
  body?: string;
  className?: string;
}) {
  const inner = (
    <>
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/35 to-black/10" />
      <div className="relative mt-auto p-6 sm:p-7">
        <p className="text-[11px] tracking-[0.28em] text-[#c4a05a] uppercase">{kicker}</p>
        <h3 className="font-heading mt-2 text-2xl text-zinc-50 sm:text-3xl">{title}</h3>
        {body ? <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">{body}</p> : null}
      </div>
    </>
  );

  const classes = cn(
    "group relative flex min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[420px]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <article className={classes}>{inner}</article>;
}
