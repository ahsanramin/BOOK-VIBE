import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-5xl font-serif font-bold mb-6 dark:text-emerald-50">Get in <span className="text-gradient-colorful">Touch</span></h2>
        <p className="text-zinc-500 dark:text-emerald-200/60 mb-8">Have questions? We'd love to hear from you.</p>
        <div className="space-y-6 dark:text-emerald-100">
          <div className="flex items-center gap-4"><div className="p-3 bg-red-100 dark:bg-emerald-900/50 rounded-full text-red-500 dark:text-emerald-400"><Mail size={20} /></div> support@bookvibe.com</div>
          <div className="flex items-center gap-4"><div className="p-3 bg-pink-100 dark:bg-cyan-900/50 rounded-full text-pink-500 dark:text-cyan-400"><Phone size={20} /></div> +1 (555) 123-4567</div>
          <div className="flex items-center gap-4"><div className="p-3 bg-purple-100 dark:bg-teal-900/50 rounded-full text-purple-500 dark:text-teal-400"><MapPin size={20} /></div> 123 Book St, NY</div>
        </div>
      </div>
      <form className="glass-premium p-8 rounded-3xl space-y-4">
        <input type="text" placeholder="Name" className="w-full bg-white/50 dark:bg-[#022c22]/50 border border-red-200 dark:border-emerald-800 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-emerald-500 dark:text-emerald-50" />
        <input type="email" placeholder="Email" className="w-full bg-white/50 dark:bg-[#022c22]/50 border border-red-200 dark:border-emerald-800 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-emerald-500 dark:text-emerald-50" />
        <textarea rows={4} placeholder="Message" className="w-full bg-white/50 dark:bg-[#022c22]/50 border border-red-200 dark:border-emerald-800 rounded-xl px-4 py-3 outline-none focus:border-red-500 dark:focus:border-emerald-500 dark:text-emerald-50"></textarea>
        <button type="button" className="w-full bg-gradient-to-r from-red-500 to-pink-600 dark:from-emerald-500 dark:to-cyan-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition shadow-lg">Send Message</button>
      </form>
    </div>
  );
}