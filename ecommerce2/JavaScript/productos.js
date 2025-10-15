let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizar contador
  document.getElementById("contador").textContent = carrito.length;

  // Mostrar alerta
  alert(`${nombre} se añadió al carrito 🛒`);
}

// Actualizar contador al cargar la página
window.onload = () => {
  document.getElementById("contador").textContent = carrito.length;
};

