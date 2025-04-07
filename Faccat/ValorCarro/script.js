let fabrica = parseFloat(prompt("Digite o custo de fabrica"))
let impostos = parseFloat(prompt("Digite a porcentagem de impostos (%)"))
let distribuidor = parseFloat(prompt("Digite o percentual do distribuidor (%)"))
if(isNaN(fabrica) || isNaN(impostos) || isNaN(distribuidor)){
    alert("Texto inserido! Operação inválida")
} 
else{
    let valor_impostos = fabrica * (impostos/100)
    let valor_distribuidor = fabrica * (distribuidor/100)
    let custo_final = fabrica + valor_distribuidor + valor_impostos
    alert("O custo final é: R$"+custo_final+".")
}