import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full py-16 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <h1 className="text-gray-700 text-xl md:text-2xl font-medium tracking-wide">
            CONTACT US
          </h1>

          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="w-full">
            <Image
              src="/contact_img.png"   // place image inside public folder
              alt="contact"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-gray-600 space-y-6">

            {/* Our Store */}
            <div>
              <h2 className="font-semibold text-gray-700 text-lg mb-3">
                Our Store
              </h2>

              <p className="text-sm leading-6">
                ZYRA KOCHI <br />
                Palarivattom, Kerala, India
              </p>

              <p className="text-sm mt-4">
                Tel:(123) 222-2222
              </p>

              <p className="text-sm">
                Email: admin@zyra.com
              </p>
            </div>

            {/* Careers */}
            <div>
              <h2 className="font-semibold text-gray-700 text-lg mb-3">
                Careers at Zyra
              </h2>

              <p className="text-sm mb-6">
                Learn more about our teams and job opeings
              </p>

              <button className="
                border
                border-gray-600
                px-6
                py-3
                text-sm
                hover:bg-gray-800
                hover:text-white
                transition
                duration-300
              ">
                Explore Jobs
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}