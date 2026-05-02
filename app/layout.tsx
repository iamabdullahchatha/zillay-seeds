import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
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
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_PK",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.countryName,
    },
    sameAs: [siteConfig.facebookUrl],
    knowsAbout: [
      "hybrid vegetable seeds",
      "vegetable seeds in Gujranwala",
      "hybrid tomato seeds",
      "hot pepper seeds",
      "watermelon seeds",
      "cucumber seeds",
    ],
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
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.countryName,
    },
    location: {
      "@type": "Place",
      name: `${siteConfig.name} HQ`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.streetAddress,
        addressLocality: siteConfig.locality,
        addressCountry: siteConfig.countryCode,
      },
    },
    sameAs: [siteConfig.facebookUrl],
    hasMap: siteConfig.mapsUrl,
  };

  return (
    <html lang="en">
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
