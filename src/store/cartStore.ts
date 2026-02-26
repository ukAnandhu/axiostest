// store/cartStore.ts
import { create } from "zustand"
import { Product } from "@/data/products"

interface CartItem extends Product {
  quantity: number
  selectedSize: string
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: Product, size: string) => void
  increaseQuantity: (id: string, size: string) => void
  decreaseQuantity: (id: string, size: string) => void
  removeFromCart: (id: string, size: string) => void
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product, size) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.id === product.id && item.selectedSize === size
      )

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }

      return {
        cart: [
          ...state.cart,
          { ...product, quantity: 1, selectedSize: size },
        ],
      }
    }),

  increaseQuantity: (id, size) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id, size) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.selectedSize === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeFromCart: (id, size) =>
    set((state) ({
      cart: state.cart.filter(
        (item) => !(item.id === id && item.selectedSize === size)
      ),
    })),
  getTotalPrice: () => {
    return set().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
   
}));

