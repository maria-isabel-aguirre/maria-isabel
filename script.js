let loader = document.getElementById('loader');
let container = document.getElementById('container'); // Asegúrate de que el ID sea correcto

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        loader.style.display = 'none'; // Oculta el loader
        container.style.display = 'flex'; // Muestra el contenido
    
    }, 1000);

});