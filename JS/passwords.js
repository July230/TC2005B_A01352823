/*
Ian Julián Estrada Castro
Archivo JavaScript para erificar contraseñas
*/

const boton = document.getElementById("validarContrasenia"); 

const password = () => {
    console.log("click");
    const contrasenia = document.getElementById("password").value;
    const confirmarContrasenia = document.getElementById("confirmPassword").value;
    const MensajeError = document.getElementById("Mensaje_Error");

    // Verificar si las contraseñas coinciden
    if(contrasenia !== confirmarContrasenia){
        MensajeError.textContent = "Las contraseñas no coinciden";
    } else {
        // Utilizar una expresión regular para comprobar que cuenta con caracteres especiales
        const patron = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        // La contraseña tiene al menos 8 caracteres, al menos una mayuscula, al menos una minuscula, al menos un digito  y al menos un caracter especial
        if(!patron.test(contrasenia)){
            MensajeError.textContent = "La contraseña debe tener al menos 8 caracteres, al menos una mayuscula, al menos una minuscula, al menos un digito  y al menos un caracter especial";   
        } else {
            MensajeError.textContent = "Contraseña validada correctamente";
            alert("Contraseña validada correctamente")
            MensajeError.getElementById("Mensaje_Error").style.visibility = "hidden";
        }
    }
}

boton.onclick = password;

const verificarRequisitos = () => {
    const contrasenia = document.getElementById("password").value;
    const requisitos = document.getElementById("requisitos");

    // verificar la contraseña cumple con los requisitos usando RegEx
    const tieneMayuscula = /[A-Z]/.test(contrasenia);
    const tieneMinuscula = /[a-z]/.test(contrasenia);
    const tieneDigito = /\d/.test(contrasenia);
    const tieneCaracterEspecial = /[°#$%&*+\-()_]/.test(constrasenia);
    const longitudCorrecta = constrasenia.length >= 8;

    // construir mensaje de requisitos
    let mensaje = "Requisitos de contraseña: ";
    mensaje += longitudCorrecta ? "<br> - Tiene al menos 8 caracteres" : "<br> - La contraseña debe ser de al menos 8 caracteres";
    mensaje += tieneMayuscula ? "<br> - Tiene al menos una mauyscula" : "<br> - Falta una mayuscula";
    mensaje += tieneMinuscula ? "<br> - Tiene al menos una minuscula" : "<br> - Falta una minuscula";
    mensaje += tieneDigito ? "<br> - Tiene al menos una minuscula" : "<br> - Falta una minuscula";
    mensaje += tieneCaracterEspecial ? "<br> - Tiene al menos un caracter especial" : "<br> - Falta un caracter especial";

    // Actualizar el contenido del elemento html
    requisitos.innerHTML = mensaje;
}

document.getElementById("requisitos").addEventListener("input", verificarRequisitos);