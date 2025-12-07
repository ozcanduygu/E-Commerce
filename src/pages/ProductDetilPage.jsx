import React  from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";
import MiniFooter from "../components/MiniFooter";
import BrandsLogo from "../components/BrandsLogos";
import ProductDetail from "../components/ProductDetail";
import ProductDescription from "../components/ProductDescription";
import BestProductsList from "../components/BestProductsList";
import EditorsPick from "../components/EditorsPick";

export default function ProductsDetalPage(){
    return(
        <div>
            <div>
                <Breadcrumbs className="px-4 md:px-8 lg:px-16 bg-[#FAFAFA] py-6"/>
            </div>
            <div>
                <ProductDetail/>
                <ProductDescription/>
                <BestProductsList/>  
                <BrandsLogo/>
                <FooterBanner/>
                <Footer/>
                <MiniFooter/>

            </div>
        </div>
    )
}
