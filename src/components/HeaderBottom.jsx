import { Search, ShoppingCart, Heart, User } from "lucide-react";
import Navbar from "./Navbar";

export default function HeaderBottom() {
  return (
    <div className="w-full bg-white font-montserrat border-b">
      <div className="max-w-[1429px] mx-auto px-8 h-[70px] flex justify-between items-center">
        <div className="text-[#252B42] font-bold text-xl">
          Bandage
        </div>
        <Navbar />
        <div className="hidden md:flex items-center space-x-6">
          <a className="flex items-center gap-2 text-[#23A6F0] font-medium text-sm hover:underline">
            <User size={16} />
            Login / Register
          </a>
          <Search size={20} className="cursor-pointer text-[#252B42]" />
          <Heart size={20} className="cursor-pointer text-[#252B42]" />
          <ShoppingCart size={20} className="cursor-pointer text-[#252B42]" />
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <Search size={22} className="text-[#252B42]" />
          <Heart size={22} className="text-[#252B42]" />
          <ShoppingCart size={22} className="text-[#252B42]" />
        </div>

      </div>

    </div>
  );
}
