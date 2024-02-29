/*
Ian Julián Estrada Castro
Actividad laboratorio 10
*/


// http es un módulo de node con todas las funcones de un servidor web
const http = require('http');

function arreglarBuffer(buffer){
    for(let letter in buffer){
        buffer = buffer.replaceAll("%3A", ":");
        buffer = buffer.replaceAll("%2F", "/");
        buffer = buffer.replaceAll("+", " ");
    }
    return buffer;
};

const header = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Starbound</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"> <!--Importar el ccs de bulma-->
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://i1.sndcdn.com/artworks-000109033152-zvlom3-t500x500.jpg" width="112" height="28">
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
                
                    <a class="navbar-item" href="/planetas">
                        Planetas
                    </a>

                    <a class="navbar-item" href="/enviar">
                        Enviar planeta
                    </a>
                
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        Razas
                        </a>
                
                        <div class="navbar-dropdown">
                        <a class="navbar-item" href="/humano">
                            Humano
                        </a>
                        <a class="navbar-item" href="/hylotl">
                            Hylotl
                        </a>
                        <a class="navbar-item" href="/avian">
                            Avian
                        </a>
                        <a class="navbar-item" href="/floran">
                            Floran
                        </a>
                        <a class="navbar-item" href="/apex">
                            Apex
                        </a>
                        <a class="navbar-item" href="/glitch">
                            Glitch
                        </a>
                        <a class="navbar-item" href="/novakid">
                            Novakid
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    <a class="navbar-item" href="index.html">
                        Regresar a principal
                    </a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-link">
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
    `;

const footer = `
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
    `;

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];


const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
          <h1 class="title">Hola Mundo Starbound</h1>
          <p class="subtitle">Mi primer sitio con <strong>Bulma</strong>!</p>
          <div class="block">
            <figure class="image is-256x256">
              <img id="imagen_construir" src="https://i.redd.it/6c1r6kb495mx.jpg" >
            </figure>
          </div>
          <div>
            <button id="boton_construir" class="button is-primary">Construir casa</button> <!--Un boton para cambiar imagen-->
          </div>
          <br>
        </div>`)
        response.write(footer);
        response.end();
      } else if (request.url == "/planetas" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
            <h1 class="title">Hola Mundo Starbound</h1>
            <div class="columns">
        `);

        let tarjetas_planetas = '';
        for(let planeta of planetas){
          tarjetas_planetas += `
              <div class="column">
                  <div class="card">
                      <div class="card-image">
                      <figure class="image is-4by3">
                          <img src="${planeta.imagen}" alt="Placeholder image">
                      </figure>
                      </div>
                      <div class="card-content">
                          <div class="media">
                              <div class="media-left">
                              <figure class="image is-48x48">
                                  <img src="${planeta.imagen}" alt="Placeholder image">
                              </figure>
                              </div>
                              <div class="media-content">
                              <p class="title is-4">${planeta.nombre}</p>
                              <p class="subtitle is-6">@johnsmith</p>
                              </div>
                          </div>
                      
                          <div class="content">
                              ${planeta.descripcion}
                              <a>@bulmaio</a>.
                              <a href="#">#css</a> <a href="#">#responsive</a>
                              <br>
                              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                      </div>
                  </div>
              </div>
          `;
        }
      response.write(tarjetas_planetas);
      response.write(`</div>`);
      response.write(footer);
      response.end();
      } else if (request.url == "/enviar" && request.method == "GET"){
        response.write(header);
        response.write(`
            <h1 class="title">Enviar un planeta</h1>
            <form action="/enviar" method="POST">
                <label class="label" for="nombre">Tipo</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>
                <label class="label" for="imagen">Imagen</label>
                <input name="imagen" id="imagen" type="text" class="input"><br>
                <label class="label" for="descripcion">Descripción</label>
                <input name="descripcion" id="descripcion" type="text" class="input"><br><br> 
                <input class="button is-info" type="submit" value="Enviar">
            </form>
        `)

        // Al servidor llegan los name's
        // id es del lado del usuario
        response.write(footer);
        response.end();
      } else if (request.url == '/enviar' && request.method == 'POST') {
        request.on('data', (dato) => { // on escucha los eventos, cada dato que llega, imprime el dato que le llega al servidor 
            console.log(dato);
        });
        // Tal cual, en consola el texto aparece en ascii (hexadecimal) guardado en un buffer, llega en bytes

        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => { // Esta función devolvera lo enviado por on en forma de texto
            let datos_completos = Buffer.concat(datos).toString();
            // Corrige los caracteres codificados en la cadena de datos
            datos_completos = arreglarBuffer(datos_completos);
            console.log(datos_completos);
            // Parsea los datos como nombre, imagen y descripcion
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            const descripcion = datos_completos.split('&')[2].split('=')[1]; 
            planetas.push({nombre: nombre, imagen: imagen, descripcion: descripcion});
            
            // Redirigir al usuario a la página principal después de procesar el formulario
            response.statusCode = 302; // Código de estado de redirección
            response.setHeader('Location', '/planetas'); // URL a la que refirigir 
            response.end();

            

        });

      } else if(request.url == "/humano") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/starbound/3/3d/Human_Male.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/starbound/3/3d/Human_Male.jpg" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Humano</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
              
                  <div class="content">
                    Nómadas por naturaleza o quizás, por necesidad, los humanos se extendieron sin miedo a la inmensidad
                    del espacio a tal punto de que se volvieron la raza más abundante en la galaxia.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
        </div>
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if (request.url == "/hylotl") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://static.wikia.nocookie.net/starbound/images/f/f4/CaligulasAquarium.jpg/revision/latest?cb=20150108165612&path-prefix=es" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://static.wikia.nocookie.net/starbound/images/f/f4/CaligulasAquarium.jpg/revision/latest?cb=20150108165612&path-prefix=es" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Hylotl</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if (request.url == "/avian") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://playstarbound.com/wp-content/uploads/2016/04/Raceportrait_avian.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://playstarbound.com/wp-content/uploads/2016/04/Raceportrait_avian.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Avian</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if (request.url == "/floran") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://starbounder.org/mediawiki/images/thumb/d/d2/Floran-ExplorersGuide.png/250px-Floran-ExplorersGuide.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://starbounder.org/mediawiki/images/thumb/d/d2/Floran-ExplorersGuide.png/250px-Floran-ExplorersGuide.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Avian</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if(request.url == "/apex") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://static.wikia.nocookie.net/starboundgame/images/6/65/Apex_%28Male%29_-_Race_-_Starbound.png/revision/latest/scale-to-width/360?cb=20220218121928" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://static.wikia.nocookie.net/starboundgame/images/6/65/Apex_%28Male%29_-_Race_-_Starbound.png/revision/latest/scale-to-width/360?cb=20220218121928" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Avian</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if(request.url == "/glitch") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://preview.redd.it/glitch-upscale-on-u-madneutronstars-character-brightblade-v0-xhuaa0abag981.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://preview.redd.it/glitch-upscale-on-u-madneutronstars-character-brightblade-v0-xhuaa0abag981.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Avian</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      } else if(request.url == "/novakid") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://static.wikia.nocookie.net/starboundgame/images/f/f0/Novakid_Male.png/revision/latest?cb=20130609132450" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://static.wikia.nocookie.net/starboundgame/images/f/f0/Novakid_Male.png/revision/latest?cb=20130609132450" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Avian</p>
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
        `);
        response.write(`</div>`);
        response.write(footer);
        response.end();
      }
      
      else {
        //Código de respuesta para recurso no encontrado
        response.statusCode = 404;

        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`<h1>Planeta no identificado</h1>`);
        response.write(footer);
        response.end();
      }
});

server.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000"); // Mensaje al iniciar
});