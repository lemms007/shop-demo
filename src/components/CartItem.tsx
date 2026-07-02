"use client";

import type { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface Props {
  item: CartItemType;
}

export default function CartItemRow({ item }: Props) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 border-b border-gray-200 py-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-24 w-24 flex-shrink-0 rounded-lg object-cover bg-gray-100"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                updateQuantity(product.id, Math.max(1, quantity - 1))
              }
              className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-900">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeItem(product.id)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
