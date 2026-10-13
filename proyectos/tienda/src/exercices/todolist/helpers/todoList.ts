// Enunciado: TodoList
// Autor: Ángel Puertas Villegas
// Investigación: Fuentes consultadas
//

import type { Priority, Task } from "../../../types/task";

/**
 *  Funcion que crea una tarea
 * @param list : Task[] Lista de tareas
 * @param id : number identificador de la tarea
 * @param title : string titulo de la tarea
 * @param priority : Priority prioridad de la tarea
 * @returns array con la nueva tarea creada
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {
  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1
  return [...list, { id, title, priority, done: false }]
}

export const toggleDone = (list: Task[], id: number): Task[] => {
  return list.map(t => t.id === id ? { ...t, done: !t.done } : t)
}

export function rename(list: Task[], id: number, title: string): Task[] {
  const clean = title.trim();
  if (clean === '') return list;
  return list.map(t => t.id === id ? { ...t, title: clean } : t)
}

export const removeDone = (list: Task[], id: number): Task[] => {
  return list.filter(t => !(t.id === id && t.done));
}

export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list.map(t => t.id === id ? { ...t, ...changes } : t)
}


// const order : Record<tipo, valor_igual_para_todos = {  }
const order: Record<Priority, number> = { 'high': 2, 'medium': 1, 'low': 0 }

export const pendingByPriority = (list: Task[]): string[] => {
  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title)
}

