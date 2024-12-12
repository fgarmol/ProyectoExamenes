window.addEventListener("load", function() {

    let usuarios = [{ nombre: "admin", password: "admin", rol: "Administrador" }];
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
  
    function registrar(usuario, password) {
  
      // Verificar si el usuario ya está registrado
      if (comprobarUsuario(usuario)) {
        console.log("El usuario ya está registrado.");
        // TODO:  mostrar mensaje de error en el DOM en caso necesario
        return;
      } else {
        console.log("Usuario Válido");
  
        // Validar la contraseña
        let validacion = validarContraseña(password);
        if (validacion !== "Contraseña válida.") {
          console.log(validacion);
          return;
        }
      }
  
      // Si todo está bien, agregar el nuevo usuario
      usuarios.push({ nombre: usuario, password: password, rol: "Usuario" });
      console.log("Usuario registrado exitosamente.");
    }
  
    function comprobarUsuario(usuario) {
      // Verifica si el usuario ya está registrado
      
      return usuarios.some((u) => u.nombre === usuario);
    }
  
    function validarContraseña(cont) {
      const longitudValida = /^.{8,}$/;
      const tieneMayuscula = /[A-Z]/;
      const tieneMinuscula = /[a-z]/;  // Agregar validación para minúsculas
      const tieneNumero = /[0-9]/;
      const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
  
      if (!longitudValida.test(cont)) {
        return "La contraseña debe tener al menos 8 caracteres.";
      }
      if (!tieneMayuscula.test(cont)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
      }
      if (!tieneMinuscula.test(cont)) {  // Verificación de minúsculas
        return "La contraseña debe contener al menos una letra minúscula.";
      }
      if (!tieneNumero.test(cont)) {
        return "La contraseña debe contener al menos un número.";
      }
      if (!tieneCaracterEspecial.test(cont)) {
        return "La contraseña debe contener al menos un carácter especial (ejemplo: !, @, #, etc.).";
      }
  
      return "Contraseña válida.";
    }
  
    document.getElementById("registro").addEventListener("click", () => {
      registrar(usuario, password);
    });
  });
  