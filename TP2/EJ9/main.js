const colores=["red", "blue", "yellow", "green", "black"];
const colorDiv=document.getElementById("colorDiv");
let indice=0;

if(colorDiv.classList.contains("div")){
    setInterval(() =>{
        colorDiv.style.backgroundColor=colores[indice];
        indice=(indice + 1) % colores.length;
    }, 500);
}