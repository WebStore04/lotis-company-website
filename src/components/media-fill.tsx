import { cn } from "@/lib/utils";
import Image from "next/image";

export function MediaFill({
  image,
  video,
  priority = false,
  sizes = "100vw",
  className,
}: {
  image: string;
  video?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <>
      {video ? (
        <video
          className={cn(
            "absolute inset-0 size-full object-cover motion-reduce:hidden",
            className
          )}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <Image
        src={image}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover",
          video ? "hidden motion-reduce:block" : "",
          className
        )}
      />
    </>
  );
}
