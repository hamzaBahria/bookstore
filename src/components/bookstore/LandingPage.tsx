import { BookOpen, Truck, Award, Headphones, ArrowRight } from "lucide-react";
import { Footer, BookCover, StarRating } from "./SharedComponents";
import { BOOKS } from "./data";
import { useNavigate } from "react-router-dom";

const FEATURES = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Award, title: "Best Prices", desc: "Price match guarantee" },
  { icon: BookOpen, title: "10K+ Titles", desc: "Curated collection" },
  { icon: Headphones, title: "24/7 Support", desc: "We're here to help" },
];

export function LandingPage() {
  const navigate = useNavigate();
  const featured = BOOKS.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold text-xl px-3 py-1.5 rounded-md tracking-wide cursor-pointer" onClick={() => navigate("/")}>
            MyBook
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/books")}
              className="text-sm font-medium text-gray-600 hover:text-amber-600 px-3 py-2 transition-colors"
            >
              Browse Books
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      <section className="relative bg-gray-900 overflow-hidden" style={{ height: 500 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 p-8">
            {BOOKS.slice(0, 6).map((book) => (
              <div key={book.id} className={`${book.cover} rounded-sm`} style={{ height: 200 }} />
            ))}
          </div>
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Your Online Bookstore</p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Discover Stories<br />That Inspire You
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Browse thousands of books across all genres. Free shipping on orders over $50. Start your reading journey today.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/books")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-md font-semibold text-base transition-colors flex items-center gap-2"
              >
                Explore Books
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/login")}
                className="border border-white/30 hover:border-white/50 text-white px-8 py-3.5 rounded-md font-semibold text-base transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-lg border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
              <div className="bg-amber-50 p-3 rounded-lg">
                <Icon size={24} className="text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Books</h2>
          <p className="text-gray-500">Hand-picked titles our readers love</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {featured.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate("/books")}
            >
              <div className="mb-3">
                <BookCover colorClass={book.cover} title={book.title} h={240} />
              </div>
              <h3 className="font-bold text-sm text-gray-900 mb-1">{book.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{book.author}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-lg text-gray-900">${book.price}</span>
                {book.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${book.originalPrice}</span>
                )}
              </div>
              <StarRating rating={book.rating} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/books")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center gap-2"
          >
            View All Books
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Start Reading?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Join thousands of readers. Create your free account and discover your next favorite book.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
            >
              Create Free Account
            </button>
            <button
              onClick={() => navigate("/books")}
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3.5 rounded-md font-semibold transition-colors"
            >
              Browse as Guest
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
