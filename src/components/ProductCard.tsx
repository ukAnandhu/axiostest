import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

interface Props extends Product {
  onUpdate?: (id: string, currentTitle: string) => void;
  onDelete?: (id: string) => void;
}

export default function ProductCard({
  id,
  image,
  title,
  price,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <div className="group relative cursor-pointer">

      {/* Image */}
      <div className="bg-gray-100 overflow-hidden relative">
        <Link key={id} href={`/products/${id}`}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={500}
            className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
          />
        </Link>

        {/* Action Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2 pointer-events-none">
          {onUpdate && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdate(id, title);
              }}
              className="px-3 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-black hover:text-white transition-colors pointer-events-auto"
            >
              Update
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
              className="px-3 py-1.5 bg-white text-red-600 text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-red-600 hover:text-white transition-colors pointer-events-auto"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Title */}
      <p className="mt-3 text-[15px] text-gray-700 leading-snug">
        {title}
      </p>

      {/* Price */}
      <p className="mt-1 text-[15px] font-semibold text-gray-900">
        ${price}
      </p>

    </div>
  );
}
