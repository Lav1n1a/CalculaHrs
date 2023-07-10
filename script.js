function adicionar(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
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




