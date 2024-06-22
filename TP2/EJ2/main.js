let contador1=0;
let contador2=0;
let contador3=0;
document.getElementById("boton1").addEventListener("click", () => incrementar("contador1",contador1));
document.getElementById("boton2").addEventListener("click", () => incrementar("contador2",contador2));
document.getElementById("boton3").addEventListener("click", () => incrementar("contador3",contador3));

function incrementar(elemento) {
    if (elemento === "contador1") {
        contador1++;
        document.getElementById(elemento).innerHTML = contador1;
    } else if (elemento === "contador2") {
        contador2++;
        document.getElementById(elemento).innerHTML = contador2;
    } else if (elemento === "contador3") {
        contador3++;
        document.getElementById(elemento).innerHTML = contador3;
    }
}