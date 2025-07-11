import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-2xl">
      {/* LinkedIn */}
      <Link href="https://linkedin.com/in/tanzeel-naveed-khan" target="_blank">
        <div className="text-gray-400 hover:text-blue-600 transition-all cursor-pointer">
          <FaLinkedin />
        </div>
      </Link>

      {/* Twitter (X) */}
      <Link href="https://x.com/tanzeelkhan" target="_blank">
        <div className="text-gray-400 hover:text-gray-100 transition-all cursor-pointer">
          <FaXTwitter />
        </div>
      </Link>

      {/* Instagram */}
      <Link href="https://instagram.com/tanzeelkhan" target="_blank">
        <div className="text-gray-400 hover:text-pink-500 transition-all cursor-pointer">
          <FaInstagram />
        </div>
      </Link>
    </div>
  );
};

export default SocialLinks;