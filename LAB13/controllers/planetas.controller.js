// Un archivo de controlador, la lógica de como va a interactuar
// Por controlador hay un modelo

const Planeta = require("../models/planeta.model"); // El modelo que saca

// El orden en controladores ya no importa porque sólo es lógica
exports.get_registrar = (request, response, next) => { // Para ruta get de registrar planeta
    response.render('enviar'); // Hace render a la pagina construir
};

exports.post_resistrar = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    // Antes se hacia push, pero ahora eso esta en modelo
    const planeta = new Planeta(request.body.nombre, request.body.imagen, request.body.descripcion); // Crear una instancia de la clase
    planeta.save(); // Se guarda en el arreglo 
    response.redirect('/planetas');
};


exports.get_planetas = (request, response, next) => { // Para la ruta que tiene los planetas registrados
    console.log('Ruta /planetas');
    response.render('planetas', {
        planetas: Planeta.fetchAll(), // Ahora en lugar del arreglo, es la instancia de la clase Construccion
    });
}

exports.get_root = (request, response, next) => { // Para ruta raiz
    console.log('Ruta /');
    response.render('/'); // Hace render a la pagina raiz
};

exports.get_humano = (request, response, next) => { // Para ruta get de humano
    console.log('Ruta /humano');
    response.render('humano'); // Hace render a la pagina humano
};

exports.get_hylotl = (request, response, next) => { 
    response.render('hylotl'); 
};

exports.get_avian = (request, response, next) => { 
    response.render('avian'); 
};

exports.get_floran = (request, response, next) => { 
    response.render('floran'); 
};

exports.get_apex = (request, response, next) => { 
    response.render('apex'); 
};

exports.get_glitch = (request, response, next) => { 
    response.render('glitch'); 
};

exports.get_novakid = (request, response, next) => { 
    response.render('novakid'); 
};