"use client"
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts, deleteProduct, updateProductTitle } from "@/services/productService";
import AddProduct from "@/components/add products/AddProduct";
import UpdateTitleModal from "@/components/UpdateTitleModal";

export default function AllProductsPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ id: string, title: string } | null>(null);

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

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        try {
            await deleteProduct(Number(id));
            setProducts(prev => prev.filter(p => p.id.toString() !== id.toString()));
        } catch (err) {
            console.error("Failed to delete product:", err);
            alert("Failed to delete product. Please try again.");
        }
    };

    const handleUpdateClick = (id: string, title: string) => {
        setSelectedProduct({ id, title });
        setIsUpdateModalOpen(true);
    };

    const handleUpdateTitle = async (newTitle: string) => {
        if (!selectedProduct) return;

        try {
            await updateProductTitle(Number(selectedProduct.id), newTitle);
            setProducts(prev => prev.map(p =>
                p.id.toString() === selectedProduct.id.toString() ? { ...p, title: newTitle } : p
            ));
            setIsUpdateModalOpen(false);
            setSelectedProduct(null);
        } catch (err) {
            console.error("Failed to update product title:", err);
            alert("Failed to update product title. Please try again.");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
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
                    onClick={() => setIsAddModalOpen(true)}
                >
                    ADD
                </button>
            </div>

            {/* Modals */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <AddProduct onClose={() => setIsAddModalOpen(false)} />
                </div>
            )}

            {isUpdateModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <UpdateTitleModal
                        initialTitle={selectedProduct.title}
                        onClose={() => setIsUpdateModalOpen(false)}
                        onUpdate={handleUpdateTitle}
                    />
                </div>
            )}

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
                            onUpdate={handleUpdateClick}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

