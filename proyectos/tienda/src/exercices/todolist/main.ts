import type { Task } from "../../types/task";
import {
  createTask,
  toggleDone,
  rename,
  removeDone,
  editTask,
  pendingByPriority,
} from "./helpers/todolist"; // Ajusta la ruta a tu fichero

function main() {
  console.log("=== 1. Creando lista inicial de tareas ===");
  let tasks: Task[] = [];

  tasks = createTask(tasks, "Comprar pan", "low");
  tasks = createTask(tasks, "Estudiar TypeScript", "high");
  tasks = createTask(tasks, "Hacer ejercicio", "medium");
  tasks = createTask(tasks, "Pagar facturas", "high");

  console.log("Estado inicial:", tasks);

  console.log("\n=== 2. Probando toggleDone (Completar 'Comprar pan' con ID 1) ===");
  tasks = toggleDone(tasks, 1);
  console.log("Tarea 1 completada:", tasks.find((t) => t.id === 1));

  console.log("\n=== 3. Probando rename (Renombrar ID 3 'Hacer ejercicio' -> 'Gimnasio') ===");
  tasks = rename(tasks, 3, "Ir al gimnasio");
  console.log("Tarea 3 renombrada:", tasks.find((t) => t.id === 3));

  console.log("\n=== 4. Probando editTask (Cambiar prioridad a 'low' y título en ID 2) ===");
  tasks = editTask(tasks, 2, { priority: "low", title: "Estudiar TypeScript Avanzado" });
  console.log("Tarea 2 editada:", tasks.find((t) => t.id === 2));

  console.log("\n=== 5. Probando pendingByPriority (Pendientes ordenadas por prioridad) ===");
  const pendingTitles = pendingByPriority(tasks);
  console.log("Títulos pendientes:", pendingTitles);

  console.log("\n=== 6. Probando removeDone (Intentar borrar ID 1 completada) ===");
  tasks = removeDone(tasks, 1);
  console.log("Lista tras borrar ID 1 hecha (debería quedar borrada):", tasks);

  console.log("\n=== 7. Probando removeDone con tarea no completada (ID 4 no hecha) ===");
  tasks = removeDone(tasks, 4);
  console.log("Lista tras intentar borrar ID 4 (no hecha, NO se borra):", tasks);
}

main();
