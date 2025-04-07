let idadeM1 = parseFloat(prompt("Digite a idade da primeira mulher"))
let idadeH1 = parseFloat(prompt("Digite a idade do primeiro homem"))
let idadeM2 = parseFloat(prompt("Digite a idade da segunda mulher"))
let idadeH2 = parseFloat(prompt("Digite a idade do segundo homem"))
let mulherMaisNova, mulherMaisVelha
let homemMaisNovo, homemMaisVelho
if(isNaN(idadeH1) || isNaN(idadeH2) || isNaN(idadeM1) || isNaN(idadeM2)){
    alert("Texto inserido! Operação inválida")
}
if (idadeM1>idadeM2){
    mulherMaisNova = idadeM2
    mulherMaisVelha = idadeM1
}
else{
    mulherMaisNova = idadeM1
    mulherMaisVelha = idadeM2
}
if(idadeH1>idadeH2){
    homemMaisNovo = idadeH2
    homemMaisVelho = idadeH1
}
else{
    homemMaisNovo = idadeH1
    homemMaisVelho = idadeH2
} 

soma = homemMaisVelho + mulherMaisNova
produto = homemMaisNovo * mulherMaisVelha

alert("A soma da idade do homem mais velho e da mulher mais nova é: "+soma+".")
alert("O produto da idade da mulher mais velha e do homem mais velho é: "+produto+".")