alert("Positivo, negativo ou zero?")
let numero = parseFloat(prompt("Digite um numero"))
if(isNaN(numero)){
    alert("Texto inserido! Operação inválida")
}
else if (numero>=0){
    alert("O numero é positivo!")
}
else{
    alert("O numero é negativo!")
}
