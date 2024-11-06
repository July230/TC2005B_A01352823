/* Archivo de un modelo, el de planeta, este modelo y sus metodos se haran con base al diagrama de secuancia del laboratorio 13 */

// Ahora se hara interaccion con la base de datos con MySQLWorkbench

const db = require('../util/database_starbound'); // Ruta a la base de datos

// Ya no es necesario usar un arreglo pues los datos estan en la base de datos

module.exports = class Planeta {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo

    constructor(mi_nombre, mi_imagen, mi_descripcion){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }
    // Este metodo servira para guardar el objeto en la base de datos
    save(){
        return db.execute(
            'INSERT INTO Planeta (nombre, imagen, descripcion, username) VALUES (?, ?, ?, "julian23")',  // Se dejan los espacios, el uno es para que le ponga al usuario 1
            [this.nombre, this.imagen, this.descripcion] // Evitar SQL inyection
        );
    }

    // Ahora en lugar del arreglo, se hace el script select de SQL
    static fetchAll(){
        return db.execute('SELECT * FROM Planeta');
    }
}
