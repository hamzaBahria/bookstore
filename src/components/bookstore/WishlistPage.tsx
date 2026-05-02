import { ShoppingCart, Trash2 } from "lucide-react";
import { Header, Footer, BookCover, StarRating } from "./SharedComponents";
import { BOOKS } from "./data";
import { useNavigate } from "react-router-dom";

const wishlistItems = [BOOKS[0], BOOKS[2], BOOKS[1], BOOKS[4]];
const suggestions = [BOOKS[6], BOOKS[7], BOOKS[5], BOOKS[8]];

export function WishlistPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-4">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "} My Wishlist
        </p>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist ({wishlistItems.length} items)</h1>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors">
            <ShoppingCart size={16} />
            Add All to Cart
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {wishlistItems.map((book) => (
            <div key={book.id} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
              <div className="w-24 flex-shrink-0 cursor-pointer" onClick={() => navigate(`/books/${book.id}`)}>
                <BookCover colorClass={book.cover} title={book.title} h={140} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{book.author}</p>
                <StarRating rating={book.rating} size={12} />
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <span className="font-bold text-gray-900">${book.price}</span>
                  {book.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">(was ${book.originalPrice})</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors">
                    <ShoppingCart size={12} />
                    Move to Cart
                  </button>
                  <button className="border border-red-200 text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors">
                    <Trash2 size={12} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="mb-6" />
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">You might also like</h2>

        <div className="grid grid-cols-4 gap-4">
          {suggestions.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg border border-gray-200 p-4 text-center cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <BookCover colorClass={book.cover} title={book.title} h={200} />
              <h3 className="font-bold text-sm text-gray-900 mt-3 mb-1">{book.title}</h3>
              <p className="font-bold text-base text-gray-900 mb-2">${book.price}</p>
              <button
                className="w-full border border-amber-400 text-amber-600 hover:bg-amber-50 py-1.5 rounded-md text-xs font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
