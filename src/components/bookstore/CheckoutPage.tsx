import { ShieldCheck } from "lucide-react";
import { Header, Footer } from "./SharedComponents";
import { BOOKS } from "./data";
import { useNavigate } from "react-router-dom";

const steps = ["1. Shipping", "2. Payment", "3. Review"];

const orderItems = [
  { book: BOOKS[0], qty: 1 },
  { book: BOOKS[1], qty: 2 },
  { book: BOOKS[3], qty: 1 },
];

function FormField({ label, defaultValue, half = false }: { label: string; defaultValue: string; half?: boolean }) {
  return (
    <div className={half ? "w-1/2" : "w-full"}>
      <label className="block text-xs font-bold text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-amber-400"
      />
    </div>
  );
}

export function CheckoutPage() {
  const navigate = useNavigate();
  const subtotal = orderItems.reduce((s, i) => s + i.book.price * i.qty, 0);
  const tax = +(subtotal * 0.08).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-5">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Home</button>
          {" > "}
          <button onClick={() => navigate("/cart")} className="hover:text-amber-600">Cart</button>
          {" > "} Checkout
        </p>

        <div className="flex gap-3 mb-8">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`flex-1 py-3 text-center rounded-md text-sm font-semibold transition-colors ${
                i === 0 ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Shipping Address</h2>
            <hr className="mb-5" />
            <div className="flex gap-3 mb-4">
              <FormField label="First Name" defaultValue="John" half />
              <FormField label="Last Name" defaultValue="Doe" half />
            </div>
            <div className="mb-4">
              <FormField label="Email Address" defaultValue="john.doe@email.com" />
            </div>
            <div className="mb-4">
              <FormField label="Street Address" defaultValue="123 Main Street" />
            </div>
            <div className="flex gap-3 mb-4">
              <FormField label="City" defaultValue="San Francisco" half />
              <FormField label="ZIP Code" defaultValue="94107" half />
            </div>
            <div className="flex gap-3 mb-6">
              <FormField label="State" defaultValue="California" half />
              <FormField label="Country" defaultValue="United States" half />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Delivery Method</h2>
            <hr className="mb-4" />
            <div className="space-y-2 mb-6">
              {[
                { label: "Standard", detail: "Free, 5–7 days", checked: true },
                { label: "Express", detail: "$9, 2 days", checked: false },
                { label: "Overnight", detail: "$19, next day", checked: false },
              ].map(({ label, detail, checked }) => (
                <label key={label} className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-colors ${checked ? "border-amber-400 bg-amber-50" : "border-gray-200"}`}>
                  <input type="radio" name="delivery" defaultChecked={checked} className="accent-amber-500" />
                  <div>
                    <span className="font-medium text-sm text-gray-800">{label}</span>
                    <span className="text-sm text-gray-500 ml-2">({detail})</span>
                  </div>
                </label>
              ))}
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Payment Details</h2>
            <hr className="mb-4" />
            <div className="space-y-4 mb-4">
              <FormField label="Cardholder Name" defaultValue="John Doe" />
              <FormField label="Card Number" defaultValue="**** **** **** 1234" />
              <div className="flex gap-3">
                <FormField label="Expiry Date" defaultValue="MM / YY" half />
                <FormField label="CVV" defaultValue="***" half />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
              <ShieldCheck size={16} className="text-green-500" />
              Your payment info is encrypted and secure
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-md font-bold text-base transition-colors">
              Place Order — ${(subtotal + tax).toFixed(2)}
            </button>
          </div>

          <aside className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-5 sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h2>
              <hr className="mb-4" />
              <div className="space-y-3 mb-4">
                {orderItems.map(({ book, qty }) => (
                  <div key={book.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-bold text-gray-800">{book.title}</p>
                      <p className="text-gray-500 text-xs">×{qty}</p>
                    </div>
                    <span className="font-bold">${book.price * qty}</span>
                  </div>
                ))}
              </div>
              <hr className="mb-3" />
              <div className="space-y-2 mb-4">
                {[
                  ["Subtotal", `$${subtotal}.00`],
                  ["Shipping", "FREE"],
                  ["Tax", `$${tax}`],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-600">{label}</span>
                    <span className={label === "Shipping" ? "text-green-600 font-bold" : "font-medium"}>{val}</span>
                  </div>
                ))}
              </div>
              <hr className="mb-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(subtotal + tax).toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
