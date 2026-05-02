"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  MapPinned,
  PackageCheck,
  PhoneCall,
  ScanSearch,
  Sprout,
  Warehouse,
  Wheat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { AnimatedItem, AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════════ */

const heroBadges = [
  "Gujranwala Based",
  "Vegetable Seeds",
  "Farmer Focused",
  "Hybrid & OPV Range",
];

const storyCards = [
  {
    label: "Local presence",
    text: "A Gujranwala base for direct product inquiries and grower communication.",
    icon: MapPinned,
  },
  {
    label: "Focused catalog",
    text: "Vegetable seed categories arranged around practical crop planning.",
    icon: Warehouse,
  },
  {
    label: "Selection mindset",
    text: "Hybrid and OPV options presented clearly for growers and buyers.",
    icon: BadgeCheck,
  },
];

const reasons = [
  {
    title: "Vegetable Seed Focus",
    text: "A catalog shaped around practical vegetable crops instead of a scattered general-agri assortment.",
    icon: Sprout,
  },
  {
    title: "Hybrid & OPV Varieties",
    text: "Seed options that support both premium hybrid demand and selected OPV requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Local Presence",
    text: "A real Gujranwala base with direct buyer and farmer interaction.",
    icon: MapPinned,
  },
  {
    title: "Farmer-Oriented",
    text: "A grower-first approach with practical selection and communication.",
    icon: Wheat,
  },
  {
    title: "Product Variety",
    text: "Wide range of vegetable seed categories for real demand.",
    icon: Warehouse,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Selection",
    text: "Seed lines are chosen around real demand and crop planning.",
    icon: ScanSearch,
  },
  {
    step: "02",
    title: "Sourcing",
    text: "Focused on dependable quality and clarity.",
    icon: Sprout,
  },
  {
    step: "03",
    title: "Packaging",
    text: "Clean presentation for easy buyer decisions.",
    icon: PackageCheck,
  },
  {
    step: "04",
    title: "Farmer Support",
    text: "Direct contact for guidance and support.",
    icon: PhoneCall,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MOTION VARIANTS
═══════════════════════════════════════════════════════════════ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = (delay = 0.07): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ═══════════════════════════════════════════════════════════════
   SHARED PRIMITIVES
═══════════════════════════════════════════════════════════════ */

function SectionShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        dark
          ? "border-white/18 bg-white/10 text-[#A8D5A2]"
          : "border-[#173A25]/12 bg-[#F0FAF4] text-[#2D6A4F]",
      )}
    >
      <Sprout className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT SHOWCASE
═══════════════════════════════════════════════════════════════ */

export function AboutShowcase() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div className="overflow-x-hidden pb-8 sm:pb-12">

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[92vh] overflow-hidden bg-[#0A1F12] text-white"
      >
        {/* Background image with parallax */}
        <motion.div
          style={{ y: bgY }}
          aria-hidden="true"
          className="absolute inset-0 scale-[1.14]"
        >
          <Image
            src="/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan-02.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </motion.div>

        {/* Layered gradient overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[#0A1F12]/96 via-[#173A25]/80 to-[#0A1F12]/70" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A1F12]/80 via-transparent to-transparent" />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Glow blobs */}
        <div aria-hidden="true" className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#2D6A4F]/25 blur-[100px]" />
        <div aria-hidden="true" className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#1E5C35]/20 blur-[90px]" />

        <SectionShell className="relative z-10 flex min-h-[92vh] flex-col justify-center py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* LEFT — Copy */}
            <motion.div
              variants={stagger(0.09)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel dark>Brand story and trust</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.75rem]"
              >
                Seeds Selected for Growers Who Care About{" "}
                <span className="text-[#A8D5A2]">Harvest Quality</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-7 text-white/62 sm:text-lg"
              >
                Zillay Seeds Pvt Ltd is a Gujranwala based vegetable seed company
                with a focused range for farmers, retailers, and crop planners
                looking for clear product selection in Pakistan.
              </motion.p>

              {/* Badges */}
              <motion.div
                variants={stagger(0.06)}
                className="flex flex-wrap gap-2"
              >
                {heroBadges.map((badge) => (
                  <motion.span
                    key={badge}
                    variants={fadeUp}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href="/products"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_8px_28px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(255,255,255,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Explore Products</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  Contact Zillay Seeds
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Brand story card */}
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Main image card */}
              <div className="overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur">
                <div className="relative h-64 w-full sm:h-80 lg:h-72 xl:h-80">
                  <Image
                    src="/images/brand/zillay-seeds-gujranwala-02.jpg"
                    alt="Zillay Seeds Gujranwala"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F12]/80 via-transparent to-transparent" />

                  {/* Floating brand label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2.5 rounded-2xl border border-white/18 bg-white/12 px-4 py-2.5 backdrop-blur">
                      <Sprout className="h-4 w-4 text-[#A8D5A2]" />
                      <span className="text-sm font-bold text-white">Zillay Seeds Pvt Ltd</span>
                    </div>
                  </div>
                </div>

                {/* Brand story text inside card */}
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="p-5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8D5A2]">
                    Brand Story
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    Built for Pakistan's Growers
                  </h2>
                  <p className="mt-2.5 text-sm leading-6 text-white/60">
                    Built around vegetable seed availability, product clarity, and direct
                    support for growers and seed buyers.
                  </p>
                </motion.div>
              </div>

              {/* Story stat cards */}
              <div className="mt-3 grid grid-cols-3 gap-3">
                {storyCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/8 p-3.5 backdrop-blur transition hover:bg-white/12"
                  >
                    <card.icon className="h-4.5 w-4.5 text-[#A8D5A2]" />
                    <p className="text-xs font-bold text-white">{card.label}</p>
                    <p className="text-[10px] leading-5 text-white/50">{card.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </SectionShell>
      </section>

      {/* ══════════════════════════════════════════════
          2. WHY CHOOSE US
      ══════════════════════════════════════════════ */}
      <AnimatedSection>
        <SectionShell className="mt-20 sm:mt-24">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Choose Us</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-3xl font-black leading-tight text-[#173A25] sm:text-4xl lg:text-5xl"
            >
              A Strong Agricultural Foundation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-7 text-[#4A5E4B]"
            >
              Built around real grower needs — not generic catalog promises.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={scaleIn}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group flex flex-col gap-3 rounded-3xl border border-[#173A25]/10 bg-white p-6 shadow-[0_2px_16px_rgba(23,58,37,0.06)] transition hover:border-[#173A25]/20 hover:shadow-[0_8px_32px_rgba(23,58,37,0.10)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0FAF4] transition group-hover:bg-[#173A25]">
                  <reason.icon className="h-5 w-5 text-[#2D6A4F] transition group-hover:text-white" />
                </span>
                <h3 className="text-base font-black text-[#173A25]">{reason.title}</h3>
                <p className="text-sm leading-6 text-[#4A5E4B]">{reason.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          3. PROCESS / HOW WE WORK
      ══════════════════════════════════════════════ */}
      <AnimatedSection>
        <SectionShell className="mt-20 sm:mt-24">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12]">
            {/* Background grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Glow blob */}
            <div aria-hidden="true" className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#2D6A4F]/25 blur-[80px]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-14">
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"
              >
                {/* Left label + heading */}
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <SectionLabel dark>Process</SectionLabel>
                  <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                    How We Work
                  </h2>
                  <p className="text-sm leading-7 text-white/55 sm:text-base">
                    A clear path from seed selection to inquiry support helps buyers
                    understand the Zillay Seeds range without extra effort.
                  </p>
                  {/* Connector line — decorative */}
                  <div className="hidden h-px w-16 bg-gradient-to-r from-[#A8D5A2]/60 to-transparent lg:block" />
                </motion.div>

                {/* Steps grid */}
                <motion.div
                  variants={stagger(0.08)}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {processSteps.map((step) => (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/12"
                    >
                      {/* Big step number — decorative */}
                      <span
                        aria-hidden="true"
                        className="absolute right-4 top-3 text-6xl font-black leading-none text-white/5 select-none"
                      >
                        {step.step}
                      </span>

                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/10">
                            <step.icon className="h-4.5 w-4.5 text-[#A8D5A2]" />
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8D5A2]">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-base font-black text-white">{step.title}</h3>
                        <p className="text-sm leading-6 text-white/55">{step.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SectionShell>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          4. CTA SECTION
      ══════════════════════════════════════════════ */}
      <AnimatedSection>
        <SectionShell className="mt-20 sm:mt-24">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative isolate overflow-hidden rounded-3xl border border-[#173A25]/12 bg-white shadow-[0_4px_40px_rgba(23,58,37,0.08)]"
          >
            {/* Left green accent bar */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#2D6A4F] via-[#173A25] to-[#2D6A4F]"
            />
            {/* Subtle radial glow */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2D6A4F]/8 blur-[60px]"
            />

            <div className="relative z-10 grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2D6A4F]">
                  Ready to talk seeds?
                </p>
                <h2 className="text-3xl font-black leading-tight text-[#173A25] sm:text-4xl">
                  Connect with Zillay Seeds for product inquiries.
                </h2>
                <p className="max-w-xl text-base leading-7 text-[#4A5E4B]">
                  Call, message, or view the Gujranwala location when you need seed
                  product information or availability guidance.
                </p>
              </motion.div>

              <motion.div
                variants={stagger(0.06)}
                className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              >
                <motion.a
                  variants={fadeUp}
                  href={siteConfig.phoneHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-[#173A25] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,58,37,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1E5C35] hover:shadow-[0_8px_28px_rgba(23,58,37,0.30)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <PhoneCall className="relative h-4 w-4 text-[#A8D5A2]" />
                  <span className="relative">Call Now</span>
                </motion.a>

                <motion.div
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#173A25]/14 bg-[#F0FAF4] px-5 py-3.5 text-sm font-bold text-[#173A25] transition hover:-translate-y-0.5 hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#173A25]/14 bg-[#F0FAF4] px-5 py-3.5 text-sm font-bold text-[#173A25] transition hover:-translate-y-0.5 hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <MapPinned className="h-4 w-4" />
                    Location
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      <div className="mt-16 sm:mt-20" />
    </div>
  );
}