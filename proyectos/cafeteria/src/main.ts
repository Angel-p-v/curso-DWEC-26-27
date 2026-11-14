import { createForm, createLabelResumen, createOrderLineLi, createTitle, createUlOrders, getELement } from "./components/dom";
import { initialOrder } from "./services/ordesLines";
import { loadOrders, saveOrders } from "./services/storage";
import type { AppState, OrderLine } from "./types/orderLine";

// declaracion de variables
let state: AppState = { orders: loadOrders() ?? initialOrder.slice() };
const divApp = getELement("#app", HTMLDivElement);
const title = createTitle("Pedidos cafeteria");
const form = createForm();
const listaPedidos = createUlOrders();
const resumen = createLabelResumen();

// declarion de funciones
function render(): void {
  saveOrders(state.orders);
  const pedidos = state.orders.map(p => createOrderLineLi(p, onChange, onDelete));

  listaPedidos.replaceChildren(...pedidos);
}

function onChange(id: number, quantity: number): void {
  const simbol = quantity === 1;
  state = {
    ...state, orders: state.orders
      .map(p => p.id === id ? { ...p, quantity: simbol ? p.quantity += 1 : p.quantity -= 1 } : p)
  };
  render();
}

function onDelete(id: number): void {
  state = { ...state, orders: state.orders.filter(p => p.id !== id) };
  render();
}

// declaracion de eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const nameP = String(data.get("name"));
  const price = Number(data.get("price"));
  const newId = Math.max(0, ...state.orders.map(p => p.id)) + 1;

  if (price < 1) return;

  if (state.orders.find(p => p.product.toLowerCase().trim() === nameP.toLowerCase().trim())) {
    state = {
      ...state,
      orders: state.orders
        .map(p => p.product.toLowerCase().trim() === nameP.toLowerCase().trim() ? { ...p, quantity: p.quantity += 1 } : p)
    };

  } else {
    const newOrderLine: OrderLine = {
      id: newId,
      product: nameP,
      unitPrice: price,
      quantity: 1
    };

    state = { ...state, orders: [...state.orders, newOrderLine] };
  }
  form.reset();
  render();
});


// inicio  de la aplicacion
divApp.append(title, form, listaPedidos, resumen);
render()

