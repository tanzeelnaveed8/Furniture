import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPython, } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSanity, SiOpenai } from "react-icons/si";

import Role from "./role";
import SocialLinks from "./sociallinks"; // 

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative ">

      <div className="relative ">
        <div className="absolute top-3 right-6 z-50 flex space-x-6">
          <SocialLinks />
        </div>
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-[40%] relative">
            <Image
              src="/profile.png"
              alt="Tanzeel Naveed Khan"
              width={750}
              height={750}
              className="rounded-full shadow-xl border-2 border-purple-900 transform -translate-y-3"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-purple-600 animate-color-change">
              Tanzeel Naveed Khan
            </h1>

            {/* Animated Role */}
            <div className="relative h-12 text-lg md:text-xl lg:text-2xl text-gray-300 overflow-hidden">
              <Role />
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mt-5 text-4xl text-gray-300">
              <FaReact className="text-blue-400 hover:text-blue-500 transition-all" />
              <SiNextdotjs className="text-white hover:text-gray-400 transition-all" />
              <FaNodeJs className="text-green-500 hover:text-green-600 transition-all" />
              <SiOpenai className="text-purple-400 hover:text-purple-500 transition-all" />
              <FaPython className="text-yellow-400 hover:text-yellow-500 transition-all" />
              <SiTypescript className="text-blue-600 hover:text-blue-700 transition-all" />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 mt-6 lg:mt-8">
              I build responsive, high-performance websites using React, Next.js, and Python  <span className="hidden w-2 md:block"></span>
              enhanced with intelligent AI agents to deliver smarter user experiences. Clean architecture, modern design.
            </p>




            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <Link
                href="/about-me"
                className="border border-purple-600 hover:bg-purple-700 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all text-sm md:text-base"
              >
                About Me
              </Link>
              <Link
                href="/view-work"
                className=" bg-purple-600 border-purple-600 px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple-600/20 transition-all text-sm md:text-base"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
