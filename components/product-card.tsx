"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getProductImage, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const inquiryHref = `/contact?product=${encodeURIComponent(
    product.slug,
  )}#contact-form`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.18),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="seed-packet-card premium-hover-card group flex h-full flex-col"
    >
      <div className="packet-image-rail seed-field-pattern motion-field-lines overflow-hidden">
        <span className="packet-code">Zillay Seeds</span>
        <span
          aria-hidden="true"
          className="vegetable-shape leaf motion-float-slow -left-4 bottom-8 opacity-30"
        />
        <span
          aria-hidden="true"
          className="vegetable-shape tomato motion-float-slow -right-4 top-14 opacity-25 [--float-rotation:8deg]"
        />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/75 bg-[rgb(var(--packet-paper))] p-3 shadow-soft">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(84,174,111,0.18),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(217,75,61,0.14),transparent_24%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-2/3 z-10 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 group-hover:translate-x-[320%]"
          />

          <div className="relative aspect-[4/3.55] overflow-hidden rounded-[1.35rem] bg-white/78">
            <Image
              src={getProductImage(product.primaryImage)}
              alt={`${product.name} seed product by Zillay Seeds Pvt Ltd`}
              fill
              className="object-contain p-2 transition duration-700 group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            />
          </div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2, rotate: -1 }}
            className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/80 bg-white/88 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-leaf shadow-soft backdrop-blur transition group-hover:-translate-y-1"
          >
            <Sprout className="h-3.5 w-3.5" />
            {product.category}
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { rotate: -5, scale: 1.06 }}
            className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/80 bg-cream shadow-soft transition group-hover:rotate-[-3deg] group-hover:scale-105"
          >
            <Image
              src={getProductImage(product.icon)}
              alt={`${product.name} crop icon`}
              width={38}
              height={38}
              className="h-9 w-9 object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3.5 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <div className="space-y-2.5">
          <h2 className="font-display text-[1.7rem] leading-tight text-leaf-950 sm:text-3xl">
            {product.name}
          </h2>
          <p className="text-sm leading-7 text-soil-700">
            {product.shortDescription}
          </p>
        </div>

        <div className="rounded-[1.35rem] border border-brand-border bg-cream/80 p-3.5">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-soil-700">
            Product highlights
          </p>
          <ul className="space-y-2">
            {product.highlights.slice(0, 3).map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm leading-6 text-soil-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-leaf" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto grid gap-2 border-t border-leaf-100 pt-3.5 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:grid-cols-2 sm:translate-y-2 sm:opacity-90">
          <Link
            href={`/products/${product.slug}`}
            className="premium-button h-11 px-4 text-xs"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={inquiryHref}
            className="premium-button-outline h-11 px-4 text-xs"
          >
            Inquiry
            <MessageCircle className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
