// Enunciado: Proyecto creacion de una tienda 
// Autor: Ángel Puertas VIllegas
// Investigación: 
//

import type { Product } from "./types/product";
import { products } from "./data/products";

//mostrar todos los productos de la tienda 

console.log("Catalogo de productos: ", products)

//mostrar el primer precio de los productos
const first: Product | undefined = products[0]
console.log("Primer producto: ", first)

// precio del primer producto
console.log(first.price != undefined ? `El precio del primer prodcuto es: ${first.price} ` : "Error al leer el precio")

