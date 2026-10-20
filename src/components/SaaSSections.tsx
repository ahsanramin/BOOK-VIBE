"use client";
import { motion } from "framer-motion";
// REPLACED Twitter and Linkedin WITH Globe and Mail
import { CheckCircle, Star, Quote, ChevronDown, Zap, Shield, Users, BookOpen, PenTool, TrendingUp, Award, Clock, ArrowRight, Globe, Mail } from "lucide-react";
import Image from "next/image";

// 1. OUR PARTNERS (Marquee)
export const PartnersSection = () => {
  const logos = ["Penguin", "HarperCollins", "Macmillan", "Simon & Schuster", "Hachette", "Scholastic"];
  return (
    <section className="py-12 border-y border-red-200/50 dark:border-emerald-800/50 bg-white/30 dark:bg-[#022c22]/30 backdrop-blur-md overflow-hidden relative z-10">
      <p className="text-center text-sm font-bold text-zinc-500 dark:text-emerald-200/50 uppercase tracking-widest mb-6">Trusted by the world's best publishers</p>
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex gap-16 px-8 items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {logos.map((logo) => (
                <span key={logo} className="text-2xl font-serif font-black text-zinc-400 dark:text-emerald-700 hover:text-red-500 dark:hover:text-emerald-400 transition-colors cursor-pointer">{logo}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 2. MEET OUR TOP EXPERTS
export const TopExpertsSection = () => {
  const experts = [
    { name: "Sarah Jenkins", role: "Fantasy Curator", img: "https://i.pravatar.cc/150?img=1" },
    { name: "David Chen", role: "Sci-Fi Expert", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Emily Carter", role: "Romance Critic", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Michael Ross", role: "Non-Fiction Lead", img: "https://i.pravatar.cc/150?img=8" },
  ];
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 dark:text-emerald-50">Meet Our <span className="text-gradient-colorful">Top Experts</span></h2>
      <p className="text-zinc-600 dark:text-emerald-200/60 mb-16 max-w-2xl mx-auto">Our world-class curators read thousands of books a year to bring you only the absolute best.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {experts.map((expert, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-premium p-6 rounded-3xl group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-emerald-800 shadow-xl group-hover:scale-105 transition-transform">
              <Image src={expert.img} alt={expert.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold dark:text-emerald-50">{expert.name}</h3>
            <p className="text-red-500 dark:text-emerald-400 font-bold text-sm mb-4">{expert.role}</p>
            {/* REPLACED SOCIAL ICONS HERE */}
            <div className="flex justify-center gap-3 text-zinc-400">
              <Globe size={18} className="hover:text-blue-500 cursor-pointer transition" />
              <Mail size={18} className="hover:text-blue-700 cursor-pointer transition" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 3. HOW IT WORKS
export const HowItWorksSection = () => {
  const steps = [
    { icon: <Users size={32} />, title: "Create Account", desc: "Sign up for free in seconds." },
    { icon: <BookOpen size={32} />, title: "Browse Library", desc: "Explore 10,000+ curated books." },
    { icon: <TrendingUp size={32} />, title: "Track Progress", desc: "Set goals and read daily." },
    { icon: <Award size={32} />, title: "Earn Badges", desc: "Unlock rewards as you read." },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-red-50/50 dark:to-emerald-950/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 dark:text-emerald-50">How <span className="text-gradient-colorful">Book Vibe</span> Works</h2>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 dark:from-emerald-900 dark:via-cyan-900 dark:to-teal-900 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-[#022c22] border-4 border-red-100 dark:border-emerald-800 flex items-center justify-center text-red-500 dark:text-emerald-400 mb-6 shadow-xl relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 dark:bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">{i + 1}</div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-emerald-50">{step.title}</h3>
              <p className="text-zinc-500 dark:text-emerald-200/60 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. WHY CLIENTS TRUST US
export const WhyTrustUsSection = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold dark:text-emerald-50">Why Readers <span className="text-gradient-colorful">Trust Us</span></h2>
        <p className="text-zinc-600 dark:text-emerald-200/60 text-lg">We provide a seamless, ad-free, and highly curated environment for you to enjoy your favorite books.</p>
        <div className="space-y-6">
          {[
            { icon: <Shield />, title: "100% Secure Payments", desc: "Your data is protected with bank-grade encryption." },
            { icon: <Zap />, title: "Lightning Fast", desc: "Zero loading times. Instant access to your library." },
            { icon: <CheckCircle />, title: "Verified Reviews", desc: "Only real readers can leave reviews. No bots allowed." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-emerald-900/50 text-red-500 dark:text-emerald-400 flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg dark:text-emerald-50">{item.title}</h4>
                <p className="text-zinc-500 dark:text-emerald-200/60 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 rounded-[3rem] rotate-3 opacity-20 blur-xl" />
        <div className="glass-premium p-8 rounded-[3rem] relative z-10 border border-white/40 dark:border-emerald-500/20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/50 dark:bg-[#022c22]/50 p-4 rounded-2xl shadow-sm">
               <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"><CheckCircle /></div>
               <div><p className="font-bold dark:text-emerald-50">24/7 Support</p><p className="text-xs text-zinc-500 dark:text-emerald-200/50">Always here to help</p></div>
            </div>
            <div className="flex items-center gap-4 bg-white/50 dark:bg-[#022c22]/50 p-4 rounded-2xl shadow-sm">
               <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white"><Clock /></div>
               <div><p className="font-bold dark:text-emerald-50">99.9% Uptime</p><p className="text-xs text-zinc-500 dark:text-emerald-200/50">Reliability you can trust</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. LATEST TIPS & ARTICLES
export const LatestArticlesSection = () => {
  const articles = [
    { title: "How to Read 50 Books a Year", cat: "Reading Tips", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop", date: "Oct 12, 2024" },
    { title: "The Psychology of Fiction", cat: "Psychology", img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop", date: "Oct 10, 2024" },
    { title: "Top 10 Sci-Fi Masterpieces", cat: "Sci-Fi", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop", date: "Oct 08, 2024" },
  ];
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 dark:text-emerald-50">Latest Tips & <span className="text-gradient-colorful">Articles</span></h2>
          <p className="text-zinc-600 dark:text-emerald-200/60">Insights from our top curators to improve your reading life.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-red-500 dark:text-emerald-400 font-bold hover:underline">View All <ArrowRight size={20} /></button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((art, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="glass-premium rounded-3xl overflow-hidden group cursor-pointer border border-white/40 dark:border-emerald-800/50">
            <div className="h-56 relative overflow-hidden">
              <Image src={art.img} alt={art.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#022c22]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-600 dark:text-emerald-400 shadow-sm">{art.cat}</div>
            </div>
            <div className="p-6">
              <p className="text-xs text-zinc-500 dark:text-emerald-200/50 mb-2">{art.date}</p>
              <h3 className="text-xl font-bold mb-4 dark:text-emerald-50 group-hover:text-red-500 dark:group-hover:text-emerald-400 transition-colors">{art.title}</h3>
              <div className="flex items-center gap-2 text-sm font-bold text-red-500 dark:text-emerald-400">Read Article <ArrowRight size={16} /></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 6. MEET THE ADMIN
export const AdminSection = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 relative z-10">
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 dark:from-emerald-600 dark:via-cyan-600 dark:to-teal-600 rounded-[3rem] p-1 shadow-2xl">
      <div className="bg-white dark:bg-[#022c22] rounded-[calc(3rem-4px)] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 dark:bg-emerald-500/20 blur-[100px] rounded-full" />
        
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-8 border-red-100 dark:border-emerald-900 shadow-2xl shrink-0 z-10">
          <Image src="https://i.pravatar.cc/300?img=60" alt="Admin" fill className="object-cover" />
        </div>
        
        <div className="space-y-6 relative z-10 text-center md:text-left">
          <Quote className="text-red-500 dark:text-emerald-500 mx-auto md:mx-0" size={48} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-emerald-50">"Our mission is to make reading magical again."</h2>
          <p className="text-zinc-600 dark:text-emerald-100/70 text-lg max-w-2xl">
            Hi, I'm Alex Johnson. I founded Book Vibe in 2024 because I was tired of cluttered, ad-filled book sites. We built this platform to be a sanctuary for readers—a place where you can discover, track, and share your favorite books in a beautiful, distraction-free environment.
          </p>
          <div>
            <p className="font-black text-xl text-red-600 dark:text-emerald-400">Alex Johnson</p>
            <p className="text-sm font-medium text-zinc-500 dark:text-emerald-200/50">Founder & CEO, Book Vibe</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- RETAINED PREVIOUS SECTIONS ---

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
          <div className="w-14 h-14 bg-red-500 dark:bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"><Zap size={28} /></div>
          <h3 className="text-3xl font-bold mb-4 text-red-900 dark:text-emerald-100">Advanced Reading Analytics</h3>
          <p className="text-red-700 dark:text-emerald-200/80 text-lg">Track your reading speed, favorite genres, and yearly goals with our beautiful dashboard.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-[#022c22] dark:to-emerald-950 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-purple-200 dark:border-emerald-800/50 shadow-lg">
        <div className="w-14 h-14 bg-purple-500 dark:bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"><Shield size={28} /></div>
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
          <button className={`w-full py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 ${plan.popular ? "bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white shadow-lg" : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"}`}>Get Started</button>
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