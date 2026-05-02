import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const DEFAULT_SITE_URL = "https://www.zillayseeds.com";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "/") {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    DEFAULT_SITE_URL;

  return path === "/" ? baseUrl : `${baseUrl}${path}`;
}
