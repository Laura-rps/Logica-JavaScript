alert("Calculo de quantidade em estoque")
let quantidade_total = parseInt(prompt("Digite a quantidade atual do produto no estoque"))
let quantidade_maxima = parseInt(prompt("Digite a quantidade maxima do estoque"))
let quantidade_minima = parseInt(prompt("Digite a quantidade minima do estoque"))
let quantidade_media = ((quantidade_maxima + quantidade_minima)/2)
if (isNaN(quantidade_maxima) || isNaN(quantidade_media) || isNaN(quantidade_minima)){
    alert("Texto inserido! Operação invalida!")
}
else if (quantidade_total>= quantidade_minima){
    alert("Não é necessario a efetuação da compra!")
}
else{
    alert("É necessario a compra de mais itens!")
}