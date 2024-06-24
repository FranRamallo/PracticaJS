const imagenes = [
    "Bandera.avif",
    "Campeon.avif",
    "Mate.jpeg"
];

let indice = 0;

function mostrarImagen() {
    const img = document.getElementById('imagen');
    img.src = imagenes[indice];
}

document.getElementById('anterior').addEventListener('click', () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
});

document.getElementById('siguiente').addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
});

// Mostrar la primera imagen al cargar la página
mostrarImagen();
