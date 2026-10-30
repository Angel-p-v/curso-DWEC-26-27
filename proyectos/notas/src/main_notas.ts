import { students } from "./services/students"
import { avarage, isPass } from "./utils/grades"

// const avarageText = document.getElementById("avarage");
const avarageText = document.querySelector("#average") // <-- busca 
const listU = document.querySelector("#student-list")

if (!(avarageText instanceof HTMLParagraphElement)) {
  throw new Error("falta el parrofo con id avarage") // <-- comprueba
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("falta la etiqueta ul")
}

avarageText.textContent = `Media: ${avarage(students).toFixed(2)}` // <-- modifica
for (const student of students) {
  const item = document.createElement("li")
  item.textContent = `Estudiante: ${student.name} y su calificacion es: ${student.grade}`
  item.style.color = isPass(student) ? "green" : "red"
  listU.appendChild(item)
}

// busqueda
const inputSearch = document.createElement("input")
inputSearch.type = "text"
inputSearch.placeholder = "Escriba nombre para buscar"
inputSearch.style.backgroundColor = "gray"

// enviar
const btnSearch = document.createElement("button")
btnSearch.textContent = "buscar"

avarageText.appendChild(inputSearch)
avarageText.appendChild(btnSearch)
