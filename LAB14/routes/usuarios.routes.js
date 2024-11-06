/* Nuevo módulo de rutas para usuarios */
const express = require('express');
const router = express.Router();

const controllerUsuarios = require('../controllers/usuarios.controller');

router.get('/login', controllerUsuarios.get_login);
router.post('/login', controllerUsuarios.post_login);
router.get('/logout', controllerUsuarios.get_logout);

module.exports = router;