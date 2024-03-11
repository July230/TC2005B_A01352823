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
                'INSERT INTO Usuario (username, password) VALUES (?, ?)', // Se dejan los espacios, el uno es para que le ponga al usuario 1
                [this.username, password_cifrado] // Para evitar sql inyection se pone el signo de interrogacion en la consulta
            );
        }) 
    }

    // Los métodos estáticos pertenecen a una clase en lugar de una instancia individual de la clase
    // Estos metodos serviran para devolver los objetos del almacenamiento persistente
    // Ahora tiene para extraer de una tabla

    static fetchOne(username, password){
        return db.execute('SELECT * FROM Usuario WHERE username=?', // El controlador se encarga de la comparacion de contraseñas
        [username]);
    }
}