export default function DeliveryForm() {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-gray-400 tracking-widest text-sm font-medium">
          DELIVERY
        </h2>
        <h1 className="text-2xl font-semibold tracking-wide">
          INFORMATION
        </h1>
        <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
      </div>

      {/* Form */}
      <form className="space-y-4">

        {/* First + Last */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="input"
          />
          <input
            type="text"
            placeholder="Last name"
            className="input"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="input w-full"
        />

        {/* Street */}
        <input
          type="text"
          placeholder="Street"
          className="input w-full"
        />

        {/* City + State */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className="input"
          />
          <input
            type="text"
            placeholder="State"
            className="input"
          />
        </div>

        {/* Zip + Country */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Zip code"
            className="input"
          />
          <input
            type="text"
            placeholder="Country"
            className="input"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className="input w-full"
        />

      </form>
    </div>
  );
}