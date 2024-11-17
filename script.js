let noButton = document.getElementById("no");
let siButton = document.getElementById("si");
let clickCount = 0;  // Contador de clics en "Sí"
const maxSize = 200; // Tamaño máximo para el botón "No"

function moverSi() {
    // Mover el botón "Sí" a una posición aleatoria
    const x = Math.floor(Math.random() * window.innerWidth - siButton.offsetWidth);
    const y = Math.floor(Math.random() * window.innerHeight - siButton.offsetHeight);

    siButton.style.position = 'absolute';
    siButton.style.left = `${x}px`;
    siButton.style.top = `${y}px`;

    // Aumentar el tamaño del botón "No" progresivamente con cada clic
    clickCount++;  // Aumentar el contador de clics
    let newSize = 16 + clickCount * 15;  // Incrementar el tamaño

    // Si el tamaño excede el tamaño máximo, se ajusta
    if (newSize >= 300) {
        siButton.style.display='none';
    }

    // Cambiar el tamaño del texto y el padding del botón "No"
    noButton.style.fontSize = `${newSize}px`;
    noButton.style.padding = `${10 + clickCount * 25}px ${20 + clickCount * 25}px`;  // Aumentar el padding
    noButton.classList.add("creciendo");  // Activar el crecimiento visual
}

function irACorazon() {
    // Redirigir a la página "corazon.html" cuando se hace clic en el botón "No"
    window.location.href = "corazon.html";
}