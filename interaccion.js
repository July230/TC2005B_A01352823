/*
Ian Julián Estrada Castro
Archivo de JavaScript
Problemas de JavaScript
*/


console.log("Ejercicios de JavaScript");

console.log("1 - Generar una tabla, esta aparecerá en el html");
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
console.log("2 - Verificar suma")
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
            alert("Respuesta incorrecta o cancelada, la respuesta era: " + sumaCorrecta + " , Tardaste " + tiempoTotal + "segundos");
        }
    }
    // Mostrar tiempo transcurrido en la consola del navegador
    console.log("Tiempo transcurrido al sumar fue de: " + tiempoTotal + " segundos.");
}

VerificarSuma();

// Funcion contador
console.log("Ejercicio 3 - El arreglo se llama numeros, adicionalmente hay uno llamado arreglo")
function contador(numeros) {
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

console.log("Ejercicio 4 - Promedios en una matriz")
function promedios(matriz){
    let promedios = [];

    // Recorred cada fila de la matriz
    for(let i = 0; i < matriz.length; i++){
        let fila = matriz[i];
        let contar = 0;

        // Calcular la suma de los elementos en la fila
        for(let j = 0; j < fila.length; j++){
            contar += fila[j];
        }

        // Calcular el promedio de la fila
        let promedio = contar / (fila.length);

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

// Numero inverso
console.log("5 - Inverso, hay que hacer varios pasos")
function inverso(UnNumero){
    console.log("Convertir el número en un string, usar split para convertirlo en un arreglo de caracteres, reverse para invertir el orden y finalmente join para devolverlo a una cadena.")
    // Convertir el número en una cadena, separarlo en un arreglo, invertirlo y unirlo
    let numeroInverso = UnNumero.toString().split("").reverse().join("");
    return numeroInverso;
}

let numero = 12345;
console.log("El numero es: " + numero + ", el numero invertido es: " + inverso(numero));

// Problema de mi interes, suma de fracciones

console.log("Suma de fracciones")
function Fraccion(numerador, denominador){
    this.numerador = numerador;
    this.denominador = denominador;
}

function sumarFracciones(fraccion1, fraccion2){
    let sumaNumerador = fraccion1.numerador * fraccion2.denominador + fraccion2.numerador * fraccion1.denominador;
    let sumaDenominador = fraccion1.denominador * fraccion2.denominador;

    return new Fraccion(sumaNumerador, sumaDenominador);
}

function mostrarResultado(){
    let fraccion1Input = document.getElementById("fraccion1").value; // Obtener el valor del input
    let fraccion2Input = document.getElementById("fraccion2").value;

    let fraccion1Numerador = parseInt(fraccion1Input.split("/")[0]); // El valor se separa en dos partes ustilizando / como delimitador
    let fraccion1Denominador = parseInt(fraccion1Input.split("/")[1]); // Al ser [1], devuelve el segundo elemento

    let fraccion2Numerador = parseInt(fraccion2Input.split("/")[0]);
    let fraccion2Denominador = parseInt(fraccion2Input.split("/")[1]);

    let fraccion1 = new Fraccion(fraccion1Numerador, fraccion1Denominador)
    let fraccion2 = new Fraccion(fraccion2Numerador, fraccion2Denominador)

    let suma = sumarFracciones(fraccion1, fraccion2);

    document.getElementById("resultado").innerText = "La suma de las fracciones es: " + suma.numerador + "/" + suma.denominador;
    console.log("La suma de las fracciones es: " + suma.numerador + "/" + suma.denominador)
}

