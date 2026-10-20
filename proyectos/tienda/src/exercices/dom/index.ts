/*
  * DOM --> arbol de objetos contruidos en html
  * 
  *
  *
  *
  * <html>
  *   <body>
      <h1> tienda< </h1>
      <div>
        <input id='search' type='search' />
        <ul id='list'></ul>
      </div>
  *   </body>
  * </html>
  
  document
        body
            h1
            div
              input#search
              ul#list
  * todos los elementos del DOM se denominan NODOS(node)
  * Element --> cualquier etiqueta
      HTMLElement --> textContent,classlist,dataset,ect
        HTMLInputElement --> .value, .checked, ect
        HTMLButtonElement --> .disabled


  ¿Como se seleccionan los elementos del DOM?
  document.querySelector("#category")
  *** mucho cuidado qye ese query puede devolver null | Element

  ¿Como se tipa en typescript? --> de peor a mejor
  const search = document.querySelector('#search')! as HTMLInputElement;
  ! <-- la exclamacion dice q jura por snoopy q no es null
  es decir ! quita null de los posibles valores y me dice que te garantizo que existe.

  const search2 = document.querySelector<HTMLInputElement>('#search')
  un poco mejor pero sigo sin comprobar en ningun momento si es null o un HTMLInputElement

  La forma correcta es: 
    const searchInput = document.querySelector('#search')
    if(!(searchInput instanceOf HTMLInputElement)){
      // te lanzo un error o te redirecciono a los errores
      throw new Error('no se enceuntra la etiqueta search o no es un input')
    }
  console.log(searchInput.value) //mostraria por pantalla lo q ha escrito en el input
  *
*/


console.log("Estoy en el index.ts")


// crear variables q apunten a cada 1 de los elementos del DOM q tengo en el html
document.querySelector('#controls')
document.querySelector('#search')
document.querySelector('#list')
document.querySelector('#only-in-stock')
document.querySelector('#btn-clikcs')
