import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function LatestCollections() {
  return (
    <section className="w-full sm:px-6 lg:px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-12">

        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-[28px] font-medium tracking-wide text-gray-700">
            LATEST COLLECTIONS
          </h2>

          <div className="w-10 h-[2px] bg-gray-400"></div>
        </div>

        <p className="text-gray-500 text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, ullam?
        </p>
      </div>


      {/* Grid */}
      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-x-6
        gap-y-10
      ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

    </section>
  );
}
