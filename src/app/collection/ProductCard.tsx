import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
  category: string,
  type: string,
}

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <div className="space-y-2">

      <div className="bg-gray-100 aspect-square relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-sm text-gray-700">
        {product.title}
      </h3>

      <p className="font-semibold text-sm">
        ${product.price}
      </p>

    </div>
  );
}