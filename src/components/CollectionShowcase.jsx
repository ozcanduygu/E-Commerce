import React from "react";
import image from "../assets/image.png";

export default function CollectionShowcase() {
  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="max-w-[1420px] mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-8 gap-10">

        {/* SOL GÖRSEL  — mobilde aşağıda */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Collection Banner"
            className="w-full max-w-sm md:max-w-none md:h-[682px] object-cover rounded-lg"
          />
        </div>

        {/* SAĞ YAZI ALANI  — mobilde yukarıda */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">

          {/* H5 */}
          <h5 className="text-[#BDBDBD] font-montserrat font-medium tracking-wide text-sm">
            SUMMER 2020
          </h5>

          {/* BAŞLIK */}
          <h2 className="text-[#252B42] font-bold font-montserrat text-3xl md:text-4xl leading-tight">
            Part of the Neural <br className="hidden md:block" /> Universe
          </h2>

          {/* PARAGRAF */}
          <p className="text-[#737373] font-montserrat text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            We know how large objects will act, <br className="hidden md:block" />
            but things on a small scale.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-2 items-center md:items-start">
            <button className="bg-[#2DC071] text-white px-6 py-3 md:px-8 md:py-3 rounded-md font-montserrat text-sm w-full md:w-auto">
              BUY NOW
            </button>

            <button className="border border-[#2DC071] text-[#2DC071] px-6 py-3 md:px-8 md:py-3 rounded-md font-montserrat text-sm w-full md:w-auto">
              READ MORE
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
