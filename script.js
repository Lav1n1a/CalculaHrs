function addOperacao(operacao){
    document.getElementById('operacao').value = operacao;
    document.getElementById('operacao').value = operacao;

    let valor1 = document.getElementById('valor1').value;
    
    document.getElementById('resultado').value = valor1 + operacao;
}

function adicionar(num) {
    let resultado = document.getElementById('resultado').value;

    let primeiroValor = document.getElementById('valor1').value;
    let segundoValor = document.getElementById('valor2').value;
    let operacao = document.getElementById('operacao').value;

    if (operacao == '+' || operacao == '-') {
        
        resultado = mask(primeiroValor) + operacao + mask(segundoValor + num);
        document.getElementById('valor2').value = mask(segundoValor + num);

    } else if (operacao == '*' || operacao == '/') {
        resultado = mask(primeiroValor) + operacao + (segundoValor += num);
        
        document.getElementById('valor2').value = segundoValor + num;
    } else {
        resultado = mask(primeiroValor + num);
        document.getElementById('valor1').value = resultado;
    }

    document.getElementById('resultado').value = resultado;
}

function limpar() {
    document.getElementById('resultado').value = null;
    document.getElementById('valor1').value = null;
    document.getElementById('valor2').value = null;
    document.getElementById('operacao').value = null;
}

function voltar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let primeiroValor = document.getElementById('valor1').value;
    let segundoValor = document.getElementById('valor2').value;
    let operacao = document.getElementById('operacao').value;

    console.log({
        primeiroValor,
        segundoValor,
        operacao
    });

    let array = primeiroValor.split(':');

    console.log(array[0]) // horas
    console.log(array[1]) // minutos


    // var resultado = document.getElementById('resultado').value;
    // var op = document.getElementById('resultado').value;

    // switch (op) {
    //     case '+':
    //         numero = numero + numero;
    //         numero.innerHTML = numero;
    //     case '-':
    //         numero = numero - numero;
    //         return numero;
    //     case '*':
    //         numero = numero * numero;
    //         return numero;
    //     case '/':
    //         numero = numero / numero;
    //         return numero;
    //     default:
    //         break;
    // }

    // if (operacao.value == '+' && operacao.value == '-') {
    //     var tempo1 = (parseInt(valor1[0]) * 60) + (parseInt(valor1[1]));
    //     var tempo2 = (parseInt(valor2[0]) * 60) + (parseInt(valor2[1]));

    //     tempofinal = parseInt(tempo1) + parseInt(tempo2);
    //     var hours = Math.floor(tempofinal / (60 * 60));
    //     var dividorMin = tempofinal % (60 * 60);
    //     var minutes = Math.floor(dividorMin * 60);

    //     var contador = "";

    //     if (hours < 10) { contador = "0" + hours + ":"; } else { contador = hours + ":"; }
    //     if (minutes < 10) { contador += "0" + minutes + ":"; } else { contador += minutes + ":"; }

    //     return contador;
    // } else if (operacao == '*' && operacao.value == '/') {

    // }

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
