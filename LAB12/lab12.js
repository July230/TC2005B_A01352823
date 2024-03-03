const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path') // Path es un modulo de node
app.use(express.static(path.join(__dirname, 'public'))); // Darles acceso a la carpeta pública

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// Registrar el middleware con el modulo construcciones
const rutasPlanetas = require('./routes/planetas.routes.js'); // Con el punto se indica que está al mismo nivel que el archivo a iniciar

// Llevar a la ruta asociada a la constante rutasConstrucciones
app.use('/', rutasPlanetas);

// Si no se encuentra la ruta
app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
      path.join(__dirname, 'views', '404.html')
      );
});

app.listen(3000);
