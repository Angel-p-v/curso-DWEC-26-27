
// crear una funcion q mientras sea verdad compruebe todos los numeros de un array
// pasado como parametro, guarde los positivos en un array llamado positivos y los negativos
// en un array llamado negativos y calcule la sume de todos ellos 
// autor = Angel PV

function clasificarNumeros (array: number[]){
  const positivos:number[] = []
  const negativos:number[] = []
  let sumaPositivos:number = 0
  let sumaNegativos:number = 0

  for(const numero of array){
    if(numero >= 0){
      positivos.push(numero)
      sumaPositivos += numero
    } else {
      negativos.push(numero)
      sumaNegativos += numero
    }
  }

  return {
    positivos,
    negativos,
    sumaPositivos,
    sumaNegativos
  }
}

// Inicio de la aplicacion

const datos:number[] = [1,-10,25,11,9,5,-6,8,-5,9,12,-10]

const resultado = clasificarNumeros(datos)

console.log("El array de positivos es: ", resultado.positivos)
console.log("-----Suma de array de positvios: ", resultado.sumaPositivos)
console.log(`El array de negativos es: ${resultado.negativos}`)
console.log("-----Suma de array de negativos: ", resultado.sumaNegativos)




