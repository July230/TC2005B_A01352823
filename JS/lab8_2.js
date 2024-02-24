/*
Ian Julián Estrada Castro
María Guadalupe Soria Velázquez
Laboratorio 8, crear una aplicacion que al hacer una petición, devuelva una de las páginas de los laboratorios
*/

// Modulo http
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
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
                <a class="navbar-item" href="https://bulma.io">
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
                <table>
                    <tbody>
                        <tr><td>Mesa</td><td id="Diamantes">Diamantes</td></tr>
                    </tbody>
                    <thead>
                        <tr><th>Muebles</th><th>Minerales</th></tr>
                    </thead>
                    <tfoot class="red">
                        <tr><td colspan="2">Tabla de objetos de Starbound</td></tr>
                    </tfoot>
                </table>
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
                console.log("click");
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://i.redd.it/iynraw638q531.png";
                boton.innerHTML = "Terminar casa" // Modifica el html internamente
                boton.className = "button is-link"; // Cambiar el color del boton desde js
                boton.onclick = terminar_casa;
            };
            
            const terminar_casa = () => {
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://preview.redd.it/lz8pek0c6ll01.png?auto=webp&s=266930a16674a95266e31b03c84db3955fe450cb";
                boton.innerHTML = "Destruir casa";
                boton.className = "button is-danger";
                boton.onclick = destruir_casa;
            }
            
            const destruir_casa = () => {
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://i.redd.it/6c1r6kb495mx.jpg";
            
                boton.innerHTML = "Construir casa";
                boton.className = "button is-primary"
                boton.onclick = construir_casa;
            }
            
            boton.onclick = construir_casa; // Asociar el evento a una función (una función a otra función)
            </script>
        </body>
    </html>
    `)
    response.end();
});

server.listen(3000);