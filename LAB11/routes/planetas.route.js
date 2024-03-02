/* Rutas del laboratorio 11 */

const express = require('express');
const router = express.Router();

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
        </body>
    </html>
`;

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];

// Los archivos se reestructuran en módulos, como aún no es muy grande, entonces es un módulo por página a mostrar
router.get('/', (request, response, next) => {
    response.send(`
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
                </div>
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

router.get('/planetas', (request, response, next) => {
    console.log('/planetas');
    let html_respuesta = header;
            html_respuesta += `<h1 class="title">Hola Mundo Starbound</h1>`;
            html_respuesta += `<div class="columns">`;
            for(let planeta of planetas){
                html_respuesta += `
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
        html_respuesta += `</div>`;
        html_respuesta += footer;
        response.send(html_respuesta); // Envía la respuesta completa
});

router.get('/enviar', (request, response, next) => {
    html_respuesta = header;
    html_respuesta += `
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
    `;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.post('/enviar', (request, response, next) => {
    console.log(request.body); // Los datos de enviar son capturados por el servidor y se almacenan en el arreglo planetas
    planetas.push(request.body); // Con request body se accede al cuerpo de la solicitud http que se está enviando al servidor
    response.redirect('/planetas');
});

router.use('/humano', (request, response, next) => {
    html_respuesta = header;
    html_respuesta += `
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
        </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/hylotl', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/avian', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/floran', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/apex', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/glitch', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use('/novakid', (request, response, next) => {
    let html_respuesta = header;
    html_respuesta += `
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
    </div>`;
    html_respuesta += footer;
    response.send(html_respuesta);
});

router.use((request, response, next) => {
    response.status(404);
    response.send(`
        ${header}
        <h1>Lo que buscas no existe</h1>
        ${footer};
    `);
});

module.exports = router;