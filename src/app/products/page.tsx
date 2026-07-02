"use client";

import { useState, useMemo } from "react";
import { products, type Category } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Products</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter selected={category} onSelect={setCategory} />
        <div className="w-full sm:w-72">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
