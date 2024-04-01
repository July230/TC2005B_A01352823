/* Middlware que se ejecuta cuando el rol es de constructor */
module.exports = (request, response, next) => {
    let can_build = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'construir') {
            can_build = true;
        }
    }
    if (can_build) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}