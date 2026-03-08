"use client"
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productService";

export default function AllProductsPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getProducts(25);
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
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-light text-gray-500 uppercase flex items-center gap-3">
                        ALL <span className="text-gray-800 font-medium">PRODUCTS</span>
                    </h1>
                    <div className="w-12 h-[1px] bg-gray-800"></div>
                </div>

                <button
                    className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors uppercase tracking-widest"
                    onClick={() => alert("Add Product Clicked")}
                >
                    ADD
                </button>
            </div>

            {/* Product Grid */}
            <div className="
        grid 
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-x-6
        gap-y-10
      ">
                {loading ? (
                    <p className="col-span-full text-center text-gray-500 py-20">Loading products...</p>
                ) : error ? (
                    <p className="col-span-full text-center text-red-500 py-20">{error}</p>
                ) : products.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500 py-20">No products found.</p>
                ) : (
                    products.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
