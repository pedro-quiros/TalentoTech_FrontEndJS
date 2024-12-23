function loadComponent(selector, file) {
    fetch(file)
        .then(response => response.text()) // Obtener el contenido del archivo
        .then(data => {
            document.querySelector(selector).innerHTML = data; // Insertar contenido en el selector
        })
        .catch(error => console.error('Error cargando el componente:', error)); // Manejar errores
}

// Cargar los componentes cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#navbar", "../html/navbar.html"); // Cargar el navbar
    loadComponent("#footer", "../html/footer.html"); // Cargar el footer
});


fetch('/productos.json')
    .then(response => response.json())
    .then(productos => {
        const container = document.getElementById('productos-container');
        productos.forEach(producto => {
            const card = `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <h3 class="card-text">ARS: $${producto.precio}</h3>
                        <a href="#" class="btn btn-comprar">Comprar</a>
                        <button class="btn btn-carrito">Carrito +1</button>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });

        // Agregar funcionalidad a los botones "Carrito +1"
        const botonesCarrito = document.querySelectorAll('.btn-carrito');
        botonesCarrito.forEach((boton, index) => {
            boton.addEventListener('click', () => agregarAlCarrito(productos[index]));
        });
    })
    .catch(error => console.error('Error al cargar los productos:', error));
