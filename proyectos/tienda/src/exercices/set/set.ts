import { products } from "../../data/products";

products.map(p => p.category) // <-- me mostrara las categoria pero seguro que repetidas

// solucion usar un set para tener valores unicos 
// no usa posiciones 
//
// como se declara: new Set<tipo>();
const tags = new Set<string>();
tags.add('ciencia ficcion');
tags.add('terror');

// como se ve el tamaño del set
tags.size; // <-- 2

// como se si un elemento esta dentro del set
tags.has('terror') // <-- true: mu rapido

// como se borra
tags.delete('terror') // <-- true

const categoriasNoRepetidas = new Set<string>(...products.map(p => p.category))

// crear una funcion q le pase como parametro un array de numeros y 
// devuelva true o false si hay repetidos
export function hasDuplicates(numbers: number[]): boolean {
  return numbers.length !== new Set(numbers).size
}
hasDuplicates([1, 2, 3, 1, 3, 2]) // <-- true

// ejemplificamos con un set una lista de peliculas ya vistas
// crear 1 funcion que llamemos firstView que reciba un array de ids de peliculas
// y que devuelva un number o undefined con la primera pelicula repetida o que he visto mas de 1 vez
export function firstView(ids: number[]): number | undefined {
  const see = new Set<number>();
  for (const id of ids) {
    see.has(id) ? ids : see.add(id)
  }
  return undefined;
}
firstView([4, 3, 2, 6, 2, 7])

