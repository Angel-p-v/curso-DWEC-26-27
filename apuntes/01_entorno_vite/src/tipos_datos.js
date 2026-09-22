// funcion q le pase como parametro un numero en grados celsius y lo transforme a grados kelvin 

//v1 (casi nunca asi)
function celsiusToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin
}

//v2 (version donde priorizamos el menor numero de lineas)
function celsiusToKelvin2(celsius){
  return celsius + 273.15
}

//v3 (modo pro usando arrow function)
const celToKel = (celsius) => {
  return celsius + 273.15
}

//v4 (modo DIOS pro max)
const cToK = (c) => c + 273.15


//funcion que le pase como parametro 2 numeros y me los ordene 
const ordenador = (a,b) => a>b ? a : b

//funcion que pase de celsius a kelvin pero comprobando que celsius es un numer, que la temeperatura no puede estar por debajo del 0 absoluto (-273 k)
// y el resultado me lo das con solo 2 cifra decimal
// isNaN <-- devuelve si un valor es un numero o no
// buscar como se trunca
function celToKelvin(c){
  if(!isNaN(c) && c >= (-273.15)){
    return (c + 273.15).toFixed(2) 
  } else {
    console.log("Proporciene un numero valido y que no sea inferior al 0 absoluto")
  }
} 

// ejercicios moodle
// 1.
function sumaArra(arr1, arr2){
  return arr3 = [...arr1,...arr2]
}


