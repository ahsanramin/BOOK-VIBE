"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "@/types";

interface BookContextType {
  readList: Book[];
  wishlist: Book[];
  addToRead: (book: Book) => void;
  addToWishlist: (book: Book) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [readList, setReadList] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const addToRead = (book: Book) => {
    if (!readList.find((b) => b.bookId === book.bookId)) setReadList([...readList, book]);
  };
  const addToWishlist = (book: Book) => {
    if (!wishlist.find((b) => b.bookId === book.bookId)) setWishlist([...wishlist, book]);
  };

  return (
    <BookContext.Provider value={{ readList, wishlist, addToRead, addToWishlist }}>
      {children}
    </BookContext.Provider>
  );
}
export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used within BookProvider");
  return context;
};