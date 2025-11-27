import { useState } from 'react'
import './App.css'
import HeaderTop from './components/HeaderTop'
import HeaderBottom from './components/HeaderBottom'
import 'keen-slider/keen-slider.min.css';
import { Car } from 'lucide-react';
import CarouselTop from './components/CarouselTop';
import EditorsPick from './components/EditorsPick';

function App() {
  return (
   <div>
    <HeaderTop/>
    <HeaderBottom/>
    <CarouselTop/>
    <EditorsPick/>
   </div>
  )
}

export default App
