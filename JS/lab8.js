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


// Sucesión de fibonacci
const fibonacci = () => {
    console.log("Esta es una sucesión de fibonacci, muestra los diez primeros números");
    let primer_numero = 0;
    let segundo_numero = 1;
    let suma_numeros = 0;

    console.log(primer_numero);
    for(let i = 0; i < 9; i++){
        suma_numeros = primer_numero + segundo_numero;
        console.log(suma_numeros);
        primer_numero = segundo_numero;
        segundo_numero = suma_numeros;

    }
    return suma_numeros;
}
console.log(fibonacci());

// Recibe un string y lo escribe en un archivo de texto
const escribir = () => {
    readline.question('Escribe algo: ', palabra => { // Escribe la entrada del usuario
        console.log(palabra);
        filesystem.writeFileSync("String.txt", palabra); // Escribe la entrad en archivo txt
        readline.close(); // Detiene la lectura de linea
    });
}
escribir();

