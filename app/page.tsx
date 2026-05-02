import {
  HomepageShowcase,
  type FamilyCard,
} from "../components/homepage-showcase";
import { getFeaturedProducts, getProductBySlug } from "@/lib/products";
import { getMetadata, siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata = getMetadata({
  title: "Zillay Seeds Pvt Ltd | Hybrid Vegetable Seeds in Pakistan",
  description:
    "Zillay Seeds Pvt Ltd in Gujranwala, Pakistan supplies hybrid vegetable seeds for growers, farmers, and vegetable seed buyers seeking dependable seed selection and product inquiry support.",
  path: "/",
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.siteUrl,
    inLanguage: "en-PK",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    about: [
      "hybrid vegetable seeds Pakistan",
      "vegetable seeds in Gujranwala",
      "hybrid seeds Gujranwala",
      "vegetable seed supplier Pakistan",
    ],
  };

  const familyCards: FamilyCard[] = [
    {
      title: "Tomato",
      description:
        "Hybrid tomato seed options for growers targeting dependable fruit setting and strong fresh market appeal.",
      href: "/products/hybrid-tomato-seeds-f1",
      image: getProductBySlug("hybrid-tomato-seeds-f1")?.primaryImage,
      accent: "tomato",
    },
    {
      title: "Pepper",
      description:
        "Hot and sweet pepper seed lines for commercial vegetable fields and quality-focused buyers.",
      href: "/products/hybrid-hot-pepper-seeds-f1",
      image: getProductBySlug("hybrid-hot-pepper-seeds-f1")?.primaryImage,
      accent: "pepper",
    },
    {
      title: "Squash",
      description:
        "Hybrid squash seed families suited to warm season production and active local market demand.",
      href: "/products/hybrid-squash-seeds-f1",
      image: getProductBySlug("hybrid-squash-seeds-f1")?.primaryImage,
      accent: "leaf",
    },
    {
      title: "Watermelon",
      description:
        "Hybrid watermelon seed choices for growers who value presentation, vigor, and crop confidence.",
      href: "/products/hybrid-watermelon-seeds-f1",
      image: getProductBySlug("hybrid-watermelon-seeds-f1")?.primaryImage,
      accent: "watermelon",
    },
    {
      title: "Leafy vegetables",
      description:
        "Palak and dhania-oriented categories for fresh green production and local vegetable supply.",
      href: "/products/hybrid-palak-seeds",
      image: getProductBySlug("hybrid-palak-seeds")?.primaryImage,
      accent: "seed",
    },
    {
      title: "Root vegetables",
      description:
        "Turnip and carrot seed lines selected for cool season planning and practical market use.",
      href: "/products/carrot",
      image: getProductBySlug("carrot")?.primaryImage,
      accent: "soil",
    },
    {
      title: "Gourds",
      description:
        "Loki, tinda, and karela-focused cucurbit options for vigorous seasonal vegetable cultivation.",
      href: "/products/loki-long-f1",
      image: getProductBySlug("loki-long-f1")?.primaryImage,
      accent: "leaf",
    },
    {
      title: "Onion and Bringle",
      description:
        "Field-ready seed lines for onion and brinjal buyers serving wholesale and local market channels.",
      href: "/products/onion-f1",
      image: getProductBySlug("onion-f1")?.primaryImage,
      accent: "soil",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <HomepageShowcase
        featuredProducts={featuredProducts}
        familyCards={familyCards}
      />
    </>
  );
}
