// Un archivo de controlador, la lógica de como va a interactuar

const Construccion = require("../models/construccion.model");

// El orden en controladores ya no importa porque sólo es lógica
exports.get_construir = (request, response, next) => { // Para ruta get de construir
    response.render('construir'); // Hace render a la pagina construir
};

exports.post_construir = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    // Antes se hacia push, pero ahora eso esta en modelo
    // Request.body es una forma de request que guarda la petición que se hizo
    const construccion = new Construccion(request.body.nombre, request.body.imagen); // Crear una instancia de la clase
    construccion.save(); // Se guarda en el arreglo 
    
    // Definir una cookie
    // Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly
    response.setHeader('Set-Cookie', 'ultima_construccion=', request.body.name + '; HttpOnly'); 
    response.redirect('/');
};

exports.get_root = (request, response, next) => { // Para la ruta raiz
    console.log('Ruta /');
    let ultima_construccion = request.get('Cookie'); // En caso de que no exista la cookie
    if(ultima_construccion){ // En caso de que no exista la cookie, un if para así evitar que truene
        ultima_construccion = ultima_construccion.split('=')[1];
    } else {
        ultima_construccion = '';
    }
    console.log(ultima_construccion);
    response.render('construcciones', {
        construcciones: Construccion.fetchAll(), // Ahora en lugar del arreglo, es la instancia de la clase Construccion
        ultima_construccion: ultima_construccion, 
    });
}