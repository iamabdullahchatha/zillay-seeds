"use client";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-1.5 self-start text-emerald-500/60 transition hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 md:self-auto"
    >
      <span className="text-[11px] uppercase tracking-[0.25em]">
        Back to top
      </span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-700/50 transition group-hover:border-emerald-500 group-hover:bg-emerald-500/10">
        ↑
      </span>
    </button>
  );
}