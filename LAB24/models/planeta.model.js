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
            'INSERT INTO Planeta (nombre, imagen, descripcion, username) VALUES (?, ?, ?, "julian23")',  // Se dejan los espacios, evitamos SQL con los ?
            [this.nombre, this.imagen, this.descripcion] // Evitar SQL inyection
        );
    }

     // Los métodos estáticos pertenecen a una clase en lugar de una instancia individual de la clase
    // Ahora en lugar del arreglo, se hace el script select de SQL
    static fetchAll(){
        return db.execute('SELECT * FROM Planeta');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM Planeta WHERE idPlaneta=?', [id]); // Si en la ruta planetas escribe el id, devuelve el planeta
    }

    static fetch(id){ // Con esto hacemos que si el usuario escriba el id y devuelve unicamente el planeta
        if(id){
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    // Nueva funcion para consultar las construcciones por nombre
    static search(valor_busqueda){
        return db.execute(`SELECT * FROM Planeta WHERE nombre LIKE ?`,
        ['%' + valor_busqueda + '%']);
    }

    static delete(id){
        return db.execute('DELETE FROM Planeta WHERE idPlaneta=?', [id]);
    }
}
