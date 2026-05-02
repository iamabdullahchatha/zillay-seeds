"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageSquare,
  PackageSearch,
  PhoneCall,
  SendHorizonal,
  User,
} from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  products: Product[];
  initialProductInterest?: string;
};

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

const inputClass =
  "h-[3.25rem] w-full rounded-[1.05rem] border border-leaf-100 bg-white/82 px-4 text-sm font-medium text-soil-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition placeholder:text-soil-400 focus:border-brand-seed focus:bg-white focus:ring-4 focus:ring-brand-seed/20 disabled:cursor-not-allowed disabled:opacity-65";

const labelClass =
  "text-xs font-bold uppercase tracking-[0.22em] text-brand-leaf";

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalize(value: string) {
  return safeDecode(value).trim().toLowerCase();
}

export function ContactForm({
  products,
  initialProductInterest = "",
}: ContactFormProps) {
  const reduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialState);

  const resolvedInitialProduct = useMemo(() => {
    const requestedProduct = normalize(initialProductInterest);

    if (!requestedProduct) {
      return "";
    }

    return (
      products.find((product) => {
        const names = [
          product.id,
          product.slug,
          product.name,
          product.category,
        ].map(normalize);

        return names.includes(requestedProduct);
      })?.name || ""
    );
  }, [initialProductInterest, products]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormState(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      productInterest: String(formData.get("productInterest") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setFormState({
        status: "success",
        message:
          data.message ||
          "Your inquiry has been sent. Our team will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.56, ease: [0.22, 1, 0.36, 1] }}
      className="seed-packet-card relative space-y-5 rounded-[2rem] p-5 shadow-field sm:p-6 lg:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 seed-field-pattern motion-field-lines opacity-[0.18]"
      />

      <div className="relative z-10 flex flex-col gap-3 border-b border-brand-border pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-leaf shadow-sm">
            <PackageSearch className="h-3.5 w-3.5" />
            Seed inquiry form
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-leaf-950">
            Send your seed requirement.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-7 text-soil-700">
            Share the product, crop, or season you are planning for so Zillay
            Seeds can respond with relevant product information.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-border bg-cream/80 px-4 py-3 text-sm font-semibold text-soil-700">
          Required fields are marked.
        </div>
      </div>

      <div className="relative z-10 grid gap-4 md:grid-cols-2">
        <label className="space-y-2.5">
          <span className={labelClass}>Name</span>
          <span className="relative block rounded-[1.15rem] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_16px_36px_rgba(23,58,37,0.10)]">
            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-leaf" />
            <input
              name="name"
              required
              className={cn(inputClass, "pl-11")}
              placeholder="Your full name"
              minLength={2}
              autoComplete="name"
              disabled={isSubmitting}
            />
          </span>
        </label>

        <label className="space-y-2.5">
          <span className={labelClass}>Phone</span>
          <span className="relative block rounded-[1.15rem] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_16px_36px_rgba(23,58,37,0.10)]">
            <PhoneCall className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-leaf" />
            <input
              name="phone"
              required
              className={cn(inputClass, "pl-11")}
              placeholder="+92-300-0000000"
              minLength={7}
              autoComplete="tel"
              disabled={isSubmitting}
            />
          </span>
          <span className="block text-xs leading-5 text-soil-600">
            A direct phone number helps the team respond faster.
          </span>
        </label>
      </div>

      <div className="relative z-10 grid gap-4 md:grid-cols-2">
        <label className="space-y-2.5">
          <span className={labelClass}>Email optional</span>
          <span className="relative block rounded-[1.15rem] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_16px_36px_rgba(23,58,37,0.10)]">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-leaf" />
            <input
              name="email"
              type="email"
              className={cn(inputClass, "pl-11")}
              placeholder="name@example.com"
              autoComplete="email"
              disabled={isSubmitting}
            />
          </span>
        </label>

        <label className="space-y-2.5">
          <span className={labelClass}>Product interest</span>
          <span className="relative block rounded-[1.15rem] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_16px_36px_rgba(23,58,37,0.10)]">
            <PackageSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-leaf" />
            <select
              name="productInterest"
              className={cn(inputClass, "appearance-none pl-11 pr-12")}
              defaultValue={resolvedInitialProduct}
              disabled={isSubmitting}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-leaf" />
          </span>
          <span className="block text-xs leading-5 text-soil-600">
            Choose a listed product or describe another crop in your message.
          </span>
        </label>
      </div>

      <label className="relative z-10 space-y-2.5">
        <span className={labelClass}>Message</span>
        <span className="relative block rounded-[1.35rem] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_16px_36px_rgba(23,58,37,0.10)]">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-brand-leaf" />
          <textarea
            name="message"
            required
            rows={5}
            className="min-h-36 w-full resize-y rounded-[1.25rem] border border-leaf-100 bg-white/82 px-4 py-4 pl-11 text-sm font-medium leading-7 text-soil-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition placeholder:text-soil-400 focus:border-brand-seed focus:bg-white focus:ring-4 focus:ring-brand-seed/20 disabled:cursor-not-allowed disabled:opacity-65"
            placeholder="Tell us about your crop requirement, location, season, quantity, or the seed product you are looking for."
            minLength={10}
            disabled={isSubmitting}
          />
        </span>
      </label>

      <div className="relative z-10 flex flex-col gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          onMouseDown={(event) => event.currentTarget.blur()}
          className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-leaf px-7 text-sm font-bold text-white shadow-[0_20px_42px_rgba(23,58,37,0.24)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--ink-green))] disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          {isSubmitting ? (
            <>
              <Loader2 className="relative h-4 w-4 animate-spin text-seed" />
              <span className="relative">Sending inquiry...</span>
            </>
          ) : (
            <>
              <SendHorizonal className="relative h-4 w-4 text-seed" />
              <span className="relative">Send inquiry</span>
            </>
          )}
        </button>

        <AnimatePresence>
          {formState.status !== "idle" ? (
            <motion.div
              key={formState.status}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={cn(
                "flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm leading-6 shadow-soft",
                formState.status === "success"
                  ? "border-leaf-200 bg-leaf-50 text-leaf-800"
                  : "border-red-200 bg-red-50 text-red-700",
              )}
              role={formState.status === "error" ? "alert" : "status"}
            >
              {formState.status === "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-leaf" />
              ) : (
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              )}
              <span>{formState.message}</span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
