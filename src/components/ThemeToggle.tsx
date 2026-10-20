"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2.5 rounded-full glass-premium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
      {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-emerald-600" />}
    </button>
  );
}