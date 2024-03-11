/*Este directorio es para rutas*/

const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller'); // De donde saca los controladores


// Aquí el orden importa, va de middleware en middleware, hay que ir de lo especifico a lo general
router.get('/construir', construccionesController.get_construir); // Nuevo controlador con get construir

router.post('/construir', construccionesController.post_construir); // Nuevo controlador con post construir

// En ocasiones es necesario recuperar un registro en particular de la base de datos
// Para indicarle al ruteador de express que un valor en una ruta es una varibale, podemos hacerlo agregando como prefijo el símbolo :
router.get('/:construccion_id', construccionesController.get_root);

router.get('/', construccionesController.get_root); // Nuevo controlador con get raiz

// Ahora son unicamente las rutas

// use y get hacen lo mismo pero get es específico para get y use es general


module.exports = router;
