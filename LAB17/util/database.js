/* Este archivo es para interactuar con el gestor SQL*/
const mysql = require('mysql2'); // Se requiere el paquete mysql12

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'database_name', // nombre de la base de datos
    password: 'el_password_de_tu_usuario_de_la_bd'
});

module.exports = pool.promise();