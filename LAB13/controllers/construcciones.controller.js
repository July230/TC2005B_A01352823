// Un archivo de controlador, la lógica de como va a interactuar

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
    console.log(request.body);
    construcciones.push(request.body); // Agregar nuevo elemento al arreglo construcciones
    response.redirect('/');
};

exports.get_root = (request, response, next) => { // Para la ruta raiz
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: construcciones,
    });
}