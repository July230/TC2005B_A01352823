/*Este directorio es para rutas*/

const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth'); // Hacemos la peticion a is-auth.js, el middleware para proteger el sitio
const canView = require('../util/can-view');
const canBuild = require('../util/can-build');
const construccionesController = require('../controllers/construcciones.controller'); // De donde saca los controladores


// Aquí el orden importa, va de middleware en middleware, hay que ir de lo especifico a lo general

// Ahora que tenemos que agregar la constante isAuth por cada ruta
router.get('/construir', isAuth, canBuild, construccionesController.get_construir); // Nuevo controlador con get construir

router.post('/construir', isAuth, canBuild, construccionesController.post_construir); // Nuevo controlador con post construir

router.get('/buscar/:valor_busqueda', isAuth, canView, construccionesController.get_buscar);
// En ocasiones es necesario recuperar un registro en particular de la base de datos
// Para indicarle al ruteador de express que un valor en una ruta es una varibale, podemos hacerlo agregando como prefijo el símbolo :
router.get('/:construccion_id', isAuth, canView, construccionesController.get_root);

router.get('/', isAuth, canView, construccionesController.get_root); // Nuevo controlador con get raiz

// Ahora son unicamente las rutas

// use y get hacen lo mismo pero get es específico para get y use es general


module.exports = router;
