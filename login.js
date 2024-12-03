/* window.addEventListener("load", function() {
    let usuarios=[
        {nombre: 'admin', password: 'admin', rol: 'Administrador'}
    ]
})
function registrar(usuario, password) {
    
    /* if (comprobarUsuario()= false && comprobarCon 

    
}
function comprobarUsuario(usuario, password) {
    let nombre = usuario;
    let contra=password;
    if (usuario.nombre.includes
    
} */

let usuarios = [{ nombre: "admin", password: "admin", rol: "Administrador" }];

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
  const tieneNumero = /[0-9]/;
  const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;

  if (!longitudValida.test(cont)) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  if (!tieneMayuscula.test(cont)) {
    return "La contraseña debe contener al menos una letra mayúscula.";
  }

  if (!tieneNumero.test(cont)) {
    return "La contraseña debe contener al menos un número.";
  }

  if (!tieneCaracterEspecial.test(cont)) {
    return "La contraseña debe contener al menos un carácter especial (ejemplo: !, @, #, etc.).";
  }

  return "Contraseña válida.";
}

// Ejemplo de uso:
registrar("usuario1", "Password123!");
registrar("admin", "1234");
registrar("usuario1", "1234");
