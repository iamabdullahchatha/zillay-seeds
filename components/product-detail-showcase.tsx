"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Leaf,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  Sprout,
} from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { SafeImage } from "@/components/safe-image";
import { SectionHeading } from "@/components/section-heading";
import { getProductImage, type Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */

type ProductDetailShowcaseProps = {
  product: Product;
  relatedProducts: Product[];
};

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
   HELPERS
═══════════════════════════════════════════════════════════════ */

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94z" />
    </svg>
  );
}

function uniqueGallery(product: Product) {
  return Array.from(new Set([product.primaryImage, ...product.gallery]))
    .filter(Boolean)
    .slice(0, 5);
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT MEDIA
═══════════════════════════════════════════════════════════════ */

function ProductMedia({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();
  const gallery = uniqueGallery(product);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative order-first lg:order-last"
    >
      {/* Main packet card */}
      <div className="overflow-hidden rounded-3xl border border-white/16 bg-white/8 p-3 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur">
        {/* Rainbow bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 top-3 h-1 rounded-full bg-[linear-gradient(90deg,rgb(var(--tomato-red)),rgb(var(--pepper-orange)),rgb(var(--seed-green)),rgb(var(--watermelon-pink)))] opacity-80"
        />

        {/* Packet image area */}
        <div className="relative min-h-[20rem] overflow-hidden rounded-[1.55rem] border border-white/20 bg-[rgb(var(--packet-paper))] sm:min-h-[26rem]">
          {/* Radial lighting */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(84,174,111,0.18),transparent_32%),radial-gradient(ellipse_at_50%_105%,rgba(242,223,177,0.65),transparent_40%)]"
          />
          {/* Shimmer sweep */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full z-10 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1.2s] hover:translate-x-[450%]"
          />

          <SafeImage
            src={getProductImage(product.primaryImage)}
            alt={`${product.name} seed packet by Zillay Seeds Pvt Ltd`}
            fill
            priority
            className="object-contain p-6 transition duration-500 hover:scale-[1.022]"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>

        {/* Card footer */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              Zillay Seeds
            </p>
            <p className="text-sm font-black text-white/80 line-clamp-1">
              {product.name}
            </p>
          </div>
          <span className="rounded-full border border-white/16 bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/50">
            {product.category.replace(" Seeds", "")}
          </span>
        </div>
      </div>

      {/* Floating icon badge */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-3 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur"
      >
        <SafeImage
          src={getProductImage(product.icon)}
          alt={`${product.name} crop icon`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </motion.div>

      {/* Gallery thumbnails */}
      {gallery.length > 1 && (
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          animate="show"
          className="mt-4 grid grid-cols-5 gap-2.5"
        >
          {gallery.map((image, index) => (
            <motion.div
              key={`${product.id}-${image}-${index}`}
              variants={scaleIn}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/20 bg-white/8 p-2 shadow-soft backdrop-blur transition hover:border-white/35 hover:bg-white/14"
            >
              <SafeImage
                src={getProductImage(image)}
                alt={`${product.name} gallery image ${index + 1}`}
                fill
                className="object-contain p-1 transition duration-400 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 18vw, 7vw"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DETAIL CARD
═══════════════════════════════════════════════════════════════ */

function DetailCard({
  icon: Icon,
  label,
  title,
  text,
}: {
  icon: typeof Sprout;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-4 rounded-3xl border border-[#173A25]/10 bg-white p-6 shadow-[0_2px_16px_rgba(23,58,37,0.06)] transition-shadow hover:border-[#173A25]/20 hover:shadow-[0_8px_32px_rgba(23,58,37,0.10)]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0FAF4] transition group-hover:bg-[#173A25]">
        <Icon className="h-5 w-5 text-[#2D6A4F] transition group-hover:text-white" />
      </span>
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.26em] text-brand-leaf">
          {label}
        </p>
        <h3 className="text-xl font-black leading-tight text-[#173A25]">
          {title}
        </h3>
        <p className="text-sm leading-7 text-soil-700">{text}</p>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RELATED PRODUCT CARD
═══════════════════════════════════════════════════════════════ */

function RelatedProductCard({ product }: { product: Product }) {
  const inquiryHref = `/contact?product=${encodeURIComponent(product.slug)}#contact-form`;

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_2px_16px_rgba(23,58,37,0.06)] transition-shadow hover:border-[#173A25]/18 hover:shadow-[0_12px_40px_rgba(23,58,37,0.10)]"
    >
      {/* Image area */}
      <div className="relative bg-[#F4F9F5] p-4">
        <div className="relative aspect-[4/3.35] overflow-hidden rounded-2xl border border-[#173A25]/8 bg-white">
          <SafeImage
            src={getProductImage(product.primaryImage)}
            alt={`${product.name} seed product by Zillay Seeds Pvt Ltd`}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-[1.032]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        {/* Icon badge */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#173A25]/10 bg-white shadow-[0_4px_12px_rgba(23,58,37,0.10)]">
          <SafeImage
            src={getProductImage(product.icon)}
            alt={`${product.name} icon`}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-1.5">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-leaf">
            {product.category}
          </p>
          <h3 className="text-xl font-black leading-tight text-[#173A25]">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-6 text-soil-700">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-[#173A25]/8 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="group/btn relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-[#173A25] px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_16px_rgba(23,58,37,0.20)] transition hover:bg-[#1E5C35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
            />
            <span className="relative">Details</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
          <Link
            href={inquiryHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#173A25]/14 bg-[#F0FAF4] px-4 py-2.5 text-xs font-bold text-[#173A25] transition hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
          >
            Inquiry
            <MessageCircle className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT DETAIL SHOWCASE
═══════════════════════════════════════════════════════════════ */

export function ProductDetailShowcase({
  product,
  relatedProducts,
}: ProductDetailShowcaseProps) {
  const inquiryHref = `/contact?product=${encodeURIComponent(product.slug)}#contact-form`;
  const related = relatedProducts.slice(0, 4);

  return (
    <div className="pb-6 sm:pb-8">

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════ */}
      <AnimatedSection amount={0.14} className="section-shell pt-5 sm:pt-7">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-soil-700"
        >
          <Link href="/" className="transition hover:text-brand-leaf">Home</Link>
          <ChevronRight className="h-4 w-4 text-soil-400" />
          <Link href="/products" className="transition hover:text-brand-leaf">Products</Link>
          <ChevronRight className="h-4 w-4 text-soil-400" />
          <span className="text-[#173A25]">{product.name}</span>
        </nav>

        {/* Hero card */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12] px-5 py-8 text-white shadow-[0_4px_40px_rgba(0,0,0,0.22)] sm:px-8 sm:py-10 lg:px-10">

          {/* Bg grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#0A1F12]/98 via-[#173A25]/85 to-[#0A1F12]/70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0A1F12]/60 via-transparent to-transparent"
          />
          {/* Glow blobs */}
          <div aria-hidden="true" className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#2D6A4F]/22 blur-[90px]" />
          <div aria-hidden="true" className="absolute right-0 top-1/3 h-64 w-96 rounded-full bg-brand-seed/10 blur-[80px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">

            {/* LEFT — Copy */}
            <motion.div
              variants={stagger(0.09)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#A8D5A2] backdrop-blur">
                  <Sprout className="h-3.5 w-3.5" />
                  {product.category}
                </span>
                <span className="rounded-full border border-white/14 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Zillay Seeds Pvt Ltd
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
              >
                {product.name}
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-7 text-white/62 sm:text-lg"
              >
                {product.shortDescription}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={stagger(0.05)}
                className="grid grid-cols-3 gap-2.5"
              >
                {[
                  { label: "Product", value: "Seed line" },
                  { label: "Category", value: product.category.replace(" Seeds", "") },
                  { label: "Inquiry", value: "Direct" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8D5A2]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-base font-black text-white">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href={inquiryHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_8px_28px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(255,255,255,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Contact for Inquiry</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/22 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  aria-label={`Call Zillay Seeds at ${siteConfig.phoneDisplay}`}
                >
                  <PhoneCall className="h-4 w-4 text-[#A8D5A2]" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Product media */}
            <ProductMedia product={product} />
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          2. PRODUCT INFO + DETAIL CARDS
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-14 sm:mt-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* Left — description */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Product landing detail"
                title="Seed information for practical crop planning."
                description={product.longDescription}
              />
            </motion.div>

            {/* Product identity card */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_2px_16px_rgba(23,58,37,0.06)]"
            >
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-2xl border border-[#173A25]/10 bg-[#F4F9F5] shadow-sm">
                  <SafeImage
                    src={getProductImage(product.icon)}
                    alt={`${product.name} icon`}
                    fill
                    sizes="72px"
                    className="object-contain p-3"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-leaf">
                    Product category
                  </p>
                  <h2 className="mt-1.5 text-2xl font-black leading-tight text-[#173A25]">
                    {product.category}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-soil-700">
                    This page uses the centralized Zillay Seeds product catalog
                    data and links directly to the active product slug for this
                    seed product.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — detail cards */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <DetailCard
              icon={BadgeCheck}
              label="Highlights"
              title="Product strengths"
              text="Review the product highlights below to understand the practical points listed for this seed product."
            />
            <DetailCard
              icon={CalendarDays}
              label="Growing season"
              title="Season planning"
              text={product.growingSeason}
            />
            <DetailCard
              icon={PackageCheck}
              label="Category"
              title={product.category}
              text={`This product belongs to the ${product.category} group within the Zillay Seeds vegetable seed catalog.`}
            />
            <DetailCard
              icon={MessageCircle}
              label="Why inquire"
              title="Confirm product fit"
              text="Ask Zillay Seeds about availability, product selection, seasonal planning, and details before making crop decisions."
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          3. HIGHLIGHTS SECTION
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-14 sm:mt-16">
        <div className="relative isolate overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_4px_32px_rgba(23,58,37,0.07)]">
          {/* Left accent bar */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#2D6A4F] via-[#173A25] to-[#2D6A4F] rounded-l-3xl"
          />
          {/* Subtle radial glow */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2D6A4F]/6 blur-[60px]"
          />

          <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading
                eyebrow="Product highlights"
                title="The key points listed for this product."
                description="Use these highlights as a quick product overview, then contact Zillay Seeds for availability and more detailed discussion."
              />
            </motion.div>

            <motion.ul
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {product.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#173A25]/10 bg-[#F4F9F5] p-4 transition hover:border-[#173A25]/20 hover:bg-[#EEF7F1]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#173A25]">
                    <CheckCircle2 className="h-4 w-4 text-[#A8D5A2]" />
                  </span>
                  <p className="text-sm leading-7 text-soil-800">{highlight}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          4. PRODUCT INQUIRY CTA
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="section-shell section-transition mt-14 sm:mt-16">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12] shadow-[0_4px_40px_rgba(0,0,0,0.22)]"
        >
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
            <motion.div variants={fadeUp} className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8D5A2]">
                <Leaf className="h-3.5 w-3.5" />
                Product inquiry
              </span>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Interested in {product.name}?
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/55">
                Contact Zillay Seeds Pvt Ltd for product availability, seed
                selection, and seasonal crop planning support in Pakistan.
              </p>
            </motion.div>

            <motion.div
              variants={stagger(0.06)}
              className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
            >
              <motion.div variants={fadeUp}>
                <Link
                  href={inquiryHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_4px_20px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Contact Page</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <PhoneCall className="h-4 w-4 text-[#A8D5A2]" />
                  Call Now
                </a>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <FacebookIcon />
                  Facebook
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          5. RELATED PRODUCTS
      ══════════════════════════════════════════════ */}
      {related.length > 0 && (
        <AnimatedSection className="section-shell section-transition mt-14 sm:mt-16">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Related products"
              title="Compare more seed products."
              description="These products are related by category or selected to help buyers compare other available seed options."
            />
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl border border-[#173A25]/14 bg-[#F0FAF4] px-5 py-2.5 text-sm font-bold text-[#173A25] transition hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {related.map((relatedProduct) => (
              <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </motion.div>
        </AnimatedSection>
      )}

      {/* ══════════════════════════════════════════════
          6. BOTTOM COMPARE CTA
      ══════════════════════════════════════════════ */}
      {related.length > 0 && (
        <AnimatedSection className="section-shell section-transition mt-8 sm:mt-10">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative isolate overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_4px_32px_rgba(23,58,37,0.07)]"
          >
            {/* Left green accent bar */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-[#2D6A4F] via-[#173A25] to-[#2D6A4F]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2D6A4F]/6 blur-[60px]"
            />

            <div className="relative z-10 grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2D6A4F]">
                  Still comparing?
                </p>
                <h2 className="text-3xl font-black leading-tight text-[#173A25] sm:text-4xl">
                  Ask Zillay Seeds about this seed product.
                </h2>
                <p className="max-w-xl text-base leading-7 text-soil-700">
                  Share the product name, crop season, and availability question
                  so the team can respond with clearer product information.
                </p>
              </motion.div>

              <motion.div
                variants={stagger(0.06)}
                className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              >
                <motion.div variants={fadeUp}>
                  <Link
                    href={inquiryHref}
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-[#173A25] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,58,37,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1E5C35] hover:shadow-[0_8px_28px_rgba(23,58,37,0.30)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <span className="relative">Send Inquiry</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#173A25]/14 bg-[#F0FAF4] px-5 py-3.5 text-sm font-bold text-[#173A25] transition hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <PhoneCall className="h-4 w-4 text-[#2D6A4F]" />
                    Call Now
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#173A25]/14 bg-[#F0FAF4] px-5 py-3.5 text-sm font-bold text-[#173A25] transition hover:bg-[#E4F2E8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    View Catalog
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      )}

    </div>
  );
}