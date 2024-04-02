// Un archivo de controlador, la lógica de como va a interactuar

const Construccion = require("../models/construccion.model");

// El orden en controladores ya no importa porque sólo es lógica
exports.get_construir = (request, response, next) => { // Para ruta get de construir
    response.render('construir', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
    }); // Hace render a la pagina construir
};

exports.post_construir = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    console.log(request.file); // Información sobre el archivo
    // Antes se hacia push, pero ahora eso esta en modelo
    // Request.body es una forma de request que guarda la petición que se hizo
    const construccion = new Construccion(request.body.nombre, request.file.filename); // Crear una instancia de la clase
    construccion.save()
        .then(([rows, fieldData]) => {
            // Ahora la cookie va adentro del then
            // Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly
            response.setHeader('Set-Cookie', 'ultima_construccion=', request.body.name + '; HttpOnly'); 
            response.redirect('/construcciones');

        }).catch(error => {console.log(error)});
    }

exports.get_root = (request, response, next) => { // Para la ruta raiz
    console.log('Ruta /');
    let ultima_construccion = request.get('Cookie'); // En caso de que no exista la cookie
    // Para acceder a un valor de una cookie en particular, puedes hacer manipulando el string con split
    
    if(ultima_construccion){ // En caso de que no exista la cookie, un if para así evitar que truene
        ultima_construccion = ultima_construccion.split('=')[1];
    } else {
        ultima_construccion = '';
    }
    console.log(ultima_construccion);
    Construccion.fetch(request.params.construccion_id).then(([rows, fieldData]) => { // Se cambia fetchAll por fetch con los parametros definidos en el modelo
        console.log(rows); // devuelve las filas con su respectivo contenido
        response.render('construcciones', { // hace render a los registros de construccion
            construcciones: rows, // Las filas de la tabla construccion
            ultima_construccion: ultima_construccion, // La cookie ultima construccion
            username: request.session.username || '', // En caso de que no exista, string vacío
            permisos: request.session.permisos || [], // Por defecto, un arreglo vacio
        });
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.getConstrucciones = (request, response, next) => {
    Construccion.fetchAll() // El modelo
        .then(([rows, fieldData]) => { // then es si se cumple la promesa
            response.render('vista', {
                Construccion: rows 
            })
        })
        .catch(err => console.log(err)); // catch es en caso de que no, por lo que el error se muestra en consola
}