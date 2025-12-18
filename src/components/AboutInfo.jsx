import React from "react";

export default function AboutInfo() {
  return (
    <div className="font-montserrat max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6 bg-white my-8">

      <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E74040] mb-3 sm:mb-4 ml-1">
        Problems trying
      </p>

      <div className="flex flex-col sm:flex-row gap- sm:gap-12 items-start">

        {/* Sol taraf */}
        <div className="w-full sm:w-1/2 ml-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#252B42] leading-snug">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        {/* Sağ taraf */}
        <div className="w-full sm:w-1/2">
          <p className="text-sm sm:text-base text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

      </div>
    </div>
  );
}
