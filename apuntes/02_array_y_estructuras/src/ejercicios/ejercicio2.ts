// Enunciado: Ejercicios repaso de metodos de arryas
// Autor: Ángel Puertas Villegas
// Investigación: Fuentes consultadas
//
// --- declaracion de variables ---
const notas: number[] = [6, 8, 4, 9, 7]


// --- declaracion de funciones ---
//
//funcion que muestre las notas
/**
 *  Funcion que muestra el valor de las notas pasadas como parametro
 * @param notes[] Array de notas
 */
function showNotes(notes: number[]): void {
  for (const note of notes) {
    console.log(note)
  }
}
//console.log(...notas)

//funcion que calcule la media de las notas
/**
 *  Funcion que muestra la nota media de todas las notas pasadas como parametro
 * @param notes[] Array de notas
 */
function calculeAvarage(notes: number[]): void {
  let sum = 0
  for (const note of notes) {
    sum += note
  }
  console.log(Number((sum / notes.length).toFixed(2)))
}

//funcion que muestre la mayor de las notas y la posicion de esa notas
/**
 * Deveulve la nota maxima del array pasado como parametro y su posicion
 * @param notes[] Array con las notas a comparar
 */
function showMaxNote(notes: number[]) {
  let result = 0
  let position
  notes.forEach((note: number, index: number) => {
    if (result < note) {
      result = note
      position = index
    }
  })
  console.log("The max note is " + result + " and the position is " + position)
}


//funcion que calcule la mediana de las notas
function calculateMedian(notes: number[]): void {
  const sortedNotes = [...notes].sort((a, b) => a - b);
  const mid = Math.floor(sortedNotes.length / 2);
  let median: number;

  if (sortedNotes.length % 2 === 0) {
    median = (sortedNotes[mid - 1] + sortedNotes[mid]) / 2;
  } else {
    median = sortedNotes[mid];
  }

  console.log("The median is: " + median);
}


//funcion que devuelva un array con notas junto con la nota pasada como parametro 
//
//funcion que elimine una nota, recibe el array de notas y como segundo parametro 1 o -1, si es 1 elimina la primera posicion y devuelve 1 copia,si es -1 elimina la ultima posicion del array devuelve 1 copia. No mutamos el array del parametro ojo y me lo demostrais haciendo un clg del array del parametro para asegura que no lo has mutado
function deleteGrade(notes: number[], t: 1 | -1): void {
  const copyNotes = [...notes]
  if (t === 1) {
    copyNotes.shift()
  } else if (t === -1) {
    copyNotes.pop()
  }
  console.log("copyNotes: " + copyNotes)
  console.log(notes)
}

// --- funcion de ejecucion --- 

export function ejercicio2(): void {
  showNotes(notas);
  calculeAvarage(notas);
  showMaxNote(notas);
  deleteGrade(notas, -1);
  calculateMedian(notas);
}
