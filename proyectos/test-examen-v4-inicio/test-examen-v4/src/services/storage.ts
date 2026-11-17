import type { Book } from "../types/book";

const STORAGE_KEY = "test-examen-v4:books";

export function saveBooks(books: Book[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export function loadBooks(): Book[] | null {
  const result = localStorage.getItem(STORAGE_KEY);
  if (!result) return null;
  try {
    return JSON.parse(result) as Book[];
  } catch {
    return null;
  }
}

