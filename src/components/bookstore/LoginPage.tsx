import { Header, Footer } from "./SharedComponents";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome Back</h1>
          <p className="text-gray-500 mb-5">Sign in to your MyBook account</p>
          <hr className="mb-5" />

          <div className="space-y-4 mb-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="you@email.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                defaultValue="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-amber-500" defaultChecked />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-amber-600 hover:underline">Forgot password?</a>
          </div>

          <button
            onClick={() => navigate("/account")}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold transition-colors mb-5"
          >
            Sign In
          </button>

          <hr className="mb-4" />
          <p className="text-center text-sm text-gray-500 mb-4">— or continue with —</p>

          <div className="flex gap-3 mb-5">
            <button className="flex-1 border border-gray-300 rounded-md py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
              <span className="text-red-500 font-bold">G</span>
              Google
            </button>
            <button className="flex-1 border border-gray-300 rounded-md py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
              <span className="text-blue-600 font-bold">f</span>
              Facebook
            </button>
          </div>

          <hr className="mb-4" />
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-amber-600 font-semibold hover:underline">Sign up free</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
