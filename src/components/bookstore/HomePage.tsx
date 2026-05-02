import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Header, Footer, BookCover, StarRating } from "./SharedComponents";
import { BOOKS, GENRES } from "./data";
import { useNavigate } from "react-router-dom";

function BookCard({ book }: { book: typeof BOOKS[0] }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(`/books/${book.id}`)}
    >
      <div className="mb-3">
        <BookCover colorClass={book.cover} title={book.title} h={220} />
      </div>
      <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold text-lg text-gray-900">${book.price}</span>
        {book.originalPrice && (
          <span className="text-sm text-gray-400 line-through">${book.originalPrice}</span>
        )}
      </div>
      <StarRating rating={book.rating} />
      <button
        onClick={(e) => { e.stopPropagation(); }}
        className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
      >
        <ShoppingCart size={14} />
        Add To Cart
      </button>
    </div>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const recommended = BOOKS.slice(0, 3);
  const bestsellers = BOOKS.slice(3, 6);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="relative bg-gray-800 overflow-hidden" style={{ height: 420 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700" />
        <div className="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">New Arrivals 2026</p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">Discover Your<br />Next Favorite Book</h1>
            <p className="text-gray-300 mb-6">Free shipping on orders over $50. Browse thousands of titles across all genres.</p>
            <button
              onClick={() => navigate("/books")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors">
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-amber-400" : "bg-white/40"}`} />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 pb-3 border-b-2 border-amber-500 inline-block">
            Recommended For You
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-12">
          {recommended.map((book) => <BookCard key={book.id} book={book} />)}
        </div>

        <div className="border-b border-gray-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 pb-3 border-b-2 border-amber-500 inline-block">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-12">
          {bestsellers.map((book) => <BookCard key={book.id} book={book} />)}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Browse by Genre</h2>
          <div className="grid grid-cols-4 gap-3">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => navigate("/books")}
                className="bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-gray-700 hover:text-amber-700 py-3 rounded-lg font-medium transition-colors text-sm"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
