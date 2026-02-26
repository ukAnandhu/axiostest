import Image from "next/image";

export default function PolicySection() {
  return (
    <section className="w-full bg-white py-14">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          text-center
        ">

          {/* Item 1 */}
          <div className="flex flex-col items-center">

            <Image
              src="/easy-logo.png"
              alt="Easy Exchange Policy"
              width={40}
              height={50}
              className="text-black mb-4"
            />

            <h3 className="text-[16px] font-semibold text-gray-800">
              Easy Exchange Policy
            </h3>

            <p className="text-[14px] text-gray-500 mt-1">
              we offer hussle free exchange policy
            </p>

          </div>


          {/* Item 2 */}
          <div className="flex flex-col items-center">

            <Image
              src="/tick-logo.png"
              alt="Tick Icon"
              width={40}
              height={50}
              className="text-black mb-4"
            />

            <h3 className="text-[16px] font-semibold text-gray-800">
              7 Days Return Policy
            </h3>

            <p className="text-[14px] text-gray-500 mt-1">
              we provide 7 days free return policy
            </p>

          </div>


          {/* Item 3 */}
          <div className="flex flex-col items-center">

            <Image
              src="/headphone.png"
              alt="Headphone Icon"
              width={40}
              height={50}
              className="text-black mb-4"
            />

            <h3 className="text-[16px] font-semibold text-gray-800">
              Best customer support
            </h3>

            <p className="text-[14px] text-gray-500 mt-1">
              we provide 24/7 customer support
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}