export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    images?: string[];
    sizes: string[];
    category: string;
    type: string;
    description?: string;
    rating: number;
    reviews: Review[];
}

export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
}
