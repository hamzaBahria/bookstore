import { Heart, ShoppingCart, User, Search, MapPin, Phone, Mail, MessageCircle, Globe, Share2, Rss } from "lucide-react";
import { NAV_LINKS } from "./data";
import { useNavigate, useLocation } from "react-router-dom";

export function BookCover({ colorClass, title, h = 260 }: { colorClass: string; title: string; h?: number }) {
  return (
    <div
      className={`${colorClass} rounded-sm flex items-end justify-center p-3 w-full`}
      style={{ height: h }}
    >
      <span className="text-white text-xs font-semibold text-center leading-tight drop-shadow-md line-clamp-3">{title}</span>
    </div>
  );
}

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg key={star} width={size} height={size} viewBox="0 0 24 24" fill={filled || half ? "#F59E0B" : "none"} stroke="#F59E0B" strokeWidth="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        );
      })}
    </div>
  );
}

const PAGE_ROUTES: Record<string, string> = {
  "Home": "/",
  "About Us": "/about",
  "Bestsellers": "/books",
  "New Releases": "/books",
  "Contact": "/contact",
};

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActivePage = () => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/books") return "Bestsellers";
    if (location.pathname === "/contact") return "Contact";
    return "";
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-6">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold text-xl px-3 py-1.5 rounded-md tracking-wide">
            MyBook
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3">
          <div className="flex-1 max-w-sm flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search books, authors..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 text-sm font-medium flex items-center gap-1.5 transition-colors">
              <Search size={14} />
              SEARCH
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/wishlist")} className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-amber-600 transition-colors">
            <Heart size={20} />
            <span className="text-xs">Wishlist</span>
          </button>
          <button onClick={() => navigate("/cart")} className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-amber-600 transition-colors relative">
            <ShoppingCart size={20} />
            <span className="text-xs">Cart</span>
            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <button onClick={() => navigate("/account")} className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-amber-600 transition-colors">
            <User size={20} />
            <span className="text-xs">Account</span>
          </button>
        </div>
      </div>
      <nav className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 flex gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => navigate(PAGE_ROUTES[link] || "/")}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                getActivePage() === link
                  ? "border-amber-500 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-amber-600 hover:border-amber-300"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-3 gap-8">
        <div>
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold text-xl px-3 py-1.5 rounded-md inline-block mb-3">
            MyBook
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Your one-stop online bookstore.<br />
            Free shipping on orders over $50.<br />
            Happy reading!
          </p>
          <div className="flex gap-3">
            {[Globe, Share2, MessageCircle, Rss].map((Icon, i) => (
              <button key={i} className="text-gray-400 hover:text-amber-400 transition-colors">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm">832 Thompson Drive, San Francisco CA 94107, US</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-amber-400 flex-shrink-0" />
              <span className="text-sm">+1 (123) 345-1235 | +1 (123) 345-1236</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-amber-400 flex-shrink-0" />
              <span className="text-sm">support@mybook.com | info@mybook.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © 2026 MyBook. All rights reserved.
      </div>
    </footer>
  );
}
