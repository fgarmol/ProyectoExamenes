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
  if (comprobarUsuario(usuario)) {
    console.log("El usuario ya está registrado.");
    // TODO: Crear en el dom un area para los mensajes de errores
    return;
  } else {
    console.log("Usuario Válido");
    
  }
  let selecRol = document.getElementById()

  usuarios.push({ nombre: usuario, password: password, rol: "Usuario" });
  console.log("Usuario registrado exitosamente.");
}

function comprobarUsuario(usuario) {
  return usuarios.some((u) => u.nombre === usuario);
}
function validarContraseña(password) {
  const longitudValida = /^.{8,}$/;
  const tieneMayuscula = /[A-Z]/;
  const tieneNumero = /[0-9]/;
  const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;

  if (!longitudValida.test(password)) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  if (!tieneMayuscula.test(password)) {
    return "La contraseña debe contener al menos una letra mayúscula.";
  }

  if (!tieneNumero.test(password)) {
    return "La contraseña debe contener al menos un número.";
  }

  if (!tieneCaracterEspecial.test(password)) {
    return "La contraseña debe contener al menos un carácter especial (ejemplo: !, @, #, etc.).";
  }

  return "Contraseña válida.";
}

// Ejemplo de uso:
console.log(validarContraseña("Password123!"));
console.log(validarContraseña("pass"));
console.log(validarContraseña("password123"));
console.log(validarContraseña("Password123"));

// Ejemplo de uso:
registrar("usuario1", "1234");
registrar("admin", "admin");
registrar("usuario1", "5678");
