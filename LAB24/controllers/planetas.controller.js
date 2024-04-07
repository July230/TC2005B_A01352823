// Un archivo de controlador, la lógica de como va a interactuar
// Por controlador hay un modelo

const Planeta = require("../models/planeta.model"); // El modelo que saca

// El orden en controladores ya no importa porque sólo es lógica
exports.get_registrar = (request, response, next) => { // Para ruta get de registrar planeta
    response.render('enviar',{  // Hace render a la pagina enviar
        username: request.session.username || '', // Como la cookie se usara en multiples rutas, solicitarla
        csrfToken: request.csrfToken(), // Importante enviar el token a las vistas del controlador con formularios
        permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
    }); 
};

exports.post_registrar = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    console.log(request.file) // Información del archivo que se sube 
    // Antes se hacia push, pero ahora eso esta en modelo
    // Request.body es una forma de request que guarda la petición que se hizo
    const planeta = new Planeta(request.body.nombre, request.file.filename, request.body.descripcion); // Crear una instancia de la clase
    planeta.save()
        .then(([rows, fieldData]) => {
            // La cookie se define dentro para que el codigo se ejecute antes de renderizar la pagina
            // Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly
            response.setHeader('Set-Cookie', 'ultimo_planeta=', request.body.name + '; HttpOnly');
            response.redirect('/planetas');

        }).catch((error) => {console.log(error)}); // Se hace catch error y se muestra el error en consola
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
    Planeta.fetch(request.params.planeta_id).then(([rows, fieldData]) => { // Se cambia fetchAll por fetch con los parametros definidos en el modelo
        console.log(rows);
        response.render('planetas', { // Se hace render con la lectura de la tabla planetas en SQL
            planetas: rows, // Las filas de la tabla Planeta
            ultimo_planeta: ultimo_planeta, // La cookie del ultimo planeta registrado
            username: request.session.username || '', // Usuario, en caso de que no exista, string vacio
            permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
            csrfToken: request.csrfToken(), // Al hacer peticiones tipo post en la vista, enviar el Token
        });
    }).catch((error) => {console.log(error)}); 
}

exports.get_root = (request, response, next) => { // Para ruta raiz
    console.log('Ruta /');
    response.render('starbound', { // Hace render a la pagina raiz
        username: request.session.username || '', // De nuevo, si no existe, truena, asi que declarar la variable username de tipo session
        permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
    }); 
};

exports.get_razas = (request, response, next) => { // Para la ruta de get razas
    console.log("Ruta razas /razas");
    response.render('razas',{ // Hace render a la pagina de las razas
        username: request.session.username || '',
        permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
    });
}

exports.get_buscar = (request, response, next) => {
    Planeta.search(request.params.valor_busqueda || '')
        .then(([planetas, fieldData]) => {
            // Para enviar las respuestas en formato JSON, en nuestro controlador tenemos que cambiar la respuesta por:
            return response.status(200).json({planetas: planetas});
        })
        .catch((error) => {console.log(error)});
};

exports.post_delete = (request, response, next) => {
    Planeta.delete(request.body.idPlaneta)
        .then(() => {
            return Planeta.fetch();
        })
        .then(([planetas, fieldData]) => {
            return response.status(200).json({planetas: planetas})
        })
        .catch((error) => {console.log(error)});
};