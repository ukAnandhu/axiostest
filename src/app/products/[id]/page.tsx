import ProductItem from "@/components/product/ProductItem";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

type productId = { params: Promise<{ id: string }> }

// export default async function ProductId({ params }: { params: Promise<{ id: string }>}) {
export default async function ProductId({ params }: productId) {

  const product = await params;

  const productItem = products.find((p) => p.id === product.id);

  if(!product){ notFound()}

  return (
    <div>
      <ProductItem product={productItem} />
    </div>
  )
}
