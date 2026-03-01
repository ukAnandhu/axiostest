export default function CartTotals() {
  return (
    <div className="w-full max-w-md ml-auto">

      {/* Cart totals heading */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-gray-400 tracking-widest text-sm font-medium">
          CART
        </h2>
        <h1 className="text-2xl font-semibold tracking-wide">
          TOTALS
        </h1>
        <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
      </div>

      {/* Totals */}
      <div className="space-y-3 text-gray-700">

        <div className="flex justify-between border-b pb-2">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Shipping Fee</span>
          <span>$10.00</span>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2">
          <span>Total</span>
          <span>$110.00</span>
        </div>

      </div>

      {/* Payment heading */}
      <div className="flex items-center gap-4 mt-10 mb-4">
        <h2 className="text-gray-400 tracking-widest text-sm font-medium">
          PAYMENT
        </h2>
        <h1 className="text-xl font-semibold tracking-wide">
          METHOD
        </h1>
        <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
      </div>

      {/* Payment options */}
      <div className="flex gap-4 mb-8">

        <div className="payment-box">
          <div className="radio"></div>
          <span className="text-indigo-500 font-semibold">stripe</span>
        </div>

        <div className="payment-box">
          <div className="radio"></div>
          <span className="font-semibold">Razorpay</span>
        </div>

        <div className="payment-box">
          <div className="radio bg-green-500"></div>
          <span className="font-semibold">CASH ON DELIVERY</span>
        </div>

      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-4 font-semibold tracking-wide hover:bg-gray-800 transition">
        PLACE ORDER
      </button>

    </div>
  );
}