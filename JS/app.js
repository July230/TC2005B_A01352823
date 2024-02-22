/*Este archivo será para la introducción al lab 8 usando node*/

console.log("Hola mundo desde node"); // Usar comando node "nombre de archivo" para ejecutar el archivo .js

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

// Escribe el string del segundo parámetro
// en el archivo indicado en el primer parámetro
// Con comillas simples es literal
// Comillas dobles pueden permitir algunos procesos dentro de ese archivos
filesystem.writeFileSync("hola.txt", "Hola desde node"); // Esto escribirá un "Hola desde node" en un hola.txt en la misma ubicación donde esté, o en su defecto, donde se indique. Se irá reescribiendo en veces posteriores




const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000] // Un arreglo

for(let item of arreglo){
    // setTimeout con dos parametros ("Tiempo que se va a ejecutar", "ejecutar"), los items del arreglo se toman como milisegundos
    setTimeout(() => {
        console.log(item);
    }, item)
}

setTimeout(() => {console.log("Jojo te hackié")}, 7000); // Escribirá el mensaje a los 7000 milisegundos

console.log("Esto se imprime antes de los números");