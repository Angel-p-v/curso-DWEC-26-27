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


// crear 1 funcion que genere etiquetas con el texto que le paso como parametro
// y con un array de clases
// export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
//   const span = document.createElement("span")
//   span.classList.add(...cssArray)
//   span.textContent = text
//   return span
// }


let clicks = 0
// crear un contador de clicks usando button y etiqueta
export function createButton(cssArray: string[]): HTMLButtonElement {
  const button = document.createElement("button")

  button.textContent = `Clicks: ${clicks}`
  button.classList.add(...cssArray)

  button.addEventListener('click', () => {
    clicks++
    button.textContent = `Clicks: ${clicks}`
  })

  return button
}

// crear un boton para reiniciar el contador
export function resetButton(claseBtn: string) {
  const btnReinicio = document.createElement("button")
  btnReinicio.textContent = "Reiniciar clicks"

  btnReinicio.addEventListener("click", () => {
    const btn = getElement(`.${claseBtn}`, HTMLButtonElement)
    btn.textContent = "Clicks: 0"
    clicks = 0
  });
  return btnReinicio
}



