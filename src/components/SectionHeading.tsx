import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
        {index ? <span className="font-mono text-lime-deep">{index}</span> : null}
        {index ? <span className="h-px w-6 bg-hairline" /> : null}
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.12] tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
