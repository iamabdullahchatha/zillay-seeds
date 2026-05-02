import { AboutShowcase } from "@/components/about-showcase";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getMetadata } from "@/lib/site";

const title = "About Zillay Seeds Pvt Ltd | Vegetable Seeds Company in Gujranwala";
const description =
  "Learn about Zillay Seeds Pvt Ltd, a Gujranwala based vegetable seeds company offering hybrid and OPV seed varieties in Pakistan.";

export const metadata = getMetadata({
  title,
  description,
  path: "/about",
  image: "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan-02.jpg",
  keywords: [
    "Zillay Seeds Pvt Ltd",
    "seeds company in Pakistan",
    "vegetable seeds in Gujranwala",
    "hybrid seeds Gujranwala",
    "vegetable seed supplier Pakistan",
  ],
});

export default function AboutPage() {
  const webpageJsonLd = createWebPageJsonLd({
    path: "/about",
    name: title,
    description,
    type: "AboutPage",
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutShowcase />
    </>
  );
}
