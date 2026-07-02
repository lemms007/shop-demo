"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartItemRow from "./CartItem";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, subtotal } = useCart();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform border-l border-gray-200 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-lg font-medium">Your cart is empty</p>
                <Link
                  href="/products"
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800"
                  onClick={onClose}
                >
                  Browse products
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <CartItemRow key={item.product.id} item={item} />
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-4">
              <div className="flex items-center justify-between text-base font-medium text-gray-900">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Shipping calculated at checkout
              </p>
              <Link
                href="/cart"
                onClick={onClose}
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
