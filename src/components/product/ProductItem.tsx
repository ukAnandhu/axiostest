"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import Producttabs from "./Producttabs";
import RelatedProducts from "./RelatedProducts";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  // Use product images if available, otherwise just duplicate the main image for the demo gallery
  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image, product.image, product.image, product.image];

  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize,
      category: "men", // Using dummy default or deriving if product type has it
      type: "topwear" // Using dummy default or deriving if product type has it
    });
    alert("Product added to cart!");
  };

  return (
    <div>
      <section className="w-full ">
        <div className="max-w-6xl mx-auto pt-10">

          {/* Layout Configuration */}
          <div className="flex flex-col md:flex-row gap-12">

            {/* LEFT - Images */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 md:w-1/2">

              {/* Thumbnails (Vertical on desktop, horizontal on mobile) */}
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-[15%] w-full gap-3 scrollbar-hide py-2 sm:py-0">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(img)}
                    className="cursor-pointer flex-shrink-0"
                  >
                    <Image
                      src={img}
                      alt={`thumb-${index}`}
                      width={100}
                      height={120}
                      className={`object-cover w-16 sm:w-full h-20 sm:h-28 ${mainImage === img ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                        } transition-opacity duration-200`}
                    />
                  </div>
                ))}
              </div>

              {/* Main Image View */}
              <div className="w-full sm:w-[85%] bg-[#F5F5F5] h-[450px] ">
                <Image
                  src={mainImage}
                  alt="product"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto max-h-[450px]"
                />
              </div>

            </div>

            {/* RIGHT - Product Info */}
            <div className="flex flex-col md:w-1/2">

              {/* Title */}
              <h1 className="text-2xl font-medium text-gray-900 mt-2">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex text-[#FF6347]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(122)</span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-3xl font-semibold text-gray-900">
                  ${product.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 mt-6 leading-relaxed text-sm md:w-[85%]">
                A lightweight, usually knitted, pullover shirt, close-fitting and
                with a round neckline and short sleeves, worn as an undershirt or
                outer garment.
              </p>

              {/* Size Selector */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-800 mb-4">Select Size</p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-12 h-12 flex items-center justify-center cursor-pointer border bg-[#F9F9F9] border-gray-200 text-sm font-medium transition-all
                        ${selectedSize === size ? "border-orange-400 text-black border-1" : "text-gray-700"}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="mt-8 bg-black text-white px-8 py-3 w-fit text-sm font-medium active:scale-95 transition-transform"
              >
                ADD TO CART
              </button>

              <hr className="mt-10 md:w-4/5 border-gray-200" />

              {/* Extra Info Footnotes */}
              <div className="mt-6 text-sm text-gray-500 space-y-2">
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