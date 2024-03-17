/* Laboratorio 13
Usar la arquitectura MVC
*/

const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth1'); // Hacemos la peticion a is-auth.js, el middleware para proteger el sitio
const planetasController = require('../controllers/planetas.controller'); // De donde saca los controladores

// Ahora las rutas llevaran a un archivo tipo ejs, uno que combina html con javaScript de forma válida
// Cada ruoter.get direcciona a una pagina de html
// Render se utiliza con ayuda de ejs, el motor de vistas

// A cada ruta se le pasa el middleware isAuth para asegurarnos de que el usuario está autentificado 
// Controlador por cada get o post
router.get('/enviar', isAuth, planetasController.get_registrar);  // Nuevo controlador con get registrar planeta
router.post('/enviar', isAuth, planetasController.post_registrar);  // Nuevo controlador con post registrar planeta
router.get('/planetas', isAuth, planetasController.get_planetas); // Nuevo controlador con get planetas 
router.get('/', planetasController.get_root); // Nuevo controlador con get raiz

// Controladores por cada raza de Starbound
router.get('/razas', planetasController.get_razas);
router.get('/humano', planetasController.get_humano);
router.get('/hylotl', planetasController.get_hylotl);
router.get('/avian', planetasController.get_avian);
router.get('/floran', planetasController.get_floran);
router.get('/apex', planetasController.get_apex);
router.get('/glitch', planetasController.get_glitch);
router.get('/novakid', planetasController.get_novakid);

module.exports = router;