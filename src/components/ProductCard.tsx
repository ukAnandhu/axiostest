
import Image from "next/image";
import Link from "next/link";

type Props = Product;

export default function ProductCard({
  id,
  image,
  title,
  price,
}: Props){
  return (
    <div className="cursor-pointer">
      
      {/* Image */}
      <div className="bg-gray-100 overflow-hidden">
        <Link key={id} href={`/products/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
          className="w-full h-auto object-cover hover:scale-105 transition duration-300"
        />
      </Link>
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