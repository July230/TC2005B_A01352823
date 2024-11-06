/*Este directorio es para rutas*/

const express = require('express');
const router = express.Router();

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/840_560.jpeg"}];

router.get('/construir', (request, response, next) => {
    response.render('construir'); 
});
router.post('/construir', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});
router.get('/', (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: construcciones,
    });
});
module.exports = router;