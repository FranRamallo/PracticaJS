let tabla = [{
    "nombre": "Real Madrid",
    "puntos": 95,
    "pj": 38,
    "pg": 29,
    "pe": 8,
    "pp": 1
},
{
    "nombre": "Barcelona FC",
    "puntos": 85,
    "pj": 38,
    "pg": 26,
    "pe": 7,
    "pp": 5
},
{
    "nombre": "Girona",
    "puntos": 81,
    "pj": 38,
    "pg": 25,
    "pe": 6,
    "pp": 7
},
{
    "nombre": "Atletico Madrid",
    "puntos": 76,
    "pj": 38,
    "pg": 24,
    "pe": 4,
    "pp": 10
},
{
    "nombre": "Athletic Bilbao",
    "puntos": 68,
    "pj": 38,
    "pg": 19,
    "pe": 11,
    "pp": 8
}]

console.log(tabla);

function mostartEstadisticasPrimero(tabla){
    console.log("Nombre: " + tabla[0].nombre);
    console.log("Puntos: " + tabla[0].puntos);
    console.log("Partidos jugados: " + tabla[0].pj);
    console.log("Partidos ganados: " + tabla[0].pg);
    console.log("Partidos empatados: " + tabla[0].pe);
    console.log("Partidos perdidos: " + tabla[0].pp);
}

mostartEstadisticasPrimero(tabla);

console.log("Cantidad: " + tabla.length);

document.getElementById("diferenciaPuntos").textContent= "Diferencia de puntos: " + (tabla[0].puntos - tabla[1].puntos);