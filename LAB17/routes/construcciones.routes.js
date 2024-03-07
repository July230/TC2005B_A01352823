/*Este directorio es para rutas*/

const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller'); // De donde saca los controladores


// Aquí el orden importa, va de middleware en middleware
router.get('/construir', construccionesController.get_construir); // Nuevo controlador con get construir

router.post('/construir', construccionesController.post_construir); // Nuevo controlador con post construir

router.get('/', construccionesController.get_root); // Nuevo controlador con get raiz

// Ahora son unicamente las rutas

// use y get hacen lo mismo pero get es específico para get y use es general


module.exports = router;
