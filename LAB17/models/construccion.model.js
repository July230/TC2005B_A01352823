/* Archivo de un modelo, el de contruccion */

const db = require('../util/database'); // Ryta a la base de datos

// Crear una clase
module.exports =  class Construccion {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre; // this hace referencia a la instancia actual de la clase
        this.imagen = mi_imagen;
    }
    // Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        return db.execute(
            'INSERT INTO Construccion (nombre, imagen, username) VALUES (?, ?, "rommel49")', // Se dejan los espacios, el uno es para que le ponga al usuario 1
            [this.nombre, this.imagen] // Para evitar sql inyection
        );
    }

    // Ahora tiene para extraer de una tabla
    static fetchAll(){
        return db.execute('SELECT * FROM Construccion')
    }
}