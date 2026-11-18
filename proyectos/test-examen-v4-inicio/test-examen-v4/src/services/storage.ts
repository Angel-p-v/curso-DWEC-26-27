import type { Book } from "../types/book";

const VITE_STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;

export function saveBooks(books: Book[]): void {
  localStorage.setItem(VITE_STORAGE_KEY, JSON.stringify(books));
}

export function loadBooks(): Book[] | null {
  const result = localStorage.getItem(VITE_STORAGE_KEY);
  if (!result) return null;
  try {
    const data: unknown = JSON.parse(result);
    if (!Array.isArray(data)) return null;
    return data as Book[];
  } catch {
    return null;
  }
}

