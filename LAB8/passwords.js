/*
Ian Julián Estrada Castro
Archivo JavaScript para verificar contraseñas
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
        if(!patron.test(contrasenia)){ // Si pasa la prueba
            MensajeError.textContent = "La contraseña debe tener al menos 8 caracteres, al menos una mayuscula, al menos una minuscula, al menos un digito  y al menos un caracter especial";   
        } else {
            MensajeError.textContent = "Contraseña validada correctamente";
            alert("Contraseña validada correctamente")
            document.getElementById("Mensaje_Error").style.visibility = "hidden";
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
    const tieneCaracterEspecial = /[°#$%&*+\-()_]/.test(contrasenia);
    const longitudCorrecta = contrasenia.length >= 8;

    // construir mensaje de requisitos
    let mensaje = "La contraseña tiene:<br>";
    /*mensaje += longitudCorrecta ? "<i class='material-icons green-text'>check_box</i> Al menos 8 caracteres<br>" : "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos 8 caracteres<br>";
    mensaje += tieneMayuscula ? "<i class='material-icons green-text'>check_box</i> Al menos una mayúscula<br>" : "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos una mayúscula<br>";
    mensaje += tieneMinuscula ? "<i class='material-icons green-text'>check_box</i> Al menos una minúscula<br>" : "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos una minúscula<br>";
    mensaje += tieneDigito ? "<i class='material-icons green-text'>check_box</i> Al menos un dígito<br>" : "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos un dígito<br>";
    mensaje += tieneCaracterEspecial ? "<i class='material-icons green-text'>check_box</i> Al menos un caracter especial<br>" : "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos un caracter especial<br>";*/
    // condición ? expresión 1 : expresión 2, es una forma abreviada de escribir if-else


    if(longitudCorrecta){
        mensaje += "<i class='material-icons green-text'>check_box</i> Al menos 8 caracteres<br>";
    } else {
        mensaje += "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos 8 caracteres<br>";
    }

    if(tieneMayuscula){
        mensaje += "<i class='material-icons green-text'>check_box</i> Al menos una mayúscula<br>";
    } else {
        mensaje += "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos una mayúscula<br>";
    }

    if(tieneMinuscula){
        mensaje += "<i class='material-icons green-text'>check_box</i> Al menos una minúscula<br>";
    } else {
        mensaje += "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos una minúscula<br>";
    }

    if(tieneDigito){
        mensaje += "<i class='material-icons green-text'>check_box</i> Al menos un dígito<br>"
    } else {
        mensaje += "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos un dígito<br>";
    }

    if(tieneCaracterEspecial){
        mensaje += "<i class='material-icons green-text'>check_box</i> Al menos un caracter especial<br>";
    } else {
        mensaje += "<i class='material-icons red-text'>check_box_outline_blank</i> Al menos un caracter especial<br>";
    }

    // Actualizar el contenido del elemento html
    requisitos.innerHTML = mensaje;
}

document.getElementById("password").addEventListener("input", verificarRequisitos);