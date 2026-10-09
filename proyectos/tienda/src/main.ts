// Enunciado: Proyecto creacion de una tienda 
// Autor: Ángel Puertas VIllegas
// Investigación: 
//

// ---------- Importaciones ----------
//

import type { Product } from "./types/product";
import { products } from "./data/products";
//import { tags } from "./exercices/s01/ex01-tags";
import { allInStock } from "./exercices/s01-homework/ex06-think";
import { soldOutNames } from "./exercices/s02-homework/s02-sold-out-names";
import { byCategory } from "./exercices/s01-homework/ex03-by-category";
import { priceOf } from "./exercices/s01-homework/ex04-price-of";
import { canBuy } from "./exercices/s01-homework/ex05-can-buy";
import { cheapestAvailable } from "./exercices/s02-homework/ex02-cheapest-available";
import { totalUnits } from "./exercices/s02-homework/ex01-total-units";
import { catalog } from "./exercices/s02-homework/ex03-catalog";
import { summary } from "./exercices/s02-homework/ex04-summary";

// mostrar todos los productos
//

console.log("Catalogo de productos TechStore", ...products)

// mostrar el primer producto
//
const first: Product | undefined = products[0]
console.log("Primer producto: ", first)
//
// mostrar el primer precio del primer producto

console.log("Precio del primer producto: ", first !== undefined ? first.price : "No existe el producto")

console.log("-----------------------------------------------------")
console.log("------------Relacion de ejercicios Nº1---------------")
//console.log('ejercicio 1', tags(products))
console.log('ejercicio 2', soldOutNames(products))
console.log('ejercicio 3', byCategory(products, 'audio').map((p) => p.name));
console.log('ejercicio 3', byCategory(products, 'monitors').map((p) => p.name));
console.log('ejercicio 3', byCategory([], 'audio'));
console.log('ejercicio 4', priceOf(products, 3));
console.log('ejercicio 4', priceOf(products, 99));
console.log(
  'ej05',
  canBuy(products, 1, 2), // teclado, hay 5 → true
  canBuy(products, 1, 6), // teclado, pide 6 y solo hay 5 → false
  canBuy(products, 2, 1), // ratón agotado → false
  canBuy(products, 99, 1), // no existe → false
  canBuy(products, 1, 0), // 0 unidades → false
);

console.log('ejercicio 6', allInStock([]))
console.log("-----------------------------------------------------")

console.log("")
console.log("------------Relacion de ejercicios Nº2---------------")
console.log('ejercicio 1', totalUnits(products), totalUnits([]));
const cheapest = cheapestAvailable(products);
if (cheapest !== undefined) {
  console.log('ejercicio 2', cheapest.name);
}
console.log('ejercicio 2', cheapestAvailable([]));
console.log('ejercicio 3', catalog(products));
console.log('ejercicio 4', summary(products));
console.log('ejercicio 4', summary([]));
