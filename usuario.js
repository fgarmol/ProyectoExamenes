class usuario {
  constructor(nombre, password, rol, validado) {
    this.nombre = nombre;
    this.password = password;
    this.rol = rol;
    this.validado = validado;
  }
}
/* class Profesor extends usuario {
  constructor(nombre, password, rol, validado) {
    super(nombre);
    super(password);
    super(rol);
    this.validado = validado;
  }
}
class Alumno extends Profesor {
  constructor(nombre, password, rol, validado) {
    super(nombre);
    super(password);
    super(rol);
    super(validado);
  }
}
class Admin extends usuario {
  constructor(nombre, password, rol) {
    super(nombre);
    super(password);
    super(rol);
  }
} */

const usuarios = [];
let roles = ["Administrador", "Profesor", "Alumno"];
let admin = new usuario("admin", "admin", "Administrador", 1);
usuarios.push(admin);
function registrar(usuario) {
    
}