import axiosInstance from "@/lib/axios";

export const getProducts = async (limit: number = 10) => {
    const response = await axiosInstance.get("/products", {
        params: {
            limit,
        },
    });

    if (response.data && response.data.products) {
        response.data.products = response.data.products.map((p: any) => ({
            ...p,
            image: p.thumbnail, // Map dummyjson thumbnail to image prop expected by ProductCard
        }));
    }

    return response.data;
};