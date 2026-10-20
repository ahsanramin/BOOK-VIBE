"use client";
import { motion } from "framer-motion";
import { CheckCircle, Star, Quote, ChevronDown, Zap, Shield, Users, BookOpen } from "lucide-react";

export const FeaturedSection = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <div className="space-y-6">
      <h2 className="text-4xl font-serif font-bold dark:text-emerald-50">Featured Book of the <span className="text-gradient-colorful">Month</span></h2>
      <p className="text-zinc-600 dark:text-emerald-200/80 text-lg">Dive into our meticulously selected book of the month. Hand-picked by our expert curators.</p>
      <ul className="space-y-3">{["Award-winning narrative", "Perfect for weekend reading", "Exclusive author interview"].map((item, i) => <li key={i} className="flex items-center gap-3 font-medium dark:text-emerald-100"><CheckCircle className="text-red-500 dark:text-emerald-400" size={20} /> {item}</li>)}</ul>
    </div>
    <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-emerald-500/10 dark:to-cyan-500/10 p-8 rounded-3xl border border-red-500/20 dark:border-emerald-500/20 shadow-xl">
      <div className="glass-premium p-6 rounded-2xl shadow-xl flex gap-6">
        <div className="w-1/3 bg-gradient-to-br from-red-100 to-pink-100 dark:from-emerald-900/50 dark:to-cyan-900/50 rounded-xl flex items-center justify-center p-4"><BookOpen size={40} className="text-red-500 dark:text-emerald-400" /></div>
        <div className="w-2/3 flex flex-col justify-center">
          <h3 className="text-2xl font-bold dark:text-emerald-50">The Psychology of Money</h3>
          <p className="text-zinc-500 dark:text-emerald-200/60 mb-4">Morgan Housel</p>
          <div className="flex text-amber-500 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
          <button className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition">Read Now</button>
        </div>
      </div>
    </div>
  </section>
);

export const BentoGrid = () => (
  <section className="py-32 max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 dark:text-emerald-50">Everything you need to <span className="text-gradient-colorful">succeed</span></h2>
      <p className="text-zinc-600 dark:text-emerald-200/80 text-lg">A comprehensive suite of tools designed for the modern reader.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-gradient-to-br from-red-50 to-pink-50 dark:from-[#022c22] dark:to-emerald-950 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-red-200 dark:border-emerald-800/50 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 dark:bg-emerald-500/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
        <div className="relative z-10 max-w-sm">
          <div className="w-14 h-14 bg-red-500 dark:bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-red dark:glow-emerald"><Zap size={28} /></div>
          <h3 className="text-3xl font-bold mb-4 text-red-900 dark:text-emerald-100">Advanced Reading Analytics</h3>
          <p className="text-red-700 dark:text-emerald-200/80 text-lg">Track your reading speed, favorite genres, and yearly goals with our beautiful dashboard.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-[#022c22] dark:to-emerald-950 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-purple-200 dark:border-emerald-800/50 shadow-lg">
        <div className="w-14 h-14 bg-purple-500 dark:bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-purple dark:glow-cyan"><Shield size={28} /></div>
        <div><h3 className="text-2xl font-bold mb-2 text-purple-900 dark:text-emerald-100">100% Secure</h3><p className="text-purple-700 dark:text-emerald-200/80">Your data and progress are safely encrypted.</p></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-[#022c22] dark:to-emerald-950 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-orange-200 dark:border-emerald-800/50 shadow-lg">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 dark:bg-cyan-500/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
        <div className="relative z-10 max-w-sm">
          <div className="w-14 h-14 bg-orange-500 dark:bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"><Users size={28} /></div>
          <h3 className="text-3xl font-bold mb-4 text-orange-900 dark:text-emerald-100">Community Driven</h3>
          <p className="text-orange-700 dark:text-emerald-200/80 text-lg">Join thousands of readers, share reviews, and discover books through friends.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export const ImpactStats = () => (
  <section className="py-24 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 dark:from-emerald-800 dark:via-emerald-600 dark:to-cyan-700 text-white shadow-2xl relative z-10 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[{ val: "50K+", label: "Active Readers" }, { val: "10K+", label: "Books Listed" }, { val: "120K+", label: "Reviews" }, { val: "99.9%", label: "Uptime" }].map((stat, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring" }}>
          <div className="text-5xl md:text-6xl font-black mb-2 drop-shadow-md">{stat.val}</div>
          <div className="text-white/90 font-bold text-lg">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const PricingSection = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-5xl font-serif font-bold mb-12 dark:text-emerald-50">Choose Your <span className="text-gradient-colorful">Plan</span></h2>
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {[
        { name: "Free", price: "$0", features: ["100 free books", "Community support", "Basic tracking"], popular: false },
        { name: "Premium", price: "$9", features: ["Unlimited access", "Priority support", "Advanced stats", "Ad-free"], popular: true },
        { name: "Team", price: "$29", features: ["Everything in Premium", "Up to 5 accounts", "Shared lists"], popular: false },
      ].map((plan, i) => (
        <div key={i} className={`relative p-10 rounded-3xl border-2 transition-all duration-300 ${plan.popular ? "bg-gradient-to-b from-white to-red-50 dark:from-[#022c22] dark:to-emerald-950 text-zinc-900 dark:text-white border-red-500 dark:border-emerald-500 scale-110 shadow-2xl shadow-red-500/20 dark:shadow-emerald-500/20 z-20" : "glass-premium border-red-200 dark:border-emerald-800/50 hover:border-red-500/50 dark:hover:border-emerald-500/50"}`}>
          {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Most Popular</div>}
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <div className={`text-6xl font-black mb-8 ${plan.popular ? "text-red-500 dark:text-emerald-400" : "text-purple-600 dark:text-emerald-200"}`}>{plan.price}<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
          <ul className="space-y-4 mb-8 text-left">{plan.features.map((f, j) => <li key={j} className="flex items-center gap-3 font-medium"><CheckCircle className={plan.popular ? "text-red-500 dark:text-emerald-500" : "text-emerald-500"} size={20} /> {f}</li>)}</ul>
          <button className={`w-full py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 ${plan.popular ? "bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white shadow-lg glow-red dark:glow-emerald" : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"}`}>Get Started</button>
        </div>
      ))}
    </div>
  </section>
);

export const CategoriesSection = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl font-serif font-bold mb-12 dark:text-emerald-50">Browse by <span className="text-gradient-colorful">Category</span></h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "Fiction", color: "from-red-400 to-pink-400", shadow: "glow-red" },
        { name: "Fantasy", color: "from-purple-400 to-pink-400", shadow: "glow-purple" },
        { name: "Mystery", color: "from-orange-400 to-red-400", shadow: "glow-red" },
        { name: "Biography", color: "from-emerald-400 to-teal-400", shadow: "glow-emerald" }
      ].map((cat, i) => (
        <motion.div key={i} whileHover={{ y: -8, scale: 1.05 }} className={`bg-gradient-to-br ${cat.color} p-1 rounded-3xl cursor-pointer ${cat.shadow} transition-all`}>
          <div className="bg-white dark:bg-[#022c22] h-full w-full rounded-[1.4rem] p-8 flex items-center justify-center border border-white/20">
            <h3 className="font-bold text-2xl text-zinc-900 dark:text-white">{cat.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl font-serif font-bold mb-12 dark:text-emerald-50">What Our Readers <span className="text-gradient-colorful">Say</span></h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="glass-premium p-8 rounded-2xl text-left flex flex-col justify-between border-t-4 border-t-red-500 dark:border-t-emerald-500">
          <Quote className="text-red-500 dark:text-emerald-500 mb-4" size={32} />
          <p className="text-zinc-600 dark:text-emerald-100/80 mb-6 italic">"Book Vibe completely changed how I discover new books. The UI is stunning!"</p>
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">JD</div><div><div className="font-bold text-sm dark:text-emerald-50">Jane Doe</div><div className="text-xs text-zinc-500 dark:text-emerald-200/60">Avid Reader</div></div></div>
        </div>
      ))}
    </div>
  </section>
);

export const FAQSection = () => (
  <section className="py-24 max-w-3xl mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-serif font-bold mb-12 text-center dark:text-emerald-50">Frequently Asked <span className="text-gradient-colorful">Questions</span></h2>
    <div className="space-y-4">
      {[{ q: "Is Book Vibe free?", a: "Yes, you can create a free account." }, { q: "Can I read offline?", a: "Premium users can download books." }, { q: "How to cancel?", a: "Cancel anytime from your dashboard." }].map((faq, i) => (
        <details key={i} className="glass-premium rounded-2xl p-6 group cursor-pointer hover:border-red-500/50 dark:hover:border-emerald-500/50 transition-colors">
          <summary className="flex items-center justify-between font-bold text-lg list-none dark:text-emerald-50">{faq.q} <ChevronDown className="group-open:rotate-180 text-red-500 dark:text-emerald-500 transition-transform" /></summary>
          <p className="mt-4 text-zinc-500 dark:text-emerald-200/60">{faq.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export const CTASection = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 relative z-10">
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 dark:from-emerald-600 dark:via-cyan-600 dark:to-teal-600 rounded-[3rem] p-1 shadow-2xl">
      <div className="bg-white dark:bg-[#022c22] rounded-[calc(3rem-4px)] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-500/10 dark:bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 dark:text-emerald-50">Ready to <span className="text-gradient-colorful">read?</span></h2>
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-[#022c22] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">Join Free Today</button>
        </div>
      </div>
    </div>
  </section>
);