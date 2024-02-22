/*Este archivo será para la introducción al lab 8 usando node*/

console.log("Hola mundo desde node"); // Usar comando node "nombre de archivo" para ejecutar el archivo .js

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

// Escribe el string del segundo parámetro
// en el archivo indicado en el primer parámetro
// Con comillas simples es literal
// Comillas dobles pueden permitir algunos procesos dentro de ese archivos
filesystem.writeFileSync("hola.txt", "Hola desde node");