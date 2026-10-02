// Enunciado: Ejercicio uso de arrays y tipado
// Autor: Ángel Puertas Villegas
// Investigación: Fuentes consultadas
//
// como tipabamos un array:

const activos: boolean[] = [true, false, true, true];
const nombres: string[] = ["angel", "luis", "dani"];
// nueva forma:
const edades: Array<number> = [12, 22, 18];

const precios = [56, 65, 34, 23]

console.log(typeof (precios))

// arrays con mas de un tipo: 
const valores: (string | number)[] = ["ana", 25, "luis", 56];

//comodo pero para empezar mejor no
const personas: [string, number] = ["ana", 45]

// leer elementos de un array
console.log(nombres[0]); // <-- "angel"

nombres[0] = "Don pepe";

// insertar y eliminar al principio y al final
nombres.push("sara") // <-- el metodo push muta el array (modifica el contenido del contenido del mismo algo prohibido en react)
// eliminar el ultimo elemento de un array
nombres.pop(); // <-- develve el nuevo array
// añadir al principio 
nombres.unshift("adri"); // <-- esto devuelve la nueva longitud del array
// eliminar al principio del array
nombres.shift(); // <-- este me da el nuevo array


// metodo que mutan y no mutan 
//
// push(),pop(),shift(),unshify(),splice(),sort(),reverse() <-- mutan el array

// metodo slice() <-- devuelve una parte del array sin mutar el array ***
const numeros: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numeros.slice(1, 4) // [20,30,40] <-- coge la 1º posicion pero no la ultima 

// metodo splice() <-- eliminar, añadir, sustituir elementos del array
numeros.splice(1, 2) // <-- [20,30]

// copiar arrays spread operator *** *** *** *** *** *** *** *** *** ***
const num: number[] = [1, 2, 3];
const copia: number[] = [...num] // <-- tiene una copia con [1,2,3]
const copia2 = [...num, 6] // <-- copia del array mas un nuevo valor al final de este

// recorrer un array
// for(let i = 0; num.length; i++)

// for of --> cuando solo queremos el valor
for (const precio of precios) {
  console.log(precio)
}

// forEach() --> se usa mucho en react
// se usara cada vez que queramos hacer algo con cada 1 de los elementos de un array
// se parece al map, pero el map es mas potente en muchos casos
precios.forEach((precio: number, indice: number) => {
  console.log(`precio al cuadrado: ${precio ** 2} - posicion ${indice}`)
})

// metodos que usan funciones CallBack
//
// forEach(),map(),filter(),find() <-- *** muy importantes para react *** 
// un callback es una funcion, por tanto esos metodos reciben como parametro una funcion 
