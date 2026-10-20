"use client";
import { useState } from "react";
import { booksData } from "@/data/books";
import { useBooks } from "@/context/BookContext";
import Image from "next/image";
import Link from "next/link";
import { MapPin, User, FileText, ChevronDown } from "lucide-react";
import { Book } from "@/types";

export default function ListedBooks() {
  const { readList, wishlist } = useBooks();
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<string>("");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const currentBooks = activeTab === "read" ? (readList.length > 0 ? readList : booksData) : wishlist;

  const sortedBooks = [...currentBooks].sort((a: Book, b: Book) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.totalPages - a.totalPages;
    if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="glass-premium rounded-3xl p-12 text-center mb-12 relative z-20">
        <h1 className="text-4xl font-serif font-bold mb-8 text-gradient-colorful">Your Books</h1>
        <div className="relative inline-block text-left">
          <button onClick={() => setIsSortOpen(!isSortOpen)} className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-bold mx-auto shadow-lg">
            Sort By <ChevronDown size={18} />
          </button>
          {isSortOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-[#022c22] rounded-xl shadow-xl z-30 border border-red-200 dark:border-emerald-800 py-2">
              {[{ label: "Rating", val: "rating" }, { label: "Pages", val: "pages" }, { label: "Year", val: "year" }].map((opt) => (
                <button key={opt.val} onClick={() => { setSortBy(opt.val); setIsSortOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-emerald-900/50 text-sm font-medium dark:text-emerald-100">{opt.label}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center border-b border-red-200 dark:border-emerald-800/50 mb-8">
        <button onClick={() => setActiveTab("read")} className={`px-8 py-4 font-bold ${activeTab === "read" ? "border-b-4 border-red-500 dark:border-emerald-500 text-red-600 dark:text-emerald-400" : "text-zinc-500 dark:text-emerald-200/50"}`}>Read Books</button>
        <button onClick={() => setActiveTab("wishlist")} className={`px-8 py-4 font-bold ${activeTab === "wishlist" ? "border-b-4 border-red-500 dark:border-emerald-500 text-red-600 dark:text-emerald-400" : "text-zinc-500 dark:text-emerald-200/50"}`}>Wishlist Books</button>
      </div>

      <div className="space-y-6">
        {sortedBooks.length === 0 && <p className="text-center text-zinc-500 dark:text-emerald-200/50 py-10 text-lg">No books found in this list.</p>}
        {sortedBooks.map((book: Book) => (
          <div key={book.bookId} className="flex flex-col md:flex-row gap-6 p-6 glass-premium rounded-2xl border-l-4 border-l-red-500 dark:border-l-emerald-500">
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-emerald-900/50 dark:to-[#022c22] rounded-xl p-4 shrink-0 w-full md:w-48 h-64 flex items-center justify-center">
              <Image
                src={book.image}
                alt={book.bookName}
                width={100}
                height={150}
                style={{ width: "auto", height: "auto" }}
                className="object-contain max-h-full drop-shadow-xl"
              />
            </div>
            <div className="grow space-y-4">
              <h2 className="text-2xl font-bold font-serif dark:text-emerald-50">{book.bookName}</h2>
              <p className="text-zinc-500 dark:text-emerald-200/60">By : {book.author}</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-600 dark:text-emerald-100/80">
                <span className="bg-red-100 dark:bg-emerald-900/40 text-red-700 dark:text-emerald-300 px-3 py-1 rounded-full border border-red-200 dark:border-emerald-700">Tags: {book.tags.join(", ")}</span>
                <span className="flex items-center gap-1"><MapPin size={16} className="text-pink-500 dark:text-cyan-500" /> Year: {book.yearOfPublishing}</span>
                <span className="flex items-center gap-1"><User size={16} className="text-purple-500" /> Publisher: {book.publisher}</span>
                <span className="flex items-center gap-1"><FileText size={16} className="text-red-500 dark:text-emerald-400" /> Pages: {book.totalPages}</span>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-red-200 dark:border-emerald-800/50 mt-4">
                <span className="bg-blue-100 dark:bg-cyan-900/40 text-blue-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-bold">Category: {book.category}</span>
                <span className="bg-amber-100 dark:bg-emerald-900/40 text-amber-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-bold">Rating: {book.rating}</span>
                <Link href={`/books/${book.bookId}`} className="ml-auto"><button className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition shadow-md">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}