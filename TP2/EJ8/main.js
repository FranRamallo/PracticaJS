const notas = [];

function mostrarNotas() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";

    for (let nota of notas) {
        const nuevaNota = document.createElement("li");
        nuevaNota.textContent = nota;
        lista.appendChild(nuevaNota);
    }
}

document.getElementById("agregar").addEventListener("click", () => {
    const notaInput = document.getElementById("nota");
    const notaTexto = notaInput.value.trim();

    if (notaTexto === "" || isNaN(notaTexto)) {
        alert("Ingrese una nota válida.");
    } else if (notaTexto > 0 && notaTexto <= 10){
        const nota = Number(notaTexto);
        notas.push(nota);
        notaInput.value = "";
        mostrarNotas();
    } else {
        alert("Ingrese una nota entre 1 y 10.");
    }
});

document.getElementById("promedio").addEventListener("click", () => {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    const promedio = suma / notas.length;
    document.getElementById("resultado").innerHTML = "Promedio: " + promedio.toFixed(2);
});
