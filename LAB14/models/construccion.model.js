/* Archivo de un modelo, el de contruccion */


const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];

// Crear una clase
module.exports =  class Construccion {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre; // this hace referencia a la instancia actual de la clase
        this.imagen = mi_imagen;
    }
    // Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); // es lo mismo que construcciones.push(this)
    }

    // Los estaticos permanecen en memoria, se ejecuta sobre la clase, no sobre un objeto de la clase construccion
    // Este metodo servira para devolver los objetos del almacenamiento persistente
    static fetchAll(){
        return construcciones;
    }
}