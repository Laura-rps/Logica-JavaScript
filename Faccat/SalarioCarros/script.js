alert("Calculadora de salário com comissão")
let carros_vendidos = parseInt(prompt("Digite quantos carros voce vendeu"))
let valor_vendas = parseFloat(prompt("Digite qual foi o valor total de suas vendas"))
let valor_salario = parseInt(prompt("Digite qual é o valor do seu salário fixo"))
let carro_vendido = parseFloat(prompt("Digite qual foi o valor do carro vendido"))
if(isNaN(carro_vendido) || isNaN(valor_vendas) || isNaN(carros_vendidos) || isNaN(valor_salario)){
    alert("Texto inserido! Operação inválida")
}
else{
    let comissao = valor_vendas * 0.05;
    let salario_total = valor_salario + comissao;
    alert("O seu salário total com comissão é: R$ " + salario_total.toFixed(2))
}