"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X, ChevronLeft } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "COLLECTION", href: "/collection" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium border-b border-gray-300">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          <Image src="/logo.png" alt="logo" width={140} height={40} />
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className="flex flex-col items-center gap-1 group">
              <p className={`cursor-pointer transition-colors ${isActive ? "text-black" : "text-gray-700"}`}>
                {link.name}
              </p>
              <hr className={`w-3/4 border-none h-[1.5px] bg-gray-600 transition-all ${isActive ? "block w-8 opacity-100" : "hidden opacity-0"}`} />
            </Link>
          );
        })}
      </ul>

      {/* Icons & Mobile Menu Button */}
      <div className="flex items-center gap-6">
        <Search className="w-5 cursor-pointer text-gray-700 hover:text-black transition-colors" />

        <Link href="/login">
          <User className="w-5 cursor-pointer text-gray-700 hover:text-black transition-colors" />
        </Link>

        <Link href="/cart" className="relative">
          <ShoppingBag className="w-5 text-gray-700" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {totalItems}
          </p>
        </Link>

        <Menu
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden text-gray-700"
        />
      </div>

      {/* Sidebar menu for mobile */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? "w-full" : "w-0"
          }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Back button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <p className="text-sm font-semibold">Back</p>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  onClick={() => setVisible(false)}
                  href={link.href}
                  className={`py-4 pl-8 border-b transition-colors uppercase font-bold tracking-wider ${isActive ? "bg-black text-white" : "hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
