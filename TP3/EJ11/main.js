document.querySelectorAll('.ver').forEach(boton => {
    boton.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        targetElement.classList.toggle('contenidoOculto');

        if (targetElement.classList.contains('contenidoOculto')) {
            this.textContent = 'Ver más';
        } else {
            this.textContent = 'Ver menos';
        }
    });
});
