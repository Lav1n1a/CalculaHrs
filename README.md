# CalculaHrs

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
    let numero = document.getElementById('resultado').innerHTML = " ";
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

     <form>
                <input type="text" id="resultado" placeholder="00:00">
                <input type="hidden" id="valor1" value="">
                <input type="hidden" id="valor2" value="">
                <input type="hidden" id="operacao" value="">

            </form>
                <table>                 
                    <tr>
                        <td><button class="botao" onclick="adicionar('7')">7</button></td>
                        <td><button class="botao" onclick="adicionar('8')">8</button></td>
                        <td><button class="botao" onclick="adicionar('9')">9</button></td>
                        <td><button class="botao" id="Operacoes" onclick="adicionar('/')">/</button></td>
                        <td><button class="botao" onclick="limpar()">C</td>
