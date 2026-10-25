import { contacts } from "./services/contacts";
import { filterContacts } from "./utils/filtrarContactos";


const inputSearch = document.createElement('input');
inputSearch.placeholder = 'nombre o telefono'
const button = document.createElement('button')
button.textContent = 'Buscar'
const checkboxFavorites = document.createElement('input');
checkboxFavorites.type = 'checkbox';


document.body.appendChild(inputSearch)
document.body.appendChild(checkboxFavorites)
document.body.appendChild(button)
