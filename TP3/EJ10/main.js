let equipos = [{
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
}];

function mostrarEstadisticas(equipos) {
    let tablaDiv = document.getElementById("tabla");
    tablaDiv.innerHTML = "";
    // Ordenar los equipos por puntos en orden descendente
    equipos.sort((a, b) => b.puntos - a.puntos);

    // Crear una lista de equipos
    equipos.forEach(equipo => {
        let equipoInfo = document.createElement("p");
        equipoInfo.textContent = `Nombre: ${equipo.nombre}, Puntos: ${equipo.puntos}, Partidos Jugados: ${equipo.pj}, Partidos Ganados: ${equipo.pg}, Partidos Empatados: ${equipo.pe}, Partidos Perdidos: ${equipo.pp}`;
        tablaDiv.appendChild(equipoInfo);
    });
}

document.getElementById("mostrarPos").addEventListener("click", () => {
    mostrarEstadisticas(equipos);
});

document.getElementById("nuevoEquipoForm").addEventListener("click", (event) => {
    event.preventDefault();

    let nuevoEquipo = {
        nombre: document.getElementById("nombre").value,
        puntos: parseInt(document.getElementById("puntos").value),
        pj: parseInt(document.getElementById("pj").value),
        pg: parseInt(document.getElementById("pg").value),
        pe: parseInt(document.getElementById("pe").value),
        pp: parseInt(document.getElementById("pp").value)
    };

    equipos.push(nuevoEquipo);
    mostrarEstadisticas(equipos);

    // Limpiar el formulario
    document.getElementById("nuevoEquipoForm").reset();
});
