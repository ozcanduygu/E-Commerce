import ProductsCard from "./ProductsCard";
import React, { useState } from "react";

export default function ProductsSection() {
    const [page, setPage] = useState(1);

    return (
        <div className="w-full mt-10 flex flex-col items-center gap-8 font-montserrat">

            <div>
                <ProductsCard />
            </div>

            {/* Pagination */}
            <div className="flex items-center mt-6">

                {/* FIRST button */}
                <button
                    onClick={() => setPage(1)}
                    style={{
                        backgroundColor: "#BDBDBD",
                        borderColor: "#E8E8E8"
                    }}
                    className="h-11 px-4 rounded-md border text-sm text-black"
                >
                    First
                </button>

                {/* Page numbers */}
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => setPage(num)}
                        style={{
                            backgroundColor: page === num ? "#23A6F0" : "#FFFFFF",
                            color: page === num ? "#FFFFFF" : "#000000",
                            borderColor: "#E8E8E8"
                        }}
                        className="h-11 px-4 border text-sm rounded-md"
                    >
                        {num}
                    </button>
                ))}

                {/* NEXT button */}
                <button
                    onClick={() => setPage((p) => Math.min(3, p + 1))}
                    style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#E8E8E8"
                    }}
                    className="h-11 px-4 rounded-md border text-sm text-black"
                >
                    Next
                </button>

            </div>

        </div>
    );
}
