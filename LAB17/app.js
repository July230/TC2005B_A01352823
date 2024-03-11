/* Archivo app para laboratorio 13 */

// Es necesario haer iniciado el proyecto con npm init
// Es necesario instalar body parser
// Es necesario instalar el motor de templates como EJS
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Para preparar el entorno para trabajar con sesiones, agregamos como middleware el manejo de sesiones:
const session = require('express-session'); // Con el modulo express-session

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); // directorio estatico public

const bodyParser = require('body-parser'); // Para manipular facilmente los detos de las peticiones

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Registrar el middleware con el módulo construcciones
const rutasUsuarios = require('./routes/usuarios.routes'); // Nuevo modulo de rutas usuarios
app.use('/users', rutasUsuarios);

const rutasConstrucciones = require('./routes/construcciones.routes');

app.use('/construcciones', rutasConstrucciones);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404_1.html')
  );
});

app.listen(3000);