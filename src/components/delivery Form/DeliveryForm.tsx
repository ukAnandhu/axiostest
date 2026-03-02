import React from "react";

export default function DeliveryForm() {
  const inputClass = "w-full px-4 py-2 border border-gray-400 rounded text-sm placeholder:text-gray-400 focus:border-black transition-colors";

  return (
    <div className="w-full">
      
      {/* Form */}
      <form className="space-y-4">
        {/* First + Last */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Last name"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className={inputClass}
        />

        {/* Street */}
        <input
          type="text"
          placeholder="Street"
          className={inputClass}
        />

        {/* City + State */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="State"
            className={inputClass}
          />
        </div>

        {/* Zip + Country */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Zip code"
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Country"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className={inputClass}
        />
      </form>
    </div>
  );
}