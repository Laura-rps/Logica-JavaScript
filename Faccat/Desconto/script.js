alert("Cálculo de desconto");

let nome = prompt("Digite o nome do produto");
let quantidade = parseInt(prompt("Digite a quantidade de produtos"));
let preco_unitario = parseFloat(prompt("Digite o valor da unidade do produto"));

let total;
let desconto;

if (isNaN(quantidade) || isNaN(preco_unitario)) {
    alert("Texto inserido! Operação inválida");
} else {
    total = quantidade * preco_unitario;

    if (quantidade <= 5) {
        desconto = total * 0.02;
    } else if (quantidade > 5 && quantidade <= 10) {
        desconto = total * 0.03;
    } else {
        desconto = total * 0.05;
    }

    let total_pagar = total - desconto;

    alert("O produto " + nome + " tem o preço total de R$ " + total.toFixed(2) +
        ", mas com o desconto de R$ " + desconto.toFixed(2) +
        ", o total a pagar é: R$ " + total_pagar.toFixed(2) + ".");
}
