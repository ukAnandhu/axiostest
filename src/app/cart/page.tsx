import CardItem from '@/components/cart/CardItem'
import { products } from "@/data/products";

export default function CartPage() {
  return (
    <div>
      {products.map((product) => (
        <CardItem key={product.id} product={product}/>
      ))}
    </div>
  )
}
