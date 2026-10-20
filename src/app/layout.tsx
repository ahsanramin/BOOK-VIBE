import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Vibe | Premium Book Store",
  description: "Discover your next favorite book.",
  // Explicitly setting the type and sizes helps the browser understand
  icons: { 
    icon: [
      {
        url: "https://i.ibb.co.com/27MMdC0j/Book-Vibe-Premium-Logo.png",
        type: "image/png",
        sizes: "any"
      }
    ]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <CustomCursor />
          <Navbar />
          <main className="grow pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}