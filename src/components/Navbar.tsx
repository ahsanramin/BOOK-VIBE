"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect, Suspense } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Listed Books", href: "/listed-books" },
  { name: "Pages to Read", href: "/pages-to-read" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

function NavbarContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white/80 dark:bg-[#022c22]/80 backdrop-blur-xl border-b border-red-200/50 dark:border-emerald-800/50 shadow-sm" : "py-4 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Image
              src="https://i.ibb.co.com/27MMdC0j/Book-Vibe-Premium-Logo.png"
              alt="Book Vibe Logo"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="object-contain h-10 w-auto"
              priority
            />
            <span className="text-2xl font-serif font-black text-gradient-colorful">Book Vibe</span>
          </Link>
          <div className="hidden md:flex space-x-1 items-center glass-premium px-2 py-1 rounded-full">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className={`relative px-4 py-2 text-sm font-semibold transition-colors ${pathname === link.href ? "text-red-600 dark:text-emerald-400" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-emerald-100"}`}>
                {pathname === link.href && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-red-100 dark:bg-emerald-900/40 rounded-full -z-10" />}
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-emerald-400">Sign In</button>
            <button className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg glow-red dark:glow-emerald">Sign Up</button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 glass-premium rounded-full">{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 dark:bg-[#022c22]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="px-4 py-6 space-y-2">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-emerald-900/30">{link.name}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20 w-full fixed top-0 z-50 bg-white/80 dark:bg-[#022c22]/80 backdrop-blur-xl border-b border-red-200/50 dark:border-emerald-800/50" />}>
      <NavbarContent />
    </Suspense>
  );
}