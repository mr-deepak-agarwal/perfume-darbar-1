"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
const nav = [["Shop all", "/shop"], ["Women", "/shop?c=Women"], ["Men", "/shop?c=Men"], ["Unisex", "/shop?c=Unisex"], ["Our story", "/about"]];
export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-mist/90 backdrop-blur">
      <div className="bg-ink px-4 py-2 text-center text-xs text-white">Free shipping on orders above ₹3,999. Free sample with every order.</div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <Link href="/" className="serif text-2xl tracking-wide">Maison Aurel</Link>
        <nav className="hidden gap-7 text-sm md:flex">{nav.map(([l, h]) => <Link key={h} href={h} className="hover:text-amber">{l}</Link>)}</nav>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/account" className="hidden sm:block hover:text-amber">Account</Link>
          <Link href="/cart" className="hover:text-amber">Cart ({count})</Link>
        </div>
      </div>
      {open && <nav className="flex flex-col gap-3 border-t border-line px-5 py-4 md:hidden">{nav.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{l}</Link>)}<Link href="/account" onClick={() => setOpen(false)}>Account</Link></nav>}
    </header>
  );
}
