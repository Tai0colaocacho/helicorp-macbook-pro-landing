import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#0071e3] dark:text-sky-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-[#6e6e73] dark:text-neutral-400">
          {description}
        </p>
      ) : null}

      {children}
    </Reveal>
  );
}