import { productsData } from '../data/products';
import React from 'react';

export default function ProductsCard() {

  const productColors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];

  return (
    <div className="
      max-w-[1200px]
      mx-auto 
      px-6 md:px-10
      flex flex-wrap 
      gap-10
      justify-between
    ">
      
      {productsData.map(product => (
        <div 
          key={product.id}
          className="w-[calc(25%-30px)]"
        >

          {/* ÜRÜN GÖRSELİ */}
          <div className="w-full h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* ÜRÜN BİLGİLERİ */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg text-[#252B42]">
              {product.title}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {product.desc}
            </p>

            <div className="flex items-center gap-3 mt-3">
              {product.oldPrice && (
                <p className="text-gray-400 line-through">
                  ${product.oldPrice}
                </p>
              )}
              <p className="text-[#23A6F0] font-bold">
                ${product.newPrice}
              </p>
            </div>

            {/* RENKLER */}
            <div className="flex items-center gap-3 mt-4">
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
