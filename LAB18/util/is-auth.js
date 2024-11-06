/* Nuevo archivo is-auth
Para mejorar la seguridad de un sitio, es importante proteger las rutas

exports.ruta = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/login');
    }
    //Resto del código de la ruta...
}
Esto nos permite proteger una ruta en particular, pero tendría que hacerse en cada ruta. 
Hay una alternativa más elegante para evitar la repetición de código, implementando la protección en un middleware
*/

module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) { // Si la variable isLoggedIn no se encuentra
        return response.redirect('/login');
    }
    next();
}