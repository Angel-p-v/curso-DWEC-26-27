
import { createFooter, createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom';
import { products } from './services/products';
import './style.css';
import type { Producto } from './types/product';


// declaraciones de variables
const divApp = getElement("#app", HTMLDivElement);
// const miNombre = createTitle("Ángel Puertas")
// creamos el imput y la lista
const input = createSearchInput();
const list = createList();
const footer = createFooter("Ángel");

// la libreta original
interface AppState {
  products: readonly Producto[];
  input: string;
}

// 1. El render de la libreta (usamos let para modificarlo)
let state: AppState = { products: products, input: "" };


// declaracion de funciones
function deleteProduct(id: number): void {
  state = {
    ...state,
    products: state.products.map(p =>
      p.id !== id ? { ...p, favorite: !p.favorite } : p),
  };
  // funcion que guarde en el local storage nuestros productos
  render();

}

function toggleFavorite(id: number): void {
  state = {
    ...state,
    products: state.products.map(p =>
      p.id === id ? { ...p, favorite: !p.favorite } : p, "")
  };
  // funcion que guarde en el local storage nuestros productos
  render();
}

function render(): void {
  const text = state.input.trim().toLowerCase();
  const visible = state.products.filter(p => p.name.toLowerCase().includes(text));

  const items = visible.map(product => createProductItem(product, toggleFavorite, deleteProduct),);
  list.replaceChildren(...items);
}


// inicio de la aplicacion
divApp.append(createTitle("Productos: "), input, list, footer);

// eventos
input.addEventListener("input", () => {
  state = { ...state, input: input.value.toLowerCase().trim() };
  render();
});

render();

// quitar 1 --> lista.filter(x => id !== id)
// cambiar 1 --> lista.map(x => x.id === id ? {...x,sudadera = roja} : x)
// añadir 1 --> [...list,nuevoElemento]
