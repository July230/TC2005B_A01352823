//consola (log, info, warn, error, assert)

console.log("hola");
console.info("Esto es información");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1==1);

// variables, constantes

//Forma antigua de declara variables
var juego = "Minecraft";

//Constantes
const precio = 50;

//Forma moderna y más segura de declara variables
let cantidad = 1;

// alert, prompt, confirm
alert("Hola");

const nombre = prompt("¿Cómo te llamas?");

console.log("Hola " + nombre);

const hambre = confirm("¿Tienes hambre?");

if (hambre) {
    console.log("Es hora de desayunar");
} else {
    console.log("Sigamos trabajando");
}

// funciones tradicionales
function construir() {
    console.log("Construyendo casa");
}

construir();

// funciones modernas
const casa = () => {
    console.log("Construyendo casa anónima");
};

casa();

const desayuno = (comida) => {
    console.log("El desayuno de hoy es " + comida);
};

desayuno("huevitos");

// arreglos

const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

arreglo[10] = "Uno más";

//arreglos asociativos
arreglo["dos"] = 8;

console.log(arreglo);

//recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo
for(let posicion of arreglo) {
    console.log(posicion);
}


//Objetos

const objeto = {atributo: "valor", atributo2: "valor2"}; 
objeto.atributo3 = 5;
console.log(objeto);

for(let atributo in objeto) {
    console.log(atributo);
}

// modificar html
document.write("hola");