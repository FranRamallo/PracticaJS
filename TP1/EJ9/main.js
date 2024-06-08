document.getElementById("calcular").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operando = document.getElementById("operando").value;
    let resultado;

    switch(operando){
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;    
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if(num2 != 0){
                resultado = num1 / num2;
            } else{
                alert("No se puede dividir por cero");
                return;
            }
            break;
    }
    document.getElementById("resultado").innerText = "";
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
});
