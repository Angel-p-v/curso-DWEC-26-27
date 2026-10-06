import type { Product } from '../../../types/product';

export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

// Pregunta 1 · ¿Qué devuelve allInStock([])?
// true
// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Por qué?
// No, porque no hay productos
// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
export const allInStock2 = (list: Product[]): boolean => list.length == 0 ? false : list.every((p) => p.stock > 0);

