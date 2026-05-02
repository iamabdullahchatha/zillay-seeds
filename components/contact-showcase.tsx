"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Globe,
  MapPinned,
  PackageCheck,
  PackageSearch,
  PhoneCall,
  Sprout,
} from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */

type ContactShowcaseProps = {
  products: Product[];
  initialProductInterest?: string;
};

/* ═══════════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════════ */

const contactMethodCards = [
  {
    label: "Phone",
    title: siteConfig.phoneDisplay,
    text: "Call directly for seed availability, product selection, and grower inquiry support.",
    cta: "Call now",
    href: siteConfig.phoneHref,
    icon: PhoneCall,
    badgeClass: "bg-brand-seed text-leaf-950",
    surfaceClass:
      "bg-[linear-gradient(135deg,rgba(255,250,239,0.98),rgba(214,239,216,0.82))]",
    barClass: "bg-brand-seed",
  },
  {
    label: "Address",
    title: "Gujranwala Office",
    text: `${siteConfig.addressLines[0]} ${siteConfig.addressLines[1]}`,
    cta: "Get directions",
    href: siteConfig.mapsUrl,
    icon: MapPinned,
    badgeClass: "bg-brand-pepper text-white",
    surfaceClass:
      "bg-[linear-gradient(135deg,rgba(255,250,239,0.98),rgba(241,229,210,0.88))]",
    barClass: "bg-brand-pepper",
  },
  {
    label: "Facebook",
    title: "Zillay Seeds",
    text: "Open the official Facebook page for brand updates and direct page contact.",
    cta: "Open Facebook",
    href: siteConfig.facebookUrl,
    icon: Globe,
    badgeClass: "bg-brand-leaf text-white",
    surfaceClass:
      "bg-[linear-gradient(135deg,rgba(255,250,239,0.98),rgba(176,222,186,0.75))]",
    barClass: "bg-brand-leaf",
  },
  {
    label: "Google Maps",
    title: "View Location",
    text: "Find Zillay Seeds Pvt Ltd on Google Maps before visiting or sharing directions.",
    cta: "View map",
    href: siteConfig.mapsUrl,
    icon: ExternalLink,
    badgeClass: "bg-brand-watermelon text-white",
    surfaceClass:
      "bg-[linear-gradient(135deg,rgba(255,250,239,0.98),rgba(225,104,125,0.16))]",
    barClass: "bg-brand-watermelon",
  },
];

const supportItems = [
  {
    title: "Product availability inquiries",
    text: "Ask what vegetable seed products are available for your requirement.",
    icon: PackageSearch,
  },
  {
    title: "Seed variety information",
    text: "Request product details before selecting a seed option.",
    icon: Sprout,
  },
  {
    title: "Seasonal crop planning",
    text: "Share your crop window and location for more relevant discussion.",
    icon: CalendarDays,
  },
  {
    title: "Bulk/product questions",
    text: "Send questions for retailers, growers, and product buyers.",
    icon: PackageCheck,
  },
];

const heroStats = [
  { label: "Location", value: "Gujranwala" },
  { label: "Catalog", value: "Products" },
  { label: "Support", value: "Direct" },
];

const heroPackets = [
  "/images/products/packets/tomato.webp",
  "/images/products/packets/pepper.webp",
  "/images/products/packets/onion.webp",
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

const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.04 } },
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
   CONTACT SHOWCASE
═══════════════════════════════════════════════════════════════ */

export function ContactShowcase({
  products,
  initialProductInterest = "",
}: ContactShowcaseProps) {
  return (
    <div className="pb-24 md:pb-8">

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════ */}
      <AnimatedSection amount={0.14} className="section-shell pt-5 sm:pt-7">
        <div className="relative isolate overflow-hidden rounded-[2.15rem] border border-leaf-900/15 bg-leaf-950 px-5 py-8 text-white shadow-field sm:px-8 lg:px-10 lg:py-10">

          {/* Background image */}
          <Image
            src="/images/brand/zillay-seeds-gujranwala-02.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-20"
          />

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(118deg, rgba(12,42,27,0.98), rgba(23,58,37,0.90) 52%, rgba(71,45,34,0.70))",
            }}
          />

          {/* Single subtle grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          {/* Right glow blob */}
          <div
            aria-hidden="true"
            className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-seed/10 blur-[80px]"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.68fr] lg:items-center">

            {/* LEFT — Copy */}
            <motion.div
              variants={stagger(0.09)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-5"
            >
              {/* Eyebrow badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-seed backdrop-blur">
                  <PhoneCall className="h-3.5 w-3.5" />
                  Fast inquiry desk
                </span>
                <span className="rounded-full border border-white/14 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {siteConfig.locality}, {siteConfig.countryName}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
              >
                Get Seed Product Information{" "}
                <span className="text-[#A8D5A2]">Directly from Zillay Seeds</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-7 text-white/62 sm:text-lg"
              >
                Call or send an inquiry for vegetable seed availability,
                product selection, and crop planning support.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href={siteConfig.phoneHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_8px_28px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(255,255,255,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                  aria-label={`Call Zillay Seeds at ${siteConfig.phoneDisplay}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <PhoneCall className="relative h-4 w-4 text-[#2D6A4F]" />
                  <span className="relative">Call Now</span>
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/22 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  aria-label="View Zillay Seeds location on Google Maps"
                >
                  View Location
                  <MapPinned className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Info pills */}
              <motion.div
                variants={stagger(0.06)}
                className="grid gap-2.5 sm:grid-cols-2 lg:max-w-xl"
              >
                <motion.a
                  variants={fadeUp}
                  href={siteConfig.phoneHref}
                  className="group flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 p-3 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-seed text-leaf-950">
                    <PhoneCall className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-seed">
                      Direct phone
                    </span>
                    <span className="text-sm font-bold text-white">
                      {siteConfig.phoneDisplay}
                    </span>
                  </span>
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 p-3 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-seed">
                    <MapPinned className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-seed">
                      Office location
                    </span>
                    <span className="text-sm font-bold text-white">
                      Gujranwala, Pakistan
                    </span>
                  </span>
                </motion.a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={stagger(0.05)}
                className="grid grid-cols-3 gap-2.5 lg:max-w-xl"
              >
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-seed">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-base font-black text-white">
                      {stat.label === "Catalog"
                        ? `${products.length} Products`
                        : stat.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.62, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="overflow-hidden rounded-3xl border border-white/16 bg-white/8 p-3 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur">
                <div className="relative min-h-[19rem] overflow-hidden rounded-[1.4rem] border border-white/16 bg-soil-100">
                  <Image
                    src="/images/brand/zillay-seeds-gujranwala-01.jpg"
                    alt="Zillay Seeds Gujranwala office contact visual"
                    fill
                    priority
                    className="object-cover"
                    sizes="34vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/72 via-transparent to-transparent" />
                  {/* Address overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/16 bg-white/90 p-4 text-soil-800 shadow-soft backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-leaf">
                      Zillay Seeds Pvt Ltd HQ
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-soil-700">
                      {siteConfig.addressLines[0]}
                      <br />
                      {siteConfig.addressLines[1]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating packet strip */}
              <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/18 bg-white/10 p-2 shadow-field backdrop-blur">
                {heroPackets.map((packet) => (
                  <span
                    key={packet}
                    className="relative aspect-[4/3.8] overflow-hidden rounded-xl border border-white/20 bg-cream"
                  >
                    <Image
                      src={packet}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-contain p-1"
                    />
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          2. CONTACT METHOD CARDS
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-8">
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {contactMethodCards.map((card) => (
            <motion.a
              key={card.label}
              variants={scaleIn}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-[#173A25]/10 p-5 shadow-[0_2px_16px_rgba(23,58,37,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(23,58,37,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25 sm:p-6",
                card.surfaceClass,
              )}
            >
              {/* Top accent bar */}
              <div
                aria-hidden="true"
                className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", card.barClass)}
              />

              {/* Subtle top-right highlight */}
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-20 w-36 rotate-12 rounded-[4rem_0] bg-white/45 transition-transform duration-500 group-hover:translate-y-1"
              />

              <div className="relative z-10 flex h-full flex-col gap-4 pt-1">
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]",
                    card.badgeClass,
                  )}
                >
                  <card.icon className="h-5 w-5" />
                </div>

                {/* Label + title */}
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-brand-leaf">
                    {card.label}
                  </p>
                  <h2 className="font-display text-2xl leading-tight text-leaf-950 sm:text-3xl">
                    {card.title}
                  </h2>
                </div>

                {/* Body */}
                <p className="flex-1 text-sm leading-7 text-soil-700">
                  {card.text}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-leaf">
                  {card.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          3. SIDEBAR + FORM
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12] p-6 text-white shadow-[0_4px_40px_rgba(0,0,0,0.22)] sm:p-7 lg:sticky lg:top-28"
          >
            {/* Bg grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Glow blobs */}
            <div aria-hidden="true" className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#2D6A4F]/25 blur-[60px]" />
            <div aria-hidden="true" className="absolute -bottom-16 right-0 h-40 w-64 rounded-full bg-brand-seed/10 blur-[50px]" />

            <div className="relative z-10 flex flex-col gap-5">
              {/* Label */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-seed">
                <CheckCircle2 className="h-3.5 w-3.5" />
                How we can help
              </span>

              {/* Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                  Send the crop question. We will route the details clearly.
                </h2>
                <p className="text-sm leading-7 text-white/60">
                  Use the form for product interest, availability questions,
                  grower discussion, and seasonal seed planning.
                </p>
              </div>

              {/* Support items */}
              <div className="grid gap-2.5">
                {supportItems.map((support) => (
                  <div
                    key={support.title}
                    className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition hover:bg-white/[0.10]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-seed text-leaf-950">
                      <support.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {support.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        {support.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href={siteConfig.phoneHref}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-seed/25 bg-brand-seed px-5 py-4 text-leaf-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/40"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em]">
                    Prefer calling?
                  </span>
                  <span className="mt-1 block text-lg font-black">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
                <PhoneCall className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.aside>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.52, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm
              products={products}
              initialProductInterest={initialProductInterest}
            />
          </motion.div>

        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          4. BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-12 sm:mt-14">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12] shadow-[0_4px_40px_rgba(0,0,0,0.22)]"
        >
          {/* Bg */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div aria-hidden="true" className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#2D6A4F]/25 blur-[80px]" />
          <div aria-hidden="true" className="absolute -bottom-16 right-0 h-64 w-80 rounded-full bg-[#2D6A4F]/18 blur-[70px]" />

          <div className="relative z-10 grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-14">

            {/* Copy */}
            <motion.div variants={fadeUp} className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8D5A2]">
                <PhoneCall className="h-3.5 w-3.5" />
                Direct contact
              </span>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Prefer a quick seed product call?
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/55">
                Reach Zillay Seeds directly for product availability, seed
                selection questions, and location details.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={stagger(0.06)}
              className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
            >
              <motion.a
                variants={fadeUp}
                href={siteConfig.phoneHref}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_4px_20px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <PhoneCall className="relative h-4 w-4 text-[#2D6A4F]" />
                <span className="relative">Call Now</span>
              </motion.a>

              <motion.div variants={fadeUp} className="flex gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  Send Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <MapPinned className="h-4 w-4" />
                  Location
                </a>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          5. MOBILE STICKY BAR
      ══════════════════════════════════════════════ */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-2xl border border-white/60 bg-[rgb(var(--packet-paper)/0.95)] p-2 shadow-field backdrop-blur md:hidden">
        <a
          href={siteConfig.phoneHref}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-[0.9rem] bg-[#173A25] py-3 text-sm font-bold text-white transition hover:bg-[#1E5C35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
          aria-label={`Call Zillay Seeds at ${siteConfig.phoneDisplay}`}
        >
          <PhoneCall className="h-4 w-4 text-seed" />
          Call Now
        </a>
        <a
          href="#contact-form"
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-[0.9rem] border border-[#173A25]/15 bg-white/85 py-3 text-sm font-bold text-[#173A25] transition hover:bg-[#F0FAF4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/20"
        >
          Send Inquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

    </div>
  );
}