"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Leaf,
  Mail,
  Map,
  Phone,
  Sprout,
  Tractor,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { HomepageHeroSlider } from "@/components/homepage-hero-slider";
import { ProductCard } from "@/components/product-card";
import { SafeImage } from "@/components/safe-image";
import { SectionHeading } from "@/components/section-heading";
import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export type FamilyCard = {
  title: string;
  description: string;
  href: string;
  image?: string;
  accent: "tomato" | "pepper" | "leaf" | "watermelon" | "seed" | "soil";
};

type HomepageShowcaseProps = {
  featuredProducts: Product[];
  familyCards: FamilyCard[];
};

const trustItems = [
  { label: "Hybrid Seeds", icon: Sprout },
  { label: "Vegetable Seeds", icon: Leaf },
  { label: "Gujranwala Based", icon: Map },
  { label: "Farmer Focused", icon: Tractor },
  { label: "Quality Selection", icon: Sprout },
];

const journeySteps = [
  {
    step: "01",
    title: "Select the seed",
    text: "Begin with crop-focused seed choices shaped for Pakistan's vegetable-growing conditions.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Plan the field",
    text: "Choose seed families that fit sowing windows, market goals, and the production rhythm of your farm.",
    icon: Tractor,
  },
  {
    step: "03",
    title: "Grow to market",
    text: "Move from seed packet to crop confidence with varieties chosen for practical field presence and sales appeal.",
    icon: Leaf,
  },
];

const aboutPoints = [
  "Real product-led seed assortment instead of broad generic catalog claims",
  "Visual identity built around seed packets, field rhythm, and crop categories",
  "Direct contact path for product inquiry and grower communication",
  "Responsive structure ready for deeper product and regional SEO growth",
];

const accentGlow: Record<FamilyCard["accent"], string> = {
  tomato: "from-red-400/30 to-transparent",
  pepper: "from-orange-400/30 to-transparent",
  leaf: "from-green-400/30 to-transparent",
  watermelon: "from-emerald-400/30 to-transparent",
  seed: "from-yellow-300/25 to-transparent",
  soil: "from-amber-300/25 to-transparent",
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = (delay = 0.07): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.05,
    },
  },
});

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function SectionShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function SectionSpacer() {
  return <div className="mt-16 sm:mt-20 lg:mt-24" />;
}

export function HomepageShowcase({
  featuredProducts,
  familyCards,
}: HomepageShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-x-hidden pb-8 sm:pb-12">
      <HomepageHeroSlider />

      <AnimatedSection>
        <SectionShell className="mt-8 sm:mt-10">
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {trustItems.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
                className="inline-flex cursor-default items-center gap-2.5 rounded-2xl border border-[#173A25]/10 bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(23,58,37,0.06)] transition hover:border-[#173A25]/20 hover:shadow-[0_4px_20px_rgba(23,58,37,0.10)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#F0FAF4]">
                  <Icon className="h-3.5 w-3.5 text-[#2D6A4F]" />
                </span>
                <span className="text-sm font-semibold text-[#1E3A2A]">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      <SectionSpacer />

      <AnimatedSection>
        <SectionShell>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="Featured products"
              title="Selected seed products for growers who want strong crop direction."
              description="Our featured product set highlights vegetable seed lines suited to practical commercial planning, recognizable shelf presentation, and dependable grower demand."
            />
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={scaleIn}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-2xl border border-[#173A25]/14 bg-white px-6 py-3 text-sm font-semibold text-[#173A25] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F0FAF4] hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
            >
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      <SectionSpacer />

      <AnimatedSection>
        <SectionShell>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="Seed families"
              title="A catalog shaped around real vegetable categories."
              description="Explore the seed families that define the Zillay Seeds assortment, from core hybrid vegetables to grower-friendly seasonal categories."
            />
          </motion.div>

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {familyCards.map((card) => (
              <motion.article key={card.title} variants={scaleIn}>
                <Link
                  href={card.href}
                  className="group block h-full overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_4px_20px_rgba(23,58,37,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(23,58,37,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                >
                  <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#EEF7F1] to-[#F7FAF8] p-4 pb-2">
                    <div
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-b opacity-0 transition duration-300 group-hover:opacity-60",
                        accentGlow[card.accent],
                      )}
                    />

                    <div className="relative mx-auto h-52 w-full sm:h-56">
                      <SafeImage
                        src={
                          card.image ||
                          "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"
                        }
                        alt={`${card.title} seed family`}
                        fill
                        className="object-contain transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-black leading-tight text-[#173A25]">
                        {card.title}
                      </h3>
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#F0FAF4] transition group-hover:bg-[#173A25]">
                        <ChevronRight className="h-4 w-4 text-[#2D6A4F] transition group-hover:translate-x-0.5 group-hover:text-white" />
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-[#4A5E4B]">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      <SectionSpacer />

      <AnimatedSection>
        <SectionShell>
          <div className="overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_4px_32px_rgba(23,58,37,0.06)]">
            <div className="grid lg:grid-cols-2">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative min-h-[22rem] overflow-hidden lg:min-h-[36rem]"
              >
                <SafeImage
                  src="/images/brand/zillay-seeds-gujranwala-02.jpg"
                  alt="Zillay Seeds brand and agricultural preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2417]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur">
                    <Sprout className="h-4 w-4 text-[#A8D5A2]" />
                    <span className="text-sm font-bold text-white">
                      Zillay Seeds Pvt Ltd
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12"
              >
                <motion.div variants={fadeUp}>
                  <SectionHeading
                    eyebrow="About Zillay Seeds"
                    title="A premium vegetable seed company rooted in Gujranwala."
                    description="Zillay Seeds Pvt Ltd focuses on vegetable seed categories that matter to Pakistan's farmers and produce markets. From hybrid tomato and pepper to leafy vegetables, cucurbits, and root crops, our catalog is structured to help buyers move with confidence."
                  />
                </motion.div>

                <motion.ul
                  variants={stagger(0.06)}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {aboutPoints.map((point) => (
                    <motion.li
                      key={point}
                      variants={fadeUp}
                      className="flex items-start gap-3 rounded-2xl border border-[#173A25]/10 bg-[#F4F9F5] p-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#173A25]/10">
                        <ChevronRight className="h-3 w-3 text-[#2D6A4F]" />
                      </span>
                      <p className="text-sm leading-6 text-[#3A4F3C]">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-[#173A25] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,58,37,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1E5C35] hover:shadow-[0_8px_28px_rgba(23,58,37,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
                  >
                    Read About Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SectionShell>
      </AnimatedSection>

      <SectionSpacer />

      <AnimatedSection>
        <SectionShell>
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#0D2417]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "url('/images/backgrounds/section-background2.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#0D2417]/80 via-[#173A25]/60 to-[#0D2417]/90"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 right-0 h-64 w-96 rounded-full bg-[#2D6A4F]/20 blur-[80px]"
            />

            <div className="relative z-10 p-8 sm:p-12 lg:p-14">
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start"
              >
                <motion.div variants={fadeUp}>
                  <SectionHeading
                    eyebrow="From seed to harvest"
                    title="A clear path from packet selection to crop direction."
                    description="This section captures the Zillay Seeds visual language: seed dots, field lines, organic shapes, and layered crop cues that signal a premium agricultural brand."
                    className="[&_h2]:text-white [&_p]:text-white/60 [&_p:first-child]:text-[#A8D5A2]"
                  />
                </motion.div>

                <motion.div
                  variants={stagger(0.09)}
                  className="grid gap-4 sm:grid-cols-3"
                >
                  {journeySteps.map((step) => (
                    <motion.div
                      key={step.title}
                      variants={fadeUp}
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/15"
                    >
                      <span className="mb-4 block select-none text-5xl font-black leading-none text-white/10">
                        {step.step}
                      </span>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                        <step.icon className="h-5 w-5 text-[#A8D5A2]" />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/60">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SectionShell>
      </AnimatedSection>

      <SectionSpacer />

      <AnimatedSection>
        <SectionShell>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="Contact Zillay Seeds"
              title="Connect with our team for product inquiry and grower discussion."
              description="Reach out directly if you are looking for a specific vegetable seed line, planning a seasonal crop, or reviewing options for your next purchase."
            />
          </motion.div>

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 lg:grid-cols-3"
          >
            <motion.div
              variants={scaleIn}
              className="flex flex-col gap-3 rounded-3xl border border-[#173A25]/10 bg-white p-6 shadow-[0_2px_16px_rgba(23,58,37,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0FAF4]">
                <Map className="h-5 w-5 text-[#2D6A4F]" />
              </span>
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A4F]">
                  Address
                </p>
                <p className="text-sm leading-7 text-[#3A4F3C]">
                  {siteConfig.addressLines[0]}
                  <br />
                  {siteConfig.addressLines[1]}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col gap-3 rounded-3xl border border-[#173A25]/15 bg-[#F0FAF4] p-6 shadow-[0_2px_16px_rgba(23,58,37,0.08)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173A25]/10">
                <Phone className="h-5 w-5 text-[#173A25]" />
              </span>
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A4F]">
                  Phone
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="block text-2xl font-black leading-tight text-[#173A25] transition hover:text-[#2D6A4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]/40"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <a
                href={siteConfig.phoneHref}
                className="group mt-auto inline-flex items-center gap-2 self-start rounded-xl bg-[#173A25] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(23,58,37,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1E5C35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
              >
                Call Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="flex flex-col gap-3 rounded-3xl border border-[#173A25]/10 bg-white p-6 shadow-[0_2px_16px_rgba(23,58,37,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0FAF4]">
                <Mail className="h-5 w-5 text-[#2D6A4F]" />
              </span>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A4F]">
                  Connect
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-[#173A25]/10 bg-[#F4F9F5] px-4 py-2.5 text-sm font-semibold text-[#1E3A2A] transition hover:border-[#173A25]/20 hover:bg-[#E8F5EC] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <ExternalLink className="h-4 w-4 text-[#2D6A4F]" />
                    Follow on Facebook
                    <ChevronRight className="ml-auto h-4 w-4 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-70" />
                  </a>

                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-[#173A25]/10 bg-[#F4F9F5] px-4 py-2.5 text-sm font-semibold text-[#1E3A2A] transition hover:border-[#173A25]/20 hover:bg-[#E8F5EC] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <Map className="h-4 w-4 text-[#2D6A4F]" />
                    View on Google Maps
                    <ChevronRight className="ml-auto h-4 w-4 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-70" />
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#173A25]/14 bg-white px-4 py-2.5 text-sm font-bold text-[#173A25] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F0FAF4] hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
              >
                Go to Contact Page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </SectionShell>
      </AnimatedSection>

      <div className="mt-16 sm:mt-20" />
    </div>
  );
}