const ocultar1 = document.getElementById("ocultar");
const ocultar2 = document.getElementById("ocultar2");

document.getElementById("ver1").addEventListener("click", function() {
    toggleOcultar(ocultar1, "ver1");
});

document.getElementById("ver2").addEventListener("click", function() {
    toggleOcultar(ocultar2, "ver2");
});

function toggleOcultar(idTexto, idBoton) {
    idTexto.classList.toggle("contenidoOculto");

    if (idTexto.classList.contains("contenidoOculto")) {
        document.getElementById(idBoton).textContent = "Ver más";
    } else {
        document.getElementById(idBoton).textContent = "Ver menos";
    }
}
