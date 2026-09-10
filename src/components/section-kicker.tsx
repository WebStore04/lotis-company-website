import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium tracking-[0.32em] text-[#c4a05a] uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
