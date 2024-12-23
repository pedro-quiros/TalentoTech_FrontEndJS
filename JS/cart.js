// Funciones para manejar el carrito
const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

// Agregar producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`¡${producto.nombre} agregado al carrito!`);
}

// Mostrar contenido del carrito
function mostrarCarrito() {
    const carritoBody = document.getElementById("carrito-body");
    carritoBody.innerHTML = ""; // Limpiar contenido anterior

    if (carrito.length === 0) {
        carritoBody.innerHTML = "<p>Tu carrito está vacío</p>";
    } else {
        carrito.forEach((producto, index) => {
            const productoHTML = `
                <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                    <div>
                        <h5>${producto.nombre}</h5>
                        <p>ARS $${producto.precio}</p>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                </div>
            `;
            carritoBody.innerHTML += productoHTML;
        });
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }
    alert("¡Gracias por tu compra!");
    sessionStorage.removeItem("carrito"); // Limpiar carrito
    carrito.length = 0; // Vaciar array en memoria
    mostrarCarrito();
}

// Eventos del carrito
document.getElementById("ver-carrito").addEventListener("click", mostrarCarrito);
document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);
