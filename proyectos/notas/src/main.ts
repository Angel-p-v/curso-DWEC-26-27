import "./style.css";
import { createCard, getElement } from "./components/dom";
import { products } from "./services/products";


const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
const divProducts = getElement("#products", HTMLDivElement)
h1Product.textContent = "Productos"
divProducts.append(h1Product)

const ulProducts = document.createElement("ul")
const liTotal = document.createElement("li")
liTotal.classList.add("card")
const totalStrongText = document.createElement("strong")
totalStrongText.textContent = "Total: "
liTotal.append(totalStrongText)

const totalStrong = document.createElement("strong")
totalStrong.textContent = `${products.reduce((acc, p) => acc += p.price, 0)}€`
totalStrong.classList.add("card-price")
liTotal.append(totalStrong)





// for (const product of products) {
//   // const liProduct = document.createElement("li")
//   // liProduct.textContent = `Nombre ${product.name} - Precio ${product.price} - Stock ${product.stock}`
//   // ulProducts.append(liProduct)
//   ulProducts.append(createCard(product))
// }

ulProducts.append(...products.map(p => createCard(p)))

ulProducts.append(liTotal)
divProducts.append(ulProducts)


/*
  * .append --> al final
  * .prepend --> al principio
  * .before --> justo antes de
  * .after --> justo despues de 
  * .replaceWith(nuevo) --> en lugar de
*/

const seccion = document.createElement("section")
const btnClick = document.createElement("button")
btnClick.textContent = "Clikc: 0"
seccion.append(btnClick)
divProducts.append(document.createElement("hr"))
divProducts.append(seccion)
