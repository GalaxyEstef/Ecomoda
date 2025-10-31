// Ejemplo de alert al cargar la página
window.onload = () => {
  alert("¡Bienvenido a Mi Empresa!");
};

// Función para login simple
function login() {
  let usuario = prompt("Ingrese su usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  if (usuario === "admin" && contraseña === "1234") {
    alert("Login exitoso ✅");
  } else {
    alert("Usuario o contraseña incorrectos ❌");
  }
}

