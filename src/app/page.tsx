import Link from "next/link";
import { getFeaturedProducts, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();
  const displayCategories = categories.filter((c) => c !== "All");

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to ShopDemo
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Browse our curated collection of products across electronics,
              clothing, home goods, books, and sports.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
              >
                Shop Now
              </Link>
              <Link
                href="/wishlist"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {displayCategories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <span className="text-lg font-medium text-gray-900">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
