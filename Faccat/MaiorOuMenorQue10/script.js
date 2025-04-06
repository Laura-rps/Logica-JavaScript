alert("Maior ou menor que 10?")
let numero = parseInt(prompt("Digite um numero"))
if(isNaN(numero)){
    alert("Texto inserido! Operação inválida")
}
else if (numero>10){
    alert("O numero é maior que 10!")
}
else if(numero<10){
    alert("O numero é menor que 10!")
}
else{
    alert("O numero é 10!")
}
