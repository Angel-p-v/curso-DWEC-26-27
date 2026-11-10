import type { Producto } from "../types/product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error("Error en el selector de tipos");
  }
  return element;
}

// componente 1: recibe un texto y devuelve un h1
export function createTitle(text: string): HTMLHeadElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

// componente 2: buscador
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar producto...";
  return input;
}

// componente 3: un ul vacio 
export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

// componente 4: recibe un producto y devulve su li bonito
export function createProductItem(product: Producto): HTMLLIElement {
  const item = document.createElement("li");
  const texto = document.createElement("span");
  texto.textContent = `${product.name} --- ${product.price.toFixed(2)}€ --- ${product.favorite}`;

  const buttonBorrar = document.createElement("button");
  buttonBorrar.type = "button";
  buttonBorrar.textContent = "Borrar";

  const buttonFavorito = document.createElement("button");
  buttonFavorito.type = "button";
  buttonFavorito.textContent = "⭐";
  buttonFavorito.classList.add("favorito");

  item.append(texto, buttonBorrar, buttonFavorito);
  return item;
}

export function createFooter(name: string): HTMLElement {
  const footer = document.createElement("footer");
  const fecha: Date = new Date();
  footer.textContent = `${name} - ${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()} `;
  footer.style.background = 'gray';
  return footer;
}
