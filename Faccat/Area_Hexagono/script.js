alert("Cálculo da área de um hexágono");
let lado = parseFloat(prompt("Digite o valor de um dos lados:"));

if (isNaN(lado) || lado <= 0) {
    alert("Número inválido ou texto foi inserido!");
} else {
    let area = (3 * 1.732 / 2) * (lado * lado);
    alert("O valor da área do hexágono é: " + area+ ".");
}