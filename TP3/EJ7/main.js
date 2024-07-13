document.getElementById("totalParrafos").addEventListener("click", ()=>{
    let cantParrafos=document.querySelectorAll("p").length;
    document.getElementById("resultado").textContent=cantParrafos;
});

document.getElementById("totalItems").addEventListener("click", ()=>{
    let cantItems=document.getElementById("lista-menu");
    document.getElementById("resultado").textContent=cantItems.children.length;
});

document.getElementById("totalDivs").addEventListener("click", ()=>{
    let cantiDivs=document.getElementsByClassName("noticia").length;
    document.getElementById("resultado").textContent=cantiDivs;
});