document.getElementById("cambiar").addEventListener("click", () =>{
    document.querySelectorAll(".titulo").forEach((elementos)=>{ //Itera por cada elemento
        elementos.classList.toggle("normal");
    })
})