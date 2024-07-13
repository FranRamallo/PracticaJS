let equipo = {
    "nombre": "Barcelona FC",
    "puntos": 98,
    "pj": 35,
    "pg": 32,
    "pe": 2,
    "pp": 1
}

console.log(equipo);

function mostartEstadisticas(equipo){
    console.log("Nombre: " + equipo.nombre);
    console.log("Puntos: " + equipo.puntos);
    console.log("Partidos jugados: " + equipo.pj);
    console.log("Partidos ganados: " + equipo.pg);
    console.log("Partidos empatados: " + equipo.pe);
    console.log("Partidos perdidos: " + equipo.pp);
}

mostartEstadisticas(equipo);