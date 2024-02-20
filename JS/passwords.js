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