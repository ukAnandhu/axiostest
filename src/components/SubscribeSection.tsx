export default function SubscribeSection() {
  return (
    <section className="w-full  py-16">

      <div className="max-w-[800px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[24px] font-medium text-gray-800">
          Subscribe now & get 20% off
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] text-gray-500 mt-3 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptate.
        </p>


        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row items-center justify-center">

          {/* Input */}
          <input
            type="email"
            placeholder="Enter you email"
            className="
              w-full
              sm:flex-1
              h-[48px]
              px-4
              text-[14px]
              border
              border-gray-300
              outline-none
              focus:border-gray-400
              bg-white
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              sm:w-[180px]
              h-[48px]
              bg-black
              text-white
              text-[14px]
              font-medium
              mt-3
              sm:mt-0
              sm:ml-0
              hover:bg-gray-900
              transition
            "
          >
            SUBSCRIBE
          </button>

        </form>

      </div>

    </section>
  );
}