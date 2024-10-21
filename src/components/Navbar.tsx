"use client"

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { CartSheet } from '@/components/ShoppingCart';

export default function Navbar(){
  return(
    <>
    <div className="w-full h-18 bg-[#703d03]">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <ul className="hidden sm:flex items-center gap-5">
          <li className="font-bold text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold text-white">
            <Link href="/product">Shop</Link>
          </li>
          <li className="font-bold text-white">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="font-bold text-white">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <MobileMenu />

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" passHref>
            <h1 className="text-white text-xl font-bold cursor-pointer md:text-3xl">
              MIDNIGHT ESSENCE
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <CartSheet />
        </div>

      </nav>
    </div>

    </>
  );
} 
