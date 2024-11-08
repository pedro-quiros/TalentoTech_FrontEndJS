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
