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

export const updateProductTitle = async (id: number, title: string) => {
    const response = await axiosInstance.patch(`/products/${id}`, {
        title,
    });
    return response.data;
};

export const deleteProduct = async (id: number) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
};
