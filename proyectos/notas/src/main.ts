// un label de usuario, boton o evento de darle al enter
// por defecto si no hay nada en el buscador abajo estan todos los usuaios
// si no existe el usuario sale un alert informativo y si si esta saldra ese usuario solo

import { getElement } from "./components/dom";
import { filtrador } from "./components/findComponent";
import { createHr } from "./components/hrComponent";
import { createTableProducts, createTableStudents } from "./components/tableComponent";
import { products } from "./services/products";
import { students } from "./services/students";

const divStudents = getElement("#students", HTMLDivElement);
const divProducts = getElement("#products", HTMLDivElement);

// 1. Crear un contenedor dedicado exclusivamente para la tabla
const tableContainer = document.createElement("div");
const tableContainer2 = document.createElement("div");

// 2. Función para actualizar la tabla según el texto buscado
export function updateTableS(filterText: string = "") {
  // Limpiar la tabla previa
  tableContainer.innerHTML = "";

  // Filtrar la lista original de estudiantes
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(filterText.toLowerCase())
  );


  // crear el alert para decir q no se encontro algo
  if (filteredStudents.length === 0 && filterText.trim() !== "") {
    alert(`No se encontraron alumnos con el nombre: "${filterText}"`);
  }

  // Generar e insertar la nueva tabla filtrada
  tableContainer.append(createTableStudents(filteredStudents));
}

// 3. Crear el componente buscador pasando la lógica de actualización
const searchComponentS = filtrador((texto) => {
  updateTableS(texto);
});

divProducts.append(createHr())

// 2. Función para actualizar la tabla según el texto buscado
function updateTableP(filterText: string = "") {
  // Limpiar la tabla previa
  tableContainer2.innerHTML = "";

  // Filtrar la lista original de estudiantes
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filteredProducts.length === 0 && filterText.trim() !== "") {
    alert(`No se encontraron productos con el nombre: "${filterText}"`);
  }

  // Generar e insertar la nueva tabla filtrada
  tableContainer2.append(createTableProducts(filteredProducts));
}

// 3. Crear el componente buscador pasando la lógica de actualización
const searchComponentP = filtrador((texto) => {
  updateTableP(texto);
});

// 4. Renderizado inicial: añadir el buscador y la tabla por primera vez

divStudents.append(searchComponentS);
divStudents.append(tableContainer);

divProducts.append(searchComponentP);
divProducts.append(tableContainer2);

// Mostrar la lista completa al cargar la página
updateTableS();
updateTableP();





