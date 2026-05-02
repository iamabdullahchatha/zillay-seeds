import type { Metadata } from "next";

import { ProductsShowcase } from "@/components/products-showcase";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Products | Hybrid Vegetable Seeds by Zillay Seeds",
  description:
    "Explore hybrid tomato, hot pepper, squash, watermelon, cucumber, cauliflower, carrot, onion and other vegetable seeds from Zillay Seeds Pvt Ltd.",
  keywords: [
    "hybrid vegetable seeds Pakistan",
    "hybrid tomato seeds F1 Pakistan",
    "hybrid hot pepper seeds F1",
    "hybrid watermelon seeds F1",
    "hybrid cucumber seeds Pakistan",
    "vegetable seed supplier Pakistan",
  ],
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: "Our Products | Hybrid Vegetable Seeds by Zillay Seeds",
    description:
      "Explore hybrid tomato, hot pepper, squash, watermelon, cucumber, cauliflower, carrot, onion and other vegetable seeds from Zillay Seeds Pvt Ltd.",
    url: absoluteUrl("/products"),
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"),
        width: 1200,
        height: 630,
        alt: "Zillay Seeds product catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Hybrid Vegetable Seeds by Zillay Seeds",
    description:
      "Explore hybrid tomato, hot pepper, squash, watermelon, cucumber, cauliflower, carrot, onion and other vegetable seeds from Zillay Seeds Pvt Ltd.",
    images: [
      absoluteUrl("/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"),
    ],
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return <ProductsShowcase products={products} />;
}
