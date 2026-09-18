// Ejercicio 1 de javascript 
//
/*
console.log("Hola mundo")

//Tipos de datos en JS
//
//
//String 
// "" '' ``
// var let const 
let nombre = "Angel";
let apellidos = "Puertas";
let aniosTrabajados = 0;
console.log(`hola me llamo ${nombre} ${apellidos} y llevo trabajados ${aniosTrabajados} meses`);

// validaciones basicas == ===
//
// == <-- significa si el valor de la izquierda es igual al de la derecha
// 'a' == a --> true
// === <-- significa si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha
// 'a' === a --> false
//
// ternarias evaluacion_expresion ? verdadero : false

const edad = "19";
edad > 18 ? console.log("eres mayor de edad") : console.log("eres menor de edad");
*/
// dada la edad,los minutos y los segundos. Comprobar: si la edad es un numero positivo y mayor que 18,
// comprobar si la hora y los minutos son valores validos dentro de nuestros sistema de numeracion 
let edad = -18
let horas = 15
let minutos = 30

edad >= 0 ? console.log("Numero positivo") : console.log("Numero negativo")
horas <= 24 && horas >= 0 ? console.log("numero de horas permitidas") : console.log("numero de horas no permitidas")
minutos <= 60 && minutos > 0 ? console.log("numero de minutos permitidos") : console.log("numero de minutos no permitidas")
