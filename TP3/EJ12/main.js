document.querySelectorAll(".miniatura").forEach(img => {
    img.addEventListener("click", function() {
        const estaSeleccionada = this.classList.contains("seleccionar");
        document.querySelectorAll(".miniatura").forEach(img => {
            img.classList.remove("seleccionar");
        });
        if (!estaSeleccionada) {
            this.classList.add("seleccionar");
        }
    });
});
