const productImageFallback =
  "/images/brand/zillay-seeds-banner-vegetable-seeds-pakistan.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  growingSeason: string;
  image: string;
  primaryImage: string;
  gallery: string[];
  icon: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
};

type ProductInput = Omit<Product, "image" | "primaryImage" | "gallery" | "icon"> & {
  image?: string;
  primaryImage?: string;
  gallery?: string[];
  icon?: string;
};

function withFallbackImage(image?: string) {
  return image?.trim() ? image : productImageFallback;
}

function createProduct(product: ProductInput): Product {
  const resolvedImage = withFallbackImage(product.image || product.primaryImage);
  const primaryImage = withFallbackImage(product.primaryImage || resolvedImage);
  const gallery = (product.gallery || []).map((image) => withFallbackImage(image));

  return {
    ...product,
    image: resolvedImage,
    primaryImage,
    gallery: gallery.length > 0 ? gallery : [primaryImage],
    icon: withFallbackImage(product.icon),
  };
}

export const PRODUCTS: Product[] = [
  createProduct({
    id: "hybrid-tomato-seeds-f1",
    slug: "hybrid-tomato-seeds-f1",
    name: "Hybrid Tomato Seeds F1",
    category: "Tomato Seeds",
    shortDescription:
      "Premium hybrid tomato seed for growers seeking vigorous plants, reliable fruit setting, and strong fresh market appeal.",
    longDescription:
      "Hybrid Tomato Seeds F1 from Zillay Seeds are developed for growers who want a dependable tomato crop with balanced plant vigor and attractive market presentation. This seed line is well suited to professional vegetable production in Pakistan where crop uniformity, harvest consistency, and fruit quality directly affect buyer confidence. It supports commercial tomato cultivation for wholesale markets, retailers, and intensive kitchen garden production.",
    highlights: [
      "Strong vegetative growth for dependable field establishment",
      "Uniform fruit set to support regular picking cycles",
      "Suitable for commercial tomato production in Pakistan",
      "Good fit for wholesale and fresh market supply chains",
    ],
    growingSeason: "Spring and autumn tomato sowing windows in Pakistan",
    primaryImage:
      "/images/products/packets/tomato.webp",
    gallery: [
      "/images/products/packets/tomato.webp",
      "/images/products/photos/tomato-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/tomato-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Tomato Seeds F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Hybrid Tomato Seeds F1 in Pakistan from Zillay Seeds for vigorous crop growth, reliable fruiting, and professional tomato production.",
    featured: true,
  }),
  createProduct({
    id: "hybrid-hot-pepper-seeds-f1",
    slug: "hybrid-hot-pepper-seeds-f1",
    name: "Hybrid Hot Pepper seeds F1",
    category: "Pepper Seeds",
    shortDescription:
      "Professional hot pepper hybrid for growers targeting healthy plant vigor, consistent fruit quality, and dependable market demand.",
    longDescription:
      "Hybrid Hot Pepper seeds F1 from Zillay Seeds are suitable for chilli and hot pepper growers who need a strong commercial seed option for Pakistan. The product supports professional field planning where plant establishment, uniform fruit type, and steady harvest potential matter for trade. It is a practical choice for growers supplying mandis, retailers, and vegetable buyers who value dependable crop quality.",
    highlights: [
      "Good field vigor for active crop growth",
      "Consistent fruit type for easier grading and handling",
      "Suitable for repeated harvest cycles in warm conditions",
      "Designed for commercial pepper production in Pakistan",
    ],
    growingSeason: "Warm season pepper sowing and transplanting periods in Pakistan",
    primaryImage:
      "/images/products/packets/pepper.webp",
    gallery: [
      "/images/products/packets/pepper.webp",
      "/images/products/photos/hot-pepper-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/hot-pepper-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Hot Pepper Seeds F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Purchase Hybrid Hot Pepper Seeds F1 in Pakistan from Zillay Seeds for vigorous plants, dependable harvest quality, and commercial chilli production.",
    featured: true,
  }),
  createProduct({
    id: "hybrid-squash-seeds-f1",
    slug: "hybrid-squash-seeds-f1",
    name: "Hybrid Squash Seeds F1",
    category: "Cucurbit Seeds",
    shortDescription:
      "Reliable hybrid squash seed for growers seeking strong vine growth, uniform fruit development, and consistent field performance.",
    longDescription:
      "Hybrid Squash Seeds F1 from Zillay Seeds are intended for growers who need dependable cucurbit performance with attractive market presentation. The product is well suited to Pakistan vegetable cultivation where vine vigor, fruit uniformity, and regular harvest quality are important to profitable selling. It supports commercial production for wholesale markets, retailers, and progressive farm operations.",
    highlights: [
      "Hybrid vigor for healthy vine establishment",
      "Uniform fruit development for cleaner market presentation",
      "Useful for commercial cucurbit cultivation in Pakistan",
      "Suitable for growers supplying wholesale vegetable channels",
    ],
    growingSeason:
      "Main warm season squash sowing periods in Punjab and other vegetable-growing regions",
    primaryImage:
      "/images/products/packets/squash.webp",
    gallery: [
      "/images/products/packets/squash.webp",
      "/images/products/packets/squash.webp",
      "/images/products/photos/squash-seeds-pakistan.jpg",
    ],
    icon: "/images/products/icons/squash-seed-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Squash Seeds F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Hybrid Squash Seeds F1 in Pakistan from Zillay Seeds for vigorous vine growth, uniform squash production, and dependable commercial crop performance.",
    featured: true,
  }),
  createProduct({
    id: "hybrid-watermelon-seeds-f1",
    slug: "hybrid-watermelon-seeds-f1",
    name: "Hybrid WaterMelon Seeds F1",
    category: "Cucurbit Seeds",
    shortDescription:
      "Commercial hybrid watermelon seed for growers who need vigorous plants, reliable crop uniformity, and attractive fruit presentation.",
    longDescription:
      "Hybrid WaterMelon Seeds F1 from Zillay Seeds are suited to professional growers targeting quality watermelon production in Pakistan. The product supports healthy crop establishment and improved field consistency, helping buyers plan for better marketable output. It is a practical choice for vegetable businesses, wholesale suppliers, and farmers focused on premium seasonal cucurbit production.",
    highlights: [
      "Strong crop vigor for confident field establishment",
      "Better crop uniformity across the production block",
      "Suitable for warm season watermelon farming in Pakistan",
      "Designed for quality-focused vegetable growers",
    ],
    growingSeason:
      "Late winter to spring sowing and other warm season watermelon planting windows in Pakistan",
    primaryImage:
      "/images/products/packets/watermelon.webp",
    gallery: [
      "/images/products/packets/watermelon.webp",
      "/images/products/photos/water-melon-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/watermelon-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Watermelon Seeds F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Get Hybrid Watermelon Seeds F1 in Pakistan from Zillay Seeds for vigorous crop growth, uniform field performance, and professional watermelon production.",
    featured: true,
  }),
  createProduct({
    id: "turnip-opv-seeds-online",
    slug: "turnip-opv-seeds-online",
    name: "Turnip OPV seeds online",
    category: "Root Vegetable Seeds",
    shortDescription:
      "Quality turnip seed for growers and kitchen gardeners looking for dependable cool season crop performance and clean market roots.",
    longDescription:
      "Turnip OPV seeds online from Zillay Seeds are suitable for growers who want a practical and trustworthy turnip option for Pakistan. The product supports cool season planning where crop stand, root presentation, and fresh market suitability are important. It is a useful selection for retail buyers, farm-level sowing, and local vegetable supply chains.",
    highlights: [
      "Suitable for seasonal turnip cultivation in Pakistan",
      "Useful for farm sowing and serious kitchen gardens",
      "Supports fresh market root vegetable production",
      "Good choice for cool season planting programs",
    ],
    growingSeason: "Cool season sowing periods for turnip cultivation in Pakistan",
    primaryImage:
      "/images/products/packets/turnip.webp",
    gallery: [
      "/images/products/photos/turnip-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/turnip-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Turnip OPV Seeds Online in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Order Turnip OPV seeds online in Pakistan from Zillay Seeds for dependable cool season cultivation and clean market-oriented root production.",
    featured: false,
  }),
  createProduct({
    id: "hybrid-palak-seeds",
    slug: "hybrid-palak-seeds",
    name: "hybrid Palak Seeds",
    category: "Leafy Vegetable Seeds",
    shortDescription:
      "Quality palak seed for growers seeking healthy leaf development, dependable stand establishment, and strong local market suitability.",
    longDescription:
      "hybrid Palak Seeds from Zillay Seeds are positioned for growers who need a reliable leafy crop for Pakistan vegetable production. The product supports practical seasonal sowing for bunch sales, local mandi supply, and intensive kitchen garden use. It is a suitable option for buyers who prioritize consistent vegetative growth and trustworthy seed sourcing.",
    highlights: [
      "Suitable for fresh leafy vegetable production",
      "Supports healthy green foliage under seasonal conditions",
      "Useful for bunch sales and local mandi supply",
      "Good fit for farm and kitchen garden cultivation",
    ],
    growingSeason: "Cool and mild season sowing periods for palak in Pakistan",
    primaryImage:
      "/images/products/packets/palak.webp",
    gallery: [
      "/images/products/packets/palak.webp",
      "/images/products/photos/palak-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/spinach-seeds-icon-zillay-seeds.png",
    seoTitle: "Hybrid Palak Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy hybrid Palak Seeds in Pakistan from Zillay Seeds for healthy leafy growth, dependable field performance, and fresh vegetable supply.",
    featured: false,
  }),
  createProduct({
    id: "hybrid-dhaniafi-seeds",
    slug: "hybrid-dhania-seeds",
    name: "Hybrid Dhania Seeds",
    category: "Herb Seeds",
    shortDescription:
      "Premium coriander seed option for growers seeking healthy green foliage, dependable seasonal performance, and trusted seed quality.",
    longDescription:
      "Hybrid Dhaniafi Seeds from Zillay Seeds are aimed at coriander growers who need professional seed support for Pakistan's herb and vegetable markets. The product is suitable for fresh dhania production where healthy vegetative growth and attractive bunch quality are important. It offers a dependable option for farm use, local vegetable businesses, and serious retail buyers.",
    highlights: [
      "Suitable for fresh green coriander production",
      "Supports healthy foliage and bunch quality",
      "Useful for commercial herb and vegetable markets",
      "Strong option for seasonal sowing in Pakistan",
    ],
    growingSeason:
      "Cool and moderate season sowing windows for dhania in Pakistan",
    primaryImage:
      "/images/products/packets/dhania.webp",
    gallery: [
      "/images/products/packets/dhania.webp",
      "/images/products/packets/18-dhania-hybrid-f1-seeds-zillay-seeds.jpg",
    ],
    icon: "/images/products/icons/green-coriander-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Dhania Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Purchase Hybrid Dhania Seeds in Pakistan from Zillay Seeds for quality coriander production, healthy green growth, and dependable seasonal sowing.",
    featured: false,
  }),
  createProduct({
    id: "aleena-hybrid-peas-seeds",
    slug: "aleena-hybrid-peas-seeds",
    name: "Aleena Hybrid Peas Seeds",
    category: "Pea Seeds",
    shortDescription:
      "Professional peas seed option for growers seeking healthy plants, dependable pod development, and fresh market suitability.",
    longDescription:
      "Aleena Hybrid Peas Seeds from Zillay Seeds provide a dependable option for cool season vegetable growers in Pakistan. The product is suitable for farmers and serious buyers who want clean pod presentation, healthy crop growth, and reliable performance for fresh vegetable channels. It supports practical field planning for retail and wholesale pea supply.",
    highlights: [
      "Suitable for cool season peas cultivation",
      "Useful for fresh market pod production",
      "Supports commercial and small-scale intensive sowing",
      "Trusted option for Pakistan seed buyers",
    ],
    growingSeason: "Cool season peas sowing periods in Pakistan",
    primaryImage:
      "/images/products/packets/peas.webp",
    gallery: [
      "/images/products/packets/peas.webp",
    ],
    icon: "/images/products/icons/peas-seeds-icon-zillay-seeds.png",
    seoTitle: "Hybrid Peas Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Hybrid Peas Seeds in Pakistan from Zillay Seeds for healthy plant growth, dependable pod production, and cool season vegetable farming.",
    featured: false,
  }),
  createProduct({
    id: "hybrid-tinda-seeds-online",
    slug: "hybrid-tinda-seeds-online",
    name: "Hybrid Tinda Seeds online",
    category: "Cucurbit Seeds",
    shortDescription:
      "Hybrid tinda seed for growers who need vigorous summer crop growth, reliable fruiting, and practical market performance.",
    longDescription:
      "Hybrid Tinda Seeds online from Zillay Seeds are suitable for growers planning dependable summer vegetable production in Pakistan. The product supports healthy vine development and attractive local-market crop presentation for commercial and household use. It is a practical option for farmers who value uniformity, season-fit performance, and trusted seed sourcing.",
    highlights: [
      "Strong option for summer tinda cultivation",
      "Suitable for local-market vegetable production",
      "Useful for farm and kitchen garden planting",
      "Supports dependable cucurbit crop planning",
    ],
    growingSeason:
      "Warm season tinda sowing windows across Pakistan vegetable regions",
    primaryImage:
      "/images/products/packets/tinda.webp",
    gallery: [
      "/images/products/packets/tinda.webp",
      "/images/products/photos/tinda-desi-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/tinda-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Tinda Seeds Online in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Order Hybrid Tinda Seeds online in Pakistan from Zillay Seeds for vigorous summer crop growth, dependable fruiting, and quality vegetable production.",
    featured: false,
  }),
  createProduct({
    id: "hybrid-sweet-pepper-f1",
    slug: "hybrid-sweet-pepper-f1",
    name: "Hybrid Sweet Pepper F1",
    category: "Pepper Seeds",
    shortDescription:
      "Sweet pepper seed for growers looking for attractive fruit presentation, healthy plant vigor, and dependable market potential.",
    longDescription:
      "Hybrid Sweet Pepper F1 from Zillay Seeds is suited for growers aiming for premium sweet pepper production in Pakistan. The product supports crop planning where clean fruit appearance, healthy growth, and practical field reliability matter to market success. It is appropriate for commercial vegetable growers, specialty suppliers, and quality-focused retail buyers.",
    highlights: [
      "Suitable for premium sweet pepper production",
      "Supports attractive fruit presentation in the market",
      "Useful for fresh vegetable channels and commercial farms",
      "Professional seed choice for Pakistan cultivation",
    ],
    growingSeason:
      "Pepper sowing and transplanting seasons under Pakistan vegetable production conditions",
    primaryImage:
      "/images/products/packets/capsicum.webp",
    gallery: [
      "/images/products/packets/capsicum.webp",
      "/images/products/packets/capsicum-2.webp",
    ],
    icon: "/images/products/icons/sweet-pepper-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Sweet Pepper F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Source Hybrid Sweet Pepper F1 in Pakistan from Zillay Seeds for strong crop growth, attractive harvest quality, and commercial pepper production.",
    featured: true,
  }),
  createProduct({
    id: "hybrid-cucumber-seeds",
    slug: "hybrid-cucumber-seeds",
    name: "Hybrid Cucumber seeds",
    category: "Cucurbit Seeds",
    shortDescription:
      "Commercial cucumber seed option for growers seeking healthy vines, dependable fruiting, and strong fresh market suitability.",
    longDescription:
      "Hybrid Cucumber seeds from Zillay Seeds are positioned for growers who need reliable cucumber production under Pakistan conditions. The product supports healthy crop growth and attractive fresh market output for wholesale and retail channels. It is a practical choice for farmers looking for dependable seed performance in warm season vegetable planning.",
    highlights: [
      "Suitable for commercial cucumber production",
      "Supports vigorous vine growth and healthy crop development",
      "Useful for wholesale, retail, and local mandi supply",
      "Trusted option for Pakistan vegetable growers",
    ],
    growingSeason:
      "Warm season cucumber sowing periods in Pakistan vegetable zones",
    primaryImage:
      "/images/products/packets/cucumber.webp",
    gallery: [
      "/images/products/packets/cucumber.webp",
      "/images/products/packets/cucumber-2.webp",
    ],
    icon: "/images/products/icons/cucumber-seeds-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Cucumber Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Hybrid Cucumber Seeds in Pakistan from Zillay Seeds for healthy vine growth, dependable fruiting, and fresh market cucumber production.",
    featured: true,
  }),
  createProduct({
    id: "hybrid-karaila-seeds-f1",
    slug: "hybrid-karaila-seeds-f1",
    name: "Hybrid Karaila Seeds F1",
    category: "Cucurbit Seeds",
    shortDescription:
      "Professional karela seed option for growers targeting vigorous vine growth, steady harvest potential, and trusted field performance.",
    longDescription:
      "Hybrid Karaila Seeds F1 from Zillay Seeds are suitable for bitter gourd growers who want dependable crop performance in Pakistan. The product supports practical cultivation planning for warm season vegetable production where vine vigor, repeat harvests, and market suitability matter. It is a strong option for growers supplying local and wholesale vegetable demand.",
    highlights: [
      "Suitable for bitter gourd cultivation in Pakistan",
      "Supports active vine growth in warm conditions",
      "Good fit for commercial vegetable production plans",
      "Useful for growers targeting repeat harvest cycles",
    ],
    growingSeason:
      "Warm season sowing periods for karela production in Pakistan",
    primaryImage:
      "/images/products/packets/karila.webp",
    gallery: [
      "/images/products/packets/karila.webp",
      "/images/products/packets/karila-2.webp",
    ],
    icon: "/images/products/icons/karela-icon-zillay-seeds.png",
    seoTitle:
      "Hybrid Karaila Seeds F1 in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Purchase Hybrid Karaila Seeds F1 in Pakistan from Zillay Seeds for vigorous vine growth, dependable crop performance, and bitter gourd production.",
    featured: false,
  }),
  createProduct({
    id: "cauliflower-f1",
    slug: "cauliflower-f1",
    name: "Cauliflower F1",
    category: "Cole Crop Seeds",
    shortDescription:
      "Quality cauliflower seed for growers seeking dependable cool season performance, healthy plant growth, and strong market presentation.",
    longDescription:
      "Cauliflower F1 from Zillay Seeds is positioned for cool season vegetable growers who require reliable crop performance and attractive market output. The product is suitable for Pakistan cultivation programs where curd quality, field uniformity, and season-fit planting are important. It offers a practical seed option for wholesale vegetable supply and professional farm planning.",
    highlights: [
      "Suitable for cool season cauliflower cultivation",
      "Supports market-focused crop presentation",
      "Useful for commercial nursery and field production",
      "Designed for growers seeking dependable seed quality",
    ],
    growingSeason:
      "Cool season nursery and transplanting windows for cauliflower in Pakistan",
    primaryImage:
      "/images/products/packets/cauliflower.webp",
    gallery: [
      "/images/products/packets/cauliflower.webp",
      "/images/products/photos/cauliflower-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/cauliflower-icon-zillay-seeds.png",
    seoTitle: "Cauliflower F1 Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Cauliflower F1 seeds in Pakistan from Zillay Seeds for dependable cool season production, healthy plant growth, and attractive market quality.",
    featured: true,
  }),
  createProduct({
    id: "carrot",
    slug: "carrot",
    name: "Carrot",
    category: "Root Vegetable Seeds",
    shortDescription:
      "Trusted carrot seed for growers seeking dependable stand establishment, attractive roots, and practical fresh market performance.",
    longDescription:
      "Carrot seed from Zillay Seeds is suitable for growers planning cool season root crop production in Pakistan. The product supports practical field use where root quality, crop uniformity, and market presentation are important to profitable harvesting. It is a dependable choice for commercial growers, retailers, and serious kitchen garden buyers.",
    highlights: [
      "Suitable for cool season carrot cultivation",
      "Supports fresh market root vegetable production",
      "Useful for farms and intensive household sowing",
      "Trusted option for Pakistan vegetable buyers",
    ],
    growingSeason: "Cool season sowing periods for carrot production in Pakistan",
    primaryImage:
      "/images/products/packets/carrot.webp",
    gallery: [
      "/images/products/packets/carrot.webp",
      "/images/products/photos/carrot-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/carrot-icon-zillay-seeds.png",
    seoTitle: "Carrot Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Get carrot seeds in Pakistan from Zillay Seeds for dependable cool season cultivation, attractive roots, and local fresh market production.",
    featured: false,
  }),
  createProduct({
    id: "loki-long-f1",
    slug: "loki-long-f1",
    name: "Loki Long F1",
    category: "Cucurbit Seeds",
    shortDescription:
      "Long bottle gourd hybrid for growers seeking vigorous vines, dependable fruit development, and market-oriented crop quality.",
    longDescription:
      "Loki Long F1 from Zillay Seeds is suited for growers who need a reliable long bottle gourd hybrid for Pakistan vegetable cultivation. The product supports practical warm season planting where vine vigor, uniformity, and attractive fruit presentation help growers supply local wholesale and retail demand. It is a strong option for quality-focused cucurbit production.",
    highlights: [
      "Suitable for long bottle gourd production",
      "Supports vigorous vine growth under warm conditions",
      "Useful for commercial cucurbit cultivation",
      "Designed for growers serving fresh vegetable markets",
    ],
    growingSeason: "Warm season sowing periods for loki production in Pakistan",
    primaryImage:
      "/images/products/packets/lauki.webp",
    gallery: [
      "/images/products/packets/lauki.webp",
      "/images/products/photos/luki-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/squash-seed-icon-zillay-seeds.png",
    seoTitle: "Loki Long F1 Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Loki Long F1 seeds in Pakistan from Zillay Seeds for vigorous vine growth, dependable bottle gourd production, and market-ready crop quality.",
    featured: false,
  }),
  createProduct({
    id: "onion-f1",
    slug: "onion-f1",
    name: "Onion F1",
    category: "Bulb Vegetable Seeds",
    shortDescription:
      "Professional onion seed option for growers looking for dependable crop establishment, healthy bulb development, and fresh market suitability.",
    longDescription:
      "Onion F1 from Zillay Seeds is positioned for onion growers who want a trustworthy seed option for Pakistan vegetable production. The product supports crop planning where nursery success, field establishment, and practical market performance matter. It is suitable for commercial growers, traders, and vegetable businesses serving quality-focused buyers.",
    highlights: [
      "Suitable for onion nursery and field production",
      "Supports dependable crop establishment",
      "Useful for fresh market and commercial vegetable supply",
      "Trusted option for Pakistan seed buyers",
    ],
    growingSeason: "Main onion nursery and transplanting periods in Pakistan",
    primaryImage:
      "/images/products/packets/onion.webp",
    gallery: [
      "/images/products/packets/onion.webp",
      "/images/products/photos/onion-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/onion-seeds-icon-zillay-seeds.png",
    seoTitle: "Onion F1 Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Purchase Onion F1 seeds in Pakistan from Zillay Seeds for dependable crop establishment, quality bulb production, and commercial onion farming.",
    featured: true,
  }),
  createProduct({
    id: "bringle-f1",
    slug: "bringle-f1",
    name: "Bringle F1",
    category: "Brinjal Seeds",
    shortDescription:
      "Hybrid brinjal seed for growers seeking vigorous plants, uniform fruit quality, and dependable crop performance for local markets.",
    longDescription:
      "Bringle F1 from Zillay Seeds is designed for brinjal growers who need reliable crop vigor and professional market presentation in Pakistan. The product supports practical sowing and transplanting plans where fruit consistency and attractive harvest quality help improve sales performance. It is a solid option for wholesale, retail, and local vegetable market supply.",
    highlights: [
      "Suitable for commercial brinjal production",
      "Supports healthy plant vigor in the field",
      "Useful for uniform harvest presentation",
      "Good fit for Pakistan vegetable growers",
    ],
    growingSeason: "Main brinjal sowing and transplanting seasons in Pakistan",
    primaryImage:
      "/images/products/packets/brinjal.webp",
    gallery: [
      "/images/products/packets/brinjal.webp",
      "/images/products/photos/bringle-seeds-pakistan-zillay-seeds-gujranwala.jpg",
    ],
    icon: "/images/products/icons/brinjle-seeds-icon-zillay-seeds.png",
    seoTitle: "Bringle F1 Seeds in Pakistan | Zillay Seeds Gujranwala",
    seoDescription:
      "Buy Bringle F1 seeds in Pakistan from Zillay Seeds for vigorous brinjal crop growth, dependable production, and attractive market quality.",
    featured: true,
  }),
];

export function getAllProducts(): Product[] {
  return [...PRODUCTS];
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((product) => product.featured);
}

export function getRelatedProducts(slug: string): Product[] {
  const current = getProductBySlug(slug);

  if (!current) {
    return [];
  }

  const sameCategory = PRODUCTS.filter(
    (product) =>
      product.slug !== current.slug && product.category === current.category,
  );

  const others = PRODUCTS.filter(
    (product) =>
      product.slug !== current.slug && product.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, 4);
}

export function getProductImage(image?: string): string {
  return withFallbackImage(image);
}
