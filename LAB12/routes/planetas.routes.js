/* Laboratorio 12 
Refactorizar el código usando path y ejs
*/

const express = require('express');
const router = express.Router();

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];

// Ahora las rutas llevaran a un archivo tipo ejs, uno que combina html con javaScript de forma válida
router.get('/', (request, response, next) => {
    console.log('Ruta /')
    response.render('starbound'); // En lugar de poner el html aquí, redireccionar al html con ejs
});

router.get('/enviar', (request, response, next) => {
    response.render('enviar'); // Hacer render de enviar
});

router.post('/enviar', (request, response, next) => {
    console.log(request.body); // Hará la petición del cuerpo 
    planetas.push(request.body); // Agregará la respuesta en el arreglo planetas definido aqui mismo
    response.redirect('planetas');
});

router.get('/planetas', (request, response, next) => {
    console.log('Ruta /planetas');
    response.render('planetas', { // Como no conoce el contenido del arreglo, indicarlo exolícitamente
        planetas: planetas,
    });
});
module.exports = router;