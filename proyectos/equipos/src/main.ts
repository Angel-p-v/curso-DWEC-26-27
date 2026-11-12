import { createDevicesUl, createElementDiviceLi, createFormDevice, createLabelResumen, createSelectAula, createTitle, getElement } from "./components/dom";
import { initialDevices } from "./services/devices";
import type { AppState } from "./types/appState";
import type { Device } from "./types/device";

// declaracion de variables
let state: AppState = { devices: initialDevices.slice(), etiqueta: "Todos" };

const divApp = getElement("#app", HTMLDivElement);
const title = createTitle("Equipos");
const optionSelect = createSelectAula(state.devices, filtroEtiqueta);
const listDevicesUl = createDevicesUl();
const formDevice = createFormDevice(state.devices);
const resumen = createLabelResumen();


// declaracion de funciones
function render(): void {
  const data = state.etiqueta === "Todos" ? state.devices : state.devices.filter(d => d.room === state.etiqueta);

  const maxDevices = data.length;
  const averiadosDevices = data.reduce((acc, d) => acc += d.broken ? 1 : 0, 0);
  resumen.textContent = `Averiados ${averiadosDevices} de ${maxDevices}`;

  listDevicesUl.replaceChildren(...data.map(d => createElementDiviceLi(d, alterStateDevice, deleteDevice)));
}

function filtroEtiqueta(etiqueta: string): void {
  state = { ...state, etiqueta: etiqueta };
  render();
}

function alterStateDevice(id: number): void {
  state = {
    ...state, devices: state.devices.map(d => d.id === id ? { ...d, broken: !d.broken } : d)
  };
  render();
}

function deleteDevice(id: number): void {
  state = {
    ...state, devices: state.devices.filter(d => d.id !== id)
  };
  render();
}

// declaraion de eventos
formDevice.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(formDevice);

  const nameDevice = String(data.get("equipo")).toUpperCase().trim();
  const etiquetaDevice = String(data.get("etiqueta"));
  const newId = Math.max(0, ...state.devices.map(d => d.id)) + 1;

  if (state.devices.find(d => d.code === nameDevice && d.room === etiquetaDevice)) {
    throw new Error(`El codigo ${nameDevice} ya esta en la sala ${etiquetaDevice}`);
  }

  const newDevice: Device = {
    id: newId,
    code: nameDevice,
    room: etiquetaDevice,
    broken: false
  };

  state = { ...state, devices: [...state.devices, newDevice] };

  formDevice.reset();
  render();
});



// inicio de la aplicacion 
divApp.append(title, formDevice, optionSelect, listDevicesUl, resumen);
render();
