import DeliveryForm from "@/components/delivery Form/DeliveryForm";
import CartTotals from "@/components/delivery Form/CardTotals";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex justify-center bg-white text-gray-800 font-sans">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 lg:gap-4 py-16">

        {/* Left Column - Delivery Information */}
        <div className="w-full lg:w-[50%] ">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-gray-500 tracking-wider text-2xl font-light">
              DELIVERY <span className="text-gray-800 font-medium">INFORMATION</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gray-600 sm:w-12 max-w-[48px]"></div>
          </div>

          <DeliveryForm />
        </div>

        {/* Right Column - Cart Totals & Payment */}
        <div className="w-full lg:w-[50%] flex flex-col py-12">
          {/* Cart totals heading */}
          <div className="flex items-center gap-4">
            <h2 className="text-gray-500 tracking-wider text-2xl font-medium">
              CART <span className="text-gray-800 font-medium tracking-wide">TOTALS</span>
            </h2>
            <div className="flex-1 h-[1px] bg-gray-600 sm:w-12 max-w-[48px]"></div>
          </div>
          <CartTotals />
        </div>

      </div>
    </div>
  );
}