"use client";

import axiosInstance from "@/lib/axios";
import { X } from "lucide-react";
import { useState } from "react";

interface AddProductProps {
    onClose: () => void;
}

export default function AddProduct({ onClose }: AddProductProps) {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addProduct = async () => {
        if (!title.trim()) return;
        setIsSubmitting(true);
        try {
            const res = await axiosInstance.post("/products/add", {
                title: title,
            });

            setMessage("Product Added Successfully");
            console.log(res.data);
            // Optional: Close modal after success or let user see message
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.log(error);
            setMessage("Failed to add product.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
                <X size={20} />
            </button>

            <h2 className="text-xl font-medium text-gray-800 mb-6 uppercase tracking-wider">
                Add New Product
            </h2>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600 font-medium">Product Title</label>
                    <input
                        type="text"
                        placeholder="Enter product title..."
                        className="border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500 transition-colors"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <button
                    onClick={addProduct}
                    disabled={isSubmitting || !title.trim()}
                    className={`bg-black text-white p-3 rounded font-medium transition-all active:scale-95 ${isSubmitting || !title.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                        }`}
                >
                    {isSubmitting ? "Adding..." : "Add Product"}
                </button>

                {message && (
                    <p className={`text-sm text-center mt-2 ${message.includes("Successfully") ? "text-green-600" : "text-red-500"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}