import { ShoppingCart, Heart, Bookmark } from "lucide-react";
import { Header, Footer, BookCover, StarRating } from "./SharedComponents";
import { BOOKS } from "./data";
import { useParams, useNavigate } from "react-router-dom";

const REVIEWS = [
  {
    author: "S. Ahmed",
    date: "April 2026",
    rating: 5,
    text: "An emotionally rich read. Couldn't put it down — Whitmore writes community with rare authenticity.",
  },
  {
    author: "M. Rossi",
    date: "March 2026",
    rating: 4,
    text: "Beautifully written. Slow to start but the final act is devastating in the best way.",
  },
];

const RATING_BARS = [
  { stars: 5, pct: 70 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 10 },
  { stars: 2, pct: 4 },
  { stars: 1, pct: 1 },
];

export function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = BOOKS.find((b) => b.id === Number(id)) || BOOKS[0];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-6">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "}
          <button onClick={() => navigate("/books")} className="hover:text-amber-600">{book.genre}</button>
          {" > "} {book.title}
        </p>

        <div className="grid grid-cols-3 gap-8 mb-10">
          <div className="col-span-1">
            <BookCover colorClass={book.cover} title={book.title} h={380} />
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition-colors">
                <Heart size={18} className="text-gray-500" />
              </button>
              <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition-colors">
                <Bookmark size={18} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-lg text-gray-600 mb-1">
              by <span className="text-amber-600 font-medium">{book.author}</span>
            </p>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={book.rating} size={18} />
              <span className="text-sm text-gray-500">({book.rating} / 5 — 128 reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-bold text-gray-900">${book.price}</span>
              {book.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">${book.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded">
                    Save ${book.originalPrice - book.price}
                  </span>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
              {[
                ["Genre", book.genre],
                ["Publisher", "Harrington Press"],
                ["Published", "January 2026"],
                ["Pages", "342"],
                ["Language", "English"],
                ["Format", "Paperback / Hardcover / eBook"],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-2">
                  <span className="text-gray-500 font-medium w-24 flex-shrink-0">{label}:</span>
                  <span className="text-gray-800">{val}</span>
                </div>
              ))}
            </div>

            <hr className="mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">About This Book</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {book.title} is a sweeping story about a small coastal community rebuilding after a storm. {book.author}'s prose is precise yet tender,
              weaving together six interconnected lives with warmth and quiet urgency.
            </p>

            <div className="flex gap-3">
              {["Paperback", "Hardcover", "eBook"].map((fmt, i) => (
                <button
                  key={fmt}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${i === 0 ? "bg-amber-500 text-white border-amber-500" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="mb-8" />
        <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-1">{book.rating}</div>
            <StarRating rating={book.rating} size={20} />
            <p className="text-sm text-gray-500 mt-1">128 reviews</p>
          </div>
          <div className="col-span-2">
            <div className="space-y-2">
              {RATING_BARS.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-12">{stars} stars</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div className="bg-amber-400 h-3 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <div key={review.author} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-center gap-4 mb-3">
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500 italic">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
