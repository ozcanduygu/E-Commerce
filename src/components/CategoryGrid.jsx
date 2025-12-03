import React from "react";
import categorygrid from "../assets/categorygrid.jpg";

const categories = [
  { id: 1, title: "Clothes", items: 5, img: categorygrid },
  { id: 2, title: "Shoes", items: 8, img: categorygrid },
  { id: 3, title: "Bags", items: 3, img: categorygrid },
  { id: 4, title: "Accessories", items: 10, img: categorygrid },
  { id: 5, title: "Beauty", items: 7, img: categorygrid },
];

export default function CategoryGrid() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 mt-10">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
        "
      >
        {categories.map((cat) => (
          <div key={cat.id} className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer">

            {/* Fotoğraf */}
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover"
            />

            {/* Alt gradient + yazılar */}
            <div className="absolute inset-0 font-montserrat flex flex-col justify-end items-center pb-4 
                            bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)]">
              <h3 className="text-white font-semibold text-lg drop-shadow-md">
                {cat.title.toLocaleUpperCase()}
              </h3>
              <p className="text-white text-sm opacity-90 drop-shadow-md">
                {cat.items} items
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
