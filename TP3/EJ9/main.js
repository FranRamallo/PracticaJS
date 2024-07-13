document.getElementById("borrar").addEventListener("click", () => {
    let parrafos = document.querySelectorAll("p");
    if (parrafos.length > 0) {
        let ultimoParrafo = parrafos[parrafos.length - 1];
        ultimoParrafo.remove();
    } else {
        alert("No hay más párrafos para borrar.");
    }
});

document.querySelectorAll(".parrafo").forEach(parrafo => {
    parrafo.addEventListener("click", (event) => {
        event.target.classList.toggle("parrafo");
    });
});
