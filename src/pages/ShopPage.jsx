import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import BreadCrumbs from "../components/BreadCrumbs";

export default function ShopPage() {
    return(
        <div>
            <HeaderComponent/>
            <div className="px-4 md:px-8 lg:px-16 bg-[#FAFAFA] py-6">
                <BreadCrumbs />
            </div>
            
        </div>
    )
}