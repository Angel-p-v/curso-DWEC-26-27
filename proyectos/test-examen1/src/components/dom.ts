import type { Producto } from "../types/product"

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector)
  if (!(element instanceof type)) {
    throw new Error("Error en el selector de tipos")
  }
  return element
}

// componente 1: recibe un texto y devuelve un h1
export function createTitle(text: string): HTMLHeadElement {
  const title = document.createElement("h1")
  title.textContent = text
  return title
}

// componente 2: buscador
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input")
  input.type = "search"
  input.placeholder = "Buscar producto..."
  return input
}

// componente 3: un ul vacio 
export function createList(): HTMLUListElement {
  return document.createElement("ul")
}

// componente 4: recibe un producto y devulve su li bonito
export function createProductItem(product: Producto): HTMLLIElement {
  const item = document.createElement("li")
  const texto = document.createElement("span")
  texto.textContent = `${product.name} --- ${product.price.toFixed(2)}€ --- ${product.favorite}`
  const button = document.createElement("button")
  button.type = "button"
  button.textContent = "Borrar"
  item.append(texto, button)
  return item
}
