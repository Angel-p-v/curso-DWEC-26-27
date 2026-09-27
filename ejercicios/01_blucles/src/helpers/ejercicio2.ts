// crear una funcion que se le pase como parametro un texto y lo encripte.
// añadir 1 funcion inversa que una cadena de texto encriptada la desencripte
// nota: buscar alguna libreria q permita genera cadenas encriptadas de forma segura
// @autor = Ángel PV
// Investigacion = buscar 2 librerias que sirvan para encriptar y pq esas
// cryptojs y bcryptjs

import CryptoJS from "crypto-js"
import * as crypto from "crypto";

function encriptar(texto:string,clave:string):string{
  const textoEncriptado : string = CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}

function desencriptar(texto: string, clave: string): string {
  const textoCasi = CryptoJS.AES.decrypt(texto, clave);
  const textoOriginal: string = textoCasi.toString(CryptoJS.enc.Utf8);
  return textoOriginal;
}

export function ejecutarEjercicio2(): void {
  const mensaje: string = "hola mundo";
  const clave: string = "1234";
  const mensajeEncriptado: string = encriptar(mensaje, clave);
  console.log("Mensaje encriptado: ", mensajeEncriptado);
  console.log(`Mensaje desencriptado: ${desencriptar(mensajeEncriptado, clave)}`);
}



const algoritmo = "aes-256-cbc";
const vector = Buffer.from("1234567890123456"); 

function encriptar2(texto: string, clave: string): string {
  const claveSecreta = crypto.createHash("sha256").update(clave).digest();
  
  const cifrado = crypto.createCipheriv(algoritmo, claveSecreta, vector);
  let textoEncriptado: string = cifrado.update(texto, "utf8", "hex");
  textoEncriptado += cifrado.final("hex");
  
  return textoEncriptado;
}

function desencriptar2(texto: string, clave: string): string {
  const claveSecreta = crypto.createHash("sha256").update(clave).digest();
  
  const descifrar = crypto.createDecipheriv(algoritmo, claveSecreta, vector);
  let textoOriginal: string = descifrar.update(texto, "hex", "utf8");
  textoOriginal += descifrar.final("utf8");
  
  return textoOriginal;
}

export function ejecutarEjercicio2_2(): void {
  const mensaje: string = "hola mundo";
  const clave: string = "123456";
  
  const mensajeEncriptado: string = encriptar2(mensaje, clave);
  
  console.log("Mensaje encriptado: ", mensajeEncriptado);
  console.log(`Mensaje desencriptado: ${desencriptar2(mensajeEncriptado, clave)}`);
}



  ejecutarEjercicio2()
  ejecutarEjercicio2_2()
