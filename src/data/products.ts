export interface Product {
  id: string
  title: string
  price: number
  image: string
  sizes: string[]
};
// interface Product {
//   id: number
//   title: string
//   price: number
//   image: string
//   description: string
//   sizes: string[]
// }

export const products: Product[] = [
  {
    id: "1",
    image: "/image1.png",
    title: "Women Round Neck Cotton Top",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "2",
    image: "/image1.png",
    title: "Men Round Neck Pure Cotton T-shirt",
    price: 29.99,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "3",
    image: "/image1.png",
    title: "Girls Round Neck Cotton Top",
    price: 39.99,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "4",
    image: "/image2.png",
    title: "Girls Round Neck Cotton Top",
    price: 200,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "5",
    image: "/image1.png",
    title: "Girls Round Neck Cotton Top",
    price: 200,
    sizes: ["S", "M", "L", "XL"]
  },
];
