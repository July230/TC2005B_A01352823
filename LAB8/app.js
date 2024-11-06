console.log("hola mundo desde node");

//fs es el módulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el string del segundo parámetro 
//en el archivo indicado en el primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola desde node');

const te_hackie = () => {
    console.log('jojo te hackié');
};

//Código asíncrono: te_hackie se ejecuta en 7 segundos
setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Código asíncrono el arreglon se imprime en orden
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

console.log("Esto se imprime antes de los números");

//http es un módulo de node con todas las funciones de un servidor web
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
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
                  <a class="navbar-item" href="https://bulma.io">
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
              
                    <a class="navbar-item">
                      Documentation
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
    
                    <div class="columns">
                      <div class="column is-half">
                        
                        <div class="block">
                          <figure class="image">
                            <img id="imagen_construir" src="" alt="Imagen de casa en construcción">
                          </figure>
                        </div>
                        <div>
                          <button id="boton_construir"></button>
                        </div>
    
                      </div>
                    </div>
    
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4">John Smith</p>
                                      <p class="subtitle is-6">@johnsmith</p>
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
                        </div>
    
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4">John Smith</p>
                                      <p class="subtitle is-6">@johnsmith</p>
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
                        </div>
    
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4">John Smith</p>
                                      <p class="subtitle is-6">@johnsmith</p>
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
                        </div>
    
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <p class="title is-4">John Smith</p>
                                      <p class="subtitle is-6">@johnsmith</p>
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
                        </div>
    
                      </div>
    
                    <table>
                        <tbody>
                            <tr><td>Manzanas</td><td id="diamantes">Diamantes</td></tr>
                        </tbody>
                        <thead>
                            <tr><th>Comida</th><th>Minerales</th></tr>
                        </thead>
                        <tfoot class="red">
                            <tr><td colspan="2">Tabla de objetos de Minecraft</td></tr>
                        </tfoot>
                    </table>
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
            <script>
            const boton = document.getElementById("boton_construir");

            const construir_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://www.movilzona.es/app/uploads-movilzona.es/2022/02/casa-minecraft-inicio-primera-planta.jpg";
                
                boton.innerHTML = "Terminar casa";
                boton.className = "button is-warning";
                boton.onclick = terminar_casa;
            };
            
            const terminar_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg";
                
                boton.innerHTML = "Destruir casa";
                boton.className = "button is-danger";
                boton.onclick = destruir_casa;
            };
            
            const destruir_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://minecraft.tools/es/css/img/index/02.jpg";
                
                boton.innerHTML = "Construir casa";
                boton.className = "button is-primary";
                boton.onclick = construir_casa;
            };
            
            destruir_casa();
            </script>
        </body>
    </html>
    `);
    response.end();
});

server.listen(3000);