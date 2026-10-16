// Enunciado: Descripción del ejercicio
// Autor: Ángel Puertas Villegas
// Investigación: Fuentes consultadas
//

const phones = new Map<string, string>()

phones.set('Ana', '664102378')
phones.set('Pedro', '664202332')
phones.set('Maria', '624158078')
phones.set('Marco', '764102378')

console.log(phones.size) // <-- 4
console.log(phones.get('Maria')) // <-- 624158078
// console.log(phones.set('Isaias')) // <-- undefined (hay q validar si el dato existe)
// ?? si lo de la izquierda es null o indefined hace lo de la derecha


// grades de una clase

const grades = new Map<string, number>([
  ['Ana', 9],
  ['Mario', 5],
  ['Andres', 4],
]);

// funcion para meter usuarios
export function addUser(name: string, note: number): Map<string, number> {
  return grades.set(name, note)
}


// funcion para obtener la nota de un alumno siempre y cuando exista
export function gradeOf(name: string): string {
  const grade = grades.get(name)
  // if (grade === undefined) return "No tiene nota"
  // return `Nota ${grade}`
  return grade ? `Note: ${grade}` : 'No tiene nota'
}



export function countVotes(votes: string[]): Map<string, number> {
  const count = new Map<string, number>();
  for (const vote of votes) {
    // const previues = count.get(vote) ?? 0
    // count.set(vote, previues + 1)
    count.set(vote, (count.get(vote) ?? 0) + 1)
  }
  return count
}

// agrupar alumnos por clase, tengo 1 lista de alumnos y cada uno es de un grupo
// 2DWEC-A o 2DWEC-B, construir un namesGroup que devuelva cada grupo con sus alumnos

interface Student {
  name: string;
  group: string;
}

const students: Student[] = [
  { name: 'ana', group: '2A' },
  { name: 'pepe', group: '2B' },
  { name: 'maria', group: '2A' }
]

export function namesGroup(students: Student[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();
  for (const student of students) {
    const array = groups.get(student.group) ?? [];
    groups.set(student.group, [...array, student.name]);
  }
  return groups
}

// destructuring 
for (const [group, name] of namesGroup(students)) {
  console.log(`Grupo: ${group} Estudiante: ${name}`)
}

// closures --- DOM
function hello(name: string): string {
  return `Hola ${name}`
}

const fhello = hello
console.log(fhello("ana"))
