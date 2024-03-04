/* Laboratorio 12 
Refactorizar el código usando path y ejs
*/

const express = require('express');
const router = express.Router();

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];

// Ahora las rutas llevaran a un archivo tipo ejs, uno que combina html con javaScript de forma válida
// Cada ruoter.get direcciona a una pagina de html
// Render se utiliza con ayuda de ejs, el motor de vistas
router.get('/', (request, response, next) => {
    console.log('Ruta /')
    response.render('starbound'); // En lugar de poner el html aquí, redireccionar al html con ejs
});

router.get('/enviar', (request, response, next) => { // El primer parametro es la ruta asociada a un enlace en el html
    response.render('enviar'); // Hacer render de enviar
});

router.post('/enviar', (request, response, next) => {
    console.log(request.body); // Hará la petición del cuerpo 
    planetas.push(request.body); // Agregará la respuesta en el arreglo planetas definido aqui mismo
    response.redirect('planetas');
});

router.get('/planetas', (request, response, next) => { // En este caso hay un enlace que lleva a planetas
    console.log('Ruta /planetas');
    response.render('planetas', { // Como no conoce el contenido del arreglo, indicarlo exolícitamente
        planetas: planetas,
    });
});

router.get('/humano', (request, response, next) => { // En este caso, un enlace del html lleva a humano
    response.render('humano'); // Se hace render de la página humano
});

router.get('/hylotl', (request, response, next) => { 
    response.render('hylotl'); 
});

router.get('/avian', (request, response, next) => { 
    response.render('avian'); 
});

router.get('/floran', (request, response, next) => { 
    response.render('floran'); 
});

router.get('/floran', (request, response, next) => { 
    response.render('floran'); 
});

router.get('/apex', (request, response, next) => { 
    response.render('apex'); 
});

module.exports = router;