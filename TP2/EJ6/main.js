const tareas = [];

function mostrarTareas() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    
    for (let tarea of tareas) {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea;
        lista.appendChild(nuevaTarea);
    }
}

document.getElementById("agregar").addEventListener("click", () => {
    const tareaInput = document.getElementById("tarea");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto === "") {
        alert("Ingrese una tarea válida.");
    } else if (tareas.includes(tareaTexto)) {
        alert("La tarea ya existe.");
    } else if (tareas.length >= 10) {
        alert("No se pueden agregar más de 10 tareas.");
    } else {
        tareas.push(tareaTexto);
        tareaInput.value = "";
        mostrarTareas();
    }
});
