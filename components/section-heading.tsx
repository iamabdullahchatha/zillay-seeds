"use client";

import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <AnimatedSection
      as="div"
      stagger
      amount={0.28}
      className={cn(
        "max-w-3xl space-y-4",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <AnimatedItem
          as="p"
          className="text-sm font-semibold uppercase tracking-[0.32em] text-leaf-700"
        >
          {eyebrow}
        </AnimatedItem>
      ) : null}
      <AnimatedItem
        as="h2"
        className="font-display text-4xl leading-tight text-leaf-900 sm:text-5xl"
      >
        {title}
      </AnimatedItem>
      {description ? (
        <AnimatedItem
          as="p"
          className="text-base leading-8 text-soil-700 sm:text-lg"
        >
          {description}
        </AnimatedItem>
      ) : null}
    </AnimatedSection>
  );
}
