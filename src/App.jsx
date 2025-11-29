import { useState } from 'react'
import './App.css'
import HeaderTop from './components/HeaderTop'
import HeaderBottom from './components/HeaderBottom'
import 'keen-slider/keen-slider.min.css';
import { Car } from 'lucide-react';
import CarouselTop from './components/CarouselTop';
import EditorsPick from './components/EditorsPick';
import BestSellerProducts from './components/BestSellerProducts';
import CarouselHero from './components/CarouselHero';
import CollectionShowcase from './components/CollectionShowcase';
import BlogSection from './components/BlogSection';
import FooterBanner from './components/FooterBanner';

function App() {
  return (
   <div>
    <HeaderTop/>
    <HeaderBottom/>
    <CarouselTop/>
    <EditorsPick/>
    <BestSellerProducts/>
    <CarouselHero/>
    <CollectionShowcase/>
    <BlogSection/>
    <FooterBanner/>
   </div>
  )
}

export default App
