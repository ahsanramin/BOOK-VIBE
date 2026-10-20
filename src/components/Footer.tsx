"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="bg-white dark:bg-[#022c22] border-t border-red-200 dark:border-emerald-800/50 py-12 mt-20 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="https://i.ibb.co.com/27MMdC0j/Book-Vibe-Premium-Logo.png"
              alt="Book Vibe Logo"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="object-contain h-12 w-auto"
            />
            <span className="text-2xl font-serif font-black text-gradient-colorful">Book Vibe</span>
          </div>
          <p className="text-zinc-500 dark:text-emerald-200/60 text-sm">Your ultimate destination for discovering premium books.</p>
        </div>
        <div><h3 className="font-bold mb-4 dark:text-emerald-100">Quick Links</h3><ul className="space-y-2 text-sm text-zinc-500 dark:text-emerald-200/60"><li><a href="/" className="hover:text-red-500 dark:hover:text-emerald-400">Home</a></li><li><a href="/listed-books" className="hover:text-red-500 dark:hover:text-emerald-400">Listed Books</a></li><li><a href="/about" className="hover:text-red-500 dark:hover:text-emerald-400">About Us</a></li><li><a href="/contact" className="hover:text-red-500 dark:hover:text-emerald-400">Contact</a></li></ul></div>
        <div><h3 className="font-bold mb-4 dark:text-emerald-100">Legal</h3><ul className="space-y-2 text-sm text-zinc-500 dark:text-emerald-200/60"><li><a href="#" className="hover:text-red-500 dark:hover:text-emerald-400">Privacy Policy</a></li><li><a href="#" className="hover:text-red-500 dark:hover:text-emerald-400">Terms of Service</a></li></ul></div>
        <div><h3 className="font-bold mb-4 dark:text-emerald-100">Newsletter</h3><div className="flex"><input type="email" placeholder="Email" className="bg-zinc-100 dark:bg-emerald-900/50 border border-zinc-300 dark:border-emerald-700 px-4 py-2 rounded-l-md w-full outline-none focus:border-red-500 dark:focus:border-emerald-500 text-zinc-900 dark:text-white" /><button className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white px-4 py-2 rounded-r-md hover:opacity-90">Join</button></div></div>
      </div>
      <div className="text-center text-zinc-500 dark:text-emerald-200/60 text-sm mt-12 pt-8 border-t border-red-200 dark:border-emerald-800/50">© {year || 2024} Book Vibe. All rights reserved.</div>
    </footer>
  );
}