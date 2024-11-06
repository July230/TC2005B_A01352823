/* Archivo de un modelo, el de planeta, este modelo y sus metodos se haran con base al diagrama de secuancia del laboratorio 13 */

// Ahora el arreglo de los planetas esta en model
const planetas = [
    {
    nombre: "Mundo desértico", 
    imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", 
    descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida.",
    }
];

module.exports = class Planeta {
    // Constructor de una clase. Sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo

    constructor(mi_nombre, mi_imagen, mi_descripcion){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }
    // Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        planetas.push({
            nombre: this.nombre,
            imagen: this.imagen,
            descripcion: this.descripcion,
        }); // es lo mismo que planetas.push(this)
    }

    // Los estaticos permanecen en memoria, se ejecuta sobre la clase, no sobre un objeto de la clase construccion
    // Este metodo servira para devolver los objetos del almacenamiento persistente
    static fetchAll(){
        return planetas;
    }
}
