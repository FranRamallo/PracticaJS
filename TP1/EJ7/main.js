let btn=document.getElementById("cambiar");
btn.addEventListener("click", function cambiar(){
    let texto=document.querySelector("#texto");
    texto.classList.remove("style");
    texto.classList.add("cambiar");
});