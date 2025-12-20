import { Search, ShoppingCart, Heart, User } from "lucide-react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux"; // 1. useSelector'ı ekle
import Gravatar from "react-gravatar"; // 2. Gravatar'ı ekle

export default function HeaderBottom() {
  // 3. Store'dan kullanıcıyı çek (Yapın: state.client.user)
  const user = useSelector((state) => state.client.user);

  return (
    <div className="w-full bg-white font-montserrat border-b">
      <div className="max-w-[1429px] mx-auto px-8 h-[70px] flex justify-between items-center">
        <div className="text-[#252B42] font-bold text-xl">
          Bandage
        </div>
        <Navbar />
        
        <div className="hidden md:flex items-center space-x-6">
          {/* 4. Kullanıcı kontrolü: user.name varsa bilgilerini göster, yoksa Login linkini göster */}
          {user && user.name ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#252B42]">{user.name}</span>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#23A6F0]">
                <Gravatar email={user.email} size={32} />
              </div>
            </div>
          ) : (
            <a href="/login" className="flex items-center gap-2 text-[#23A6F0] font-medium text-sm hover:underline">
              <User size={16} />
              Login / Register
            </a>
          )}
          
          <Search size={20} className="cursor-pointer text-[#252B42]" />
          <div className="flex items-center gap-1">
             <Heart size={20} className="cursor-pointer text-[#252B42]" />
             <span className="text-xs text-[#23A6F0]">0</span>
          </div>
          <div className="flex items-center gap-1">
             <ShoppingCart size={20} className="cursor-pointer text-[#252B42]" />
             <span className="text-xs text-[#23A6F0]">0</span>
          </div>
        </div>

        {/* Mobil Görünüm (Orayı da istersen aynı mantıkla güncelleyebilirsin) */}
        <div className="flex md:hidden items-center space-x-4">
          <Search size={22} className="text-[#252B42]" />
          <Heart size={22} className="text-[#252B42]" />
          <ShoppingCart size={22} className="text-[#252B42]" />
        </div>
      </div>
    </div>
  );
}