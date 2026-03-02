"use client"
import Image from "next/image";
import { useCartStore } from "@/store/cartStore"
import CartPrice from "./CartPrice";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQty,
  } = useCartStore();

  return (
    <div className="w-full min-h-screen px-4 py-16 bg-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-10">
          <h1 className="text-xl md:text-2xl font-light text-gray-500 uppercase flex items-center gap-2">
            YOUR <span className="text-gray-800 font-medium">CART</span>
          </h1>
          <div className="w-12 h-[1px] bg-gray-800"></div>
        </div>

        {/* Cart Items List */}
        <div className="flex flex-col">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between items-center gap-4 py-4 border-t border-gray-200 border-b"
            >
              {/* Product Image */}
              <div className="flex items-center gap-4">
                <div className="w-20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={100}
                    className="w-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm md:text-base font-medium text-gray-700">
                    {item.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-gray-600">${item.price}</p>
                    <p className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs">
                      {item.size}
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex justify-center items-center md:justify-start">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQty(item.id, item.size, parseInt(e.target.value) || 1)}
                    className="w-16 border border-gray-300 px-2 py-2 text-center outline-none focus:border-gray-500"
                  />
                </div>

                {/* Delete Icon */}
                <div className="flex justify-end pr-14">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={24} strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>

          ))}
          <div className="mt-10">
            <div className="w-full  sm: flex-1">
              <CartPrice />
            </div>
          </div>
        </div>
        {/* Total Price Section */}

      </div>
    </div>
  );
}
