"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
const cats = ["All", "Women", "Men", "Unisex"];
const fams = ["Floral", "Woody", "Fresh", "Oriental", "Spicy", "Aquatic", "Powdery"];
export default function Shop() {
  const sp = useSearchParams();
  const [cat, setCat] = useState(sp.get("c") || "All");
  const [fam, setFam] = useState("");
  const [max, setMax] = useState(8000);
  const [sort, setSort] = useState("featured");
  const list = products.filter((p) => (cat === "All" || p.category === cat) && (!fam || p.family === fam) && p.price <= max)
    .sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : 0);
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-5xl">{cat === "All" ? "All perfumes" : `${cat}'s perfumes`}</h1>
      <p className="mt-2 text-ink/60">{list.length} fragrances</p>
      <div className="mt-8 grid gap-10 md:grid-cols-[220px_1fr]">
        <aside className="space-y-7 text-sm">
          <div><p className="mb-2 font-semibold">Category</p><div className="flex flex-wrap gap-2">{cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 ${cat === c ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>{c}</button>)}</div></div>
          <div><p className="mb-2 font-semibold">Scent family</p><div className="flex flex-wrap gap-2">{fams.map((f) => <button key={f} onClick={() => setFam(fam === f ? "" : f)} className={`rounded-full border px-3 py-1.5 ${fam === f ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>{f}</button>)}</div></div>
          <div><label className="mb-2 block font-semibold" htmlFor="pr">Max price: ₹{max.toLocaleString("en-IN")}</label><input id="pr" type="range" min={4000} max={8000} step={500} value={max} onChange={(e) => setMax(+e.target.value)} className="w-full accent-plum" /></div>
          <div><label className="mb-2 block font-semibold" htmlFor="so">Sort by</label><select id="so" className="field" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></div>
        </aside>
        {list.length ? <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          : <div className="rounded-2xl bg-white p-10 text-center"><p className="serif text-2xl">No perfumes match these filters</p><button className="btn mt-5" onClick={() => { setCat("All"); setFam(""); setMax(8000); }}>Clear filters</button></div>}
      </div>
    </div>
  );
}
