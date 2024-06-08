document.getElementById('ruleta').addEventListener('submit', function(event) {
    event.preventDefault();

    const apuesta = parseInt(document.getElementById('apuesta').value);
    const numeroAleatorio = Math.floor(Math.random() * 37);

    let resultadoTexto = `Número generado: ${numeroAleatorio}<br>`;
    resultadoTexto += `Número apostado: ${apuesta}<br>`;

    if (apuesta === numeroAleatorio) {
        resultadoTexto += '<strong>¡Ganaste!</strong>';
    } else {
        resultadoTexto += '<strong>Perdiste.</strong>';
    }

    document.getElementById('resultado').innerHTML = resultadoTexto;
});
