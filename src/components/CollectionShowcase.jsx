import React from "react";
import image from "../assets/image.png"; // Görselini buraya koymayı unutma

export default function CollectionShowcase() {
  return (
    <div className="w-full h-[682px] bg-[#FAFAFA]">
      <div className="max-w-[1420px] h-full mx-auto flex items-center px-8 gap-16">

        {/* SOL GÖRSEL */}
        <div className="flex-1 flex justify-center bg-white">
          <img
            src={image}
            alt="Collection Banner"
            className="h-full object-cover rounded-lg"
          />
        </div>

        {/* SAĞ YAZI ALANI */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          
          {/* H5 */}
          <h5 className="text-[#BDBDBD] font-montserrat font-medium tracking-wide text-sm">
            SUMMER 2020
          </h5>

          {/* BAŞLIK */}
          <h2 className="text-[#252B42] font-bold font-montserrat text-4xl leading-tight">
            Part of the Neural <br /> Universe
          </h2>

          {/* PARAGRAF */}
          <p className="text-[#737373] font-montserrat text-lg leading-relaxed max-w-md">
            We know how large objects will act, 
            <br />but things on a small scale.
          </p>

          {/* BUTONLAR */}
          <div className="flex gap-4 mt-4">
            <button className="bg-[#2DC071] text-white px-8 py-3 rounded-md font-montserrat font-light">
              BUY NOW
            </button>

            <button className="border border-[#FFFF] text-[#2DC071] px-8 py-3 rounded-md font-montserrat font-light">
              READ MORE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
