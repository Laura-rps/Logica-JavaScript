alert("Calculo do salario apos o reajuste")
let salario_atual = parseFloat(prompt("Digite seu salario atual"))
let reajuste = parseFloat(prompt("Digite o valor do reajuste (%)"))
if(isNaN(salario_atual) || isNaN(reajuste)){
    alert("Texto inserido! Operação inválida")
}
else{
    let salario_final = salario_atual + (salario_atual * reajuste / 100)
    alert("O salario atual é: R$"+salario_final.toFixed(2)+".")}