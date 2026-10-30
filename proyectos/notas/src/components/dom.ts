import type { Product } from "../types/product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra el selector ${selector} o no es del tipo esperado`)
  }
  return element
}

export function createCard(p: Product): HTMLElement {
  const li = document.createElement("li")
  li.classList.add("card")
  if (p.stock === 0) li.classList.add("card-agotado")
  const name = document.createElement("span")
  name.textContent = p.name
  const price = document.createElement("span")
  price.classList.add("card-price")
  price.textContent = `${p.price}€`

  li.append(name, price)
  return li
}

