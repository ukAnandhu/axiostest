import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <div className="space-y-2">
      <Link key={product.id} href={`/products/${product.id}`}>
        <div className="bg-gray-100 aspect-square relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <h3 className="text-sm text-gray-700">
        {product.title}
      </h3>

      <p className="font-semibold text-sm">
        ${product.price}
      </p>

    </div>
  );
}