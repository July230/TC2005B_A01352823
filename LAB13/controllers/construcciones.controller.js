// Un archivo de controlador, la lógica de como va a interactuar

const Construccion = require("../models/construccion.model");

// Ahora el arreglo esta en controller y no en routes
/*
const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];
*/
// Ahora ira a modelo

// El orden en controladores ya no importa porque sólo es lógica
exports.get_construir = (request, response, next) => { // Para ruta get de construir
    response.render('construir'); // Hace render a la pagina construir
};

exports.post_construir = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    // Antes se hacia push, pero ahora eso esta en modelo
    const construccion = new Construccion(request.body.nombre, request.body.imagen); // Crear una instancia de la clase
    construccion.save(); // Se guarda en el arreglo 
    response.redirect('/');
};

exports.get_root = (request, response, next) => { // Para la ruta raiz
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: Construccion.fetchAll(), // Ahora en lugar del arreglo, es la instancia de la clase Construccion
    });
}