import React from "react";
import { LayoutGrid, LayoutList } from "lucide-react";

export default function FilterComponent() {
    return (
        <div className="
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-6 md:gap-0
            px-6 md:px-20 py-6
            mt-6 bg-white shadow-sm
        ">

            {/* Left - Results */}
            <div className="w-full md:w-auto">
                <h6 className="text-gray-700 font-medium">Showing all 8 results</h6>
            </div>

            {/* Middle - View Icons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <h6 className="text-[#737373] font-montserrat">Views:</h6>

                <button className="p-2 border border-[#ECECEC] rounded-md hover:bg-gray-100">
                    <LayoutGrid className="text-[#252B42]" size={20} />
                </button>

                <button className="p-2 border border-[#ECECEC] rounded-md hover:bg-gray-100">
                    <LayoutList className="text-[#252B42]" size={20} />
                </button>
            </div>

            {/* Right - Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <select
                    className="
                        border border-gray-300
                        px-3 py-2
                        rounded-md
                        text-sm
                        text-gray-600
                        outline-none
                        bg-white
                        w-full md:w-auto
                    "
                >
                    <option value="popularity">Popularity</option>
                </select>

                <button className="
                    bg-[#23A6F0] text-white
                    px-4 py-2 rounded-md
                    hover:bg-[#1e8ed4] transition
                    w-full md:w-auto
                ">
                    Filtrele
                </button>
            </div>

        </div>
    );
}
