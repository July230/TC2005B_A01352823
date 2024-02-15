/*
Ian Julián Estrada Castro
Archivo de JavaScript
*/

console.log("hola"); // se muestra en consola
console.info("Esto es información");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.assert(1==1); // assertion hace evaluaciones
console.assert(1==2);

// variables constantes

// forma antigua de declarar variables
var juego = "Starbound"; // var tiene acceso a toda la funcion

// constantes
const precio = 50; 

// forma moderna y mas segura de declarar variables
const cantidad = 1 // solo acceso a las llaves

// tipos de datos
// Number para numeros

//alert, prompt, confirm
alert("Hola"); // Desplegar alerta

const nombre = prompt("¿Cómo te llamas?");

console.log("Hola " + nombre);

const hambre = confirm("¿Tienes hambre?");

if(hambre){ // Una variable declarada tal cual es undefined
    console.log("Es hora de desayunar");
} else {
    console.log("Sigamos trabajando")
}
