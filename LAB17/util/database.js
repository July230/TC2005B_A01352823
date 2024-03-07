/* Este archivo es para interactuar con el gestor SQL, requerimos el paquete mysql2*/
const mysql = require('mysql2'); // Se requiere el paquete mysql12

const pool = mysql.createPool({
    host: 'localhost', // host de la base de la base de datos, en este caso 127.0.0.1 alias localhost
    user: 'root', // 
    database: 'minecraft', // nombre de la base de datos
    password: 'JulianSQL' // lo ideal es que tenga contraseña
});

module.exports = pool.promise(); 
// Las promesas son cuando el gestor hizo o no la consulta, permiten manejar fácilmente código que se ejecuta de manera asíncrona

