import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryGrid from "../components/CategoryGrid";
import FilterComponent from "../components/FilterComponent";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";
import MiniFooter from "../components/MiniFooter";
import FooterBanner from "../components/FooterBanner";

export default function ShopPage() {
    return(
        <div>
            <HeaderComponent/>
            <div className="px-4 md:px-8 lg:px-16 bg-[#FAFAFA] py-6">
                <BreadCrumbs />
            </div>
            <CategoryGrid/>
            <FilterComponent/>
            <ProductsSection/>
            <Footer/>
            <FooterBanner/>
            <MiniFooter/>
        </div>
    )
}