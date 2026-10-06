import { notFound } from "next/navigation";
import Bottle from "@/components/Bottle";
import ProductCard from "@/components/ProductCard";
import AddToCart from "./AddToCart";
import { getProduct, money, products } from "@/lib/products";
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug); return { title: p ? `${p.name} | Maison Aurel` : "Not found" };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug && (x.category === p.category || x.family === p.family)).slice(0, 4);
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
          <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 50% 60%, ${p.c1}, transparent 70%)` }} />
          <Bottle c1={p.c1} c2={p.c2} id={`pdp-${p.slug}`} className="absolute inset-0 m-auto h-4/5" />
        </div>
        <div>
          <p className="text-sm text-ink/60">{p.category} · {p.family}</p>
          <h1 className="mt-1 text-5xl">{p.name}</h1>
          <p className="mt-3 text-sm">★ {p.rating} <span className="text-ink/50">({p.reviews} reviews)</span></p>
          <p className="mt-5 text-3xl">{money(p.price)} <span className="text-base text-ink/50">/ {p.size}</span></p>
          <p className="mt-5 max-w-lg text-ink/75 leading-relaxed">{p.desc}</p>
          <AddToCart slug={p.slug} />
          <ul className="mt-6 space-y-1 text-sm text-ink/70"><li>Free shipping above ₹3,999</li><li>Delivery in 3 to 6 working days</li><li>30-day returns on unused bottles</li></ul>
          <div className="mt-8 divide-y divide-line rounded-2xl bg-white">
            {[["Top notes", p.top], ["Heart notes", p.heart], ["Base notes", p.base]].map(([k, v]) => <div key={k} className="flex justify-between gap-4 px-5 py-4 text-sm"><span className="font-semibold">{k}</span><span className="text-right text-ink/70">{v}</span></div>)}
          </div>
        </div>
      </div>
      <section className="mt-24">
        <h2 className="mb-8 text-3xl">You may also like</h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
      </section>
    </div>
  );
}
