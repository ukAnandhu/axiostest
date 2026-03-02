export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  size: string
  quantity: number
  category: "men" | "women" | "kid";
  type: "topwear" | "bottomwear" | "winterwear";
}