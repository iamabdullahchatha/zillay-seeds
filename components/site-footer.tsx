import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Leaf,
  MapPinned,
  Phone,
  Sprout,
} from "lucide-react";

import { SafeImage } from "@/components/safe-image";
import { getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const productLinks = [
  { label: "Tomato Seeds", slug: "hybrid-tomato-seeds-f1" },
  { label: "Hot Pepper Seeds", slug: "hybrid-hot-pepper-seeds-f1" },
  { label: "Watermelon Seeds", slug: "hybrid-watermelon-seeds-f1" },
  { label: "Cucumber Seeds", slug: "hybrid-cucumber-seeds" },
  { label: "Cauliflower Seeds", slug: "cauliflower-f1" },
  { label: "Onion Seeds", slug: "onion-f1" },
].map((item) => {
  const product = getProductBySlug(item.slug);
  return {
    label: item.label,
    href: `/products/${product?.slug ?? item.slug}`,
  };
});

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94z" />
    </svg>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex min-h-10 items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3.5 py-2.5 text-sm font-semibold text-leaf-50/72 transition-all duration-300 hover:border-brand-seed/40 hover:bg-white/[0.085] hover:text-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25 will-change-transform"
    >
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-seed/70 transition-all duration-300 group-hover:bg-brand-seed group-hover:shadow-[0_0_6px_rgba(var(--seed-green),0.7)]" />
        {label}
      </span>
      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-80" />
    </Link>
  );
}

/* Floating seed/leaf particle — purely decorative */
function FloatingParticle({
  size,
  top,
  left,
  delay,
  color,
  shape = "seed",
}: {
  size: string;
  top: string;
  left: string;
  delay: string;
  color: string;
  shape?: "seed" | "leaf" | "dot";
}) {
  const shapeStyle =
    shape === "leaf"
      ? "rounded-[80%_0_80%_0]"
      : shape === "dot"
        ? "rounded-full"
        : "rounded-[50%_10%_50%_10%]";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${shapeStyle} ${color} opacity-0`}
      style={{
        width: size,
        height: size,
        top,
        left,
        animation: `float-particle 8s ease-in-out ${delay} infinite`,
      }}
    />
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes float-particle {
          0%   { opacity: 0;    transform: translateY(0px)   rotate(0deg)   scale(1);    }
          20%  { opacity: 1; }
          50%  { opacity: 0.7;  transform: translateY(-22px) rotate(18deg)  scale(1.08); }
          80%  { opacity: 0.9; }
          100% { opacity: 0;    transform: translateY(-44px) rotate(36deg)  scale(0.94); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.18; transform: scale(1);    }
          50%       { opacity: 0.30; transform: scale(1.08); }
        }
        .footer-card-3d {
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease;
        }
        .footer-card-3d:hover {
          transform: translateY(-5px) rotateX(1.5deg) rotateY(-1deg);
          box-shadow: 0 20px 48px rgba(0,0,0,0.32), 0 4px 12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10);
        }
        .cta-card-3d {
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-card-3d:hover {
          transform: translateY(-3px) rotateX(1deg);
          box-shadow: 0 28px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(23,58,37,0.12);
        }
        .contact-row {
          will-change: transform;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1),
                      background 0.25s ease,
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
        }
        .contact-row:hover {
          transform: translateX(3px) translateY(-1px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%);
          background-size: 200% 100%;
          background-position: -100% 0;
          transition: background-position 0.7s ease;
        }
        .shimmer-btn:hover::after {
          background-position: 200% 0;
        }
        .glow-blob {
          animation: glow-pulse 6s ease-in-out infinite;
        }
      `}</style>

      <footer className="relative mt-14 overflow-hidden bg-[rgb(var(--deep-leaf-green))] text-white sm:mt-16">

        {/* ── Top wave ── */}
        <div
          aria-hidden="true"
          className="absolute -top-14 left-1/2 h-24 w-[140vw] -translate-x-1/2 rounded-b-[100%] bg-[rgb(var(--cream-background))]"
        />

        {/* ── Background layers ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 footer-field" />
          <div className="absolute inset-0 seed-field-pattern motion-field-lines opacity-[0.08]" />
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,223,177,0.18),transparent_58%)]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(180deg,transparent,rgba(8,25,16,0.72))]" />

          {/* Glow blobs */}
          <div className="glow-blob absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-[#2D6A4F]/18 blur-[70px]" />
          <div className="glow-blob absolute right-[10%] top-[30%] h-48 w-80 rounded-full bg-brand-seed/12 blur-[60px]" style={{ animationDelay: "2.5s" }} />
          <div className="glow-blob absolute bottom-[12%] left-[40%] h-48 w-64 rounded-full bg-[#173A25]/30 blur-[55px]" style={{ animationDelay: "4.5s" }} />

          {/* Original decorative shapes */}
          <div className="absolute left-6 top-40 h-11 w-24 rotate-[-18deg] rounded-[4rem_0] bg-brand-seed/12" />
          <div className="absolute right-8 top-72 hidden h-14 w-32 rotate-[18deg] rounded-[4rem_0] bg-brand-seed/10 md:block" />
          <div className="absolute bottom-24 left-[45%] hidden h-10 w-24 rotate-[-24deg] rounded-[4rem_0] bg-white/6 lg:block" />
          <div className="absolute left-[8%] top-28 h-2 w-2 rounded-full bg-brand-seed/55" />
          <div className="absolute left-[13%] top-44 h-1.5 w-1.5 rounded-full bg-brand-pepper/70" />
          <div className="absolute right-[16%] top-32 h-2 w-2 rounded-full bg-brand-watermelon/65" />
          <div className="absolute right-[9%] bottom-36 h-1.5 w-1.5 rounded-full bg-brand-seed/65" />

          {/* Floating particles */}
          <FloatingParticle size="7px"  top="22%"  left="4%"   delay="0s"    color="bg-brand-seed/50"      shape="leaf" />
          <FloatingParticle size="5px"  top="48%"  left="7%"   delay="1.8s"  color="bg-brand-seed/40"      shape="dot" />
          <FloatingParticle size="6px"  top="34%"  left="18%"  delay="0.7s"  color="bg-white/30"            shape="seed" />
          <FloatingParticle size="8px"  top="60%"  left="12%"  delay="3.2s"  color="bg-brand-pepper/35"     shape="leaf" />
          <FloatingParticle size="5px"  top="18%"  left="28%"  delay="2.1s"  color="bg-brand-seed/45"       shape="dot" />
          <FloatingParticle size="6px"  top="72%"  left="22%"  delay="4.0s"  color="bg-white/20"            shape="seed" />
          <FloatingParticle size="9px"  top="25%"  left="78%"  delay="1.1s"  color="bg-brand-seed/40"       shape="leaf" />
          <FloatingParticle size="5px"  top="55%"  left="84%"  delay="2.8s"  color="bg-white/25"            shape="dot" />
          <FloatingParticle size="7px"  top="40%"  left="91%"  delay="0.4s"  color="bg-brand-watermelon/30" shape="seed" />
          <FloatingParticle size="6px"  top="68%"  left="88%"  delay="3.6s"  color="bg-brand-seed/35"       shape="leaf" />
          <FloatingParticle size="4px"  top="80%"  left="52%"  delay="1.5s"  color="bg-white/20"            shape="dot" />
          <FloatingParticle size="7px"  top="14%"  left="63%"  delay="4.8s"  color="bg-brand-seed/30"       shape="leaf" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-7 pt-12 sm:px-6 sm:pt-14 lg:px-8">

          {/* ══════════════════════════════════════════════
              CTA CARD
          ══════════════════════════════════════════════ */}
          <section
            aria-labelledby="footer-cta-title"
            className="cta-card-3d relative overflow-hidden rounded-[2.15rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,250,239,0.97),rgba(247,240,227,0.88))] p-5 text-soil-900 shadow-field sm:p-6 lg:p-7"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 seed-field-pattern motion-field-lines opacity-[0.24]"
            />
            {/* Rainbow bar */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,rgb(var(--tomato-red)),rgb(var(--pepper-orange))_34%,rgb(var(--seed-green))_70%,rgb(var(--watermelon-pink)))]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-10 top-8 h-24 w-44 rotate-12 rounded-[5rem_0] bg-brand-seed/14"
            />
            <div
              aria-hidden="true"
              className="absolute -left-12 bottom-4 h-20 w-40 rotate-[-20deg] rounded-[5rem_0] bg-brand-pepper/10"
            />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-leaf shadow-sm">
                  <Sprout className="h-3.5 w-3.5" />
                  Grower support
                </div>
                <h2
                  id="footer-cta-title"
                  className="font-display text-4xl leading-tight text-leaf-950 sm:text-5xl"
                >
                  Need quality vegetable seeds for your next crop?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-soil-700 sm:text-lg">
                  Contact Zillay Seeds Pvt Ltd for vegetable seed inquiries,
                  product availability, and grower support in Pakistan.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[29rem] lg:grid-cols-1 xl:grid-cols-3">
                {/* Primary CTA */}
                <a
                  href={siteConfig.phoneHref}
                  className="shimmer-btn group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-leaf px-5 py-3 text-sm font-bold text-white shadow-[0_18px_38px_rgba(23,58,37,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(var(--ink-green))] hover:shadow-[0_24px_48px_rgba(23,58,37,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25 will-change-transform"
                >
                  <Phone className="relative h-4 w-4 text-seed transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" />
                  <span className="relative">Call {siteConfig.phoneDisplay}</span>
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-border bg-white/80 px-5 py-3 text-sm font-bold text-brand-leaf shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_12px_32px_rgba(23,58,37,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25 will-change-transform"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-border bg-white/80 px-5 py-3 text-sm font-bold text-brand-leaf shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_12px_32px_rgba(23,58,37,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25 will-change-transform"
                >
                  View Location
                  <MapPinned className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                </a>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              FOUR COLUMN GRID
          ══════════════════════════════════════════════ */}
          <div className="mt-9 grid gap-4 lg:grid-cols-[1.15fr_0.85fr_1fr_1fr]">

            {/* ── Brand card ── */}
            <div className="footer-card-3d relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 shadow-field backdrop-blur hover:border-white/18">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,rgb(var(--tomato-red)),rgb(var(--pepper-orange)),rgb(var(--seed-green)))]"
              />
              {/* Subtle inner glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(168,213,162,0.08), transparent 60%)" }}
              />

              <div className="relative h-16 w-[16rem] max-w-full">
                <SafeImage
                  src="/images/brand/zillay-seeds-logo.webp"
                  alt="Zillay Seeds Pvt Ltd"
                  fill
                  sizes="256px"
                  className="object-contain object-left brightness-0 invert transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-leaf-50/68">
                Zillay Seeds Pvt Ltd supplies vegetable seed options for growers,
                seed buyers, and crop planners across Pakistan from Gujranwala.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="group/stat rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:border-brand-seed/30 hover:bg-white/[0.09] hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)] hover:-translate-y-0.5 will-change-transform">
                  <Leaf className="mb-3 h-5 w-5 text-seed transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-[-6deg]" />
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-seed">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-leaf-50/70">
                    Hybrid and selected OPV vegetable seeds.
                  </p>
                </div>
                <div className="group/stat rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:border-brand-seed/30 hover:bg-white/[0.09] hover:shadow-[0_4px_20px_rgba(0,0,0,0.20)] hover:-translate-y-0.5 will-change-transform">
                  <MapPinned className="mb-3 h-5 w-5 text-seed transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:-rotate-6" />
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-seed">
                    Base
                  </p>
                  <p className="mt-2 text-sm leading-6 text-leaf-50/70">
                    Gujranwala, Pakistan.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="footer-card-3d rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur hover:border-white/18">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-seed">
                Quick Links
              </p>
              <nav aria-label="Footer quick links">
                <ul className="grid gap-2">
                  {siteConfig.navItems.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href} label={item.label} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── Product Links ── */}
            <div className="footer-card-3d rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur hover:border-white/18">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-seed">
                Product Links
              </p>
              <nav aria-label="Footer product links">
                <ul className="grid gap-2">
                  {productLinks.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href} label={item.label} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── Contact Info ── */}
            <div className="footer-card-3d rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur hover:border-white/18">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-seed">
                Contact Info
              </p>
              <div className="grid gap-3">

                {/* Address */}
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 text-sm leading-6 text-leaf-50/72 hover:border-brand-seed/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25"
                >
                  <MapPinned className="mt-1 h-4 w-4 shrink-0 text-seed transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  <span>
                    <span className="font-bold text-white">Address</span>
                    <br />
                    {siteConfig.addressLines[0]}
                    <br />
                    {siteConfig.addressLines[1]}
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={siteConfig.phoneHref}
                  className="contact-row group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 text-sm font-semibold text-leaf-50/72 hover:border-brand-seed/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25"
                >
                  <Phone className="h-4 w-4 text-seed transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 text-sm font-semibold text-leaf-50/72 hover:border-brand-seed/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-seed transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-seed group-hover:text-brand-leaf group-hover:shadow-[0_4px_14px_rgba(var(--seed-green),0.40)]">
                    <FacebookIcon />
                  </span>
                  <span>Facebook</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80" />
                </a>

                {/* Google Maps */}
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 text-sm font-semibold text-leaf-50/72 hover:border-brand-seed/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-seed/25"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-seed transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-seed group-hover:text-brand-leaf group-hover:shadow-[0_4px_14px_rgba(var(--seed-green),0.40)]">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                  <span>Google Maps</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80" />
                </a>

              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-leaf-50/45 md:flex-row md:items-center md:justify-between">
            <p>&copy; {currentYear} Zillay Seeds Pvt Ltd. All rights reserved.</p>
            <p className="max-w-xl leading-6">
              Built for vegetable seed buyers, growers, and crop planners in Pakistan.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}