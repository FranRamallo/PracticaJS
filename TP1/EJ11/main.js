document.getElementById('tarjeta').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const profesion = document.getElementById('prof').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('tel').value;
    const direccion = document.getElementById('dire').value;

    const tarjetaPersonal = document.getElementById('tarjetaPersonal');
    tarjetaPersonal.innerHTML = '';

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre} <strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Profesión:</strong> ${profesion}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
    `;

    tarjetaPersonal.appendChild(card);
});
