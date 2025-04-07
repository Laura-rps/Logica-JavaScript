let dolar = parseFloat(prompt("Digite a cotação atual do dolar"))
let reais = parseFloat(prompt("Digite o valor em reais que você possui"))
let convercao
if(isNaN(dolar) || isNaN(reais)){
    alert("Texto inserido! Operação inválida")
}
else{
    convercao = reais / dolar
    alert("A quantidade de reais convertida em dolares é: "+convercao+".")
}