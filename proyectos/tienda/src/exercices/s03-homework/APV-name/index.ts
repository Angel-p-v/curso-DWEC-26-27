
import type { Priority, Task } from "../../../types/task"

export function createTask(list: Task[], title: string, priority: Priority): Task[] {
  const lastId = list.length === 0 ? 0 : Math.max(...list.map(t => t.id)) + 1
  return [...list, { id: lastId, title, priority, done: false }]
}

export function toggleDone(list: Task[], id: number): Task[] {
  return list
    .map(t => t.id === id ? { ...t, done: !t.done } : t)
}

export function rename(list: Task[], id: number, title: string): Task[] {
  return list
    .map(t => t.id === id && title.trim().length > 0 ? { ...t, title: title } : t)
}

export function removeDone(list: Task[]): Task[] {
  return list.splice(0, list.length)
}

export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list
    .map(t => t.id === id ? { ...t, ...changes } : t)
}

export function pendingByPriority(list: Task[]): string[] {
  const high = list.filter(t => t.priority === 'high' && !t.done).map(t => t.title)
  const medium = list.filter(t => t.priority === 'medium' && !t.done).map(t => t.title)
  const low = list.filter(t => t.priority === 'low' && !t.done).map(t => t.title)
  return [...high, ...medium, ...low]
}


