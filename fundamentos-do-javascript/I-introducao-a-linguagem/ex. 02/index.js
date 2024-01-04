let a = Number(window.prompt("Insira um número a ser calculado: "));
let b = Number(window.prompt("Insira outro número a ser calculado: "));

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;

console.log(
    "Os cálculos são: \nSoma: " +
        soma +
        "\nSubtração: " +
        subtracao +
        "\nMultiplicação: " +
        multiplicacao +
        "\nDivisão: " +
        divisao +
        "\n"
);
