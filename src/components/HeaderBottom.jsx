import { Search, ShoppingCart, Heart, User } from "lucide-react";
import NavBar from "./NavBar";

export default function HeaderBottom() {
  return (
    <div className="w-full bg-white font-montserrat border-b">
      <div className="max-w-[1429px] mx-auto flex justify-between items-center px-8 h-[70px]">

        {/* SOL – LOGO */}
        <div className="text-[#252B42] font-bold text-xl">
          Bandage
        </div>

        {/* ORTA – MENÜ */}
        <NavBar />

        {/* SAĞ – Login + Icons */}
        <div className="flex items-center space-x-6">

          <a
            href="#"
            className="flex items-center gap-2 text-[#23A6F0] font-medium text-sm hover:underline"
          >
            <User size={16} /> {/* User ikonu */}
            Login / Register
          </a>

          <Search size={20} className="cursor-pointer text-[#252B42]" />
          <Heart size={20} className="cursor-pointer text-[#252B42]" />
          <ShoppingCart size={20} className="cursor-pointer text-[#252B42]" />
        </div>
      </div>
    </div>
  );
}
