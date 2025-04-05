alert("Cálculo da área de um quadrado");

let lado = parseFloat(prompt("Digite o valor de um dos lados:"));

if (isNaN(lado) || lado <= 0) {
    alert("Número inválido ou texto foi inserido!");
} else {
    let area = lado * lado;
    alert("O valor da área do quadrado é: " + area+ ".");
}