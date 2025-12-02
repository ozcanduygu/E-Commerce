import { productsData } from '../data/products';
import React from 'react';

export default function ProductsCard() {
  const productColors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

  return (
    <div className="max-w-[1200px] font-montserrat mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productsData.map((product) => (
        <div key={product.id}>

          <div className="w-full h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="mt-3">
            <h3 className="font-semibold text-lg font-montserrat text-[#252B42]">{product.title}</h3>
            <p className="text-gray-500 font-montserrat text-sm mt-1">{product.desc}</p>

            <div className="flex items-center font-montserrat gap-3 mt-2">
              {product.oldPrice && (
                <p className="text-gray-400 line-through">${product.oldPrice}</p>
              )}
              <p className="text-[#23A6F0] font-bold">${product.newPrice}</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {productColors.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
