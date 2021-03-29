function validar (formulario) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      alert("Email inválido");
      return false;
    }
    
    if (formulario.contrasena.value.trim().length <= 8) {
        alert("Debes escribir mas de 8 caracteres");
        return false;
      }
      
      if (formulario.contrasena.value != formulario.confirmacion.value) {
        alert("Confirmación no coincide");
        return false;
      }

      if (formulario.generofavorito.value == "") {
        alert("El genero es obligatorio");
        return false;
      }

      if (formulario.edad.value == "") {
        alert("La edad es obligatorio");
        return false;
      }
      
      if (!formulario.terminoYCondiciones.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
      }

    return true;     
}