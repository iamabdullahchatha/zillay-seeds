import type { Metadata } from "next";

import { AboutShowcase } from "@/components/about-showcase";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Zillay Seeds Pvt Ltd | Vegetable Seeds Company in Gujranwala",
  description:
    "Learn about Zillay Seeds Pvt Ltd, a Gujranwala based vegetable seeds company offering hybrid and OPV seed varieties in Pakistan.",
  keywords: [
    "Zillay Seeds Pvt Ltd",
    "seeds company in Pakistan",
    "vegetable seeds in Gujranwala",
    "hybrid seeds Gujranwala",
    "vegetable seed supplier Pakistan",
  ],
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About Zillay Seeds Pvt Ltd | Vegetable Seeds Company in Gujranwala",
    description:
      "Learn about Zillay Seeds Pvt Ltd, a Gujranwala based vegetable seeds company offering hybrid and OPV seed varieties in Pakistan.",
    url: absoluteUrl("/about"),
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan-02.jpg"),
        width: 1200,
        height: 630,
        alt: "About Zillay Seeds Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zillay Seeds Pvt Ltd | Vegetable Seeds Company in Gujranwala",
    description:
      "Learn about Zillay Seeds Pvt Ltd, a Gujranwala based vegetable seeds company offering hybrid and OPV seed varieties in Pakistan.",
    images: [
      absoluteUrl("/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan-02.jpg"),
    ],
  },
};

export default function AboutPage() {
  return <AboutShowcase />;
}
