/* Archivo de un modelo, el de contruccion */


const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];

// Crear una clase
module.exports =  class Construccion {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre; // this hace referencia a la instancia actual de la clase
        this.imagen = mi_imagen;
    }

}