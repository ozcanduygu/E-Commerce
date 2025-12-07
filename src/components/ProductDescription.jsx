import React from "react";
import descimage from "../assets/descimage.jpg";

export default function ProductDescription() {
  return (
    <div className="px-10 py-10">

      {/* TOP NAVBAR (Tabs Centered) */}
      <div className="flex justify-center gap-10 border-b pb-3">

        <button className="text-[#737373] pb-2 hover:text-black">
          Description
        </button>

        <button className="text-[#737373] pb-2 hover:text-black">
          Additional Information
        </button>

        <button className="flex items-center gap-1 pb-2 hover:text-black text-[#737373]">
          Reviews 
          <span className="text-[#23856D]">(0)</span>
        </button>

      </div>

      {/* CONTENT GRID (Equal Height Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 items-stretch">

        {/* LEFT — IMAGE */}
        <div className="h-full">
          <img
            src={descimage}
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* MIDDLE — MAIN TEXT */}
        <div className="h-full flex flex-col">
          <h3 className="text-xl font-semibold text-[#252B42]">
            The quick fox jumps over
          </h3>

          <p className="text-[#737373] mt-4 leading-7 whitespace-pre-line flex-1">
            Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.

            Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.

            Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
             Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
                Met minim Mollie Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
          </p>
        </div>

        {/* RIGHT — TWO BOXES */}
        <div className="flex flex-col gap-8 h-full">

          {/* BOX 1 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#252B42]">
              The quick fox jumps over
            </h3>
            <ul className="mt-4 space-y-2 text-[#737373]">
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
            </ul>
          </div>

          {/* BOX 2 */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#252B42]">
              The quick fox jumps over
            </h3>
            <ul className="mt-4 space-y-2 text-[#737373]">
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
              <li className="list-disc ml-5">The quick fox jumps over</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
