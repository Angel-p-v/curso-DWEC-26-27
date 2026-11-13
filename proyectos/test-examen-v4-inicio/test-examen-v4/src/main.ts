// test-examen-v4 · Mi biblioteca
// Empieza por src/types/book.ts (paso 1) y sigue la hoja del enunciado.
import { createBookUl, createElementBookLi, createFormBook, createInputSearch, createParagraphResumen, createTitle, getElement } from "./componets/dom";
import { DEFAULT_COVER, initialBooks } from "./services/books";
import { saveBooks } from "./services/storage";
import "./style.css";
import type { AppState, Book } from "./types/book";

// declaracion de varaibles
let state: AppState = { books: initialBooks.slice(), search: "" };
const divApp = getElement("#app", HTMLDivElement);
const title = createTitle("Mi biblioteca");
const inputSearch = createInputSearch("Buscar por libro o autor");
const booksUl = createBookUl();
const bookForm = createFormBook();
const resumen = createParagraphResumen();

// declracion de funciones
function render(): void {
  const maxBooks = state.books.length;

  const visibles = state.books.filter(b => b.title.toLowerCase().trim().includes(state.search) || b.author.toLowerCase().trim().includes(state.search));
  const favorites = state.books.reduce((acc, b) => acc += b.favorite ? 1 : 0, 0);

  const mostradosBooks = visibles.length;

  resumen.textContent = `Mostrando ${mostradosBooks} de ${maxBooks} · Favoritos ${favorites}`;

  booksUl.replaceChildren(...visibles.map(b => createElementBookLi(b, onToggleFavorite, onDelete)));
  saveBooks([...state.books]);
}

function onToggleFavorite(id: number): void {
  state = {
    ...state, books: state.books.map(b => b.id === id ? { ...b, favorite: !b.favorite } : b)
  };
  saveBooks([...state.books]);
  render();
}

function onDelete(id: number): void {
  state = { ...state, books: state.books.filter(b => b.id !== id) };
  saveBooks([...state.books]);
  render();
}


// declaracion de eventos
inputSearch.addEventListener("input", () => {
  state = { ...state, search: inputSearch.value.trim().toLowerCase() };
  render();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookForm);

  const title = String(data.get("title"));
  const autor = String(data.get("author"));
  const año = Number(data.get("year"));
  const portada = DEFAULT_COVER;
  const newId = Math.max(0, ...state.books.map(b => b.id)) + 1;

  if (title === '' || autor === '' || año === 0) {
    throw new Error("complete todos los campos del formulario");
  }

  const newBook: Book = {
    id: newId,
    title: title,
    author: autor,
    year: año,
    cover: portada,
    favorite: false
  };

  state = { ...state, books: [...state.books, newBook] };
  saveBooks([...state.books]);

  bookForm.reset();
  render();
});



// inicio de la aplicacion 
divApp.append(title, inputSearch, bookForm, resumen, booksUl);
render();
