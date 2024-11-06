/* Laboratorio 12 
Refactorizar el código usando path y ejs
*/

// Módulo fs
const filesystem = require('fs');

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
    
    // Convertir los datos en formato de texto
    const data = JSON.stringify(planetas);

    // Escribir los datos en un archivo de text con filesystem
    filesystem.writeFile('planetas.txt', data, (err) => { // writeFile es asincrono
      if(err){
        console.error('Error al guardar los datos', err); // Si hay algun error, mostrar el error
      }
      console.log('Datos guardados en planetas'); // la escritura y redireccion deben estar dentro para evitar errores
      console.log(planetas);
      response.redirect('/planetas');
    });
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

router.get('/apex', (request, response, next) => { 
    response.render('apex'); 
});

router.get('/glitch', (request, response, next) => { 
    response.render('glitch'); 
});

router.get('/novakid', (request, response, next) => { 
    response.render('novakid'); 
});

module.exports = router;