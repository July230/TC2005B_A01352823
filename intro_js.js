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
let cantidad = 1 // solo acceso a las llaves

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

// funciones tradicionales
function construir(){
    console.log("Construyendo casa");
};

construir();

// funciones modernas
() => { // operador flecha =>
    console.log("Construyendo casa anónima");
}; 

// constante que guarda funcion
const casa = () => { 
    console.log("Construyendo casa con constante");
}; 

casa();

const desayuno = (comida) => {
    console.log("El desayuno de hoy es " + comida);
};

desayuno("huevitos");

// a javascript no le interesan los puntos y comas ";"

// arreglos
// El arreglo es constante pero no el contenido
const arreglo = ["Elemento"];
const arreglo2 = new Array();
arreglo.push("Otro elemento");
arreglo.push(5);
arreglo[10] = "Uno mas" // El arreglo cambia de tamaño y pone esto al final
console.log(arreglo); // Muestra el arreglo


//arreglos asociativos
arreglo["dos"] = 8;
console.log(arreglo);

// recorrido tradicional del arreglo
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

// recorridos alternativos del arreglo
for(let posicion of arreglo){
    console.log(posicion);
}

//Objetos
const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = 5;
console.log(objeto);

for(let atributo in objeto){
    console.log(atributo);
}

// con in imprime valores
// con of imprime los nombres


// modificar html
document.write("hola"); // no es lo mejor ni recomendable