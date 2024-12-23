// Cargar productos desde el archivo JSON
fetch('/productos.json') // Asegúrate de que la ruta sea correcta según tu configuración
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('productosContainer');
        container.innerHTML = data.map(producto => `
            <div class="card" style="width: 18rem; margin: 1rem;">
                <img class="card-img-top" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <h3 class="card-text">ARS: $${producto.precio}</h3>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    <a href="#" class="btn btn-secondary">Carrito +1</a>
                </div>
            </div>
        `).join('');
    })
    .catch(error => console.error('Error cargando los productos:', error));
