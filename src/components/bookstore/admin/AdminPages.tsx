import {
  BarChart3,
  BookOpen,
  Edit,
  LayoutDashboard,
  Plus,
  Save,
  Shield,
  Trash2,
  Users,
} from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../SharedComponents";
import type { AdminBook, AdminRole } from "./adminData";
import {
  getNextId,
  TOTAL_ORDERS,
  useAdminBooks,
  useAdminUsers,
} from "./adminData";

const emptyBook: Omit<AdminBook, "id"> = {
  title: "",
  author: "",
  price: 0,
  imageUrl: "",
};

function AdminLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const navItems = [
    {
      to: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      end: true,
    },
    { to: "/admin/books", label: "Books", icon: BookOpen, end: true },
    { to: "/admin/books/add", label: "Add Book", icon: Plus, end: true },
    { to: "/admin/users", label: "Users", icon: Users, end: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="bg-gray-900 text-white w-10 h-10 rounded-md flex items-center justify-center">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 leading-tight">
                Admin
              </p>
              <p className="text-xs text-gray-500">Store management</p>
            </div>
          </Link>
          <Link
            to="/home"
            className="text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View Store
          </Link>
        </div>
        <nav className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 flex gap-2">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
                    isActive
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-gray-600 hover:text-amber-600 hover:border-amber-300"
                  }`
                }
              >
                <Icon size={15} />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-6 w-full flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">{title}</h1>
        {children}
      </main>

      <Footer />
    </div>
  );
}

function StatBox({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: typeof BookOpen;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="w-12 h-12 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
        <Icon size={24} />
      </div>
    </div>
  );
}

export function AdminDashboardPage() {
  const { books } = useAdminBooks();
  const { users } = useAdminUsers();

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-3 gap-5">
        <StatBox label="Total Books" value={books.length} icon={BookOpen} />
        <StatBox label="Total Users" value={users.length} icon={Users} />
        <StatBox label="Total Orders" value={TOTAL_ORDERS} icon={BarChart3} />
      </div>
    </AdminLayout>
  );
}

export function AdminBooksPage() {
  const { books, setBooks } = useAdminBooks();

  const deleteBook = (id: number) => {
    setBooks((current) => current.filter((book) => book.id !== id));
  };

  return (
    <AdminLayout title="Books">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {books.length} books in catalog
          </p>
          <Link
            to="/admin/books/add"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2"
          >
            <Plus size={15} />
            Add Book
          </Link>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Title</th>
              <th className="text-left px-4 py-3 font-semibold">Author</th>
              <th className="text-left px-4 py-3 font-semibold">Price</th>
              <th className="text-right px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {book.title}
                </td>
                <td className="px-4 py-3 text-gray-600">{book.author}</td>
                <td className="px-4 py-3 text-gray-900">
                  ${book.price.toFixed(2)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/admin/books/edit/${book.id}`}
                      className="border border-gray-300 hover:bg-gray-50 text-gray-700 w-9 h-9 rounded-md flex items-center justify-center"
                      title="Edit book"
                    >
                      <Edit size={15} />
                    </Link>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="border border-red-200 hover:bg-red-50 text-red-600 w-9 h-9 rounded-md flex items-center justify-center"
                      title="Delete book"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

function BookForm({ mode }: { mode: "add" | "edit" }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, setBooks } = useAdminBooks();
  const existingBook = books.find((book) => book.id === Number(id));
  const [form, setForm] = useState<Omit<AdminBook, "id">>(
    existingBook ?? emptyBook,
  );

  const submitBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === "edit" && existingBook) {
      setBooks((current) =>
        current.map((book) =>
          book.id === existingBook.id
            ? { ...book, ...form, price: Number(form.price) }
            : book,
        ),
      );
    } else {
      setBooks((current) => [
        ...current,
        { id: getNextId(current), ...form, price: Number(form.price) },
      ]);
    }

    navigate("/admin/books");
  };

  if (mode === "edit" && !existingBook) {
    return (
      <AdminLayout title="Edit Book">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600 mb-4">Book not found.</p>
          <Link
            to="/admin/books"
            className="text-amber-600 font-semibold hover:text-amber-700"
          >
            Back to books
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={mode === "edit" ? "Edit Book" : "Add Book"}>
      <form
        onSubmit={submitBook}
        className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl"
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1">
              Title
            </span>
            <input
              required
              value={form.title}
              onChange={(event) =>
                setForm({ ...form, title: event.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1">
              Author
            </span>
            <input
              required
              value={form.author}
              onChange={(event) =>
                setForm({ ...form, author: event.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1">
              Price
            </span>
            <input
              required
              min="0"
              step="0.01"
              type="number"
              value={form.price}
              onChange={(event) =>
                setForm({ ...form, price: Number(event.target.value) })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1">
              Image URL
            </span>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(event) =>
                setForm({ ...form, imageUrl: event.target.value })
              }
              placeholder="https://example.com/book-cover.jpg"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:border-amber-400"
            />
          </label>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2"
          >
            <Save size={15} />
            Save Book
          </button>
          <Link
            to="/admin/books"
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            Cancel
          </Link>
        </div>
      </form>
    </AdminLayout>
  );
}

export function AdminAddBookPage() {
  return <BookForm mode="add" />;
}

export function AdminEditBookPage() {
  return <BookForm mode="edit" />;
}

export function AdminUsersPage() {
  const { users, setUsers } = useAdminUsers();

  const deleteUser = (id: number) => {
    setUsers((current) => current.filter((user) => user.id !== id));
  };

  const changeRole = (id: number, role: AdminRole) => {
    setUsers((current) =>
      current.map((user) => (user.id === id ? { ...user, role } : user)),
    );
  };

  return (
    <AdminLayout title="Users">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            {users.length} registered users
          </p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Name</th>
              <th className="text-left px-4 py-3 font-semibold">Email</th>
              <th className="text-left px-4 py-3 font-semibold">Role</th>
              <th className="text-right px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{user.email}</td>
                <td className="px-4 py-3">
                  <select
                    value={user.role}
                    onChange={(event) =>
                      changeRole(user.id, event.target.value as AdminRole)
                    }
                    className="border border-gray-300 rounded-md px-2 py-1.5 text-xs font-semibold text-gray-700 bg-white"
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="border border-red-200 hover:bg-red-50 text-red-600 w-9 h-9 rounded-md flex items-center justify-center"
                      title="Delete user"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
