"use client"
import Image from "next/image";
import { useCartStore } from "@/store/cartStore"
import CartPrice from "./CartPrice";
import { Product } from "@/data/products";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore()

  
  return (
    <div>
    <section className="w-full min-h-screen  px-4 py-16">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-xl md:text-2xl font-medium text-gray-700">
            YOUR CART
          </h1>

          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>

          {/* Cart Item */}
          {cart.map((item) => (
        <div key={`${item.id}-${item.selectedSize}`} className="border-t border-b border-gray-300 py-6">

          <div className="flex items-center justify-between">

            {/* Left Section */}
            <div className="flex items-center gap-6">

              {/* Image */}
              <div className="w-16 h-16 bg-white">
                <Image
                  src={item.image}
                  alt="product"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div>

                <h2 className="text-sm md:text-base text-gray-700 font-medium">
                  Men Round Neck Pure Cotton T-shirt
                </h2>

                <div className="flex items-center gap-4 mt-2">

                  <span className="text-gray-600 text-sm">
                    ${item.price}
                  </span>

                  <span className="
                    border
                    border-gray-300
                    px-3
                    py-1
                    text-sm
                    bg-white
                  ">
                    L
                  </span>

                </div>

              </div>

            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Quantity */}
                <div className="flex gap-3 mt-2">
                  <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>-</button>
                             <span>{item.quantity}</span>
                             <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>+</button>
                      </div>
              {/*<input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="
                  w-16
                  border
                  border-gray-300
                  px-2
                  py-1
                  text-sm
                  bg-white
                  outline-none
                "
              />*/}

              {/* Delete Icon */}
                <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-gray-500 hover:text-red-500">

                <Image  src="/tick-logo.png" alt="Delete" width={20} height={20} />
              </button>

            </div>

           </div>

        </div>
          ))}
      </div>

    </section>
    {cart.map((item) => (
            <CartPrice key={`${item.id}-${item.selectedSize}`} item={item}  />
          ))}
  </div>
  );
}
