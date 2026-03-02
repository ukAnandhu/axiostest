import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center text-2xl pt-10 ">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500 tracking-wide">
              CONTACT <span className="text-gray-800 font-medium">US</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
        </div>

        {/* Content */}
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

          {/* Left Image */}
          <Image
            src="/contact_img.png"
            alt="contact"
            width={600}
            height={600}
            className="w-full md:max-w-[480px] object-cover"
          />

          {/* Right Content */}
          <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
            {/* Our Store */}
            <p className="font-semibold text-xl text-gray-700">
              Our Store
            </p>

            <p className="text-gray-500">
              ZYRA KOCHI <br />
              Palarivattom, Kerala, India
            </p>

            <p className="text-gray-500">
              Tel:(123) 222-2222 <br />
              Email: admin@zyra.com
            </p>

            {/* Careers */}
            <p className="font-semibold text-xl text-gray-700 mt-2">
              Careers at Zyra
            </p>

            <p className="text-gray-500">
              Learn more about our teams and job opeings
            </p>

            <button className="cursor-pointer border border-black text-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}