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

function VerificarSuma(){
    // Generar dos números aleatorios del 1 al 10
    // random devuelve de 0 a 1
    // floor redondea al numero entero
    let numero1 = Math.floor((Math.random * 10) + 1); // El +1 es para que tambien haya 10
    let numero2 = Math.floor((Math.random * 10) + 1);

    // Guardar el resultado correcto
    let sumaCorrecta = numero1 + numero2;

    // Solicitar la entrada del resultado
    let tiempoInicio = Date.now();
    let respuestaUsuario = prompt("Cuanto es la suma de " + numero1 + "+" + numero2 + "?");
    let tiempoFinal = Date.now();
    let tiempoTotal = (tiempoFinal - tiempoInicio) / 1000; // Convertir a segundos

    // Verificar resultado
    // parseInt analiza una cadena y devuelve un entero
    if(respuestaUsuario != null && parseInt(respuestaUsuario) === sumaCorrecta){
        alert("Respuesta correcta, tardaste " + tiempoTotal + "segundos");
    } else {
        alert("Respuesta incorrecta o cancelada, tardaste " + tiempoTotal + "segundos");
    }
}

VerificarSuma();
