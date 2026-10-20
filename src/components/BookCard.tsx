"use client";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types";
import { Star, Heart } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useBooks } from "@/context/BookContext";
import { MouseEvent } from "react";

export default function BookCard({ book }: { book: Book }) {
  const { addToWishlist } = useBooks();
  const x = useMotionValue(0); const y = useMotionValue(0);
  const mouseXSpring = useSpring(x); const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div className="card-rainbow-border group">
      <motion.div onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="p-6 flex flex-col h-full cursor-pointer shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
        <button onClick={(e) => { e.preventDefault(); addToWishlist(book); }} className="absolute top-6 right-6 z-30 p-2.5 bg-white/80 dark:bg-emerald-900/80 backdrop-blur-md rounded-full text-zinc-400 hover:text-red-500 dark:hover:text-emerald-300 transition-all shadow-sm">
          <Heart size={18} />
        </button>
        <div style={{ transform: "translateZ(40px)" }} className="relative bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-emerald-900/50 dark:to-[#022c22] rounded-2xl p-6 flex justify-center mb-6 h-64 items-center overflow-hidden">
          <Image
            src={book.image}
            alt={book.bookName}
            width={140}
            height={200}
            style={{ width: "auto", height: "auto" }}
            className="object-contain max-h-full drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-out z-10"
          />
        </div>
        <div style={{ transform: "translateZ(20px)" }} className="flex flex-col grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {book.tags.map(tag => <span key={tag} className="text-[10px] uppercase tracking-wider font-extrabold text-red-600 bg-red-100 dark:text-emerald-300 dark:bg-emerald-900/50 px-3 py-1 rounded-full border border-red-200 dark:border-emerald-700">{tag}</span>)}
          </div>
          <Link href={`/books/${book.bookId}`}><h3 className="text-xl font-bold font-serif mb-2 hover:text-red-500 dark:hover:text-emerald-400 transition-colors line-clamp-1 dark:text-emerald-50">{book.bookName}</h3></Link>
          <p className="text-zinc-500 dark:text-emerald-200/60 text-sm mb-6">By <span className="font-bold text-zinc-700 dark:text-emerald-100">{book.author}</span></p>
          <div className="mt-auto pt-4 border-t border-dashed border-zinc-300 dark:border-emerald-800/50 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-emerald-400">{book.category}</span>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-500 bg-amber-100 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md">{book.rating.toFixed(1)} <Star size={14} fill="currentColor" /></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}