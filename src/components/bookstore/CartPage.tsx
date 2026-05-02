import { Heart, Truck, Minus, Plus, Trash2 } from "lucide-react";
import { Header, Footer, BookCover } from "./SharedComponents";
import { BOOKS } from "./data";
import { useNavigate } from "react-router-dom";

const cartItems = [
  { book: BOOKS[0], qty: 1, format: "Paperback" },
  { book: BOOKS[1], qty: 2, format: "Hardcover" },
  { book: BOOKS[3], qty: 1, format: "eBook" },
];

export function CartPage() {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.book.price * item.qty, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-4">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "} Cart
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Shopping Cart ({cartItems.length} items)</h1>

        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            {cartItems.map(({ book, qty, format }) => (
              <div key={book.id} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
                <div className="w-20 flex-shrink-0 cursor-pointer" onClick={() => navigate(`/books/${book.id}`)}>
                  <BookCover colorClass={book.cover} title={book.title} h={100} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-0.5">{book.title}</h3>
                  <p className="text-sm text-gray-500 italic mb-2">{book.author} — {format}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Qty:</span>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-100">
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-sm font-medium border-x border-gray-300">{qty}</span>
                      <button className="px-2.5 py-1 text-gray-600 hover:bg-gray-100">
                        <Plus size={12} />
                      </button>
                    </div>
                    <button className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1">
                      <Trash2 size={14} />
                      Remove
                    </button>
                    <button className="ml-auto text-gray-400 hover:text-red-500">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">${book.price * qty}</p>
                  {qty > 1 && <p className="text-xs text-gray-500">(×{qty})</p>}
                </div>
              </div>
            ))}

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-3">
              <Truck size={18} className="text-green-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-green-700">You qualify for FREE SHIPPING on this order!</span>
            </div>
          </div>

          <aside className="w-72 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-5 sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h2>
              <hr className="mb-4" />
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">${tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium">–$0.00</span>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-between items-center mb-5">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-xl">${total.toFixed(2)}</span>
              </div>

              <div className="mb-4">
                <p className="text-sm font-bold text-gray-700 mb-2">Coupon Code:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
                  />
                  <button className="bg-amber-500 text-white px-3 py-2 rounded-md text-sm font-bold hover:bg-amber-600 transition-colors">Apply</button>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold text-sm transition-colors mb-3"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/books")}
                className="w-full border border-gray-300 text-gray-600 hover:bg-gray-50 py-2.5 rounded-md text-sm font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
