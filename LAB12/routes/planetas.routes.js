/* Laboratorio 12 
Refactorizar el código usando path y ejs
*/

const express = require('express');
const router = express.Router();

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];

// Ahora las rutas llevaran a un archivo tipo ejs, uno que combina html con javaScript de forma válida
router.get('/enviar', (request, response, next) => {
    response.render('enviar'); // En lugar de poner el html aquí, redireccionar al html con ejs
});

router.post('/construir', (request, response, next) => {
    console.log(request.body);
    planetas.push(request.body);
    response.redirect('/');
});
router.get('/', (request, response, next) => {
    console.log('Ruta /');
    response.render('planetas', { // Como no conoce el contenido del arreglo, indicarlo exolícitamente
        planetas: planetas,
    });
});
module.exports = router;