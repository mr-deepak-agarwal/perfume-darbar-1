import Link from "next/link";
import Bottle from "./Bottle";
import { Product, money } from "@/lib/products";
export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 50% 60%, ${p.c1}, transparent 70%)` }} />
        <Bottle c1={p.c1} c2={p.c2} id={`card-${p.slug}`} className="absolute inset-0 m-auto h-3/4 transition-transform duration-500 group-hover:scale-105" />
        {p.tag && <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs text-white">{p.tag}</span>}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div><h3 className="serif text-lg">{p.name}</h3><p className="text-sm text-ink/60">{p.family} · {p.size}</p></div>
        <p className="text-sm font-semibold">{money(p.price)}</p>
      </div>
    </Link>
  );
}
