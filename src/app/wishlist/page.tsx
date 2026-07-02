"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types";

function WishlistItem({ product }: { product: Product }) {
  const { removeItem } = useWishlist();
  const { addItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-gray-200 py-4">
      <Link
        href={`/products/${product.slug}`}
        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-xs text-gray-500">{product.category}</p>
          <span className="mt-1 block text-sm font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              addItem(product);
              removeItem(product.id);
            }}
            className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
          >
            Move to Cart
          </button>
          <button
            onClick={() => removeItem(product.id)}
            className="text-xs text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-16 w-16 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className="text-lg font-medium">Your wishlist is empty</p>
          <Link
            href="/products"
            className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 divide-y divide-gray-200">
          {items.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
