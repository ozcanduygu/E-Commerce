import { useState } from 'react'
import './App.css'
import HeaderTop from './components/HeaderTop'
import HeaderBottom from './components/HeaderBottom'
import 'keen-slider/keen-slider.min.css';
import { Car } from 'lucide-react';
import CarouselTop from './components/CarouselTop';

function App() {
  return (
   <div>
    <HeaderTop/>
    <HeaderBottom/>
    <CarouselTop/>
   </div>
  )
}

export default App
