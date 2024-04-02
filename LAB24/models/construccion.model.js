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
            'CALL registrarConstruccion(?, ?, "rommel49")', // Se dejan los espacios, el uno es para que le ponga al usuario 1
            [this.nombre, this.imagen] // Para evitar sql inyection se pone el signo de interrogacion en la consulta
        );
    }

    // Los métodos estáticos pertenecen a una clase en lugar de una instancia individual de la clase
    // Este metodo servira para devolver los objetos del almacenamiento persistente
    // Ahora tiene para extraer de una tabla
    static fetchAll(){
        return db.execute('SELECT * FROM Construccion')
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM Construccion WHERE id=?', [id]);
    }

    static fetch(id){
        if(id){
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    // Nueva funcion para consultar las construcciones por nombre
    static search(valor_busqueda){
        return db.execute(`SELECT * FROM Construccion WHERE nombre LIKE ?`,
        ['%' + valor_busqueda + '%']);
    }
}