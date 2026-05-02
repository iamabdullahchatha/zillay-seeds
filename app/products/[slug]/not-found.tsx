import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

export default function ProductNotFound() {
  return (
    <div className="section-shell py-12">
      <section className="relative overflow-hidden rounded-[2.6rem] border border-brand-border bg-white/85 px-6 py-12 text-center shadow-field sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(84,174,111,0.16),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(217,75,61,0.12),transparent_18%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-seed/15 text-brand-leaf">
            <SearchX className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-leaf">
            Product not found
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-leaf-950 sm:text-6xl">
            This seed product is not available in the catalog.
          </h1>
          <p className="mt-5 text-base leading-8 text-soil-700 sm:text-lg">
            The product link may have changed or the variety may not be listed.
            Browse all Zillay Seeds products to find available vegetable seed
            options.
          </p>
          <Link
            href="/products"
            className="focus-ring mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-leaf px-6 text-sm font-semibold text-white transition hover:bg-leaf-700"
          >
            Browse Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
