function criptografar() {
    valor = document.getElementById('campoDeTexto').value;
    // console.log(valor);
    novoValor = valor.split("");

    //console.log(novoValor);

    for (let i = 0; i < novoValor.length; i++) {
        if(novoValor[i] == "a"){
            novoValor[i] = "ai"
        }
        if(novoValor[i] == "e"){
            novoValor[i] = "enter"
        }
        if(novoValor[i] == "i"){
            novoValor[i] = "imes"
        }
        if(novoValor[i] == "o"){
            novoValor[i] = "ober"
        }
        if(novoValor[i] == "u"){
            novoValor[i] = "ufat"
        }
    }

    let resultado = novoValor.toString()
    resultado = resultado.replaceAll(",", "");
    // aqui eu percebi que era so usar replace all kkkkkkk pqp HUGO ATHOS
    console.log(resultado)

    let campoResultado = document.getElementById("resultado");
    let campoInput = document.getElementById("campoDeTexto");
    campoResultado.value = resultado;
    campoInput.value = "";
    
    return novoValor

}

function descriptografar() {
    valor = document.getElementById('campoDeTexto').value;
    
    let resultado = valor;
     
    resultado = resultado.replaceAll("ai", "a");
    resultado = resultado.replaceAll("enter", "e");
    resultado = resultado.replaceAll("i", "i");
    resultado = resultado.replaceAll("ober", "o");
    resultado = resultado.replaceAll("ufat", "u");
    
    console.log(resultado)

    let campoResultado = document.getElementById("resultado");
    let campoInput = document.getElementById("campoDeTexto");
    campoResultado.value = resultado;
    campoInput.value = "";

    return resultado
}

