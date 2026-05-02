"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Home,
  Info,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  ShoppingBag,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const fullAddress = siteConfig.addressLines.join(" ");

/* ─────────────────────────── Icons ─────────────────────────── */

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────── Nav items (with icons) ─────────────────────────── */

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/products", label: "Our Products", icon: ShoppingBag },
  { href: "/contact", label: "Contact Us", icon: Mail },
];

/* ─────────────────────────── Leaf texture SVG pattern ─────────────────────────── */

function LeafPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="leaf-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M10 20 Q20 5 30 20 Q20 35 10 20Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.18"
          />
          <circle cx="20" cy="20" r="0.8" fill="currentColor" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leaf-pat)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SITE HEADER
═══════════════════════════════════════════════════════════════ */

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(value > 16);
  });

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#173A25] text-white">
        {/* Subtle leaf texture overlay */}
        <span className="pointer-events-none absolute inset-0 text-white/10">
          <LeafPattern />
        </span>

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          {/* Address */}
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-w-0 items-center gap-2 text-[11px] font-medium tracking-wide text-green-100/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#A8D5A2]" />
            <span className="hidden truncate sm:inline">{fullAddress}</span>
            <span className="sm:hidden">View on Maps</span>
            <ExternalLink className="h-3 w-3 shrink-0 opacity-0 transition group-hover:opacity-60" />
          </a>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Phone */}
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-green-100/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Phone className="h-3.5 w-3.5 text-[#A8D5A2]" />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            </a>

            {/* Divider */}
            <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />

            {/* Facebook */}
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-green-100/70 transition hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <FacebookIcon />
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.phoneHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-green-100/70 transition hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <WhatsAppIcon />
            </a>


          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          isScrolled
            ? "border-[#173A25]/10 bg-white/80 shadow-[0_8px_48px_rgba(23,58,37,0.13)] backdrop-blur-xl"
            : "border-[#173A25]/8 bg-white/60 shadow-[0_2px_16px_rgba(23,58,37,0.06)] backdrop-blur-lg",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8 lg:py-3.5">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Zillay Seeds home"
            className="group flex shrink-0 items-center gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
          >
            <motion.span
              whileHover={reduceMotion ? {} : { scale: 1.03 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="relative block"
              /* ↑ Removed fixed dimensions here — we use the inner div instead */
            >
              {/* Logo wrapper — increased to 56-72px tall on desktop, 44-52px on mobile */}
              <span className="relative block h-12 w-[10rem] sm:h-14 sm:w-[12rem] lg:h-16 lg:w-[16rem] xl:h-[4.25rem] xl:w-[17.5rem]">
                <Image
                  src="/images/brand/zillay-seeds-logo.webp"
                  alt="Zillay Seeds Pvt Ltd"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 280px"
                  className="object-contain object-left drop-shadow-[0_1px_3px_rgba(23,58,37,0.10)]"
                  priority
                />
              </span>

              {/* Subtle glow ring that appears on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-2xl bg-[#2D6A4F]/0 transition-all duration-300 group-hover:bg-[#2D6A4F]/5"
              />
            </motion.span>


          </Link>

          {/* ── Desktop Nav ── */}
          <nav aria-label="Primary navigation" className="hidden lg:flex lg:flex-1 lg:justify-center">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group relative inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]/40",
                        isActive
                          ? "bg-[#173A25] text-white shadow-[0_4px_18px_rgba(23,58,37,0.28)]"
                          : "text-[#1A3320] hover:bg-[#E8F5EC] hover:text-[#122E1D]",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110",
                          isActive ? "text-[#A8D5A2]" : "text-[#2D6A4F]/50",
                        )}
                      />
                      <span>{item.label}</span>

                      {/* Animated underline for non-active */}
                      {!isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1.5 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-[#2D6A4F]/40 transition-transform duration-300 group-hover:scale-x-100"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call Zillay Seeds at ${siteConfig.phoneDisplay}`}
              className="group relative inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-[#1E5C35] via-[#173A25] to-[#122E1D] px-5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(23,58,37,0.30)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(23,58,37,0.42)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
            >
              {/* Shimmer effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <PhoneCall className="relative h-4 w-4 text-[#A8D5A2]" />
              <span className="relative">{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile phone icon */}
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call Zillay Seeds at ${siteConfig.phoneDisplay}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5C35] to-[#173A25] text-white shadow-[0_4px_16px_rgba(23,58,37,0.28)] transition hover:shadow-[0_6px_22px_rgba(23,58,37,0.38)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
            >
              <PhoneCall className="h-4.5 w-4.5" />
            </a>

            {/* Hamburger */}
            <motion.button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((v) => !v)}
              whileTap={{ scale: 0.94 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#173A25]/12 bg-[#F4F9F5] text-[#173A25] shadow-sm transition hover:bg-[#E8F5EC] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/30"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[#173A25]/8 lg:hidden"
            >
              <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6">

                {/* Nav links */}
                <nav aria-label="Mobile primary navigation">
                  <ul className="space-y-1">
                    {navItems.map((item, index) => {
                      const isActive =
                        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                      const Icon = item.icon;

                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: reduceMotion ? 0 : -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.22,
                            delay: reduceMotion ? 0 : index * 0.04,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                              "group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25",
                              isActive
                                ? "bg-[#173A25] text-white shadow-[0_4px_16px_rgba(23,58,37,0.18)]"
                                : "border border-[#173A25]/8 bg-[#F4F9F5] text-[#2C3E2D] hover:bg-[#E8F5EC] hover:text-[#173A25]",
                            )}
                          >
                            <span className="inline-flex items-center gap-3">
                              <Icon
                                className={cn(
                                  "h-4 w-4",
                                  isActive ? "text-[#A8D5A2]" : "text-[#2D6A4F]/50",
                                )}
                              />
                              {item.label}
                            </span>
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                                isActive ? "text-[#A8D5A2]" : "text-[#2D6A4F]/40",
                              )}
                            />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Bottom actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={siteConfig.phoneHref}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#1E5C35] to-[#173A25] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(23,58,37,0.22)] transition hover:shadow-[0_6px_22px_rgba(23,58,37,0.30)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/14 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <PhoneCall className="relative h-4 w-4 text-[#A8D5A2]" />
                    <span className="relative">{siteConfig.phoneDisplay}</span>
                  </a>

                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#173A25]/12 bg-[#F4F9F5] px-4 py-3 text-sm font-semibold text-[#173A25] transition hover:bg-[#E8F5EC] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <MapPin className="h-4 w-4 text-[#2D6A4F]" />
                    Google Maps
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </div>

                {/* Address + Facebook */}
                <div className="space-y-1.5">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-3 rounded-xl border border-[#173A25]/8 bg-[#F4F9F5] px-4 py-3 text-xs leading-5 text-[#4A5E4B] transition hover:bg-[#E8F5EC] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2D6A4F]" />
                    <span>{fullAddress}</span>
                  </a>

                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center justify-between rounded-xl border border-[#173A25]/8 bg-[#F4F9F5] px-4 py-3 text-sm font-semibold text-[#2C3E2D] transition hover:bg-[#E8F5EC] hover:text-[#173A25] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2D6A4F]/25"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#173A25] text-white">
                        <FacebookIcon />
                      </span>
                      Follow on Facebook
                    </span>
                    <ExternalLink className="h-4 w-4 text-[#2D6A4F]/50" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}