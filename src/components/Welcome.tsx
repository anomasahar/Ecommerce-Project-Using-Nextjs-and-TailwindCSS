import React from 'react';
import Image from "next/image";
import main from "@/assets/main.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center  bg-[#f8dbba] overflow-hidden"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 gap-6 md:gap-12">
        
        {/* Text Section */}
        <div className="hidden md:flex flex-col text-5xl sm:text-6xl md:text-8xl font-extrabold text-black leading-tight text-center md:text-left px-4 md:px-0">
          <span className="block">FA</span>
          <span className="block">SHI</span>
          <span className="block">ON</span>
        </div>
        
        {/* Description Section */}
        <div className="text-black max-w-lg px-6 sm:px-8 md:px-0 text-center md:text-left w-full md:w-auto">
          <h1 className="text-black font-bold font-sans text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide mb-4 mt-2 sm:mt-4">
            Welcome to
          </h1>
          <span className="font-bold font-sans text-3xl sm:text-4xl md:text-5xl relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#684524] to-[#d18a5b] whitespace-nowrap">
            Midnight Essence
          </span>
          <p className="text-lg font-semibold underline mt-2 mb-4 md:text-xl">
            Shop with confidence.
          </p>
          <h2 className="font-medium text-base sm:text-lg md:text-xl mt-2 leading-tight w-full max-w-[400px] mx-auto md:mx-0">
            Explore our exclusive collection of professionally handcrafted bags. Find the perfect design to match your style and needs.
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full max-w-xs md:max-w-md mx-auto md:mx-0 mt-14">
          <Image
            src={main}
            alt="Handcrafted Bag"
            width={400}
            height={500}
            className="object-cover rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </main>
  );
}
