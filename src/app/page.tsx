"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { booksData } from "@/data/books";
import BookCard from "@/components/BookCard";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  PartnersSection, TopExpertsSection, HowItWorksSection, WhyTrustUsSection,
  BentoGrid, ImpactStats, PricingSection, CategoriesSection, Testimonials, 
  LatestArticlesSection, AdminSection, FAQSection, CTASection 
} from "@/components/SaaSSections";
import { useState, useEffect } from "react";

// --- HERO SLIDER DATA ---
const heroSlides = [
  { id: 1, title: "Books to freshen up", highlight: "your bookshelf", subtitle: "Discover thousands of meticulously curated books and join a global community.", image: booksData[0].image, color: "from-red-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500" },
  { id: 2, title: "Unlock new", highlight: "worlds today", subtitle: "Dive into fantasy, sci-fi, and romance. Your next great adventure is one page away.", image: booksData[5].image, color: "from-purple-500 to-pink-500 dark:from-teal-500 dark:to-emerald-500" },
  { id: 3, title: "Master your", highlight: "reading goals", subtitle: "Track your progress, set daily targets, and become the reader you've always wanted to be.", image: booksData[15].image, color: "from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500" },
  { id: 4, title: "Learn from", highlight: "top experts", subtitle: "Access exclusive non-fiction and biographies from the world's greatest minds.", image: booksData[14].image, color: "from-blue-500 to-purple-500 dark:from-emerald-500 dark:to-teal-500" },
  { id: 5, title: "Escape into", highlight: "timeless classics", subtitle: "Revisit the greatest literature ever written, beautifully curated for the modern reader.", image: booksData[1].image, color: "from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-600" },
  { id: 6, title: "Join the", highlight: "Book Vibe community", subtitle: "Connect with 50,000+ readers, share reviews, and discover your next favorite book.", image: booksData[6].image, color: "from-emerald-500 to-teal-500 dark:from-green-500 dark:to-emerald-700" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  const slide = heroSlides[currentSlide];

  return (
    <main className="overflow-hidden min-h-screen relative">
      {/* Background Orbs */}
      <motion.div animate={{ x: [0, 50, 0], y: [0, -50, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-red-400/20 dark:bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[5%] w-[35vw] h-[35vw] bg-pink-400/20 dark:bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* --- ULTRA PREMIUM HERO SLIDER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-10 pb-20 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={slide.id}
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-sm font-bold shadow-lg">
                <Sparkles size={16} className="text-red-500 dark:text-emerald-500" /> 
                <span className="text-gradient-colorful">Slide {slide.id} of 6 • Voted #1 Platform</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-black leading-[1.05] tracking-tight dark:text-emerald-50">
                {slide.title} <br />
                <span className="text-gradient-colorful">{slide.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 dark:text-emerald-200/80 max-w-lg leading-relaxed font-medium">
                {slide.subtitle}
              </p>
              <div className="flex items-center gap-6 pt-4">
                <Link href="#books" className={`bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl`}>
                  Explore Now <ArrowRight />
                </Link>
                {/* Slider Controls */}
                <div className="flex gap-2">
                  <button onClick={prevSlide} className="p-3 rounded-full glass-premium hover:bg-red-50 dark:hover:bg-emerald-900/50 transition"><ChevronLeft size={20} /></button>
                  <button onClick={nextSlide} className="p-3 rounded-full glass-premium hover:bg-red-50 dark:hover:bg-emerald-900/50 transition"><ChevronRight size={20} /></button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Image */}
          <div className="relative z-10 flex justify-center perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div 
                key={slide.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
                animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative w-full max-w-sm aspect-3/4"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} rounded-[3rem] rotate-6 opacity-40 blur-2xl animate-pulse`} />
                <div className="relative h-full w-full rounded-[2.5rem] glass-premium p-6 flex items-center justify-center border-2 border-white/50 dark:border-emerald-500/20">
                  <Image src={slide.image} alt="Hero Book" width={300} height={450} style={{ width: "auto", height: "auto" }} className="object-cover rounded-xl shadow-2xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-red-500 dark:bg-emerald-500 w-8" : "bg-zinc-300 dark:bg-emerald-900"}`}
            />
          ))}
        </div>
      </section>

      {/* --- MAIN BOOKS GRID --- */}
      <section id="books" className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 dark:text-emerald-50">Explore Our <span className="text-gradient-colorful">Collection</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData.slice(0, 6).map((book) => <BookCard key={book.bookId} book={book} />)}
        </div>
      </section>

      {/* --- MASSIVE SAAS SECTIONS --- */}
      <PartnersSection />
      <TopExpertsSection />
      <HowItWorksSection />
      <WhyTrustUsSection />
      <BentoGrid />
      <CategoriesSection />
      <ImpactStats />
      <Testimonials />
      <LatestArticlesSection />
      <PricingSection />
      <AdminSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}