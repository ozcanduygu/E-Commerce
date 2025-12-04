import React from "react";
import { LayoutGrid, LayoutList } from "lucide-react";

export default function FilterComponent() {
    return (
        <div className="flex flex-row items-center justify-between px-20 py-4 mt-6 bg-white shadow-sm">

            {/* Left - Results */}
            <h6 className="text-gray-700 font-medium">Showing all 8 results</h6>

            {/* Middle - View Icons */}
            <div className="flex items-center gap-3">
                <h6 className="text-[#737373] font-montserrat">Views:</h6>

                <button className="p-2 border border-[#ECECEC] rounded-md hover:bg-gray-100">
                    <LayoutGrid className="text-[#252B42]" size={20} />
                </button>

                <button className="p-2 border border-[#ECECEC] rounded-md hover:bg-gray-100">
                    <LayoutList className="text-[#252B42]" size={20} />
                </button>
            </div>

            {/* Right - Filter */}
            <div className="flex items-center gap-3">
                <select
                    className="
                        border border-gray-300
                        px-3 py-2
                        rounded-md
                        text-sm
                        text-gray-600
                        outline-none
                        bg-white
                    "
                >
                    <option value="popularity">Popularity</option>
                </select>

                <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-md hover:bg-[#1e8ed4] transition">
                    Filtrele
                </button>
            </div>

        </div>
    );
}
