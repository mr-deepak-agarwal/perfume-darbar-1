import Link from "next/link";
import Bottle from "@/components/Bottle";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
export default function Home() {
  const best = products.filter((p) => p.tag === "Bestseller" || p.tag === "New" || p.tag === "Limited").concat(products.slice(2, 4)).slice(0, 4);
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-24">
        <div className="hero-in">
          <h1 className="text-5xl leading-[1.05] md:text-7xl">Scent is the first thing they remember.</h1>
          <p className="mt-6 max-w-md text-lg text-ink/70">Small-batch perfumes built from saffron, oud, rose and vetiver. Blended in India, shipped worldwide.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/shop" className="btn">Shop all perfumes</Link><Link href="/shop?c=Unisex" className="btn btn-ghost">Explore unisex</Link></div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, #c27c1a55, #4a215822 60%, transparent 72%)" }} />
          <Bottle c1="#3b1647" c2="#12061a" id="hero" className="absolute inset-0 m-auto h-full" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-3">
          {[["Women", "Floral, powdery and soft", "#e8a3b8"], ["Men", "Woody, spicy and fresh", "#d79a3a"], ["Unisex", "Made to be shared", "#8ec5e0"]].map(([n, d, c]) => (
            <Link key={n} href={`/shop?c=${n}`} className="group relative overflow-hidden rounded-2xl p-8 text-ink" style={{ background: `${c}44` }}>
              <h2 className="text-3xl">{n}</h2><p className="mt-1 text-sm text-ink/70">{d}</p><p className="mt-10 text-sm font-semibold underline underline-offset-4 group-hover:text-plum">Browse {n.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between"><h2 className="text-4xl">Most loved this season</h2><Link href="/shop" className="text-sm underline underline-offset-4">View all</Link></div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">{best.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
          {[["Natural absolutes", "Rose, jasmine and saffron sourced from small growers."], ["Lasts 8 to 10 hours", "20% oil concentration, tested on skin and fabric."], ["30-day returns", "Not your scent? Return the unused bottle for a refund."]].map(([t, d]) => (
            <div key={t} className="bg-white p-8"><h3 className="text-xl">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="mb-8 text-4xl">What customers say</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[["Amber Noir gets a compliment every single time I wear it. Easily 9 hours on my skin.", "Rohan, Mumbai"], ["Jaipur Rose is the first rose perfume that doesn't smell like grandma's soap.", "Ishita, Delhi"], ["The sample set made choosing easy. Packaging felt like a gift.", "Meera, Bengaluru"]].map(([q, a]) => (
            <figure key={a} className="rounded-2xl bg-white p-7"><blockquote className="serif text-lg leading-snug">“{q}”</blockquote><figcaption className="mt-4 text-sm text-ink/60">{a}</figcaption></figure>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center text-white">
          <h2 className="text-4xl">Get 10% off your first bottle</h2><p className="mx-auto mt-3 max-w-md text-white/70">Join the list for new releases and restocks. No spam.</p>
          <div className="mx-auto mt-6 flex max-w-md gap-2"><input className="field text-ink" placeholder="Email address" aria-label="Email address" /><button className="btn bg-amber hover:bg-amber/80">Subscribe</button></div>
        </div>
      </section>
    </>
  );
}
