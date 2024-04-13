import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <main className="p-10 flex flex-col">
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
