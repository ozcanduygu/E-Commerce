import React from "react";
import contactimage from "../assets/contactimage.jpg";

export default function ContactPage(){
    return(
        <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${contactimage})` }}>
            <div className="text-center max-w-xl px-4">
                <h1 className="text-3xl text-[#252B42] md:text-4xl font-montserrat font-bold mb-4">
                Questions & Answers
                </h1>
                <p className="text-base md:text-lg mb-6 font-montserrat text-[#737373] leading-relaxed">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
                </p>
                <p className="text-lg font-semibold tracking-wide text-[#23A6F0] font-montserrat cursor-pointer">
                CONTACT US
                 </p>
            </div>
        </div>
    )
}