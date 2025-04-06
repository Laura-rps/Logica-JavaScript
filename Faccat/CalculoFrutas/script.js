alert("Calculo do valor de frutas")
let qtd_morangos = parseInt(prompt("Digite a quantidade de morangos (em Kg)"))
let qtd_maca = parseInt(prompt("Digite a quantidade de maças (em Kg)"))
let valorMorango 
let valorMaca
let desconto
if (isNaN(qtd_maca) || isNaN(qtd_morangos)){
    alert("Texto inserido! Operação invalida!")
}
else if (qtd_morangos<= 5){
    valorMorango = qtd_morangos * 2.50
}
else{
    valorMorango = qtd_morangos * 2.20
}
if (qtd_maca<= 5){
    valorMaca = qtd_maca * 1.80
}
else{
    valorMaca = qtd_maca * 1.50
}

let valorTotal = valorMaca + valorMorango

if (qtd_morangos + qtd_maca > 8 || valorTotal> 25) {
    desconto = valorTotal * 0.10
    valorTotal = valorTotal - desconto
}
alert("O valor a ser pago é: R$ "+valorTotal.toFixed(2)+".")
