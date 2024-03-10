// Un archivo de controlador, la lógica de como va a interactuar
// Por controlador hay un modelo

const Planeta = require("../models/planeta.model"); // El modelo que saca

// El orden en controladores ya no importa porque sólo es lógica
exports.get_registrar = (request, response, next) => { // Para ruta get de registrar planeta
    response.render('enviar',{  // Hace render a la pagina construir
        username: request.session.username || '', // Como la cookie se usara en multiples rutas, solicitarla
    }); 
};

exports.post_registrar = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    // Antes se hacia push, pero ahora eso esta en modelo
    const planeta = new Planeta(request.body.nombre, request.body.imagen, request.body.descripcion); // Crear una instancia de la clase
    planeta.save(); // Se guarda en el arreglo 
    // Definir una cookie
    // Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly
    response.setHeader('Set-Cookie', 'ultimo_planeta=', request.body.name + '; HttpOnly');
    response.redirect('/planetas');
};


exports.get_planetas = (request, response, next) => { // Para la ruta que tiene los planetas registrados
    console.log('Ruta /planetas');
    let ultimo_planeta = request.get('Cookie'); // Haces request de la cookie definida en lab14.js
    // Para acceder a un valor de una cookie en particular, puedes hacer manipulando el string con split
    
    if(ultimo_planeta){ // En caso de que no exista la cookie, un if para así evitar que truene
        ultimo_planeta = ultimo_planeta.split('=')[1];
    } else {
        ultimo_planeta = '';
    }
    console.log(ultimo_planeta);
    response.render('planetas', {
        planetas: Planeta.fetchAll(), // Ahora en lugar del arreglo, es la instancia de la clase Construccion
        ultimo_planeta: ultimo_planeta, 
        username: request.session.username || '',
    });
}

exports.get_root = (request, response, next) => { // Para ruta raiz
    console.log('Ruta /');
    response.render('starbound', { // Hace render a la pagina raiz
        username: request.session.username || '', // De nuevo, si no existe, truena, asi que hacer un
    }); 
};

exports.get_humano = (request, response, next) => { // Para ruta get de humano
    console.log('Ruta /humano');
    response.render('humano', { // Hace render a la pagina humano
        username: request.session.username || '',
    });
}

exports.get_hylotl = (request, response, next) => { 
    response.render('hylotl', {
        username: request.session.username || '',
    }); 
};

exports.get_avian = (request, response, next) => { 
    response.render('avian', {
        username: request.session.username || '',
    }); 
};

exports.get_floran = (request, response, next) => { 
    response.render('floran', {
        username: request.session.username || '',
    }); 
};

exports.get_apex = (request, response, next) => { 
    response.render('apex', {
        username: request.session.username || '',
    }); 
};

exports.get_glitch = (request, response, next) => { 
    response.render('glitch', {
        username: request.session.username || '',
    }); 
};

exports.get_novakid = (request, response, next) => { 
    response.render('novakid', {
        username: request.session.username || '',
    }); 
};