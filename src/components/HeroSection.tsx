import Image from "next/image";

export default function HeroSection() {
  return (
    <div>

      {/* Header */}
      
      {/* Hero Section */}
      <section className="grid border border-gray-300 md:grid-cols-2">

        {/* Left */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-gray-700"></div>
            <p className="text-xs tracking-widest text-gray-600">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-6">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="text-sm tracking-widest">
              SHOP NOW
            </span>
            <div className="w-10 h-[1px] bg-black"></div>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[500px]">

          <Image
            src="/logoicon.png"
            alt="hero"
            fill
            priority
            className="object-cover"
          />

        </div>

      </section>

    </div>
  );
}
