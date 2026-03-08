import ProductItem from "@/components/product/ProductItem";



export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <ProductItem id={id} />
  );
}
