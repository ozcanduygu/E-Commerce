import ProductsCard from "./ProductsCard";
import React from "react";

export default function BestSellerProducts() {
  return (
    <div className="w-full bg-[#FAFAFA] py-16 font-montserrat">
      <div className="max-w-[1420px] mx-auto px-4 text-center mb-10">
        <h5 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] text-center">
          Featured Products
        </h5>
        <h3 className="text-[#252B42]">BESTSELLER PRODUCTS</h3>
        <p className="text-[#737373] 600 mt-2">
          Problems trying to resolve the conflict between 
        </p>
      </div>

      <ProductsCard />
    </div>
  );
}
