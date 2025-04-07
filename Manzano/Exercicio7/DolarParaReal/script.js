let dolar = parseFloat(prompt("Digite a cotação atual do dolar"))
let reais = parseFloat(prompt("Digite a quantidade de dolares que voce quer converter"))
let convercao
if(isNaN(dolar) || isNaN(reais)){
    alert("Texto inserido! Operação inválida")
}
else{
    convercao = reais * dolar
    alert("A quantidade de dolares convertida em reais é: "+convercao+".")
}