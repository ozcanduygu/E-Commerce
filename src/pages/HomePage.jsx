import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import CarouselTop from "../components/CarouselTop";
import EditorsPick from "../components/EditorsPick";
import BestSellerProducts from "../components/BestSellerProducts";
import CarouselHero from "../components/CarouselHero";
import CollectionShowcase from "../components/CollectionShowcase";
import BlogSection from "../components/BlogSection";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";
import MiniFooter from "../components/MiniFooter";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <div>
      
            <CarouselTop/>
            <EditorsPick/>
            <BestSellerProducts/>
            <CarouselHero/>
            <CollectionShowcase/>
            <BlogSection/>
            <FooterBanner/>
            <Footer/>
            <MiniFooter/> 
        </div>
    )
}