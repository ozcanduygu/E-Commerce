import React from "react";
import aboutphoto from "../assets/aboutphoto.png";

export default function AboutHero(){
    return(
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1420px] mx-auto py-10 gap-10">

            {/* Sol taraf */}
            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h5 className="text-sm text-gray-500">ABOUT COMPANY</h5>
                <h1 className="text-4xl font-bold text-[#252B42]">ABOUT US</h1>
                <h4 className="text-gray-600">
                    We know how large objects will act, 
                    but things on a small scale
                </h4>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-sm w-fit">
                    Get Quote Now
                </button>
            </div>

            {/* Sağ taraf */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    src={aboutphoto} 
                    alt="about"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}
