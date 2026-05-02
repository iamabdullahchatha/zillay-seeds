import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllProducts } from "@/lib/products";
import { indexableRobots, siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Agriculture",
  classification: "Vegetable seeds and hybrid seed supplier",
  robots: indexableRobots,
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      [siteConfig.language]: siteConfig.siteUrl,
      "x-default": siteConfig.siteUrl,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} vegetable seed banner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
  icons: {
    icon: "/images/brand/cropped-zillay-seeds-icon.webp",
    apple: "/images/brand/cropped-zillay-seeds-icon.webp",
  },
  other: {
    "geo.region": siteConfig.geoRegion,
    "geo.placename": siteConfig.geoPlacename,
    "geo.country": siteConfig.countryCode,
    "business:contact_data:locality": siteConfig.locality,
    "business:contact_data:region": siteConfig.region,
    "business:contact_data:country_name": siteConfig.countryName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const offerCatalogJsonLd = {
    "@type": "OfferCatalog",
    name: `${siteConfig.shortName} vegetable seed catalog`,
    itemListElement: siteConfig.seedCategories.map((category) => ({
      "@type": "OfferCatalog",
      name: category,
    })),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/brand/zillay-seeds-logo.webp"),
    },
    image: absoluteUrl(siteConfig.defaultOgImage),
    email: siteConfig.emailFallback,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": name === siteConfig.countryName ? "Country" : "Place",
      name,
    })),
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "hybrid vegetable seeds",
      "vegetable seeds in Gujranwala",
      "hybrid tomato seeds",
      "hot pepper seeds",
      "watermelon seeds",
      "cucumber seeds",
    ],
    hasOfferCatalog: offerCatalogJsonLd,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneDisplay,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.name,
    image: absoluteUrl("/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg"),
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.emailFallback,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": name === siteConfig.countryName ? "Country" : "Place",
      name,
    })),
    location: {
      "@type": "Place",
      name: `${siteConfig.name} HQ`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.streetAddress,
        addressLocality: siteConfig.locality,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.countryCode,
      },
    },
    sameAs: siteConfig.sameAs,
    hasMap: siteConfig.mapsUrl,
    hasOfferCatalog: offerCatalogJsonLd,
    makesOffer: getAllProducts().slice(0, 8).map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        url: absoluteUrl(`/products/${product.slug}`),
      },
      seller: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: siteConfig.countryName,
      },
    })),
  };

  return (
    <html lang={siteConfig.language}>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)] text-soil-900 antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
