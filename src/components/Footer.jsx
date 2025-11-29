import React from "react";

export default function Footer() {
  return (
    <div className=" bg-white border-t border-gray-200 h-[272px] px-30  flex items-center font-montserrat">
      <div className="max-w-[1420px] mx-auto w-full px-8 flex justify-between">

        {/* 1. COLUMN */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#252B42] font-bold">Company Info</h4>
          <a href="#" className="text-[#737373] text-sm">About Us</a>
          <a href="#" className="text-[#737373] text-sm">Carrier</a>
          <a href="#" className="text-[#737373] text-sm">We are hiring</a>
          <a href="#" className="text-[#737373] text-sm">Blog</a>
        </div>

        {/* 2. COLUMN */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#252B42] font-bold">Legal</h4>
          <a href="#" className="text-[#737373] text-sm">About Us</a>
          <a href="#" className="text-[#737373] text-sm">Carrier</a>
          <a href="#" className="text-[#737373] text-sm">We are hiring</a>
          <a href="#" className="text-[#737373] text-sm">Blog</a>
        </div>

        {/* 3. COLUMN */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#252B42] font-bold">Features</h4>
          <a href="#" className="text-[#737373] text-sm">Business Marketing</a>
          <a href="#" className="text-[#737373] text-sm">User Analytic</a>
          <a href="#" className="text-[#737373] text-sm">Live Chat</a>
          <a href="#" className="text-[#737373] text-sm">Unlimited Support</a>
        </div>

        {/* 4. COLUMN */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[#252B42] font-bold">Resources</h4>
          <a href="#" className="text-[#737373] text-sm">IOS & Android</a>
          <a href="#" className="text-[#737373] text-sm">Watch a Demo</a>
          <a href="#" className="text-[#737373] text-sm">Customers</a>
          <a href="#" className="text-[#737373] text-sm">API</a>
        </div>

        {/* 5. COLUMN - SUBSCRIBE */}
        <div className="flex flex-col gap-3 w-[250px]">
          <h4 className="text-[#252B42] font-bold">Get in Touch</h4>

          <div className="flex">
            <input 
              type="text" 
              placeholder="Your Email"
              className="flex-1 border border-gray-300 px-3 py-2 rounded-sm text-sm outline-none"
            />
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-sm text-sm font-semibold">
              Subscribe
            </button>
            
          </div>
          <p className="text-[#737373]">Lore imp sum dolor Amit</p>
        </div>

      </div>
    </div>
  );
}
