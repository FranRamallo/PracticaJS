let btn=document.getElementById("ingresar");
btn.addEventListener("click", saludar);

function saludar(){
    let nodoNombre=document.querySelector("#nombreYapellido");
    let nombYape= nodoNombre.value;

    console.log(nombYape);

    alert("Hola " + nombYape); 
}