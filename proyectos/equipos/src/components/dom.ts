import type { Device } from "../types/device";

export function getElement<T extends Element>(id: string, type: new () => T): T {
  const element = document.querySelector(id);
  if (!(element instanceof type)) {
    throw new Error("Error en el selector");
  }
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

export function createSelectAula(dispositivos: Device[], change: (etiqueta: string) => void): HTMLSelectElement {
  const select = document.createElement("select");
  const etiquetas = new Set(dispositivos.map(d => d.room));

  const opciones = select.options;

  const option = document.createElement("option");
  option.value = "Todos";
  option.textContent = "Todos";
  opciones.add(option);

  for (const etiqueta of etiquetas) {
    const option = document.createElement("option");
    option.value = etiqueta;
    option.textContent = etiqueta;
    opciones.add(option);
  }

  select.addEventListener("change", () => change(select.value));

  return select;
}

export function createDevicesUl(): HTMLUListElement {
  return document.createElement("ul");
}

export function createElementDiviceLi(dispositivo: Device, onAlter: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const btnAlterEstado = document.createElement("button");
  const btnBorrar = document.createElement("button");

  btnAlterEstado.name = "alternar";
  btnBorrar.name = "borrar";

  btnAlterEstado.textContent = "Alternar";
  btnBorrar.textContent = "Borrar";

  const text = label.textContent = `${dispositivo.code} · ${dispositivo.room} `;
  if (dispositivo.broken) {
    label.textContent = `${text} AVERIADO `;
    label.style.color = "red";
  }

  btnAlterEstado.addEventListener("click", () => onAlter(dispositivo.id));
  btnBorrar.addEventListener("click", () => onDelete(dispositivo.id));

  li.append(label, btnAlterEstado, btnBorrar);
  return li;
}

export function createFormDevice(dispositivos: Device[]): HTMLFormElement {
  const form = document.createElement("form");
  const inputNameDevice = document.createElement("input");
  const selectEtiquetaDevice = document.createElement("select");
  const btnAddDevice = document.createElement("button");

  const options = selectEtiquetaDevice.options;
  const etiquetas = new Set(dispositivos.map(d => d.room));

  for (const etiqueta of etiquetas) {
    const option = document.createElement("option");
    option.value = etiqueta;
    option.textContent = etiqueta;
    options.add(option);
  }

  inputNameDevice.required = true;

  inputNameDevice.placeholder = "Nombre equipo...";
  btnAddDevice.textContent = "Add";

  inputNameDevice.name = "equipo";
  selectEtiquetaDevice.name = "etiqueta";

  form.append(inputNameDevice, selectEtiquetaDevice, btnAddDevice);
  return form;
}

export function createLabelResumen(): HTMLLabelElement {
  return document.createElement("label");
}
