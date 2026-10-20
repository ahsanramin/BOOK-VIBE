"use client";
import { booksData } from "@/data/books";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Book } from "@/types";

export default function PagesToRead() {
  const chartData = booksData.slice(0, 5).map((book: Book) => ({ name: book.bookName, pages: book.totalPages }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="glass-premium rounded-3xl p-8 md:p-12 min-h-[600px] flex flex-col border border-red-200 dark:border-emerald-800/50 shadow-2xl">
        <h1 className="text-3xl font-bold mb-12 text-gradient-colorful">Pages to Read Analytics</h1>
        <div className="grow w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPages" x1="0" y1="0" x2="0" y2="1">
                  {/* Red gradient for light mode, Green for dark mode */}
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPagesDark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.3} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', background: '#18181b', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }} />
              <Area type="monotone" dataKey="pages" stroke="#ef4444" strokeWidth={4} fillOpacity={1} fill="url(#colorPages)" className="dark:hidden" />
              <Area type="monotone" dataKey="pages" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorPagesDark)" className="hidden dark:block" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}