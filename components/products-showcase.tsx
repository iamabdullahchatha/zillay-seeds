"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPinned,
  PhoneCall,
  Search,
  SlidersHorizontal,
  Sprout,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import { getProductImage, type Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */

type ProductsShowcaseProps = {
  products: Product[];
};

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════ */

const heroProductSlugs = [
  "hybrid-tomato-seeds-f1",
  "hybrid-hot-pepper-seeds-f1",
  "hybrid-watermelon-seeds-f1",
  "hybrid-squash-seeds-f1",
  "hybrid-cucumber-seeds",
  "onion-f1",
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

const staggerContainer = (delay = 0.07): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.04 } },
});

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055 },
  },
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */

function getCategoryLabel(category: string) {
  return category
    .replace("Root Vegetable", "Root")
    .replace("Leafy Vegetable", "Leafy")
    .replace("Bulb Vegetable", "Bulb")
    .replace("Cole Crop", "Cole")
    .replace(" Seeds", "")
    .trim();
}

function matchesSearch(product: Product, query: string) {
  if (!query) return true;
  const haystack = [
    product.name,
    product.category,
    product.shortDescription,
    product.longDescription,
    product.growingSeason,
    ...product.highlights,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function getHeroPhoto(product?: Product) {
  return (
    product?.gallery.find((img) => img.includes("/photos/")) ||
    product?.primaryImage ||
    "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */

export function ProductsShowcase({ products }: ProductsShowcaseProps) {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products],
  );

  const featuredHeroProducts = useMemo(() => {
    const preferred = heroProductSlugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter((p): p is Product => Boolean(p));
    return preferred.length > 0 ? preferred : products.slice(0, 6);
  }, [products]);

  const heroPrimary   = featuredHeroProducts[0];
  const heroSecondary = featuredHeroProducts.slice(1, 4); // exactly 3 supporting
  const heroCropPhoto = featuredHeroProducts[2] || featuredHeroProducts[0];
  const heroCategoryChips = categories.slice(0, 8);

  const filteredProducts = products.filter((p) => {
    const catMatch = activeCategory === "all" ? true : p.category === activeCategory;
    return catMatch && matchesSearch(p, deferredQuery);
  });

  const hasActiveFilters = activeCategory !== "all" || query.trim().length > 0;

  function clearFilters() {
    setActiveCategory("all");
    setQuery("");
  }

  return (
    <div className="overflow-x-hidden pb-8 sm:pb-12">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#0A1F12]">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F12]/97 via-[#173A25]/85 to-[#0A1F12]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F12]/70 via-transparent to-transparent" />
          {/* Grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
          {/* Glow blobs */}
          <div aria-hidden="true" className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#2D6A4F]/25 blur-[90px]" />
          <div aria-hidden="true" className="absolute right-0 top-1/3 h-64 w-96 rounded-full bg-[#1E5C35]/18 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* LEFT — Copy */}
            <motion.div
              variants={staggerContainer(0.09)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {/* Badges row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8D5A2] backdrop-blur">
                  <Sprout className="h-3.5 w-3.5" />
                  Seed catalog
                </span>
                <span className="rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  {products.length} products
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
              >
                Vegetable Seed Products for{" "}
                <span className="text-[#A8D5A2]">Every Growing Season</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                Explore the Zillay Seeds range of hybrid and seasonal vegetable
                seed products for growers, retailers, and crop planning across Pakistan.
              </motion.p>

              {/* Quick category chips */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {heroCategoryChips.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      document
                        .getElementById("product-catalog")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    {getCategoryLabel(cat)}
                  </button>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_8px_28px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(255,255,255,0.20)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Product Inquiry</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <PhoneCall className="h-4 w-4 text-[#A8D5A2]" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Structured product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {/*
                LAYOUT:
                ┌──────────────────┬─────────────────┐
                │                  │  support card   │
                │   MAIN PACKET    ├─────────────────┤
                │   (tall, 2:3)    │  support card   │
                │                  ├─────────────────┤
                └──────────────────┤  crop photo     │
                                   └─────────────────┘
              */}
              <div className="grid grid-cols-[1fr_0.68fr] gap-3">

                {/* Main featured packet */}
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="overflow-hidden rounded-3xl border border-white/12 bg-white/8 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Zillay Seeds</span>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/50">F1 Hybrid</span>
                  </div>
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-gradient-to-b from-white/5 to-white/10">
                    <Image
                      src={getProductImage(heroPrimary?.primaryImage)}
                      alt={heroPrimary ? `${heroPrimary.name} seed packet` : "Zillay Seeds product"}
                      fill
                      priority
                      sizes="(max-width: 640px) 55vw, (max-width: 1024px) 40vw, 360px"
                      className="object-contain p-5"
                    />
                  </div>
                  {/* Footer */}
                  <div className="border-t border-white/8 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Featured</p>
                    <p className="mt-0.5 text-sm font-black text-white/90 line-clamp-1">
                      {heroPrimary?.name ?? "Hybrid Vegetable Seeds"}
                    </p>
                  </div>
                </motion.div>

                {/* Right column — 3 stacked cards */}
                <div className="flex flex-col gap-3">
                  {heroSecondary.map((product, i) => (
                    <motion.div
                      key={product.slug}
                      animate={reduceMotion ? undefined : { y: [0, i % 2 === 0 ? 6 : -6, 0] }}
                      transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="relative flex-1 overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur"
                    >
                      <div className="relative h-full min-h-[5.5rem]">
                        <Image
                          src={getProductImage(product.primaryImage)}
                          alt={`${product.name} seed packet`}
                          fill
                          sizes="(max-width: 640px) 30vw, 180px"
                          className="object-contain p-3"
                        />
                        {/* Name overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-2.5 py-2">
                          <p className="line-clamp-1 text-[9px] font-bold text-white/80">{product.name}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Crop photo card */}
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur"
                    style={{ minHeight: "5rem" }}
                  >
                    <Image
                      src={getProductImage(getHeroPhoto(heroCropPhoto))}
                      alt="Zillay Seeds crop"
                      fill
                      sizes="(max-width: 640px) 30vw, 180px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2.5 py-2">
                      <p className="text-[9px] font-bold text-white/70">Field crop</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CATALOG FILTER PANEL
      ══════════════════════════════════════════════ */}
      <AnimatedSection
        id="product-catalog"
        className="scroll-mt-24 mt-10 sm:mt-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white shadow-[0_4px_32px_rgba(23,58,37,0.07)]">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:items-end">

              {/* Left — heading */}
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-2"
              >
                <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.22em] text-[#2D6A4F]">
                  Browse seed products
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-2xl font-black leading-snug text-[#173A25] sm:text-3xl">
                  Search by crop, product name, category, or season.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-sm leading-6 text-[#4A5E4B]">
                  Use the filters below to narrow the product range without leaving the discovery page.
                </motion.p>
              </motion.div>

              {/* Right — search + filters */}
              <motion.div
                variants={staggerContainer(0.07)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-3"
              >
                {/* Search bar */}
                <motion.label variants={fadeUp} className="relative block">
                  <span className="sr-only">Search products</span>
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2D6A4F]/60" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tomato, pepper, onion, cool season…"
                    className="h-13 w-full rounded-2xl border border-[#173A25]/12 bg-[#F4F9F5] pl-11 pr-10 text-sm font-medium text-[#173A25] placeholder:text-[#4A5E4B]/50 transition focus:border-[#2D6A4F]/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#2D6A4F]/12"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-white p-1.5 text-[#4A5E4B] shadow-sm transition hover:bg-[#F0FAF4] hover:text-[#173A25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]/30"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </motion.label>

                {/* Category filter pills */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2 rounded-2xl border border-[#173A25]/10 bg-[#F4F9F5] p-2"
                >
                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#173A25] sm:flex">
                    <SlidersHorizontal className="h-4 w-4 text-white" />
                  </span>
                  <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {["all", ...categories].map((cat) => {
                      const isAll   = cat === "all";
                      const active  = activeCategory === cat;
                      const count   = isAll
                        ? products.length
                        : products.filter((p) => p.category === cat).length;

                      return (
                        <motion.button
                          key={cat}
                          type="button"
                          layout
                          onClick={() => setActiveCategory(cat)}
                          className={cn(
                            "inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]/30",
                            active
                              ? "border-[#173A25] bg-[#173A25] text-white shadow-[0_2px_12px_rgba(23,58,37,0.22)]"
                              : "border-[#173A25]/10 bg-white text-[#2C3E2D] hover:border-[#173A25]/25 hover:bg-[#F0FAF4] hover:text-[#173A25]",
                          )}
                        >
                          <span>{isAll ? "All" : getCategoryLabel(cat)}</span>
                          <span
                            className={cn(
                              "rounded-md px-1.5 py-0.5 text-[10px] font-bold",
                              active ? "bg-white/18 text-white" : "bg-[#F0FAF4] text-[#2D6A4F]",
                            )}
                          >
                            {count}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          PRODUCT GRID
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="mt-8 sm:mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Results header */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4A5E4B]">
              Showing{" "}
              <span className="text-[#173A25]">{filteredProducts.length}</span>{" "}
              product{filteredProducts.length === 1 ? "" : "s"}
            </p>
            {hasActiveFilters && (
              <motion.button
                type="button"
                onClick={clearFilters}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#173A25]/12 bg-white px-4 py-2 text-sm font-semibold text-[#173A25] shadow-sm transition hover:bg-[#F0FAF4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
              >
                <X className="h-3.5 w-3.5" />
                Clear filters
              </motion.button>
            )}
          </div>

          {/* Grid or empty */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${deferredQuery}`}
                variants={gridContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 8 }}
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div key={product.id} variants={scaleIn}>
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="relative isolate overflow-hidden rounded-3xl border border-[#173A25]/10 bg-white p-10 text-center shadow-[0_4px_32px_rgba(23,58,37,0.06)] sm:p-16"
              >
                {/* Subtle bg pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(23,58,37,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(23,58,37,0.8) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center gap-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0FAF4] shadow-sm">
                    <Search className="h-7 w-7 text-[#2D6A4F]" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#173A25]">
                      No products match
                    </h3>
                    <p className="text-sm leading-6 text-[#4A5E4B]">
                      Try a broader crop name, choose All categories, or clear filters to return to the full range.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="group inline-flex items-center gap-2 rounded-2xl bg-[#173A25] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,58,37,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1E5C35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
                  >
                    Clear all filters
                    <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <AnimatedSection className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative isolate overflow-hidden rounded-3xl bg-[#0A1F12]"
          >
            {/* Background */}
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
                  <Sprout className="h-3.5 w-3.5" />
                  Product support
                </span>
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                  Need help choosing the right seed product?
                </h2>
                <p className="max-w-xl text-base leading-7 text-white/55">
                  Contact Zillay Seeds Pvt Ltd for product availability, vegetable seed selection,
                  and inquiry support from Gujranwala.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={staggerContainer(0.06)}
                className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
              >
                <motion.a
                  variants={fadeUp}
                  href={siteConfig.phoneHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-[#173A25] shadow-[0_4px_20px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#173A25]/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <PhoneCall className="relative h-4 w-4 text-[#2D6A4F]" />
                  <span className="relative">{siteConfig.phoneDisplay}</span>
                </motion.a>

                <motion.div variants={fadeUp} className="flex gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    Contact
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    <MapPinned className="h-4 w-4" />
                    Maps
                  </a>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="mt-16 sm:mt-20" />
    </div>
  );
}