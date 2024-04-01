/* Middlware que se ejecuta cuando el rol es de explorador */
module.exports = (request, response, next) => {
    let can_register = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'registrar') {
            can_register = true;
        }
    }
    if (can_register) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}