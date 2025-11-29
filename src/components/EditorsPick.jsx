import React from "react";
import editorspick1 from "../assets/editorspick1.jpg";
import editorspick2 from "../assets/editorspick2.jpg";
import editorspick3 from "../assets/editorspick3.jpg";
import editorspick4 from "../assets/editorspick4.jpg";  

export default function EditorsPick() {
    return (
        <div className="w-full bg-[#FAFAFA] py-20">

            {/* Başlık + Alt başlık */}
            <div className="max-w-6xl mx-auto px-4 text-center font-montserrat">
                <h3 className="text-[#252B42] font-bold text-2xl">EDITOR’S PICK</h3>
                <p className="text-[#737373] mt-1">
                    Problems trying to resolve the conflict between 
                </p>
            </div>

            {/* Fotoğraf Alanı */}
            <div className="max-w-6xl mx-auto px-4 py-10 flex gap-4">
                <div className="flex-1 relative h-[400px] rounded-xl overflow-hidden">
                    <img src={editorspick1} alt="men" className="w-full h-full object-cover" />
                    <button className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-md shadow font-semibold">
                        MEN
                    </button>
                </div>

                <div className="flex-1 relative h-[400px] rounded-xl overflow-hidden">
                    <img src={editorspick2} alt="women" className="w-full h-full object-cover" />
                    <button className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-md shadow font-semibold">
                        WOMEN
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <div className="relative h-[190px] rounded-xl overflow-hidden">
                        <img src={editorspick3} alt="accessories" className="w-full h-full object-cover" />
                        <button className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-md shadow font-semibold">
                            ACCESSORIES
                        </button>
                    </div>

                    <div className="relative h-[190px] rounded-xl overflow-hidden">
                        <img src={editorspick4} alt="kids" className="w-full h-full object-cover" />
                        <button className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-md shadow font-semibold">
                            KIDS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
