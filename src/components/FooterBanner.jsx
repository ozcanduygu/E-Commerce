import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full h-[142px] bg-[#FAFAFA] flex items-center justify-between px-8 md:px-16">
      
      {/* Sol – Marka */}
      <div className="text-2xl font-bold font-montserrat pl-24 text-[#252B42]">
        Bandage
      </div>

      {/* Sağ – Sosyal ikonlar */}
      <div className="flex items-center gap-6 pr-20">
        <Facebook size={24} className="cursor-pointer text-[#23A6F0]" />
        <Instagram size={24} className="cursor-pointer text-[#23A6F0]" />
        <Twitter size={24} className="cursor-pointer text-[#23A6F0]" />
      </div>

    </div>
  );
}
