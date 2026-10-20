import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-serif font-black mb-6 dark:text-emerald-50">About <span className="text-gradient-colorful">Book Vibe</span></h1>
        <p className="text-lg text-zinc-500 dark:text-emerald-200/60">We believe that every book has the power to change a life.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Target size={32} className="text-red-500" />, title: "Our Mission", color: "border-red-500" },
          { icon: <Eye size={32} className="text-purple-500" />, title: "Our Vision", color: "border-purple-500" },
          { icon: <Heart size={32} className="text-pink-500" />, title: "Our Values", color: "border-pink-500" }
        ].map((item, i) => (
          <div key={i} className={`glass-premium p-8 rounded-3xl text-center border-t-4 ${item.color}`}>
            <div className="mx-auto w-16 h-16 bg-white/50 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mb-6 shadow-md">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4 dark:text-emerald-50">{item.title}</h3>
            <p className="text-zinc-500 dark:text-emerald-200/60">To make literature accessible to everyone, everywhere.</p>
          </div>
        ))}
      </div>
    </div>
  );
}