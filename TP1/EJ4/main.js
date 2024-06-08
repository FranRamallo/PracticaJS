let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");
let btn3 = document.getElementById("boton3");
let mensaje = document.getElementById("mensaje");

btn1.addEventListener("click", aviso);
btn2.addEventListener("click", aviso);
btn3.addEventListener("click", aviso);

function aviso(event) {
    let color;
    if (event.target.id === "boton1") {
        color = "Azul";
    } else if (event.target.id === "boton2") {
        color = "Amarillo";
    } else {
        color = "Rojo";
    }
    mensaje.innerHTML = "El último botón clickeado fue el " + color;
}