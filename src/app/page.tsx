"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { booksData } from "@/data/books";
import BookCard from "@/components/BookCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { BentoGrid, FeaturedSection, ImpactStats, PricingSection, CategoriesSection, Testimonials, FAQSection, CTASection } from "@/components/SaaSSections";

export default function Home() {
  return (
    // REMOVED bg-grid-pattern FROM THE MAIN TAG
    <main className="overflow-hidden min-h-screen relative">
      {/* Floating Orbs - Red for Light Mode, Green for Dark Mode */}
      <motion.div animate={{ x: [0, 50, 0], y: [0, -50, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-red-400/20 dark:bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[5%] w-[35vw] h-[35vw] bg-pink-400/20 dark:bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[30%] w-[30vw] h-[30vw] bg-purple-400/20 dark:bg-teal-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-10 pb-20 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-sm font-bold shadow-lg">
              <Sparkles size={16} className="text-red-500 dark:text-emerald-500" /> <span className="text-gradient-colorful">Voted #1 Platform</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[1.05] tracking-tight dark:text-emerald-50">Books to <br /><span className="text-gradient-colorful">freshen up</span> <br />your bookshelf</h1>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-emerald-200/80 max-w-lg leading-relaxed font-medium">Discover thousands of meticulously curated books and join a global community of passionate readers.</p>
            <div className="flex gap-4 pt-4"><Link href="#books" className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-teal-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl glow-red dark:glow-emerald">Explore <ArrowRight /></Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 flex justify-center perspective-1000">
            <div className="relative w-full max-w-sm aspect-3/4">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-pink-500 to-purple-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-teal-500 rounded-[3rem] rotate-6 opacity-40 blur-2xl animate-pulse" />
              <div className="relative h-full w-full rounded-[2.5rem] glass-premium p-6 flex items-center justify-center border-2 border-white/50 dark:border-emerald-500/20">
                <Image src={booksData[0].image} alt="Hero" width={300} height={450} className="object-cover rounded-xl shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="books" className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 dark:text-emerald-50">Explore Our <span className="text-gradient-colorful">Collection</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData.slice(0, 6).map((book) => <BookCard key={book.bookId} book={book} />)}
        </div>
      </section>

      <BentoGrid />
      <FeaturedSection />
      <CategoriesSection />
      <ImpactStats />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}