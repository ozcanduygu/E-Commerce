import React from "react";
import ProductsCard from "./ProductsCard";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

export default function BestProductsList() {
  
  const bestProducts = [
    { id: 1, image: photo1, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 2, image: photo2, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 3, image: photo3, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 4, image: photo4, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 5, image: photo3, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 6, image: photo2, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 7, image: photo4, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
    { id: 8, image: photo1, title: "Graphic Design", desc: "English Department", oldPrice: 16.48, newPrice: 6.48 },
  ];

  return (
  <div className="max-w-[1200px] mx-auto px-4">
    <h3 className="text-center font-montserrat text-2xl font-semibold text-[#252B42] my-6">
      BESTSELLER PRODUCTS
    </h3>

    {/* İnce gri çizgi */}
    <div className="h-[1px] bg-gray-300 mb-6"></div>

    <ProductsCard />
  </div>
);

}
