alert("Você pode votar?")
let ano_atual = parseInt(prompt("Digite o ano atual"))
let ano_nasc = parseInt(prompt("Digite o ano do seu nascimento"))
let resultado = ano_atual - ano_nasc
if(isNaN(ano_atual) || isNaN(ano_nasc)){
    alert("Texto inserido! Operação inválida")
}
else if (resultado<18){
    alert("Você ainda nao pode votar!")
}
else{
    alert("Você ja pode votar!")
}