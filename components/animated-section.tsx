"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionTag =
  | "section"
  | "div"
  | "article"
  | "aside"
  | "ul"
  | "li"
  | "p"
  | "h2";

type AnimatedSectionProps = {
  "aria-label"?: string;
  as?: MotionTag;
  amount?: number;
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  stagger?: boolean;
};

type AnimatedItemProps = {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
};

const motionTags = {
  section: motion.section,
  div: motion.div,
  article: motion.article,
  aside: motion.aside,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const groupVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export function AnimatedSection({
  as = "section",
  amount = 0.22,
  children,
  className,
  delay = 0,
  id,
  stagger = false,
  "aria-label": ariaLabel,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={stagger ? groupVariants : revealVariants}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      id={id}
      aria-label={ariaLabel}
      className={cn("motion-safe:will-change-transform", className)}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedItem({
  as = "div",
  children,
  className,
}: AnimatedItemProps) {
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      variants={itemVariants}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className={cn("motion-safe:will-change-transform", className)}
    >
      {children}
    </MotionTag>
  );
}
