"use client";
import { useParams, useRouter } from "next/navigation";
import { booksData } from "@/data/books";
import Image from "next/image";
import { useBooks } from "@/context/BookContext";
import { Suspense } from "react";

function BookDetailsContent() {
  const { id } = useParams();
  const router = useRouter();
  const { addToRead, addToWishlist } = useBooks();
  const book = booksData.find((b) => b.bookId === Number(id));

  if (!book) return <div className="text-center py-20 text-2xl font-bold dark:text-emerald-50">Book not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <button onClick={() => router.back()} className="mb-8 text-red-500 dark:text-emerald-500 font-bold hover:underline">← Back</button>
      <div className="flex flex-col lg:flex-row gap-12 glass-premium p-8 md:p-12 rounded-3xl border border-red-200 dark:border-emerald-800/50">
        <div className="lg:w-1/3 flex justify-center">
          <div className="bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-emerald-900/50 dark:to-[#022c22] p-8 rounded-2xl w-full max-w-sm flex items-center justify-center h-[500px]">
            <Image
              src={book.image}
              alt={book.bookName}
              width={250}
              height={400}
              style={{ width: "auto", height: "auto" }}
              className="object-contain max-h-full drop-shadow-2xl rounded-sm"
            />
          </div>
        </div>
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-gradient-colorful">{book.bookName}</h1>
          <p className="text-xl text-zinc-500 dark:text-emerald-200/60">By : {book.author}</p>
          <div className="border-y border-red-200 dark:border-emerald-800/50 py-4 font-bold dark:text-emerald-100">{book.category}</div>
          <div>
            <h3 className="font-bold text-lg mb-2 dark:text-emerald-50">Review :</h3>
            <p className="text-zinc-600 dark:text-emerald-100/80 text-justify leading-relaxed">{book.review}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="font-bold py-1 dark:text-emerald-50">Tag :</span>
            {book.tags.map((tag: string) => <span key={tag} className="bg-purple-100 text-purple-700 dark:bg-emerald-900/50 dark:text-emerald-300 px-4 py-1 rounded-full font-bold">#{tag}</span>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-red-200 dark:border-emerald-800/50 font-medium dark:text-emerald-100">
            <p>Pages: <span className="font-bold">{book.totalPages}</span></p>
            <p>Publisher: <span className="font-bold">{book.publisher}</span></p>
            <p>Year: <span className="font-bold">{book.yearOfPublishing}</span></p>
            <p>Rating: <span className="font-bold text-amber-500">{book.rating}</span></p>
          </div>
          <div className="flex gap-4 pt-8">
            <button onClick={() => { addToRead(book); alert("Added to Read!"); }} className="border-2 border-red-500 dark:border-emerald-500 text-red-600 dark:text-emerald-400 px-8 py-3 rounded-xl font-bold hover:bg-red-50 dark:hover:bg-emerald-900/30 transition">Read</button>
            <button onClick={() => { addToWishlist(book); alert("Added to Wishlist!"); }} className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookDetails() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-2xl font-bold dark:text-emerald-50">Loading book details...</div>}>
      <BookDetailsContent />
    </Suspense>
  );
}