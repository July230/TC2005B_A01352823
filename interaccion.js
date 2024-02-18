/*
Ian Julián Estrada Castro
Archivo de JavaScript
Problemas de JavaScript
*/



function generarTabla(){
    let numero = prompt("Ingresa un número");
    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for(let i = 0; i <= numero; i++){
        let cuadrado = i * i;
        let cubo = i * i * i;
        //Escribir la fila en la tabla concatenando
        document.write("<tr>"); // Inicio de fila
        document.write("<td>" + i + "</td>"); // i en donde numero
        document.write("<td>" + cuadrado + "</td>"); // cuadrado en donde cuadrado
        document.write("<td>" + cubo + "</td>"); // cubo en donde cubo
        document.write("</tr>"); // Fin de la fila
    }
    document.write("</table>"); // Cerrar tabla
}

generarTabla();


// Suma de dos numeros
function VerificarSuma(){
    // Generar dos números aleatorios del 1 al 10
    // random devuelve de 0 a 1
    // floor redondea al numero entero
    let numero1 = Math.floor(Math.random() * 10) + 1 // El +1 es para que tambien haya 10
    let numero2 = Math.floor(Math.random() * 10) + 1;

    // Guardar el resultado correcto
    let sumaCorrecta = numero1 + numero2;

    // Solicitar la entrada del resultado
    let tiempoInicio = Date.now();
    let respuestaUsuario = prompt("Cuanto es " + numero1.toString() + " + " + numero2.toString() + " ?");
    let tiempoFinal = Date.now();
    let tiempoTotal = (tiempoFinal - tiempoInicio) / 1000; // Convertir a segundos

    // Verificar resultado
    // parseInt analiza una cadena y devuelve un entero
    if (respuestaUsuario !== null && !isNaN(respuestaUsuario)){
        respuestaUsuario = parseInt(respuestaUsuario); // Convertir la respuesta a un número entero
        if(respuestaUsuario != null && parseInt(respuestaUsuario) === sumaCorrecta){
            alert("Respuesta correcta, tardaste " + tiempoTotal + "segundos");
        } else {
            alert("Respuesta incorrecta o cancelada, tardaste " + tiempoTotal + "segundos");
        }
    }
    // Mostrar tiempo transcurrido en la consola del navegador
    console.log("Tiempo transcurrido al sumar es de: " + tiempoTotal + " segundos.");
}

VerificarSuma();

// Funcion contador
function contador(numeros) {
    console.log("Ejercicio 3: El arreglo se llama numeros, adicionalmente hay uno llamado arreglo")
    // Inicializar contadores
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    // Recorrer el arreglo de numeros
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            negativos++;
        } else if(numeros[i] === 0){
            ceros++;
        } else {
            positivos++;
        }
    }

    // Retornar los resultados como un objeto
    return{
        negativos: negativos,
        ceros: ceros,
        positivos: positivos
    }
    console.log("Cantidad de números negativos: " + negativos);
    console.log("Cantidad de ceros: " + ceros);
    console.log("Cantidad de números positivos: " + positivos);
}

let numeros = [-10, -6, -8, 0, 3, 2, 5, 0, 10];
let arreglo = [-10, -6, -8, "a", 0, 3, 2, 5, 0, 10, "b", 0, 8, 4];

contador(numeros);

function promedios(matriz){
    let promedios = [];

    // Recorred cada fila de la matriz
    for(let i = 0; i < matriz.length; i++){
        let fila = matriz[i];
        let suma = 0;

        // Calcular la suma de los elementos en la fila
        for(let j = 0; j < fila.length; j++){
            suma += fila[j];
        }

        // Calcular el promedio de la fila
        let promedio = suma / (fila.length);

        // Agregar el promedio al arreglo de promedios
        promedios.push(promedio);
    }
    return promedios;
    
}

let matriz = [
    [1, 2, 3],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16]
];

promedios(matriz);
console.log("La matriz se llama matriz. Los promedios en cada fila son: " + promedios(matriz));