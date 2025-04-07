alert("Calculo de uma prestação")
let valor = parseFloat(prompt("Digite o valor da prestação"))
let taxa = parseFloat(prompt("Digite a taxa de juros ao mês (%)"))
let tempo = parseInt(prompt("Digite o tempo de atraso (em meses)"))
let prestacao 
if(isNaN(valor) || isNaN(taxa) || isNaN(tempo)){
    alert("Texto inserido! Operação inválida") 
}
else{
    prestacao = valor + (valor * taxa / 100) * tempo
    alert("O valor que deve ser pago é: R$"+prestacao+".")
}