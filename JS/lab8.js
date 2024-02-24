/*Laboratorio 8, Pair programming
Ian Julián Estrada Castro
María Guadalupe Soria Velázquez
*/

// Módulo fs
const filesystem = require('fs');

// Módulo readline, createInterface 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promedio de arreglo de números

const numeros = [10,2,30,15,4,6,2,9,19];
const promedio = (arreglo) => {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}
console.log("Promedio de numeros: ", promedio(numeros));



// Recibe un string y lo escribe en un archivo de texto
const escribir = () => {
    readline.question('Escribe algo: ', palabra => { // Escribe la entrada del usuario
        console.log(palabra);
        filesystem.writeFileSync("String.txt", palabra); // Escribe la entrad en archivo txt
        readline.close(); // Detiene la lectura de linea
    });
}
escribir();



/*
const promedio = (arreglo) => {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}

function promedio(arreglo) {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
    // console.log("Primedio del arreglo: " + promedio)
}
*/

