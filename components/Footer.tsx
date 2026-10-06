import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2"><p className="serif text-2xl">Maison Aurel</p><p className="mt-3 max-w-sm text-sm text-white/70">Small-batch perfumes made with natural absolutes and blended in India. Every bottle ships with a free sample of your next favourite.</p></div>
        <div className="text-sm"><p className="mb-3 font-semibold">Shop</p><div className="flex flex-col gap-2 text-white/70"><Link href="/shop">All perfumes</Link><Link href="/shop?c=Women">Women</Link><Link href="/shop?c=Men">Men</Link><Link href="/shop?c=Unisex">Unisex</Link></div></div>
        <div className="text-sm"><p className="mb-3 font-semibold">Help</p><div className="flex flex-col gap-2 text-white/70"><Link href="/account">Track order</Link><Link href="/about">Our story</Link><span>Shipping and returns</span><span>care@maisonaurel.in</span></div></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/50">© 2026 Maison Aurel. Demo store.</p>
    </footer>
  );
}
