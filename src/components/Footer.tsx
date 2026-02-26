export default function Footer() {
  return (
    <footer className=" w-full">

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-12
        ">

          {/* Left Section */}
          <div>

            {/* Logo */}
            <h2 className="text-[28px] font-semibold text-gray-800">
              ZYRA<span className="text-gray-400">.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-[14px] text-gray-500 leading-relaxed max-w-[350px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nesciunt eos culpa sapiente ipsam laudantium eveniet rem necessitatibus, in cum illo aliquam saepe laborum quam.
            </p>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-[16px] font-semibold text-gray-800 mb-4">
              COMPANY
            </h3>

            <ul className="space-y-2 text-[14px] text-gray-500">

              <li className="hover:text-black cursor-pointer">
                Home
              </li>

              <li className="hover:text-black cursor-pointer">
                About us
              </li>

              <li className="hover:text-black cursor-pointer">
                Delivery
              </li>

              <li className="hover:text-black cursor-pointer">
                Privacy policy
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-[16px] font-semibold text-gray-800 mb-4">
              GET IN TOUCH
            </h3>

            <ul className="space-y-2 text-[14px] text-gray-500">

              <li>
                +1-212-456-7890
              </li>

              <li>
                contact@zyra.com
              </li>

            </ul>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">

          <p className="text-[14px] text-gray-500">
            Copyright 2024@ Zyra.com - All Right Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}