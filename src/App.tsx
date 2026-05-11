import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { HomePage } from "./components/bookstore/HomePage";
import { BookListingPage } from "./components/bookstore/BookListingPage";
import { BookDetailsPage } from "./components/bookstore/BookDetailsPage";
import { CartPage } from "./components/bookstore/CartPage";
import { CheckoutPage } from "./components/bookstore/CheckoutPage";
import { LoginPage } from "./components/bookstore/LoginPage";
import { AccountPage } from "./components/bookstore/AccountPage";
import { WishlistPage } from "./components/bookstore/WishlistPage";
import { ContactPage } from "./components/bookstore/ContactPage";
import { AboutPage } from "./components/bookstore/AboutPage";
import {
  AdminAddBookPage,
  AdminBooksPage,
  AdminDashboardPage,
  AdminEditBookPage,
  AdminUsersPage,
} from "./components/bookstore/admin/AdminPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/books" element={<BookListingPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/books" element={<AdminBooksPage />} />
        <Route path="/admin/books/add" element={<AdminAddBookPage />} />
        <Route path="/admin/books/edit/:id" element={<AdminEditBookPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
