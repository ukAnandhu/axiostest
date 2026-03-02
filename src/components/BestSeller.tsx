import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function BestSeller() {

  const bestSellerProducts = products.slice(0, 4);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-12">

        {/* Title with line */}
        <div className="flex items-center justify-center gap-3 mb-4">

          <h2 className="text-[28px] tracking-wide font-medium text-gray-700">
            BEST SELLER
          </h2>

          <div className="w-10 h-[2px] bg-gray-400"></div>

        </div>

        {/* Subtitle */}
        <p className="text-gray-500 text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, doloremque!
        </p>

      </div>


      {/* Products Grid */}
      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-x-6
        gap-y-10
      ">

        {bestSellerProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}

      </div>

    </section>
  );
}