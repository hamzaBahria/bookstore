import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 400,
            border: "1px solid #222",
            background: "#fff",
            padding: 32,
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>
            Welcome Back
          </h2>
          <div style={{ marginBottom: 16, color: "#444" }}>
            Sign in to your MyBook account
          </div>
          <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: 6, border: "1px solid #222", marginBottom: 8 }}
            />
            <label style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: 6, border: "1px solid #222", marginBottom: 8 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <label style={{ fontSize: 13 }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ marginRight: 4 }}
                />
                Remember me
              </label>
              <a href="#" style={{ fontSize: 13, textDecoration: "underline" }}>
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: 10,
                background: "#fff",
                border: "2px solid #222",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Sign In
            </button>
            <hr style={{ margin: "16px 0" }} />
            <div
              style={{ textAlign: "center", color: "#444", marginBottom: 8 }}
            >
              — or continue with —
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: 8,
                  border: "1px solid #222",
                  background: "#fff",
                }}
              >
                G Google
              </button>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: 8,
                  border: "1px solid #222",
                  background: "#fff",
                }}
              >
                f Facebook
              </button>
            </div>
            <div style={{ textAlign: "center", fontSize: 13, marginTop: 8 }}>
              Don&apos;t have an account?{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Sign up free
              </a>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid #222",
          background: "#fff",
          padding: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontSize: 14,
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
            BOOKSTORE
            <br />
            ONLINE BOOKSHOP
          </div>
          <div style={{ marginBottom: 12 }}>
            Your one-stop online bookstore.
            <br />
            Free shipping on orders over $50.
            <br />
            Happy reading!
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 18 }}>
            <span>📘</span> <span>📷</span> <span>💬</span> <span>🔗</span>
          </div>
        </div>
        <div style={{ minWidth: 260 }}>
          <div style={{ marginBottom: 6 }}>
            📍 832 Thompson Drive, San Francisco CA 94107, US
          </div>
          <div style={{ marginBottom: 6 }}>
            📞 +1 (123) 345-1235 | +1 (123) 345-1236
          </div>
          <div>✉️ support@mybook.com | info@mybook.com</div>
        </div>
      </div>
    </div>
  );
}
