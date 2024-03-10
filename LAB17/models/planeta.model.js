/* Archivo de un modelo, el de planeta, este modelo y sus metodos se haran con base al diagrama de secuancia del laboratorio 13 */

// Ahora se hara interaccion con la base de datos con MySQLWorkbench

const db = require('../util/database'); // Ruta a la base de datos

// Ya no es necesario usar un arreglo pues los datos estan en la base de datos

module.exports = class Planeta {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo

    constructor(mi_nombre, mi_imagen, mi_descripcion){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }
    // Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        return db.execute(
            'INSERT INTO Planeta (nombre, imagen, descripcion, username) VALUES (?, ?, ?, "julian23")',  // Se dejan los espacios, el uno es para que le ponga al usuario 1
            [this.nombre, this.imagen, this.descripcion] // Evitar SQL inyection
        );
    }

    // Los estaticos permanecen en memoria, se ejecuta sobre la clase, no sobre un objeto de la clase construccion
    // Este metodo servira para devolver los objetos del almacenamiento persistente
    static fetchAll(){
        return db.execute('SELECTC * FROM Planeta');
    }
}
