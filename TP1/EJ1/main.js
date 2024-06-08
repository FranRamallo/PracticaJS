function saludar(){
    let nodoNombre = document.querySelector("#nombreInput");
    let nombYape = nodoNombre.value;

    console.log(nombYape);

    let nodoSaludo = document.querySelector("#saludo");
    nodoSaludo.innerHTML = "Hola " + nombYape;
}
