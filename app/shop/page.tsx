import { Suspense } from "react";
import Shop from "./Shop";
export const metadata = { title: "Shop all perfumes | Maison Aurel" };
export default function Page() { return <Suspense><Shop /></Suspense>; }
