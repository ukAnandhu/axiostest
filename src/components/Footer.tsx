import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

        <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">

          {/* Left Section */}
          <div>
            <div className="mb-5 w-32">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Zyra logo"
                  width={120}
                  height={40}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-black leading-relaxed max-w-[380px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nesciunt eos culpa sapiente ipsam laudantium eveniet rem necessitatibus, in cum illo aliquam saepe laborum quam.
            </p>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-base font-medium text-black mb-5 uppercase">
              COMPANY
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>
                <Link href="/" className="hover:text-black cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black cursor-pointer">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-black cursor-pointer">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-black cursor-pointer">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-base font-medium text-black mb-5 uppercase">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3 text-gray-500">
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
        <div>
          <hr className="border-gray-200 mt-16 mb-6" />
          <p className="text-sm text-center text-black font-medium">
            Copyright 2024@ Zyra.com - All Right Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}