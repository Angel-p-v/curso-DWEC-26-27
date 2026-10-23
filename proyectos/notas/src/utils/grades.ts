import type { Student } from "../types/student";

// crear una funcion que obtenga la media de las notas de los estudiantes
/**
 *  Calculo de las medias de todos los alumnos
 * @param students lista de estudiantes
 * @returns devuelve la media de todos los estudiantes
 */
export function avarage(students: Student[]): number {
  if (students.length === 0) return 0;   // dividir entre 0 daría NaN
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  return total / students.length;
}

// crear una funciona para saber si el alumno a aprobado
/**
 *  Devuelve si un alumno a aprobado
 * @param student estudiante
 * @returns devuelve si true si tiene mas de un 5
 */
export function isPass(student: Student): boolean {
  return student.grade >= 5
}

// una funcion que me de un array con todos los alumnos que han aprobado
/**
 *  Devuelve una lista con los alumnos que tienen mas de un 5
 * @param students lista de alumnos
 * @returns los alumnos que estan aprobados
 */
export function alumnPass(students: Student[]): Student[] {
  return students.filter(isPass)
}
