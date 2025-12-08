import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center space-x-8 text-[#737373] text-sm font-medium">

      <Link to="/" className="hover:text-black">Home</Link>

      <div className="relative group">
        <Link to="/shop" className="flex items-center gap-1 hover:text-black">
          Shop <ChevronDown size={16} />
        </Link>

        <div className="absolute left-0 top-full mt-3 hidden group-hover:block 
                        bg-white shadow-lg p-6 w-[350px] z-50">

          <div className="grid grid-cols-2 gap-10 text-[#252B42]">
            
            <div className="space-y-3">
              <p className="font-semibold">Kadın</p>
              <p className="hover:text-black cursor-pointer">Bags</p>
              <p className="hover:text-black cursor-pointer">Belts</p>
              <p className="hover:text-black cursor-pointer">Cosmetics</p>
              <p className="hover:text-black cursor-pointer">Hats</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Erkek</p>
              <p className="hover:text-black cursor-pointer">Bags</p>
              <p className="hover:text-black cursor-pointer">Belts</p>
              <p className="hover:text-black cursor-pointer">Cosmetics</p>
              <p className="hover:text-black cursor-pointer">Hats</p>
            </div>

          </div>
        </div>
      </div>

      <a href="#" className="hover:text-black">About</a>
      <a href="#" className="hover:text-black">Blog</a>
       <Link to="/contact" className="hover:text-black">Contact</Link>
      <a href="#" className="hover:text-black">Pages</a>
    </nav>
  );
}
