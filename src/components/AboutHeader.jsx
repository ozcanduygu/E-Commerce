import React from "react";
import Navbar from "./Navbar";

import aboutphoto from "../assets/aboutphoto.png";

export default function AboutHeader() {
  return (
    <div className="w-full bg-white font-montserrat">
      <div className="max-w-[1429px] mx-auto px-8 h-[70px] flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-[#252B42] font-bold text-xl">
          Bandage
        </div>

        {/* Navigation Links */}
        <div className="
          flex 
          flex-col           /* Mobil: dikey */
          items-center 
          text-center 
          space-y-3          /* dikey boşluk */
          text-[#737373] 
          text-sm 
          font-medium

          md:flex-row        /* Masaüstü: yatay */
          md:space-y-0       /* dikey boşluğu kaldır */
          md:space-x-6       /* yatay boşluk ekle */
        ">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
            <div className="flex items-center space-x-4">
            <button className="text-[#23A6F0] font-semibold">Login</button>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded">Become a member</button>
            </div>
      </div>
    </div>
  );
}
