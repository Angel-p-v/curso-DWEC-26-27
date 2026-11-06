import { products } from "./services/products";

// A. - El dato
state = { products: [{ id: 1, name: "raton", favorite: false }] }

  // B. - El DOM
  < ul id = "lista-productos" >
    <li>
    <span>Raton 19.48 </span>
      < button data - actio="favorite" id = "1" > Favorito < /button> / / data - es un dataset con el valor q quiera darle
        < button data - action="delete" id = "1" > Borrar </button>
          < span > teclado 20.00 </span>
            < button data - actio="favorite" id = "2" > Favorito < /button> / / data - es un dataset con el valor q quiera darle
              < button data - action="delete" id = "2" > Borrar </button>
                </li>
                </ul>

// para añadir un data-set a un nodo u objeto del dom usamos objeto.dataset.nombre_del_dataset = "valor"
button.dataset.action = "favorito"
button.dataset.id = "1"

// C. - El Listener el que escucha y colocamos casi siempre en un nodo padre que englobe a todos los hijos que quiero escuchar
const list = document.getElementById("lista-productos")

list.addEventListener("click", (event) => {
  // esto se ejecutara solo cuando se produzca el evento
})

// closest <-- muy importante y simboliza el objeto mas proximo que tenga x cosa (lo que pongo aqui es lo que busca)
const button = xxxx.target.closest("button[data-action]") // <-- este seria el boton pulsado
// como ya tengo el boton le puedo sacar su id

const id = Number(button.dataset.id) // lee data-id="el numero que he pulsado y lo convertimos a number"

if (button.dataset.actionv === "favorite") { // leo data-action = "favorite"
  // llamo a 1 funcion que cambia el valor de ese boton. A la funcion la llamare con el nombre Dispatch
  dispacth({ type: "favorite", id }) // hacer el cambio
}

// la funcion dispatch coge el parametro, lo busca en mi data y le cambia el varlor

function dispatch(action: Action): void {

  state = reduce(state, action) //<-- cambia el dato en la data principal
  render() // <-- renderizo todo con la nueva data (repintamos el nodo por pantalla)
}
