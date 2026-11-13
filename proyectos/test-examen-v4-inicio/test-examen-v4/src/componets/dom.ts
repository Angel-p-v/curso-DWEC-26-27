import type { Book } from "../types/book";

export function getElement<T extends Element>(id: string, type: new () => T): T {
  const item = document.querySelector(id);
  if (!(item instanceof type)) {
    throw new Error("Error en la seleccion de tipos");
  }
  return item;
}


export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createInputSearch(text: string): HTMLInputElement {
  const inputSearch = document.createElement("input");

  inputSearch.type = "search";

  inputSearch.placeholder = text;

  return inputSearch;
}

export function createFormBook(): HTMLFormElement {
  const form = document.createElement("form");
  form.noValidate = true;

  const inputTitle = document.createElement("input");
  const inputAutor = document.createElement("input");
  const inputYear = document.createElement("input");
  const btnAddBook = document.createElement("button");

  inputTitle.type = "text";
  inputAutor.type = "text";
  inputYear.type = "number";

  inputTitle.required = true;
  inputAutor.required = true;
  inputYear.required = true;

  inputTitle.placeholder = "Titulo";
  inputAutor.placeholder = "Autor";
  inputYear.placeholder = "Año";
  btnAddBook.textContent = "Añadir";

  inputTitle.name = "title";
  inputAutor.name = "author";
  inputYear.name = "year";

  form.append(inputTitle, inputAutor, inputYear, btnAddBook);
  return form;
}

export function createLabel(): HTMLLabelElement {
  return document.createElement("label");
}

export function createBookUl(): HTMLUListElement {
  const ul = document.createElement("ul");
  ul.className = "catalog";
  return ul;
}

export function createElementBookLi(book: Book, onToggleFavorite: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const cover = document.createElement("img");
  const title = document.createElement("strong");
  const autor_year = document.createElement("label");
  const btnFavorite = document.createElement("button");
  const btnBorrar = document.createElement("button");

  btnFavorite.type = "button";
  btnBorrar.type = "button";

  cover.src = book.cover;
  cover.alt = `Portada libro ${book.title}`;
  title.textContent = book.title;
  autor_year.textContent = `${book.title} · ${book.year}`;
  btnFavorite.textContent = book.favorite ? "Favorite 🌟" : "Favorite ⭐";
  btnBorrar.textContent = "Borrar";

  btnFavorite.addEventListener("click", () => onToggleFavorite(book.id));
  btnBorrar.addEventListener("click", () => onDelete(book.id));

  li.append(cover, title, autor_year, btnFavorite, btnBorrar);
  return li;
}

export function createParagraphResumen(): HTMLParagraphElement {
  return document.createElement("p");
}
