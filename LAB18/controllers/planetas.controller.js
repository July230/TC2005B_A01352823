// Un archivo de controlador, la lógica de como va a interactuar
// Por controlador hay un modelo

const { response } = require("express");
const Planeta = require("../models/planeta.model"); // El modelo que saca

// El orden en controladores ya no importa porque sólo es lógica
exports.get_registrar = (request, response, next) => { // Para ruta get de registrar planeta
    response.render('enviar',{  // Hace render a la pagina construir
        username: request.session.username || '', // Como la cookie se usara en multiples rutas, solicitarla
        csrfToken: request.csrfToken(), // Importante enviar el token a las vistas del controlador con formularios
    }); 
};

exports.post_registrar = (request, response, next) => { // Para la ruta post
    console.log(request.body); // Imprime la peticion
    // Antes se hacia push, pero ahora eso esta en modelo
    const planeta = new Planeta(request.body.nombre, request.body.imagen, request.body.descripcion); // Crear una instancia de la clase
    planeta.save()
        .then(([rows, fieldData]) => {
        // La cookie se define dentro para que el codigo se ejecute antes de renderizar la pagina
        // Para que la cookie no pueda ser leída por el código js del navegador, se le puede agregar la propiedad HttpOnly
        response.setHeader('Set-Cookie', 'ultimo_planeta=', request.body.name + '; HttpOnly');
        response.redirect('/planetas');

        }).catch((error) => {console.log(error)}); // Se hace catch error y se muestra el error en consola
};


exports.get_planetas = (request, response, next) => { // Para la ruta que tiene los planetas registrados
    console.log('Ruta /planetas');
    let ultimo_planeta = request.get('Cookie'); // Haces request de la cookie definida en lab14.js
    // Para acceder a un valor de una cookie en particular, puedes hacer manipulando el string con split
    
    if(ultimo_planeta){ // En caso de que no exista la cookie, un if para así evitar que truene
        ultimo_planeta = ultimo_planeta.split('=')[1];
    } else {
        ultimo_planeta = '';
    }
    console.log(ultimo_planeta);
    Planeta.fetchAll().then(([rows, fieldData]) => { // En el modelo, fetchAll es un script para leer la tabla
        console.log(rows);
        response.render('planetas', { // Se hace render con la lectura de la tabla planetas en SQL
            planetas: rows, // Las filas de la tabla Planeta
            ultimo_planeta: ultimo_planeta, // La cookie del ultimo planeta registrado
            username: request.session.username || '', // Usuario, en caso de que no exista, string vacio
        });
    }). catch((error) => {console.log(error)}); 
}

exports.getPlanetas = (request, response, next) => {
    Planeta.fetchAll() // Metodo del modelo
        .then(([rows, fieldData]) => { // Si se cumple la promesa
            response.render('vista', {
                Planeta: rows
            })
        })
        .catch(err => console.log(err)); // catch es en caso de que no, por lo que el error se muestra en consola
}

exports.get_root = (request, response, next) => { // Para ruta raiz
    console.log('Ruta /');
    response.render('starbound', { // Hace render a la pagina raiz
        username: request.session.username || '', // De nuevo, si no existe, truena, asi que declarar la variable username de tipo session
    }); 
};

exports.get_razas = (request, response, next) => { // Para la ruta de get razas
    console.log("Ruta razas /razas");
    response.render('razas',{ // Hace render a la pagina de las razas
        username: request.session.username || '',
    });
}