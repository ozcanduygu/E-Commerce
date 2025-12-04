import React  from "react";
import { LayoutGrid, LayoutList } from "lucide-react";


export default function FilterComponent() {
    return(
        <div className="flex flex-row justify-between px-20 m-6 ">
            <div>
                <h6>Showing all 8 results</h6>
            </div>
            <div className="flex flex-row justify-between">
                <h6 className="text-[#737373] font-montserrat">Views:</h6>
                <LayoutGrid className="border border-[#ECECEC] rounded-md text-[#252B42]" />
                <LayoutList className="border border-[#ECECEC] rounded-md" />
            </div>
            <div>
                <select className="
                        border border-gray-300 
                        px-3 py-2 
                        rounded-md 
                        text-sm 
                        text-gray-600
                        gap-0.5
                        outline-none
                        rounded-b-sm
                            ">
                    <option value="popularity">Popularity</option>
                </select>
                <button className="bg-[#23A6F0] rounded-sm">Filtrele</button>
            </div>
            
        </div>
    )
}