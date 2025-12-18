import React from "react";
import aboutphoto from "../assets/aboutphoto.png";

export default function AboutHero(){
    return(
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 bg-white font-monsterrat rounded-lg overflow-hidden my-10">
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h5 className="text-base font-semibold uppercase tracking-widest text-[#252B42] mb-2">ABOUT COMPANY</h5>
                <h1 className="ext-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B42] leading-tight mb-4]">ABOUT US</h1>
                <h4 className="text-lg text-[#737373] text-600 mb-8">
                    We know how large objects will act, 
                    but things on a small scale
                </h4>
                <button className="w-max px-6 py-3 text-lg font-medium text-white bg-[#23A6F0] rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                    Get Quote Now
                </button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <img 
                    src={aboutphoto} 
                    alt="about"
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-none md:rounded-r-lg"
                />
            </div>
        </div>
    )
}
