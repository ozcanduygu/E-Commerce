import ProductsCard from "./ProductsCard";
import React  from "react";

export default function ProductsSection(){
    return (
        <div>
            <div>
                <ProductsCard/>
            </div>
            <div>
                <button className="border-2">ileri</button>
                <button>Geri</button>
            </div>
        </div>
    )
}