const comentariosInput = document.getElementById("comentarioInput");
const comentarios = document.getElementById("comentarios");

document.getElementById("comentariosForm").addEventListener("submit", (evento) => {
    evento.preventDefault();
    agregarComentario(comentariosInput.value);
    comentariosInput.value = "";
});

function agregarComentario(text) {
    const comentario = document.createElement("div");
    comentario.className = "comment";
    comentario.innerHTML = text;

    const botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.addEventListener("click", () => {
        comentarios.removeChild(comentario);
    });

    comentario.appendChild(botonBorrar);
    comentarios.appendChild(comentario);
}
