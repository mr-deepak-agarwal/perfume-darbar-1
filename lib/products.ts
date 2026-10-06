export type Product = {
  slug: string; name: string; category: "Women" | "Men" | "Unisex"; family: string;
  price: number; size: string; rating: number; reviews: number; tag?: string;
  top: string; heart: string; base: string; desc: string; c1: string; c2: string;
};
export const money = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
export const products: Product[] = [
  { slug: "midnight-oud", name: "Midnight Oud", category: "Unisex", family: "Woody", price: 7499, size: "50 ml", rating: 4.8, reviews: 214, tag: "Bestseller", top: "Saffron, bergamot", heart: "Oud, rose", base: "Amber, sandalwood", desc: "A dark, resinous oud softened by rose petals. Built for evenings that run late.", c1: "#3b1647", c2: "#12061a" },
  { slug: "jaipur-rose", name: "Jaipur Rose", category: "Women", family: "Floral", price: 5999, size: "50 ml", rating: 4.7, reviews: 168, tag: "New", top: "Pink pepper, lychee", heart: "Damask rose, jasmine", base: "Musk, vanilla", desc: "Fresh-cut roses with a warm spice trail. Light enough for daytime, memorable enough for dinner.", c1: "#e8a3b8", c2: "#9c3a66" },
  { slug: "monsoon-vetiver", name: "Monsoon Vetiver", category: "Men", family: "Fresh", price: 4999, size: "100 ml", rating: 4.6, reviews: 132, top: "Green mandarin, mint", heart: "Vetiver, geranium", base: "Cedar, moss", desc: "The smell of rain on dry earth. Clean, green and easy to wear every day.", c1: "#7fb59a", c2: "#26584a" },
  { slug: "amber-noir", name: "Amber Noir", category: "Men", family: "Oriental", price: 6799, size: "100 ml", rating: 4.9, reviews: 301, tag: "Bestseller", top: "Cardamom, black pepper", heart: "Labdanum, tobacco", base: "Amber, tonka", desc: "Warm, spicy and confident. A signature scent that lasts from morning meeting to midnight.", c1: "#d79a3a", c2: "#6b3a0c" },
  { slug: "white-jasmine", name: "White Jasmine", category: "Women", family: "Floral", price: 5499, size: "50 ml", rating: 4.5, reviews: 97, top: "Neroli, pear", heart: "Jasmine sambac, tuberose", base: "White musk, cedar", desc: "A creamy, luminous jasmine with a clean musky finish.", c1: "#f3ecd9", c2: "#bfae83" },
  { slug: "saffron-silk", name: "Saffron Silk", category: "Unisex", family: "Spicy", price: 6299, size: "50 ml", rating: 4.7, reviews: 119, tag: "Limited", top: "Saffron, orange blossom", heart: "Iris, cashmere wood", base: "Benzoin, musk", desc: "Soft spice over powdery iris. Smooth, quiet and unusual.", c1: "#e6b04f", c2: "#a8431f" },
  { slug: "ocean-salt", name: "Ocean Salt", category: "Unisex", family: "Aquatic", price: 4499, size: "100 ml", rating: 4.4, reviews: 88, top: "Sea salt, grapefruit", heart: "Sage, driftwood", base: "Ambergris, white cedar", desc: "A bright coastal scent with a mineral edge. Made for hot days and open windows.", c1: "#8ec5e0", c2: "#2a6a96" },
  { slug: "velvet-iris", name: "Velvet Iris", category: "Women", family: "Powdery", price: 6999, size: "75 ml", rating: 4.8, reviews: 143, top: "Mandarin, aldehydes", heart: "Orris, violet", base: "Suede, sandalwood", desc: "Powdery iris wrapped in soft suede. Elegant, close to the skin and long lasting.", c1: "#b9a2d6", c2: "#5a3d86" },
];
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
