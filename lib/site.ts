import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Zillay Seeds Pvt Ltd",
  shortName: "Zillay Seeds",
  description:
    "Zillay Seeds Pvt Ltd is a vegetable seed supplier in Gujranwala, Pakistan offering hybrid and OPV seeds for growers, farmers, and vegetable seed buyers.",
  addressLines: [
    "24-Bajwa Road, Opposite Taqwa Marble,",
    "Link G.T Road, Gujranwala, Pakistan",
  ],
  streetAddress: "24-Bajwa Road, Opposite Taqwa Marble, Link G.T Road",
  locality: "Gujranwala",
  countryName: "Pakistan",
  countryCode: "PK",
  phoneDisplay: "+92-300-7440224",
  phoneHref: "tel:+923007440224",
  facebookUrl: "https://www.facebook.com/zillayseeds/",
  mapsUrl: "https://share.google/fWuMkhE7DZi2ZDUyb",
  emailFallback: "sales@zillayseeds.com",
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
    alternates: {
      canonical: url,
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
      locale: "en_PK",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
  };
}
