const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const construcciones = [
  {
    nombre: "casa", 
    imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
  }
];

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/construir', (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Minecraft</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27Ahugh_giimXgC5jzZNAIdsZGxqjA-bvxw-4gRbBfF8evxX2rYwG4eI_fRiurOTiZ_c&usqp=CAU" width="112" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item" href="/construir">
                    Construir
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          <section class="section">
              <div class="container">
                  <h1 class="title">Agregar una construcción</h1>
                  <form action="/construir" method="POST">
                    <label class="label" for="nombre">Nombre</label>
                    <input name="nombre" id="nombre" type="text" class="input"><br>
                    <label class="label" for="imagen">Imagen</label>
                    <input name="imagen" id="imagen" type="text" class="input"><br><br>
                    <input class="button is-success" type="submit" value="Construir">
                  </form>
              </div>
          </section>
          <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>
      </body>
  </html>
  `); 
});

app.post('/construir', (request, response, next) => {
  console.log(request.body);
  construcciones.push(request.body);
  response.redirect('/');
});

app.get('/', (request, response, next) => {
  console.log('Ruta /');
  let html_respuesta = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Minecraft</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27Ahugh_giimXgC5jzZNAIdsZGxqjA-bvxw-4gRbBfF8evxX2rYwG4eI_fRiurOTiZ_c&usqp=CAU" width="112" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item" href="/construir">
                    Construir
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          <section class="section">
              <div class="container">
                  <h1 class="title">Hola mundo de Minecraft!</h1>
  
                  <div class="columns">`;

  for (let construccion of construcciones) {
    
    html_respuesta += `
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="${construccion.imagen}" alt="Imagen de ${construccion.nombre}">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img src="${construccion.imagen}" alt="Imagen de ${construccion.nombre}">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4">${construccion.nombre}</p>
                                      <p class="subtitle is-6">@${construccion.nombre}</p>
                                    </div>
                                  </div>
                              
                                  <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                  </div>
                                </div>
                              </div>
                        </div>`;
  }

  html_respuesta += `
              </div>
          </section>
          <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>
      </body>
  </html>
  `; 
  response.send(html_respuesta);
});

app.use((request, response, next) => {
  response.status(404);
  response.send(`
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Minecraft</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="/">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27Ahugh_giimXgC5jzZNAIdsZGxqjA-bvxw-4gRbBfF8evxX2rYwG4eI_fRiurOTiZ_c&usqp=CAU" width="112" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item" href="/construir">
                    Construir
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          <section class="section">
              <div class="container">
                  <h1 class="title">Ups, la aldea que estás buscando no existe</h1>
              </div>
          </section>
          <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>
      </body>
  </html>
  `);
});

app.listen(3000);