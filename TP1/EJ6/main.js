    const tareaInput = document.getElementById("tareaInput");
    const agregarBtn = document.getElementById("agregar");
    const listaTareas = document.getElementById("listaTareas");

    agregarBtn.addEventListener("click", function() {
        const tareaTexto = tareaInput.value;

        if (tareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tareaTexto;
            listaTareas.appendChild(nuevaTarea);
            tareaInput.value = "";
        } else {
            alert("Ingresa una tarea válida.");
        }
    });
