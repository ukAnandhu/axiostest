import ProductItem from "@/components/product/ProductItem";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Not found</div>;

  return (
    <ProductItem product={product} />
  );
}

