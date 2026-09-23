/*
Relaciona cada tarea con JavaScript, TypeScript, Node.js, npm o Vite. Alguna herramienta puede
aparecer más de una vez.
1. Ejecuta el código de la página en el navegador. javascript
2. Avisa de que se intenta asignar un texto a una variable numérica. typescript
3. Instala las dependencias indicadas en package.json . npm
4. Sirve el proyecto durante el desarrollo y transforma un archivo .ts. vite
5. Permite ejecutar herramientas de desarrollo fuera del navegador. node.js

Explica después por qué ver la página con npm run dev no demuestra que los tipos estén bien
comprobados.
  Porque el servidor pasa el codigo de typescript a javascript y para conseguir esa velocidad
  omite la comprobacion de los tipos

console.log(typeof 7) number
console.log(typeof '7') string
console.log(typeof null) null 
console.log('7' + 2) 72
console.log('7' - 2) 5
console.log(10 % 3) 1
console.log(Number('')) 0
console.log(Number('14px')) NaN


const nombre = 'Coronel'
const edad = 18 
const grupo = '1º DAM'
const haProgramadoAntes = true

console.log(`Hola, me llamo ${nombre}, tengo${edad} años, estoy en el grupo ${grupo} 
  y el dato de si he programado antes es:${haProgramadoAntes}.`)

console.log('Tipo de nombre:', typeof nombre)
console.log('Tipo de edad:', typeof edad)
console.log('Tipo de grupo:', typeof grupo)
console.log('Tipo de haProgramadoAntes:', typeof haProgramadoAntes)

const minutos = 5
const segundos = 300
const duracionSegundos = minutos * 60
let tiempoRestante = segundos - segundos





let intentos = 1
intentos = intentos + 1
console.log(`Intentos: ${intentos}`)
--> que con const la variable es de solo lectura
--> el error de logica esque aunque se ejecute el codigo entero no da el resultado deseado

const cantidadTexto = 5
const extra = 2
console.log(`Total: ${cantidadTexto + extra}`)
con Number() pasas un string a un number


const res1 = Number('hola');
console.log(res1);                     // NaN
console.log(typeof res1);              // "number"
console.log(Number.isFinite(res1));     // false

const res2 = Number('Infinity');
console.log(res2);                     // Infinity
console.log(typeof res2);              // "number"
console.log(Number.isFinite(res2));     // false

const res3 = 0 / 0;
console.log(res3);                     // NaN
console.log(typeof res3);              // "number"
console.log(Number.isFinite(res3));     // false
Porque el resultado puede ser un NaN o Infinite



*/




