import { ShoppingCart, Heart, ChevronRight } from "lucide-react";
import { Header, Footer, BookCover, StarRating } from "./SharedComponents";
import { BOOKS } from "./data";
import { useNavigate } from "react-router-dom";

const FILTERS = {
  genre: ["Fiction", "Non-fiction", "Sci-Fi", "Biography", "Children", "Horror"],
  price: ["Under $20", "$20 – $50", "$50 – $100", "Over $100"],
  rating: ["5 Stars", "4+ Stars", "3+ Stars"],
  availability: ["In Stock", "Pre-order", "eBook"],
  language: ["English", "French", "Spanish"],
};

function FilterSection({ title, items, checked = [] }: { title: string; items: string[]; checked?: number[] }) {
  return (
    <div className="mb-5">
      <h4 className="font-semibold text-gray-800 text-sm mb-2">{title}</h4>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <label key={item} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={checked.includes(i)}
              className="accent-amber-500 w-3.5 h-3.5"
            />
            <span className="text-sm text-gray-600">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function BookListingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-4">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "} All Books
        </p>

        <div className="flex gap-6">
          <aside className="w-52 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
              <h3 className="font-bold text-gray-900 text-base mb-4">Filters</h3>
              <hr className="mb-4" />
              <FilterSection title="Genre" items={FILTERS.genre} checked={[0, 1]} />
              <hr className="mb-4" />
              <FilterSection title="Price Range" items={FILTERS.price} checked={[1]} />
              <hr className="mb-4" />
              <FilterSection title="Rating" items={FILTERS.rating} checked={[0, 1]} />
              <hr className="mb-4" />
              <FilterSection title="Availability" items={FILTERS.availability} checked={[0]} />
              <hr className="mb-4" />
              <FilterSection title="Language" items={FILTERS.language} checked={[0]} />
              <hr className="mb-4" />
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md text-sm font-medium mb-2 transition-colors">
                Apply Filters
              </button>
              <button className="w-full border border-gray-300 text-gray-600 hover:bg-gray-50 py-2 rounded-md text-sm transition-colors">
                Reset
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Showing {BOOKS.length} of 312 results</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Sort by:</span>
                <select className="border border-gray-300 rounded-md text-sm px-3 py-1.5 text-gray-700">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Bestselling</option>
                  <option>New Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mb-6">
              {BOOKS.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/books/${book.id}`)}
                >
                  <div className="mb-3 relative">
                    <BookCover colorClass={book.cover} title={book.title} h={220} />
                    {book.originalPrice && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">SALE</span>
                    )}
                    <button
                      className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full hover:bg-red-50 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart size={14} className="text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-0.5 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-gray-500 italic mb-1">{book.author}</p>
                  <StarRating rating={book.rating} size={12} />
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="font-bold text-gray-900">${book.price}</span>
                    {book.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">${book.originalPrice}</span>
                    )}
                  </div>
                  <button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-1.5 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ShoppingCart size={12} />
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`w-9 h-9 rounded-md text-sm font-medium border ${p === 1 ? "bg-amber-500 text-white border-amber-500" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
                >
                  {p}
                </button>
              ))}
              <button className="w-9 h-9 rounded-md text-sm font-medium border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
