import { create } from "zustand";
import { CartItem } from "@/types/cart";

interface CartState {
  cart: CartItem[];

  addToCart: (product: Omit<CartItem, "quantity">) => void;

  removeFromCart: (id: string, size: string) => void;

  increaseQty: (id: string, size: string) => void;

  decreaseQty: (id: string, size: string) => void;

  updateQty: (id: string, size: string, quantity: number) => void;

  getTotalItems: () => number;

  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(
        (item) =>
          item.id === product.id && item.size === product.size
      );

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.size === product.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      ),
    })),

  increaseQty: (id, size) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQty: (id, size) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  updateQty: (id, size, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    })),

  getTotalItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () =>
    get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
}));