import React from "react";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import heroImage from "../assets/carouselhero.png"; // Gerçek PNG

export default function CarouselHero() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    duration: 1000,
    slides: { perView: 1 },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full">
      <div className="keen-slider__slide w-[509px] relative bg-[#23856D] h-[709px] font-montserrat">
        <div className="max-w-[1420px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-10 py-20 h-full">

          {/* SOL DIV */}
          <div className="flex-1 flex flex-col justify-center space-y-4 h-full font-montserrat text-white">
            <h5 className="text-[#A0E1D8] font-semibold text-sm uppercase">
              Summer 2020
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold">
              Vita Classic Product
            </h1>
            <p className="text-base md:text-lg opacity-90">
              We know how large objects will act, We know how are objects will act, We know.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <p className="text-2xl font-bold">
                $16.48
              </p>
              <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md font-semibold transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* SAĞ DIV */}
          <div className="flex-1 flex justify-center items-center font-montserrat h-full">
            <img 
              src={heroImage} 
              alt="Vita Classic Product" 
              className="object-contain h-[600px] mt-30"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
