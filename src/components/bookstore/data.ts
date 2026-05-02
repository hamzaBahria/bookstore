export const BOOKS = [
  { id: 1, title: "A Heavy Lift", author: "J. Whitmore", price: 60, originalPrice: 79, rating: 4.5, cover: "bg-gradient-to-br from-slate-700 to-slate-900", genre: "Fiction" },
  { id: 2, title: "The Midnight Code", author: "S. Adler", price: 45, originalPrice: null, rating: 5, cover: "bg-gradient-to-br from-indigo-700 to-purple-900", genre: "Sci-Fi" },
  { id: 3, title: "Dust & Starlight", author: "M. Chen", price: 38, originalPrice: 52, rating: 4.5, cover: "bg-gradient-to-br from-amber-600 to-orange-800", genre: "Romance" },
  { id: 4, title: "Velvet Compass", author: "P. Lorca", price: 55, originalPrice: null, rating: 5, cover: "bg-gradient-to-br from-emerald-700 to-teal-900", genre: "Fiction" },
  { id: 5, title: "Ocean of Thought", author: "R. Osei", price: 29, originalPrice: 40, rating: 3.5, cover: "bg-gradient-to-br from-blue-600 to-cyan-800", genre: "Non-fiction" },
  { id: 6, title: "The Iron Shore", author: "K. Anand", price: 42, originalPrice: null, rating: 4.5, cover: "bg-gradient-to-br from-rose-700 to-pink-900", genre: "Fiction" },
  { id: 7, title: "Paper Bridges", author: "T. Nakamura", price: 33, originalPrice: null, rating: 5, cover: "bg-gradient-to-br from-violet-700 to-fuchsia-900", genre: "Biography" },
  { id: 8, title: "Brief Infinity", author: "A. Russo", price: 48, originalPrice: 65, rating: 4.5, cover: "bg-gradient-to-br from-lime-700 to-green-900", genre: "Sci-Fi" },
  { id: 9, title: "The Lost Atlas", author: "E. Morris", price: 36, originalPrice: null, rating: 4.5, cover: "bg-gradient-to-br from-yellow-600 to-amber-800", genre: "History" },
];

export type Book = typeof BOOKS[0];

export const GENRES = ["Fiction", "Non-fiction", "Sci-Fi", "Biography", "Children", "Horror", "Romance", "History"];

export const NAV_LINKS = ["Home", "About Us", "Bestsellers", "New Releases", "Contact"];
