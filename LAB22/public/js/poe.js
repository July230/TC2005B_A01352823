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