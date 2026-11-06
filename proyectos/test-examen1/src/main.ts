
import { createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom'
import { products } from './services/products'
import './style.css'
import type { Producto } from './types/product'


// declaraciones de variables
const divApp = getElement("#app", HTMLDivElement)
// const miNombre = createTitle("Ángel Puertas")
// creamos el imput y la lista
const input = createSearchInput()
const list = createList()


// declaracion de funciones



// inicio de la aplicacion
divApp.append(createTitle("Productos: "), input, list)

// la libreta original
interface AppState {
  products: readonly Producto[];
  input: string;
}

// 1. El render de la libreta (usamos let para modificarlo)
let state: AppState = { products: products, input: "" }

// 2. El render de la libreta y la copia en la pantalla
function render(): void {
  const text = state.input.trim().toLowerCase()
  const visible = state.products.filter(p => p.name.toLowerCase().includes(text))

  const items = visible.map(product => {
    const item = createProductItem(product)
    item.querySelector("button")?.addEventListener("click", () => {
      // ahora si que cambiamos la libreta y copiamos otra vez
      state = { ...state, products: state.products.filter(p => p.id !== product.id) }
      render()
    })
    return item
  })
  list.replaceChildren(...items)
}

input.addEventListener("input", () => {
  state = { ...state, input: input.value.toLowerCase().trim() }
  render()
})

render()
