import React, { useState } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel1 from "../assets/carousel1.jpg";

export default function CarouselTop() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    duration: 1000,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    }
  });

  const slides = [carousel1, carousel1, carousel1];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="relative w-full h-screen">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((src, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay İçerik */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
              <h4 className="text-lg md:text-xl font-medium mb-2">Summer 2020</h4>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">NEW COLLECTION</h1>
              <h5 className="text-md md:text-lg font-light mb-6">We know how large objects will act,but things on a small scale.</h5>
              <button className="bg-[#2DC071] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sol Ok */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Sağ Ok */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-0 w-full h-2 bg-white/30">
        <div
          className="h-2 bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
