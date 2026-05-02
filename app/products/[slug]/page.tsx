import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailShowcase } from "@/components/product-detail-showcase";
import {
  getAllProducts,
  getProductBySlug,
  getProductImage,
  getRelatedProducts,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Zillay Seeds",
      description:
        "The requested Zillay Seeds product could not be found. Browse the product catalog for available vegetable seed varieties.",
    };
  }

  const url = absoluteUrl(`/products/${product.slug}`);
  const image = absoluteUrl(getProductImage(product.primaryImage));

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: [
      product.name,
      product.category,
      "Zillay Seeds",
      "Zillay Seeds Pvt Ltd",
      "hybrid vegetable seeds Pakistan",
      "vegetable seeds in Gujranwala",
      "vegetable seed supplier Pakistan",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: `${product.name} by ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);
  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const productImages = product.gallery.map((image) =>
    absoluteUrl(getProductImage(image)),
  );

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.longDescription,
    image: productImages,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@id": absoluteUrl("/#organization"),
    },
    category: product.category,
    areaServed: {
      "@type": "Country",
      name: siteConfig.countryName,
    },
    url: productUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: absoluteUrl("/products"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailShowcase
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
