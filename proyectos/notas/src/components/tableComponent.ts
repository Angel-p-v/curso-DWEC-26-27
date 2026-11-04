import type { Student } from "../types/student";

export function createTableStudents(students: Student[]): HTMLTableElement {
  // creamos la tabla, el head y el body de esta
  const table = document.createElement("table")
  const tableHead = table.createTHead();
  const tableBody = table.createTBody();

  // creamos el encabezado donde van los nombres
  const filasEncabezado = tableHead.insertRow();
  // los titulos para las columnas
  const columnas = ["nombre", "grade"]
  // creamos una nueva columna y le ponemos su nombre para luego añadirsela al encabezado
  for (const c of columnas) {
    const th = document.createElement("th")
    th.textContent = c
    filasEncabezado.appendChild(th)
  }

  //Recorrer la lista de estudiantes se nos pasa en la funcion
  for (const student of students) {
    // creamos la file en el body
    const fila = tableBody.insertRow()

    // insertar una celda a la cual le ponemos como contenido el nombre del estudiante
    const celdaNombre = fila.insertCell()
    celdaNombre.textContent = student.name

    // insertar otra celda para el grado del estudiante
    const celdaGrade = fila.insertCell()
    celdaGrade.textContent = `${student.grade}`
  }
  return table;
}
