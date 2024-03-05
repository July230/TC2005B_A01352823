/* Nuevo módulo de controladores para usuarios.routes */

exports.get_login = (request, response, next) => {
    response.render('login');
};