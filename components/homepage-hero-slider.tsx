"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPinned,
  PhoneCall,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */

type HeroAction = {
  label: string;
  href: string;
  kind: "primary" | "secondary";
  external?: boolean;
};

type HeroSlide = {
  eyebrow: string;
  headline: string;
  subheading: string;
  backgroundImage: string;
  /** Main featured product packet image (tall, portrait) */
  mainImage: string;
  /** Crop/field photo (landscape) */
  cropImage: string;
  /** Small icon / logo image */
  iconImage: string;
  /** One supporting side packet */
  supportImage: string;
  accent: "tomato" | "pepper" | "watermelon" | "leaf";
  productLabel: string;
  tags: [string, string, string];
  actions: HeroAction[];
};

/* ═══════════════════════════════════════════════════════════════
   SLIDES DATA
═══════════════════════════════════════════════════════════════ */

const slides: HeroSlide[] = [
  {
    eyebrow: "Premium hybrid vegetable seeds",
    headline: "Premium Hybrid Vegetable Seeds for Pakistan's Fields",
    subheading:
      "Zillay Seeds Pvt Ltd provides vegetable seed varieties for growers looking for stronger crop planning and reliable product selection.",
    backgroundImage:
      "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg",
    mainImage: "/images/products/packets/tomato.webp",
    cropImage:
      "/images/products/photos/tomato-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    iconImage: "/images/products/icons/tomato-seeds-icon-zillay-seeds.png",
    supportImage: "/images/products/packets/pepper.webp",
    accent: "tomato",
    productLabel: "Tomato F1",
    tags: ["Hybrid & OPV range", "Gujranwala based", "Tomato F1"],
    actions: [
      { label: "Explore Products", href: "/products", kind: "primary" },
      { label: "Contact Us", href: "/contact", kind: "secondary" },
    ],
  },
  {
    eyebrow: "Seed packet to crop plan",
    headline: "From Seed Packet to Better Harvest Planning",
    subheading:
      "Explore tomato, pepper, watermelon, squash, cucumber, cauliflower, onion, and other seasonal vegetable seed products.",
    backgroundImage: "/images/backgrounds/section-bg-zs.webp",
    mainImage: "/images/products/packets/pepper.webp",
    cropImage:
      "/images/products/photos/hot-pepper-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    iconImage: "/images/products/icons/hot-pepper-seeds-icon-zillay-seeds.png",
    supportImage: "/images/products/packets/tomato.webp",
    accent: "pepper",
    productLabel: "Pepper F1",
    tags: ["Seasonal variety", "Gujranwala based", "Pepper F1"],
    actions: [
      { label: "View Product Range", href: "/products", kind: "primary" },
      { label: "Call Now", href: siteConfig.phoneHref, kind: "secondary" },
    ],
  },
  {
    eyebrow: "Gujranwala based seed support",
    headline: "Vegetable Seeds Backed by Local Presence",
    subheading:
      "Based in Gujranwala, Zillay Seeds supports seed inquiries and product information for growers across Pakistan.",
    backgroundImage: "/images/brand/zillay-seeds-gujranwala-01.jpg",
    mainImage: "/images/products/packets/onion.webp",
    cropImage: "/images/brand/zillay-seeds-gujranwala-02.jpg",
    iconImage: "/images/brand/cropped-zillay-seeds-icon.webp",
    supportImage: "/images/products/packets/carrot.webp",
    accent: "leaf",
    productLabel: "Gujranwala",
    tags: ["Local support", "Grower trusted", "Gujranwala"],
    actions: [
      { label: "Visit Contact Page", href: "/contact", kind: "primary" },
      {
        label: "View Location",
        href: siteConfig.mapsUrl,
        kind: "secondary",
        external: true,
      },
    ],
  },
  {
    eyebrow: "Hybrid F1 choices",
    headline: "Hybrid F1 Seed Choices for Serious Growers",
    subheading:
      "Discover seed products designed for farmers, retailers, and seasonal crop planning.",
    backgroundImage: "/images/backgrounds/section-background2.png",
    mainImage: "/images/products/packets/watermelon.webp",
    cropImage:
      "/images/products/photos/water-melon-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    iconImage: "/images/products/icons/watermelon-seeds-icon-zillay-seeds.png",
    supportImage: "/images/products/packets/brinjal.webp",
    accent: "watermelon",
    productLabel: "Hybrid F1",
    tags: ["F1 genetics", "Premium quality", "Hybrid F1"],
    actions: [
      { label: "Browse F1 Seeds", href: "/products", kind: "primary" },
      { label: "Contact Zillay Seeds", href: "/contact", kind: "secondary" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   ACCENT COLOURS
═══════════════════════════════════════════════════════════════ */

const accentGlow: Record<HeroSlide["accent"], string> = {
  tomato:  "rgba(220,60,50,0.22)",
  pepper:  "rgba(210,80,30,0.22)",
  watermelon: "rgba(40,160,90,0.22)",
  leaf:    "rgba(40,120,60,0.22)",
};

const accentBadge: Record<HeroSlide["accent"], string> = {
  tomato:  "bg-red-500/15 text-red-200 border-red-400/25",
  pepper:  "bg-orange-500/15 text-orange-200 border-orange-400/25",
  watermelon: "bg-emerald-500/15 text-emerald-200 border-emerald-400/25",
  leaf:    "bg-green-500/15 text-green-200 border-green-400/25",
};

/* ═══════════════════════════════════════════════════════════════
   MOTION VARIANTS
═══════════════════════════════════════════════════════════════ */

const copyVariants: Variants = {
  enter: { opacity: 0, x: -28 },
  center: { opacity: 1, x: 0 },
  exit:  { opacity: 0, x: 28 },
};

const visualVariants: Variants = {
  enter: { opacity: 0, x: 28 },
  center: { opacity: 1, x: 0 },
  exit:  { opacity: 0, x: -28 },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ═══════════════════════════════════════════════════════════════
   ACTION BUTTON
═══════════════════════════════════════════════════════════════ */

function HeroActionButton({ action }: { action: HeroAction }) {
  const isPrimary = action.kind === "primary";

  const baseClass = isPrimary
    ? "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_8px_32px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
    : "inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/22 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30";

  const icon =
    action.href === siteConfig.phoneHref ? (
      <PhoneCall className="h-4 w-4" />
    ) : action.external ? (
      <ExternalLink className="h-4 w-4" />
    ) : (
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    );

  const content = (
    <>
      {isPrimary && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative">{action.label}</span>
      <span className="relative">{icon}</span>
    </>
  );

  if (!action.external && action.href.startsWith("/")) {
    return <Link href={action.href} className={baseClass}>{content}</Link>;
  }

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className={baseClass}
    >
      {content}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */

export function HomepageHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const slide = slides[activeIndex];
  const total = slides.length;

  /* Auto-advance */
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % total),
      6500,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, total]);

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <section
      aria-label="Zillay Seeds featured homepage slider"
      className="relative isolate overflow-hidden bg-[#0D2417]"
    >
      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.backgroundImage}
              alt=""
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2417]/98 via-[#0D2417]/80 to-[#0D2417]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D2417]/60" />

        {/* Decorative glow blob — keyed to slide */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`glow-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            aria-hidden="true"
            className="absolute right-0 top-0 h-[42rem] w-[52rem] -translate-y-1/4 translate-x-1/4 rounded-full blur-[90px]"
            style={{ background: `radial-gradient(circle, ${accentGlow[slide.accent]} 0%, transparent 70%)` }}
          />
        </AnimatePresence>

        {/* Subtle grid lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[90vh] gap-8 py-16 lg:min-h-[86vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">

          {/* LEFT — Copy */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`copy-${activeIndex}`}
              variants={copyVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-6"
              >
                {/* Eyebrow */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur",
                      accentBadge[slide.accent],
                    )}
                  >
                    <Sprout className="h-3.5 w-3.5" />
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
                >
                  {slide.headline}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={fadeUp}
                  className="max-w-lg text-base leading-7 text-white/65 sm:text-lg"
                >
                  {slide.subheading}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  {slide.actions.map((action) => (
                    <HeroActionButton key={action.label} action={action} />
                  ))}
                </motion.div>

                {/* Feature tags */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4"
                >
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-white/12 bg-white/6 px-3.5 py-1.5 text-xs font-semibold text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — Visual panel */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`visual-${activeIndex}`}
              variants={visualVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/*
                STRUCTURED IMAGE COMPOSITION:
                ┌───────────────────────────────┐
                │  ┌─────────────┐  ┌─────────┐ │
                │  │             │  │ support │ │
                │  │   MAIN      │  │ packet  │ │
                │  │  PACKET     │  └─────────┘ │
                │  │  (tall)     │  ┌─────────┐ │
                │  │             │  │  crop   │ │
                │  │             │  │  photo  │ │
                │  └─────────────┘  └─────────┘ │
                └───────────────────────────────┘
              */}
              <div className="grid grid-cols-[1fr_0.72fr] gap-3 sm:gap-4">

                {/* Main product packet — tall card */}
                <motion.div
                  animate={
                    reduceMotion ? undefined : { y: [0, -8, 0] }
                  }
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                      Zillay Seeds
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/50">
                      F1 Hybrid
                    </span>
                  </div>

                  {/* Main image */}
                  <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-white/5 to-white/10">
                    <Image
                      src={slide.mainImage}
                      alt={`${slide.productLabel} seed packet by Zillay Seeds`}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 640px) 55vw, (max-width: 1024px) 40vw, 380px"
                      className="object-contain p-5"
                    />
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center gap-3 border-t border-white/8 px-4 py-3">
                    <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-xl bg-white/12">
                      <Image
                        src={slide.iconImage}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain p-1"
                      />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                        Current Focus
                      </p>
                      <p className="text-sm font-black text-white/90">
                        {slide.productLabel}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right column — two stacked cards */}
                <div className="flex flex-col gap-3 sm:gap-4">

                  {/* Support packet card */}
                  <motion.div
                    animate={
                      reduceMotion ? undefined : { y: [0, 8, 0] }
                    }
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur"
                  >
                    <div className="flex items-center justify-between border-b border-white/8 px-3 py-2">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Also available
                      </span>
                    </div>
                    <div className="relative aspect-square bg-gradient-to-b from-white/5 to-white/10">
                      <Image
                        src={slide.supportImage}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 35vw, 200px"
                        className="object-contain p-4"
                      />
                    </div>
                  </motion.div>

                  {/* Crop photo card */}
                  <motion.div
                    animate={
                      reduceMotion ? undefined : { y: [0, -6, 0] }
                    }
                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="relative flex-1 overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur"
                  >
                    <div className="relative h-full min-h-[7rem]">
                      <Image
                        src={slide.cropImage}
                        alt={`${slide.productLabel} crop`}
                        fill
                        sizes="(max-width: 640px) 35vw, 200px"
                        className="object-cover"
                      />
                      {/* Overlay label */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                          Field crop
                        </p>
                        <p className="text-xs font-black text-white">
                          {slide.productLabel}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ── Slider Controls ─────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 py-5">

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
            {slides.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.productLabel}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}: ${s.productLabel}`}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30",
                    isActive
                      ? "w-10 bg-white"
                      : "w-2.5 bg-white/30 hover:bg-white/55",
                  )}
                />
              );
            })}
          </div>

          {/* Slide counter */}
          <span className="text-xs font-semibold tabular-nums text-white/35">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/14 bg-white/8 text-white/70 transition hover:bg-white/16 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#173A25] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}