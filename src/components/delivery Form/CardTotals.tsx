"use client"
import { useCartStore } from "@/store/cartStore";
import React, { useState } from "react";

export default function CartTotals() {
  const totalPrice = useCartStore((state: any) => state.getTotalPrice())
  const [method, setMethod] = useState('cod');

  const shippingFee = 10;
  const grandTotal = totalPrice + shippingFee;

  return (
    <div className="w-full flex flex-col gap-8 text-sm">
      {/* Totals */}
      <div className="flex flex-col gap-4 text-sm mt-2">

        <div className="flex justify-between border-b border-gray-400 pb-1">
          <span className="font-mediumtext-gray-800">Subtotal</span>
          <span className="text-gray-800 font-medium">${totalPrice}</span>
        </div>

        <div className="flex justify-between border-b border-gray-400 pb-1">
          <span className="font-medium text-gray-800">Shipping Fee</span>
          <span className="text-gray-800 font-medium">$ {shippingFee}</span>
        </div>

        <div className="flex justify-between font-bold pt-1">
          <span className="text-gray-800">Total</span>
          <span className="text-gray-800">${grandTotal}</span>
        </div>

      </div>

      {/* Payment heading */}
      <div className="flex items-center gap-4 mt-2">
        <h2 className="text-gray-500 tracking-wider text-sm font-medium uppercase">
          PAYMENT <span className="text-gray-800 font-medium tracking-wide">METHOD</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gray-600 sm:w-12 max-w-[48px]"></div>
      </div>

      {/* Payment options */}
      <div className="flex gap-2">
        {/* Stripe */}
        <label className="flex-1">
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={method === 'stripe'}
            onChange={() => setMethod('stripe')}
            className="hidden peer"
          />
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded cursor-pointer w-full justify-center lg:justify-start peer-checked:border-gray-400 transition-all">
            <div className={`w-3.5 h-3.5 border border-gray-300 rounded-full transition-colors ${method === 'stripe' ? 'bg-green-400' : ''}`}></div>
            <span className="text-blue-600 font-bold tracking-tighter text-base">stripe</span>
          </div>
        </label>

        {/* Razorpay */}
        <label className="flex-1">
          <input
            type="radio"
            name="paymentMethod"
            value="razorpay"
            checked={method === 'razorpay'}
            onChange={() => setMethod('razorpay')}
            className="hidden peer"
          />
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded cursor-pointer w-full justify-center lg:justify-start peer-checked:border-gray-400 transition-all">
            <div className={`w-3.5 h-3.5 border border-gray-300 rounded-full transition-colors ${method === 'razorpay' ? 'bg-green-400' : ''}`}></div>
            <span className="text-[#0B2E59] font-bold text-sm tracking-tight italic flex items-center">
              <div className="bg-blue-600 text-white text-[10px] px-1 font-serif font-black mr-0.5 transform -skew-x-12">/</div>
              Razorpay
            </span>
          </div>
        </label>

        {/* COD */}
        <label className="flex-1">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={method === 'cod'}
            onChange={() => setMethod('cod')}
            className="hidden peer"
          />
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded cursor-pointer w-full justify-center lg:justify-start peer-checked:border-gray-400 transition-all">
            <div className={`w-3.5 h-3.5 border border-gray-300 rounded-full transition-colors ${method === 'cod' ? 'bg-green-400' : ''}`}></div>
            <span className="text-gray-500 font-medium text-xs whitespace-nowrap">CASH ON DELIVERY</span>
          </div>
        </label>
      </div>

      {/* Button */}
      <div className="w-full text-right mt-2 flex justify-end">
        <button className="bg-black text-white px-10 py-3 text-sm font-light hover:bg-gray-800 transition-colors">
          PLACE ORDER
        </button>
      </div>

    </div>
  );
}