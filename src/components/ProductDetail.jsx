import React from "react";
import {
  Star,
  StarHalf,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";

import product1 from "../assets/singleproduct1.jpg";
import product2 from "../assets/singleproduct2.jpg";
import product3 from "../assets/singleproduct3.jpg";

export default function ProductDetail() {
  const info = {
    title: "Floating Phone",
    rating: 4.5,
    reviews: 10,
    price: 1139.33,
    availability: true,
    description:
      "Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  };

  // ⭐ YILDIZ FONKSİYONU (daha temiz versiyon)
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Star
            key={i}
            size={18}
            className="text-yellow-400"
            fill="currentColor"
          />
        );
      } else if (i - rating < 1) {
        stars.push(
          <StarHalf
            key={i}
            size={18}
            className="text-yellow-400"
            fill="currentColor"
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            size={18}
            className="text-gray-300"
            fill="none"
          />
        );
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-10 py-10 bg-[#FAFAFA] font-montserrat">

      {/* LEFT IMAGES */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <img src={product1} className="w-full h-[450px] object-cover rounded-md" />

        <div className="flex gap-4">
          <img src={product2} className="w-1/2 h-[200px] rounded-md object-cover" />
          <img src={product3} className="w-1/2 h-[200px] rounded-md object-cover" />
        </div>
      </div>

      {/* RIGHT INFO */}
      <div className="w-full md:w-1/2 flex flex-col">

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#252B42]">{info.title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex">{renderStars(info.rating)}</div>
          <span className="text-sm text-gray-500">{info.reviews} Reviews</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-[#252B42] mt-4">
          ${info.price}
        </p>

        {/* Availability */}
        <p className="mt-2 text-[#737373] font-medium">
          Availability:{" "}
          <span
            className={
              info.availability ? "text-[#23A6F0]" : "text-red-500"
            }
          >
            {info.availability ? "In Stock" : "Sold Out"}
          </span>
        </p>

        {/* Description */}
        <p className="mt-10 text-[#858585] leading-6">
          {info.description}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* Color Options */}
        <div className="flex items-center gap-3 mb-6">
          {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        {/* Select + Icons */}
        <div className="flex items-center gap-4 mt-10">

          <select className="px-4 py-2 bg-[#23A6F0] text-white text-sm rounded-md cursor-pointer">
            <option>Select Option</option>
          </select>

          <button className="p-2 border rounded-md hover:bg-gray-100">
            <Heart size={20} />
          </button>

          <button className="p-2 border rounded-md hover:bg-gray-100">
            <ShoppingCart size={20} />
          </button>

          <button className="p-2 border rounded-md hover:bg-gray-100">
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
