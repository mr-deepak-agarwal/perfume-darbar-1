"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
export default function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [q, setQ] = useState(1);
  const [done, setDone] = useState(false);
  return (
    <div className="mt-7">
      <div className="flex gap-3">
        <div className="flex items-center rounded-full border border-line bg-white">
          <button aria-label="Decrease" className="px-4 py-3" onClick={() => setQ(Math.max(1, q - 1))}>−</button>
          <span className="w-6 text-center text-sm">{q}</span>
          <button aria-label="Increase" className="px-4 py-3" onClick={() => setQ(q + 1)}>+</button>
        </div>
        <button className="btn flex-1" onClick={() => { add(slug, q); setDone(true); }}>Add to cart</button>
      </div>
      {done && <p className="mt-3 text-sm text-plum">Added to your cart. <Link href="/cart" className="font-semibold underline">View cart</Link></p>}
    </div>
  );
}
