"use client"
import { products } from "@/data/products";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";

export default function CollectionsPage() {
  const { selectedCategory, selectedType, sortOption } = useFilterStore();
  const sortOptions = useFilterStore((state) => state.sortOption);
  const setSortOption = useFilterStore((state) => state.setSortOption);
  const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await getProducts();
          setProducts(data.products || []);
        } catch (err: any) {
          console.error("Failed to fetch products:", err);
          setError("Failed to load products. Please check your network connection.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    
 
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);

    const typeMatch =
      selectedType.length === 0 ||
      selectedType.includes(product.type);

    return categoryMatch && typeMatch;
  });
  if (sortOption === "low-high") {
    filteredProducts = filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "high-low") {
    filteredProducts = filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }
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

            <select value={sortOptions}
              onChange={(e) =>
              setSortOption(e.target.value as "low-high" | "high-low")
                } className="border px-3 py-2 text-sm">
              <option value="">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price Low to High</option>
              <option value="high-low">Sort by: Price High to Low</option>
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
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
