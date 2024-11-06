/* Archivo de un modelo, el de Usuario */

const db = require('../util/database'); // Ryta a la base de datos
const bcrypt = require('bcryptjs'); // Modulo para cifrar contraseña


// Crear una clase
module.exports =  class Usuario {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo
    constructor(mi_username, mi_password){
        this.username = mi_username; // this hace referencia a la instancia actual de la clase
        this.password = mi_password;
    }
    // Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        return bcrypt.hash(this.password, 12).then((password_cifrado) => { // Con el modulo bcrypt, se cifran los passwords
            return db.execute(
                'CALL agregarUsuario(?, ?)', // Usamos un Stored Procedure que se guardó en la base de datos
                [this.username, password_cifrado] // Para evitar sql inyection se pone el signo de interrogacion en la consulta
            );
        })
        .catch((error) => {
            console.log(error);
            throw Error('Nombre de usuario duplicado: Ya existe un usuario con ese nombre'); // Devolver un error, este throw hara que en el controlador, vaya al catch sin hacer el then
        })
    }

    // Los métodos estáticos pertenecen a una clase en lugar de una instancia individual de la clase
    // Estos metodos serviran para devolver los objetos del almacenamiento persistente
    // Ahora tiene para extraer de una tabla

    static fetchOne(username, password){
        return db.execute('SELECT * FROM Usuario WHERE username=?', // El controlador se encarga de la comparacion de contraseñas
        [username]);
    }

    static getPermisos(username){
        return db.execute(
            // Username tiene ? para evita SQL inyection
            `SELECT funcion 
            FROM Usuario u, asigna a, rol r, posee p, permiso per
            WHERE u.username = ? AND u.username = a.username
            AND a.idrol = r.id AND r.id = p.idrol 
            AND p.idpermiso = per.id`, 
            [username])
    }
}