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

// hacemos un map de cada producto <li>
// y usaremos replaceChildren para reemplazar todos los elementos que tenga la lista (list)
// list.replaceChildren(...products.map(createProductItem))

// pintar los productos recibidos
function paint(products: readonly Producto[]): void {
  const items = products.map((prodcut) => {
    const item = createProductItem(prodcut)
    return item
  })
  list.replaceChildren(...items)
}

// funcion que se ejecuta con cada pulsacion de tecla que la de:
input.addEventListener("input", () => {
  const text = input.value.trim().toLowerCase()
  paint(products.filter(p => p.name.toLowerCase().includes(text)))
})

paint(products)

