import type { MetadataRoute } from "next";

import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/contact"].map((path) => ({
    url: path ? absoluteUrl(path) : siteConfig.siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
