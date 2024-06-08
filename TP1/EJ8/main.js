let btn=document.getElementById('boton').addEventListener('click', function visible(){
    let texto=document.getElementById("texto");
    if(texto.style.display==="none"){
        texto.style.display="block";
    }else{
        texto.style.display="none";
    };
})