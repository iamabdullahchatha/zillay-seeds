import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

const facebookUrl = "https://www.facebook.com/zillayseeds/";
const mapsUrl = "https://share.google/fWuMkhE7DZi2ZDUyb";

export const siteConfig = {
  name: "Zillay Seeds Pvt Ltd",
  shortName: "Zillay Seeds",
  domain: "www.zillayseeds.com",
  description:
    "Zillay Seeds Pvt Ltd is a vegetable seed supplier in Gujranwala, Pakistan offering hybrid and OPV seeds for growers, farmers, and vegetable seed buyers.",
  addressLines: [
    "24-Bajwa Road, Opposite Taqwa Marble,",
    "Link G.T Road, Gujranwala, Pakistan",
  ],
  streetAddress: "24-Bajwa Road, Opposite Taqwa Marble, Link G.T Road",
  locality: "Gujranwala",
  region: "Punjab",
  geoRegion: "PK-PB",
  geoPlacename: "Gujranwala, Punjab, Pakistan",
  countryName: "Pakistan",
  countryCode: "PK",
  phoneDisplay: "+92-300-7440224",
  phoneHref: "tel:+923007440224",
  facebookUrl,
  mapsUrl,
  sameAs: [facebookUrl],
  emailFallback: "sales@zillayseeds.com",
  language: "en-PK",
  locale: "en_PK",
  lastModified: "2026-05-02",
  businessCategory: "Vegetable seed supplier",
  seedCategories: [
    "Tomato Seeds",
    "Pepper Seeds",
    "Cucurbit Seeds",
    "Root Vegetable Seeds",
    "Leafy Vegetable Seeds",
    "Herb Seeds",
    "Pea Seeds",
    "Cole Crop Seeds",
    "Bulb Vegetable Seeds",
    "Brinjal Seeds",
  ],
  areaServed: ["Gujranwala", "Punjab", "Pakistan"],
  keywords: [
    "Zillay Seeds",
    "Zillay Seeds Pvt Ltd",
    "hybrid vegetable seeds Pakistan",
    "vegetable seeds in Gujranwala",
    "hybrid tomato seeds F1 Pakistan",
    "hybrid hot pepper seeds F1",
    "hybrid watermelon seeds F1",
    "hybrid cucumber seeds Pakistan",
    "seeds company in Pakistan",
    "vegetable seed supplier Pakistan",
    "hybrid seeds Gujranwala",
  ],
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Our Products" },
    { href: "/contact", label: "Contact Us" },
  ],
  siteUrl: absoluteUrl("/"),
  defaultOgImage: "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg",
};

export function getPageTitle(title?: string) {
  if (title?.includes("|") || title?.includes(siteConfig.name)) {
    return title;
  }

  return title ? `${title} | ${siteConfig.shortName}` : siteConfig.name;
}

export const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function getMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  keywords = siteConfig.keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}) {
  const resolvedTitle = getPageTitle(title);
  const resolvedDescription = description || siteConfig.description;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords,
    applicationName: siteConfig.shortName,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Agriculture",
    classification: "Vegetable seeds and hybrid seed supplier",
    robots: indexableRobots,
    alternates: {
      canonical: url,
      languages: {
        [siteConfig.language]: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
    other: {
      "geo.region": siteConfig.geoRegion,
      "geo.placename": siteConfig.geoPlacename,
      "geo.country": siteConfig.countryCode,
      "business:contact_data:locality": siteConfig.locality,
      "business:contact_data:region": siteConfig.region,
      "business:contact_data:country_name": siteConfig.countryName,
    },
  } satisfies Metadata;
}
