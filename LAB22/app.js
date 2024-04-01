/* Archivo app para laboratorio 13 */

// Es necesario haer iniciado el proyecto con npm init
// Es necesario instalar body parser
// Es necesario instalar el motor de templates como EJS
const express = require('express');
const app = express();

// 
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

// Instalar paquete multer para manejar archivos desde node
const multer = require('multer');

// filestorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
      //'uploads': Es el directorio del servidor donde se subirán los archivos 
      callback(null, 'public/uploads');
  },
  filename: (request, file, callback) => {
      //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
      //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
      callback(null, Number(new Date()).toString() + file.originalname);
  },
});
//Idealmente registramos multer después de bodyParser 

//En el registro, pasamos la constante de configuración y usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

// Un ataque común es el Cross-Site Request Forgery (CSRF), el cual implica aprovecharse de una sesión de otro usuario, comúnmente perpretado desde una página que parece la oficial pero que en realidad no lo es.
// Para evitar ataques de CSRF, tenemos que asegurar que nuestros usuarios estén trabajando sobre las vistas que nosotros proveemos. Esto lo podemos lograr por medio de un Token CSRF en nuestras formas y con ayuda de la instalación del paquete csurf.
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); //...Y después del código para inicializar la sesión... 

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