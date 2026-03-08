"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { getProducts } from "@/services/productService";

export default function LatestCollections() {
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
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="col-span-full text-center text-red-500">{error}</p>
        ) : products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          products.map((product: any) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))
        )}
      </div>

      {/* All Products Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/all-products"
          className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm"
        >
          All Products
        </a>
      </div>

    </section>
  );
}
