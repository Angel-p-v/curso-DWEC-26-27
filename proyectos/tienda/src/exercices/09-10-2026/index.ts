// crear 1 funcion que permita añadir productos a mi data
// restricciones: 
//
//------------------------ IMPORTACIONES --------------------------------------------------

// import { products } from "../../data/products";
// import type { Product } from "../../types/product";
import type { Cart } from "../../types/cart";


// ---------------------- DECLARACION DE VARIABLES Y FUNCIONES ----------------------------
// const original = { name: 'teclado', price: 80 }
// const other = original; // <-- asi no debo de crear las copias pq la copia puede mutar el objeto
// other.price = 0;
// console.log(original.price);
//
// // crea un nuevo tipo igual q product pero sin id
// export type NewProduct = Omit<Product, 'id'>; // *** <-- utility type ***
//
// // crear una funcion q me actualice el precio de los productos, le paso el id y el nuevo precio
// function updatePrice(list: Product[], id: number, price: number): Product[] {
//   return list
//     .map(p => p.id === id ? { ...p, price } : p)
// }
//
// // actualizaciones parciales
// // se lee de dentro hacia fuera --> quita el id de prodcuto, y lo q queda hazlo opcional 
// // con esto me aseguro q no voy a cambiar nunca el id
// export type ProductChanges = Partial<Omit<Product, 'id'>>;
//
// function updateProduct(list: Product[], id: number, change: ProductChanges): Product[] {
//   return list
//     .map(p => p.id === id ? { ...p, ...change } : p)
// }
// // updateProduct(products,1,{stock:10, name: 'teclado gaming'})
//
// function deleteProduct(list: Product[], id: number): Product[] {
//   return list.filter(p => p.id !== id)
// }


// ejercicio
//
// 1. crear un type (cart.ts) llamado Carline q tenga el id del producto y la cantidad a comprar (exportarlo)
// funciones para añadir elementos al producto, borrar elementos, obtener el total del carrito 
export function addToCart(cart: Cart, productId: number): Cart | boolean {
  return cart
    .some(p => p.productId === productId) ? cart
      .map(p => p.quantity > 0 ? { ...p, quantity: + 1 } : { ...p, quantity: 1 }) : false
}

export function removeFromCart(cart: Cart, productId: number): Cart | boolean {
  return cart
    .some(p => p.productId === productId) ? cart.map(p => p.quantity > 0 ? { ...p, quantity: -1 } : p) : false
}

export function obtainTotal(cart: Cart): number {
  cart.reduce( (total,producto) => total + producto.quantity , 0 )
}

// ----------------------- INICIO DE LA APLICACION ----------------------------------------



