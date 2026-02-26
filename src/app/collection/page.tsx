
import { products } from "@/data/products";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <FilterSidebar />

        {/* Right Content */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">

            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold">
                ALL COLLECTIONS
              </h1>

              <div className="w-12 h-[2px] bg-black"></div>
            </div>

            <select className="border px-3 py-2 text-sm">
              <option>Sort by: Relevant</option>
              <option>Sort by: Price Low to High</option>
              <option>Sort by: Price High to Low</option>
            </select>

          </div>

          {/* Product Grid */}
          <div className="
            grid 
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-6
          ">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
