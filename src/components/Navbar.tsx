"use client"
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";


export default function Navbar() {
  const cart = useCartStore((state) => state.cart)
  
    const totalItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
    )

  return (
    <header className="flex items-center justify-between md: py-5">
      {/* Logo Image */}
      <div className="flex items-center py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Zyr
            a logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex justify-center items-center gap-8 text-sm tracking-wide">
        <Link href="/">
          <p className="border-b-2 border-black pb-1 cursor-pointer">HOME</p>
        </Link>
        <Link href="/collection">
          <p className="text-gray-500 hover:text-black cursor-pointer">
            COLLECTION
          </p>
        </Link>
        <Link href="/about">
          <p className="text-gray-500 hover:text-black cursor-pointer">ABOUT</p>
        </Link>
        <Link href="/contact">
          <p className="text-gray-500 hover:text-black cursor-pointer">
            CONTACT
          </p>
        </Link>
      </nav>

      {/* Icons using Images */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <Image
          src="/search-icon.png"
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />

        {/* User */}
        <Link href="/login">
          <Image
            src="/user-icon.png"
            alt="user"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </Link>
        {/* Cart */}
        <div className="relative cursor-pointer">
          <Link href="/cart">
            <Image src="/cart-icon.png" alt="cart" width={20} height={20} />
          </Link>
          {/* Badge */}
          
                    <span className="absolute -top-2 -right-3 bg-black-500 text-white text-xs px-2 rounded-full">
                      {totalItems}
                    </span>
                 
        </div>
      </div>
    </header>
  );
}
