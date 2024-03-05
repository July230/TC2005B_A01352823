/* Nuevo módulo de controladores para usuarios.routes */

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
    }); // Render de la plantilla login
};

exports.post_login = (request, response, next) => {
    console.log(request.body);
    request.session.username = request.body.username; // Gracias al modulo session, ahora tenemos session para crear un nuevo objeto tipo session
    response.redirect('/');
};