import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full h-auto bg-[#FAFAFA] py-6 px-8 md:px-16 
                    flex flex-col md:flex-row 
                    items-start md:items-center 
                    justify-start md:justify-between 
                    gap-4 md:gap-0">

      <div className="text-2xl pl-4 pr-4 font-bold font-montserrat text-[#252B42] text-left">
        Bandage
      </div>

      <div className="flex items-center gap-6">
        <Facebook size={24} className="cursor-pointer text-[#23A6F0]" />
        <Instagram size={24} className="cursor-pointer text-[#23A6F0]" />
        <Twitter size={24} className="cursor-pointer text-[#23A6F0]" />
      </div>

    </div>
  );
}
