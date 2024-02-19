/*En este archivo se revisa la programación orientada a objetos*/

const boton = document.getElementById("boton_construir"); 


const construir_casa = () => {
    console.log("click");
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://i.redd.it/iynraw638q531.png";
    boton.innerHTML = "Terminar casa" // Modifica el html internamente
    boton.className = "button is-link"; // Cambiar el color desde js
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