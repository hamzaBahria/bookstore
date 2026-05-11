import { useEffect, useState } from "react";
import { BOOKS } from "../data";

export type AdminRole = "USER" | "ADMIN";

export type AdminBook = {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
};

export type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: AdminRole;
};

const BOOKS_KEY = "mybook-admin-books";
const USERS_KEY = "mybook-admin-users";

const initialBooks: AdminBook[] = BOOKS.map((book) => ({
  id: book.id,
  title: book.title,
  author: book.author,
  price: book.price,
  imageUrl: "",
}));

const initialUsers: AdminUser[] = [
  { id: 1, name: "Hamza Admin", email: "admin@mybook.com", role: "ADMIN" },
  { id: 2, name: "John Doe", email: "john.doe@email.com", role: "USER" },
  { id: 3, name: "Maya Chen", email: "maya.chen@email.com", role: "USER" },
  { id: 4, name: "Sofia Adler", email: "sofia.adler@email.com", role: "ADMIN" },
];

function readStored<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function useAdminBooks() {
  const [books, setBooks] = useState<AdminBook[]>(() => readStored(BOOKS_KEY, initialBooks));

  useEffect(() => {
    window.localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  }, [books]);

  return { books, setBooks };
}

export function useAdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>(() => readStored(USERS_KEY, initialUsers));

  useEffect(() => {
    window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  return { users, setUsers };
}

export function getNextId(items: { id: number }[]) {
  return items.length ? Math.max(...items.map((item) => item.id)) + 1 : 1;
}

export const TOTAL_ORDERS = 18;
