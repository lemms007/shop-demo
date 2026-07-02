"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type { Product } from "@/types";

interface WishlistState {
  items: Product[];
}

type WishlistAction =
  | { type: "TOGGLE"; product: Product }
  | { type: "REMOVE"; productId: string }
  | { type: "LOAD"; items: Product[] };

interface WishlistContextValue {
  items: Product[];
  toggleItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction
): WishlistState {
  switch (action.type) {
    case "TOGGLE": {
      const exists = state.items.find(
        (item) => item.id === action.product.id
      );
      if (exists) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.product.id),
        };
      }
      return { ...state, items: [...state.items, action.product] };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    case "LOAD":
      return { ...state, items: action.items };
    default:
      return state;
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: "LOAD", items: parsed });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.items));
  }, [state.items]);

  const toggleItem = (product: Product) =>
    dispatch({ type: "TOGGLE", product });

  const removeItem = (productId: string) =>
    dispatch({ type: "REMOVE", productId });

  const isWishlisted = (productId: string) =>
    state.items.some((item) => item.id === productId);

  return (
    <WishlistContext.Provider
      value={{ items: state.items, toggleItem, removeItem, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
