let carrito = [];
let contador = document.getElementById("contador");
let listaCarrito = document.getElementById("lista-carrito");
let total = document.getElementById("total");

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  contador.textContent = carrito.length;
  listaCarrito.innerHTML = "";

  let totalCompra = 0;

  carrito.forEach((item, index) => {
    totalCompra += item.precio;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${item.nombre} - $${item.precio}`;

    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-danger btn-sm";
    btnEliminar.textContent = "❌";
    btnEliminar.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };

    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
  });

  total.textContent = `$${totalCompra}`;
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let totalCompra = carrito.reduce((sum, item) => sum + item.precio, 0);
  alert(`Gracias por tu compra 🛍️\nTotal: $${totalCompra}`);

  carrito = [];
  actualizarCarrito();
}

