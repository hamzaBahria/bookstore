import {
  ListChecks,
  Heart,
  User,
  Lock,
  MapPin,
  CreditCard,
  Bell,
  LogOut,
  Star,
} from "lucide-react";
import { Header, Footer } from "./SharedComponents";
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: "#ORD-20260412",
    date: "Apr 12, 2026",
    items: "3 books",
    total: "$221.40",
    status: "Delivered",
    statusColor: "text-green-600",
  },
  {
    id: "#ORD-20260318",
    date: "Mar 18, 2026",
    items: "1 book",
    total: "$95.00",
    status: "Shipped",
    statusColor: "text-blue-600",
  },
  {
    id: "#ORD-20260201",
    date: "Feb 01, 2026",
    items: "2 books",
    total: "$42.00",
    status: "Delivered",
    statusColor: "text-green-600",
  },
  {
    id: "#ORD-20251204",
    date: "Dec 04, 2025",
    items: "4 books",
    total: "$134.00",
    status: "Delivered",
    statusColor: "text-green-600",
  },
  {
    id: "#ORD-20251020",
    date: "Oct 20, 2025",
    items: "1 book",
    total: "$29.00",
    status: "Delivered",
    statusColor: "text-green-600",
  },
];

const navItems = [
  { icon: ListChecks, label: "My Orders", active: true },
  { icon: Heart, label: "Wishlist" },
  { icon: User, label: "Profile" },
  { icon: Lock, label: "Password" },
  { icon: MapPin, label: "Addresses" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Bell, label: "Notifications" },
  { icon: LogOut, label: "Sign Out" },
];

export function AccountPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500 italic mb-5">
          <button
            onClick={() => navigate("/")}
            className="hover:text-amber-600"
          >
            Home
          </button>
          {" > "} My Account
        </p>

        <div className="flex gap-6">
          <aside className="w-56 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex flex-col items-center mb-5">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-amber-600">JD</span>
                </div>
                <p className="font-bold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500 italic">
                  john.doe@email.com
                </p>
              </div>
              <hr className="mb-2" />
              <nav className="space-y-1">
                {navItems.map(({ icon: Icon, label, active }) => (
                  <div key={label}>
                    <button
                      className={`w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                        active
                          ? "bg-amber-50 text-amber-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={
                        label === "Sign Out" ? () => navigate("/") : undefined
                      }
                    >
                      <Icon size={16} />
                      {label}
                    </button>
                    <hr className="my-1 border-gray-100" />
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                My Orders
              </h2>
              <hr className="mb-4" />

              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-bold text-gray-500 uppercase">
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Items</th>
                    <th className="pb-3">Total</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="text-sm">
                      <td className="py-3 font-mono text-gray-700">
                        {order.id}
                      </td>
                      <td className="py-3 text-gray-600">{order.date}</td>
                      <td className="py-3 text-gray-600">{order.items}</td>
                      <td className="py-3 font-medium">{order.total}</td>
                      <td className={`py-3 font-bold ${order.statusColor}`}>
                        {order.status}
                      </td>
                      <td className="py-3">
                        <button className="text-xs border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Star size={28} className="text-amber-500 fill-amber-500" />
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    Loyalty Points
                  </p>
                  <p className="text-gray-700 text-sm">
                    1,240 pts = $12.40 store credit
                  </p>
                </div>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                Redeem Points
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
