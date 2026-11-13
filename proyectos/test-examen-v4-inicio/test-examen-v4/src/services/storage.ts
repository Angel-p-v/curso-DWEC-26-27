import type { Book } from "../types/book";

export function saveBooks(books: Book[]): void {
  localStorage.setItem("test-examen-v4:books", JSON.stringify(books));
}

export function loadBooks(): Book[] | null {
  const books = [...JSON.parse("test-examen-v4:books")];
  return books;
}

