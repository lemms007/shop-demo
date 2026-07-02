"use client";

import type { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";

interface Props {
  product: Product;
  className?: string;
}

export default function WishlistButton({ product, className = "" }: Props) {
  const { isWishlisted, toggleItem } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <button
      onClick={() => toggleItem(product)}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
        wishlisted
          ? "border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
          : "border-gray-300 text-gray-700 hover:bg-gray-50"
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={wishlisted ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      {wishlisted ? "Wishlisted" : "Add to Wishlist"}
    </button>
  );
}
