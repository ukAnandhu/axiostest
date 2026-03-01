"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import Producttabs from "./Producttabs";
import RelatedProducts from "./RelatedProducts";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
}

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {

  const [selectedSize, setSelectedSize] = useState("")
  const addToCart = useCartStore((state) => state.addToCart)
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Select size");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
  }

  return (
    <div>
      <section className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT - Images */}
          <div className="flex gap-4">

            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {/*{images.map((img, index) => (*/}
                <div
                  key={product.id}
                  // onClick={() => setMainImage(img)}
                  className="cursor-pointer"

                >
                  <Image
                    src={product.image}
                    alt="thumb"
                    width={80}
                    height={100}
                    className="object-cover"
                  />
                </div>

            </div>

            {/* Main Image */}
            <div className="bg-white">
              <Image
                src={product.image}
                alt="product"
                width={500}
                height={600}
                className="object-cover"
              />
            </div>

          </div>

          {/* RIGHT - Product Info */}
          <div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-medium text-gray-800">
              Men Round Neck Pure Cotton T-shirt
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">

              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <span className="text-sm text-gray-600">(122)</span>

            </div>

            {/* Price */}
            <div className="mt-4">
              <span className="text-2xl font-semibold text-gray-800">
                ${product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-4 leading-6 max-w-md">
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>

            {/* Size */}
            <div className="mt-6">
              <p className="text-sm text-gray-700 mb-3">Select Size</p>

              <div className="flex gap-3">


                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-3 py-1 ${selectedSize === size ? "bg-black text-white" : ""
                        }`}
                    >
                      {size}
                    </button>
                  ))}
              </div>

            </div>

              {/* Button */}
              
              <button
                
                onClick={() => handleAddToCart()}
                className="
                  mt-6
                  bg-black
                  text-white
                  px-8
                  py-3
                  text-sm
                  hover:bg-gray-800
                  transition
                "
              >
                Add To Cart
              </button>
            

            {/* Extra Info */}
            <div className="mt-6 border-t border-gray-300 pt-4 text-sm text-gray-600 space-y-1">

              <p>100% Original product.</p>

              <p>Cash on Delivery Available on this product.</p>

              <p>Easy return and exchange within 7 days.</p>

            </div>

          </div>

        </div>

      </div>

      </section>
      <Producttabs />
      <RelatedProducts product={product} />
    </div>
  );
}