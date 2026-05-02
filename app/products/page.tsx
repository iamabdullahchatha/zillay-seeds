import { ProductsShowcase } from "@/components/products-showcase";
import { getAllProducts } from "@/lib/products";
import {
  createBreadcrumbJsonLd,
  createProductListJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";
import { getMetadata } from "@/lib/site";

const title = "Our Products | Hybrid Vegetable Seeds by Zillay Seeds";
const description =
  "Explore hybrid tomato, hot pepper, squash, watermelon, cucumber, cauliflower, carrot, onion and other vegetable seeds from Zillay Seeds Pvt Ltd.";

export const metadata = getMetadata({
  title,
  description,
  path: "/products",
  image: "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg",
  keywords: [
    "hybrid vegetable seeds Pakistan",
    "hybrid tomato seeds F1 Pakistan",
    "hybrid hot pepper seeds F1",
    "hybrid watermelon seeds F1",
    "hybrid cucumber seeds Pakistan",
    "vegetable seed supplier Pakistan",
  ],
});

export default function ProductsPage() {
  const products = getAllProducts();
  const webpageJsonLd = createWebPageJsonLd({
    path: "/products",
    name: title,
    description,
    type: "CollectionPage",
  });
  const productListJsonLd = createProductListJsonLd(products);
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductsShowcase products={products} />
    </>
  );
}
