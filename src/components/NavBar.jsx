import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Redux'tan veri çekmek için

export default function Navbar() {
  // Redux store'dan kategorileri alıyoruz
  const { categories } = useSelector((state) => state.product);

  // Kategorileri cinsiyete göre ayırıyoruz (k: Kadın, e: Erkek)
  const womenCategories = categories.filter((cat) => cat.code.startsWith("k:"));
  const menCategories = categories.filter((cat) => cat.code.startsWith("e:"));

  return (
    <nav className="hidden md:flex items-center space-x-8 text-[#737373] text-sm font-medium">
      <Link to="/" className="hover:text-black">Home</Link>

      <div className="relative group">
        <Link to="/shop" className="flex items-center gap-1 hover:text-black">
          Shop <ChevronDown size={16} />
        </Link>

        {/* Dropdown Menu */}
        <div className="absolute left-0 top-full mt-3 hidden group-hover:block 
                        bg-white shadow-lg p-6 w-[350px] z-50">
          <div className="grid grid-cols-2 gap-10 text-[#252B42]">
            
            {/* KADIN KATEGORİLERİ */}
            <div className="space-y-3">
              <p className="font-semibold text-black mb-2">Kadın</p>
              {womenCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                  className="block hover:text-[#23A6F0] cursor-pointer font-normal"
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            {/* ERKEK KATEGORİLERİ */}
            <div className="space-y-3">
              <p className="font-semibold text-black mb-2">Erkek</p>
              {menCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                  className="block hover:text-[#23A6F0] cursor-pointer font-normal"
                >
                  {cat.title}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Link to="/about" className="hover:text-black">About</Link>
      <Link to="/blog" className="hover:text-black">Blog</Link>
      <Link to="/contact" className="hover:text-black">Contact</Link>
      <Link to="/pages" className="hover:text-black">Pages</Link>
    </nav>
  );
}