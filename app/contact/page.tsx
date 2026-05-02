import type { Metadata } from "next";

import { ContactShowcase } from "@/components/contact-showcase";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Zillay Seeds Pvt Ltd | Vegetable Seeds in Gujranwala",
  description:
    "Contact Zillay Seeds Pvt Ltd in Gujranwala for hybrid vegetable seeds, product inquiries, and seed information.",
  keywords: [
    "Zillay Seeds",
    "vegetable seeds in Gujranwala",
    "hybrid seeds Gujranwala",
    "vegetable seed supplier Pakistan",
    "seeds company in Pakistan",
  ],
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact Zillay Seeds Pvt Ltd | Vegetable Seeds in Gujranwala",
    description:
      "Contact Zillay Seeds Pvt Ltd in Gujranwala for hybrid vegetable seeds, product inquiries, and seed information.",
    url: absoluteUrl("/contact"),
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/brand/zillay-seeds-gujranwala-01.jpg"),
        width: 1200,
        height: 630,
        alt: "Contact Zillay Seeds Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zillay Seeds Pvt Ltd | Vegetable Seeds in Gujranwala",
    description:
      "Contact Zillay Seeds Pvt Ltd in Gujranwala for hybrid vegetable seeds, product inquiries, and seed information.",
    images: [absoluteUrl("/images/brand/zillay-seeds-gujranwala-01.jpg")],
  },
};

type ContactPageProps = {
  searchParams?: Promise<{
    product?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const products = getAllProducts();
  const params = await searchParams;
  const productParam = Array.isArray(params?.product)
    ? params?.product[0]
    : params?.product;

  return (
    <ContactShowcase
      products={products}
      initialProductInterest={productParam || ""}
    />
  );
}
