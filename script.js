function addOperacao(operacao){
    document.getElementById('operacao').value = operacao;
    document.getElementById('operacao').value = operacao;

    let valor1 = document.getElementById('valor1').value;
    
    document.getElementById('resultado').value = mask(valor1) + operacao;
}

function adicionar(num) {
    let resultado = document.getElementById('resultado').value;

    let primeiroValor = document.getElementById('valor1').value;
    let segundoValor = document.getElementById('valor2').value;
    let operacao = document.getElementById('operacao').value;

    if (operacao == '+' || operacao == '-') {
        
        resultado = mask(primeiroValor) + operacao + mask(segundoValor + num);
        document.getElementById('valor2').value = segundoValor + num

    } else if (operacao == '*' || operacao == '/') {
        resultado = mask(primeiroValor) + operacao + (segundoValor + num);
        
        document.getElementById('valor2').value = segundoValor + num;
    } else {
        resultado = mask(primeiroValor + num);
        document.getElementById('valor1').value = primeiroValor + num;
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

function apagarHistorico() {
    let his = document.getElementById('list');
    his.innerHTML = null;
}

function convertToTime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let formattedHours = hours < 10 ? '0' + hours : hours;
    let formattedMinutes = mins < 10 ? '0' + mins : mins;
    return formattedHours + ':' + formattedMinutes;
}

function calcular() {
    let primeiroValor = document.getElementById('valor1').value;
    let segundoValor = document.getElementById('valor2').value;
    let operacao = document.getElementById('operacao').value;
    
    let historico = document.getElementById('list');//Variável para acrescentar histórico das operações
    let itensHistorico = document.createElement('li');

    let resultado;

    let array1 = mask(primeiroValor).split(':');//Separa os valores através do split, por exemplo 10:20 para 10,20
    let array2 = mask(segundoValor).split(':');
    var tempo1 = parseInt(array1[0] * 60) + parseInt(array1[1]);//divide horas para 60 e só repete o minuto
    var tempo2 = parseInt(array2[0] * 60) + parseInt(array2[1]);

    if (operacao == '+') {
        let result = tempo1 + tempo2;
        resultado = convertToTime(result);
    } else if (operacao == '-') {
        let result = tempo1 - tempo2;
        resultado = convertToTime(result);
    } else if (operacao == '*') {
        let result = tempo1 * tempo2;
        resultado = convertToTime(result);
    } else if (operacao == '/') {
        let result = tempo1 / tempo2;
        resultado = convertToTime(result);
    } else {
        resultado = 'Operação inválida';
    }

    //document.getElementById('resultado').value = resultado;

    //itensHistorico.classList.add('hist-resultado');
    
    itensHistorico.textContent = `${mask(primeiroValor)} + ${mask(segundoValor)} = ${resultado}`;
    historico.appendChild(itensHistorico);

    limpar()

}

function mask(numero) {
    numero = numero.toString().replace(':', '');
    if(numero.length == 1){
        numero = "00:0" + numero;
    }else if(numero.length == 2){
        numero = "00:" + numero.slice(0, 2);
    } else if (numero.length == 3) {
        numero = "0" + numero.slice(0, 1) + ":" + numero.slice(-2);
    } else if (numero.length > 3) {
        numero = numero.slice(0, numero.length - 2) + ":" + numero.slice(-2);
    }

    return numero;
}

function diasTrabalhados(){
    let horasLista = document.getElementById('list').innerHTML;

    let filhos = horasLista.children;
    let separarValores = filhos.split('=');
    let valoreSeparados = parseInt(separarValores[1] / 24);
    console.log(valoreSeparados);

    let mostrarDiasFormatado = parseInt(separarValores[0]) + ":" + valoreSeparados;

    document.getElementById('list').innerHTML = mostrarDiasFormatado;

}


