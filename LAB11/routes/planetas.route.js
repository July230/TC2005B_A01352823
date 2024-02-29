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
`;

const planetas = [{nombre: "Mundo desértico", imagen: "https://starbounder.org/mediawiki/images/1/18/Desert_Planet.png", descripcion: "Los mundos desérticos se caracterizan por estar cubiertos casi en su totalidad por arena, aun así, es posible hallar vida."}];




router.get('/', (request, response, next) => {
    response.send('/');
})

router.get('/planetas', (request, response, next) => {
    response.render('/planetas');
})

router.post('/enviar', (request, response, next) => {
    console.log(request.body);
    planetas.push(request.body);
    response.redirect('/planetas');
});

app.use((request, response, next) => {
    response.status(404);
    response.render();
  });

module.exports = router;