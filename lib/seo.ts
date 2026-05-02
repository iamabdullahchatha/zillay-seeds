import type { Product } from "@/lib/products";
import { getProductImage } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageJsonLdInput = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createWebPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}: WebPageJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    about: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function createProductListJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl("/products")}#product-list`,
    name: `${siteConfig.shortName} vegetable seed products`,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.slug}`),
      name: product.name,
      image: absoluteUrl(getProductImage(product.primaryImage)),
    })),
  };
}
