/* Nuevo módulo de controladores para usuarios.routes */

const Usuario = require('../models/usuario.model');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: false, // Variable que se le pasa al ejs para determinar su accion
    }); // Render de la plantilla login
};

exports.post_login = (request, response, next) => {
    console.log(request.body);
    Usuario.fetchOne(request.body.username, request.body.username)
    .then(([rows, fieldData]) => {
        if(rows.length == 1){
            request.body.username = request.body.username;
            response.redirect('/construcciones');
        } else {
            response.redirect('/users/login');
        }
    })
    .catch((error) => {console.log(error)});
    request.session.username = request.body.username; // Gracias al modulo session, ahora tenemos session para crear un nuevo objeto tipo session
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

// Controlador para llevar a la forma de autenticarse
exports.get_signup = (request, response, next) => {
    response.render('login', { // Se reutiliza la vista login
        username: request.session.username || '',
        registrar: true, // Variable que se le pasa al ejs para determinar su accion
    })
}

exports.post_signup() = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password); // Se crea un objeto tipo usuario que hace la solicitud de 
    nuevo_usuario.save()
        .then(([rows, fieldData])=>{
            response.redirect('/users/login');
        })
        .catch((error)=>{console.log(error);});
}