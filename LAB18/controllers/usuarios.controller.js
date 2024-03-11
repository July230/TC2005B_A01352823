/* Nuevo módulo de controladores para usuarios.routes */

const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');


exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: false, // Variable que se le pasa al ejs para determinar su accion
    }); // Render de la plantilla login
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData]) => { // Obtiene la columna usuario
            if(users.length == 1) { // Si hay un sólo registro
                //users[0] contiene el objeto de la respuesta de la consulta
                const user = users[0];
                bcrypt.compare(request.body.password, user.password) // Comparar contraseña cifrada con contraseña del usuario
                    .then(doMatch => { // Hace una comparacion de contraseña cifrada con base a que la cifrada pudo hacer sido consecuencia de la del usuario
                        if (doMatch) {
                            request.session.isLoggedIn = true; // Variable de sesion isLoggedIn para indicar que esta autentificado
                            request.session.username = user.username; // Comparar variable tipo session con nombre de usuaario
                            return request.session.save(err => { // Se guarda la variable sesion
                                response.redirect('/construcciones');
                            });
                        } else {
                            return response.redirect('/users/login'); // Si no esta autenticado, devuelve a la pagina de login
                        }
                    }).catch(err => {
                        response.redirect('/users/login');
                    });
            } else {
                response.redirect('/users/login');
            }
        }).catch((error) => {console.log(error)});
}

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
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password); // Se crea un objeto tipo usuario que hace la solicitud de 
    nuevo_usuario.save()
        .then(([rows, fieldData])=>{
            response.redirect('/users/login');
        })
        .catch((error)=>{console.log(error);});
};