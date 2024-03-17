/* Nuevo módulo de controladores para usuarios.routes */

const Usuario = require('../models/usuario2.model');
const bcrypt = require('bcryptjs');


exports.get_login = (request, response, next) => {
    const error = request.session.error || ''; // Declarar una constante error del tipo sesion
    request.session.error = ''; // Esto es para que no este para siempre, el usuario puede equivocarse
    response.render('login1', {
        username: request.session.username || '',
        registrar: false, // Variable que se le pasa al ejs para determinar su accion
        error: error,
        csrfToken: request.csrfToken(),
    }); // Render de la plantilla login1
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData]) => { // Obtener la columna de usuario
            if(users.length == 1) { // Si hay un sólo registro
                // users[0] contiene el objeto de la respuesta de la consulta
                const user = users[0];
                bcrypt.compare(request.body.password, user.password) // Comparar contraseña cifrada con contraseña del usuario
                    .then(doMatch => { // Hace una comparacion de contraseña cifrada con base a que la cifrada pudo hacer sido consecuencia de la del usuario
                        if (doMatch) {
                            request.session.isLoggedIn = true;  // Variable de sesion isLoggedIn para indicar que esta autentificado
                            request.session.username = user.username; // Comparar variable tipo session con nombre de usuaario
                            return request.session.save(err => { // Se guarda la variable sesion
                                response.redirect('/');
                            });
                        } else {
                            request.session.error = 'El usuario y/o constraseña son incorrectos';
                            return response.redirect('/users/login'); // Si no esta autenticado, devuelve a la pagina de login
                        }
                    }).catch((err) => {
                        console.log(err)
                        response.redirect('/users/login')
                    });
            } else {
                request.session.error = 'El usuario y/o contraseña son incorrectos';
                return response.redirect('/users/login');
            }
        })
        .catch((error) => {console.log(error)});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

// Controlador para llevar a la forma de autenticarse
exports.get_signup = (request, response, next) => {
    const error = request.session.error || ''; // Declarar una constante error del tipo sesion
    request.session.error = ''; // Para que no este para siempre, el usuario puede equivocarse
    response.render('login1', { // Se reutiliza la vista login1
        username: request.session.username || '',
        registrar: true, // Variable que se le pasa al ejs para determinar su accion
        error: error,
        csrfToken: request.csrfToken(),
    });
};

// Controlador para que un usuario se registre
exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password); // Se crea un objeto tipo usuario que hace la solicitud de usuario y contraseña
    nuevo_usuario.save() // Guarda el usuario y contraseña
        .then(([rows, fieldData])=>{ // Obtiene los registros de la tabla
            response.redirect('/users/login');
        })
        .catch((error)=> {
            console.log(error);
            request.session.error = 'Nombre de invalido';
            response.redirect('/users/signup')
        });
};