# CalculaHrs

function adicionar(valor1, valor2) {
    
}

function limpar(){
    var numero = document.getElementById('resultado').innerHTML = " ";
}

function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(valor1 , valor2){
    var valor1 = document.getElementById('resultado').value;
    var valor2 = document.getElementById('resultado').value;
    var resultado = document.getElementById('resultado');
    var operacao = document.getElementById('resultado');



    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
        case '-':
            resultado = valor1 - valor2;
        case '*':
            resultado = valor1 * valor2;
        case '/':
            resultado = valor1 / valor2;
        default:
            break;
    }

    if(operacao.value == '+' && operacao.value == '-'){
        var tempo1 = (parseInt(valor1[0]) * 60) + (parseInt(valor1[1]));
        var tempo2 = (parseInt(valor2[0]) * 60) + (parseInt(valor2[1]));

        tempofinal = parseInt(tempo1) + parseInt(tempo2);
        var hours = Math.floor(tempofinal / (60 * 60));
        var dividorMin = tempofinal % (60 * 60);
        var minutes = Math.floor(dividorMin * 60);
        
        var contador = "";

        if (hours < 10) { contador = "0" + hours + ":"; } else { contador = hours + ":"; }
        if (minutes < 10) { contador += "0" + minutes + ":"; } else { contador += minutes + ":"; }

        return contador;
    }else if(operacao == '*' && operacao.value == '/'){

    }

}

function mask(numero) {
    numero = numero.toString().replace(':', '');
    if (numero.length == 3) {
        numero = "0" + numero.slice(0, 1) + ":" + numero.slice(-2);
    } else if (numero.length > 3) {
        numero = numero.slice(0, numero.length - 2) + ":" + numero.slice(-2);
    }

    return numero;
}
