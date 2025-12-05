import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

export default function BrandsLogo() {
    return (
        <div className="container mx-auto px-4 md:px-14 mt-16">
            <div className="
                flex flex-col items-center gap-8
                md:flex-row md:justify-between
            ">
                <img src={logo1} className="w-16 md:w-20 object-contain" />
                <img src={logo2} className="w-16 md:w-20 object-contain" />
                <img src={logo3} className="w-16 md:w-20 object-contain" />
                <img src={logo4} className="w-16 md:w-20 object-contain" />
                <img src={logo5} className="w-16 md:w-20 object-contain" />
                <img src={logo6} className="w-16 md:w-20 object-contain" />
            </div>
        </div>
    );
}
