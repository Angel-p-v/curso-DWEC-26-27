import { products } from "./data/products";

// metodos de repaso

// products
//   .filter(producto => producto.stock > 3)
//   .map(producto => producto.name)
//   .indexOf(name => name === 'Auriculares')

products
  .find(product => product.category = 'peripherals') // <-- da solo lo q cumple la condicion, pero solo la 1º ocurrencia

// console.log(products[0]?.var ?? "no existe la clave")
//si esto de la izquierda es null o undefined ?? entonces da esto


// calcular el valor total de todos mis productos (suma de precio * stock)
let total = 0
for (const p of products) {
  total += p.price * p.stock
}

// [].reduce( (Acumulador, elemento_q_itera,posicion,array_de_partida) => , valor_inicial)
products.reduce((totalProductsValue, product) => totalProductsValue += product.price * product.stock, 0)

// sort() <-- ordenar --> muta el array
// toSorted() <-- ordena sin mutar de manera ascendente
// slice() <-- bueno y splice() <-- malo muta
