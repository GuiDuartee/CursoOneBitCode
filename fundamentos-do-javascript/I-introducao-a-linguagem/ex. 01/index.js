let nome = window.prompt("Insira seu nome: ");
let sobrenome = window.prompt("Insira seu sobrenome: ");
let estudo = window.prompt("Insira o que você estuda: ");
let anoDeNascimento = window.prompt("Insira seu ano de nascimento: ");

alert(
    "Nome: " +
        nome +
        "\nSobrenome: " +
        sobrenome +
        "\nÁrea de estudos: " +
        estudo +
        "\nIdade: " +
        (2024 - parseInt(anoDeNascimento))
);
