import React from "react";
import { Star, StarHalf, StarOff, Heart, ShoppingCart, Eye } from "lucide-react";
import product1 from "../assets/singleproduct1.jpg";
import product2 from "../assets/singleproduct2.jpg";
import product3 from "../assets/singleproduct3.jpg";

export default function ProductDetail() {
  const info = {
    title: "Floating Phone",
    rating: 5,
    reviews: 10,
    price: 1139.33,
    availability: true,
    description:
      "Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <>
        {[...Array(full)].map((_, i) => (
          <Star key={"full" + i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
        {half && <StarHalf size={18} className="text-yellow-400 fill-yellow-400" />}
        {[...Array(empty)].map((_, i) => (
          <StarOff key={"off" + i} size={18} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="flex font-montserrat bg-[#FAFAFA] flex-col md:flex-row gap-10 px-10 py-10">

      {/* LEFT — IMAGES */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <img src={product1} className="w-full h-[450px] object-cover " />

        <div className="flex gap-4">
          <img src={product2} className="w-1/2 h-[200px] object-cover " />
          <img src={product3} className="w-1/2 h-[200px] object-cover " />
        </div>
      </div>

      {/* RIGHT — INFO */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#252B42]">{info.title}</h2>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex">{renderStars(info.rating)}</div>
          <h6 className="text-sm text-gray-500">{info.reviews} Reviews</h6>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-[#252B42] mt-4">${info.price}</p>

        {/* Availability */}
        <p className="mt-2  font-montserrat text-[#737373] font-medium">
          Availability:{" "}
          <span className={info.availability ? "text-[#23A6F0]" : "text-red-500"}>
            {info.availability ? "In Stock" : "Sold Out"}
          </span>
        </p>

        {/* Description */}
        <p className="mt-14 text-[#858585] leading-6">{info.description}</p>

        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* Color Circles */}
        <div className="flex items-center gap-3 mb-6">
          {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Options + Icons */}
        <div className="flex mt-14 items-center gap-4">
          <select className="px-4 py-2 border bg-[#23A6F0] rounded-md text-sm text-white">
            <option>Select Option</option>
          </select>

          <button className="p-2 border rounded-md hover:bg-gray-100">
            <Heart size={20} className="rounded-full" />
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
