import type { OrderLine } from "../types/orderLine";

export function getELement<T extends Element>(id: string, type: new () => T): T {
  const element = document.querySelector(id);
  if (!(element instanceof type)) throw new Error("Error en  la seleccion del tipo");
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createLabelResumen(): HTMLLabelElement {
  return document.createElement("label");
}

export function createUlOrders(): HTMLUListElement {
  return document.createElement("ul");
}

export function createOrderLineLi(order: OrderLine, onChange: (id: number, delta: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");

  const label = document.createElement("label");
  const btnAdd = document.createElement("button");
  const btnReduce = document.createElement("button");
  const btnRemove = document.createElement("button");

  btnAdd.type = "button";
  btnReduce.type = "button";
  btnRemove.type = "button";

  label.textContent = `${order.product} · ${order.quantity} x ${order.unitPrice} = ${(order.unitPrice * order.unitPrice).toFixed(2)}€ `;
  btnAdd.textContent = "+";
  btnReduce.textContent = "-";
  btnRemove.textContent = "delete";

  btnAdd.addEventListener("click", () => onChange(order.id, 1));
  btnReduce.addEventListener("click", () => onChange(order.id, -1));
  btnRemove.addEventListener("click", () => onDelete(order.id));

  li.append(label, btnAdd, btnReduce, btnRemove);
  return li;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");

  const inputProduct = document.createElement("input");
  const inputPrice = document.createElement("input");
  const btnAdd = document.createElement("button");

  inputProduct.type = "text";
  inputPrice.type = "number";
  btnAdd.type = "submit";

  inputProduct.required = true;
  inputPrice.required = true;

  inputProduct.name = "name";
  inputPrice.name = "price";

  inputProduct.placeholder = "Nombre producto";
  inputPrice.placeholder = "Precio producto";
  btnAdd.textContent = "Add";

  form.append(inputProduct, inputPrice, btnAdd);
  return form;
}
