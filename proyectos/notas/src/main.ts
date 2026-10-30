import { ListFormat } from "typescript";
import { createCard, getElement } from "./components/dom";
import { products } from "./services/products";


const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
const divProducts = getElement("#products", HTMLDivElement)
h1Product.textContent = "Productos"
divProducts.append(h1Product)

const ulProducts = document.createElement("ul")

for (const product of products) {
  // const liProduct = document.createElement("li")
  // liProduct.textContent = `Nombre ${product.name} - Precio ${product.price} - Stock ${product.stock}`
  // ulProducts.append(liProduct)
  ulProducts.append(createCard(product))
}
divProducts.append(ulProducts)



