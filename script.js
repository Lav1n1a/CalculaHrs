function adicionar(num) { 
let numero = document.getElementById('resultado');

let primeiroValor = document.getElementById('valor1').value;
let segundoValor = document.getElementById('valor2').value;
let operacao = document.getElementById('Operacoes').value;

numero = mask(primeiroValor) + operacao + segundoValor;

if(operacao === '+' || operacao === '-') {
    valorFormatado = mask(primeiroValor) + operacao + mask(segundoValor + num);
} else if (operacao === '*' || operacao === '/') {
    valorFormatado = mask(primeiroValor) + operacao + (segundoValor += num);
} else {
    
}
}

function limpar(){
    var numero = document.getElementById('resultado').innerHTML = " ";
}
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var numero = document.getElementById('resultado').value;
    var op = document.getElementById('resultado').value;

    switch (op) {
        case '+':
            numero = numero + numero;
            numero.innerHTML = numero;
        case '-':
            numero = numero - numero;
            return numero;
        case '*':
            numero = numero * numero;
            return numero;
        case '/':
            numero = numero / numero;
            return numero;
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
