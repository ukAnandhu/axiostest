import { useCartStore } from '@/store/cartStore'
import { CartItem as CART } from '@/types/cart';

type itemProps = {
  item: CART;
}

export default function CartPrice({item}: itemProps) {
  
 
  const totalPrice = useCartStore((state) => state.getTotalPrice())
  //  const {
   
  // const totalPrice = cart.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // )
  
  return (

      <section className="w-full  px-4 py-16">
  
        {/* Container */}
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg md:text-xl font-medium text-gray-700">
              CART TOTALS
            </h2>
  
            <div className="w-16 h-[1px] bg-gray-400"></div>
          </div>
  
          {/* Totals Box */}
          <div className="max-w-xl ml-auto">
  
            {/* Subtotal */}
            <div className="flex justify-between py-3 border-b border-gray-300 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${item.price}</span>
            </div>
  
            {/* Shipping */}
            <div className="flex justify-between py-3 border-b border-gray-300 text-sm text-gray-600">
              <span>Shipping Fee</span>
              <span>$10</span>
            </div>
  
            {/* Total */}
            <div className="flex justify-between py-3 text-sm font-medium text-gray-800">
              <span>Total</span>
            <span>${totalPrice}</span>
            </div>
  
            {/* Button */}
            <div className="flex justify-end mt-6">
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
            </div>
  
          </div>
  
        </div>
  
      </section>
      
    
  );
}