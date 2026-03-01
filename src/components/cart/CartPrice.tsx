import { useCartStore } from '@/store/cartStore'
import Link from 'next/link';

export default function CartPrice() {
  
 
  const totalPrice = useCartStore((state) => state.getTotalPrice())
  //  const {
   
  // const totalPrice = cart.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // )
  const shippingFee = 10;
  const grandTotal = totalPrice + shippingFee;
  
  return (

      <section className="w-full py-16">
  
        {/* Container */}
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
          <div className="flex items-center gap-4 mb-10">
          <h1 className="text-xl md:text-2xl font-medium text-gray-700">
            CART TOTALS
          </h1>

          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>
  
          {/* Totals Box */}
          <div className="w-full ">
  
            {/* Subtotal */}
            <div className="flex justify-between py-3 border-b border-gray-300 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
  
            {/* Shipping */}
            <div className="flex justify-between py-3 border-b border-gray-300 text-sm text-gray-600">
              <span>Shipping Fee</span>
              <span>$10</span>
            </div>
  
            {/* Total */}
            <div className="flex justify-between py-3 text-sm font-medium text-gray-800">
              <span>Total</span>
            <span>${grandTotal}</span>
            </div>
  
            {/* Button */}
            <div className="flex justify-end mt-6">
            <Link href="/place-order">
              <button className="
                bg-black
                text-white
                px-8
                py-3
                text-sm
                hover:bg-gray-800
                transition
                duration-300
              ">
                PROCEED TO CHECKOUT
              </button>
              </Link>
            </div>
  
          </div>
  
        </div>
  
      </section>
      
    
  );
}