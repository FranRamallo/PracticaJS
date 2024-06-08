let btn=document.getElementById("enviar");
let titulo=document.getElementById("titulo");
btn.addEventListener("click", enviar);

function enviar(){
    let nombre=document.querySelector("#name");
    let apellido=document.querySelector("#lastname");
    let nom=nombre.value;
    let ape=apellido.value;

    titulo.innerHTML= nom + " " + ape;
}