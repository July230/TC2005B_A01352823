/* Nuevo módulo de controladores para usuarios.routes */

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '', // En caso de que no exista el usuario, string vacio
    }); // Render de la plantilla login
};

exports.post_login = (request, response, next) => {
    console.log(request.body);
    request.session.username = request.body.username; // Gracias al modulo session, ahora tenemos session para crear un nuevo objeto tipo session
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};