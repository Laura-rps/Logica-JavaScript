alert("Compara 3 numeros e diz qual o maior entre eles.")
alert("Não digite numeros iguais!")
let numero1 = parseFloat(prompt("Digite o primeiro numero"))
let numero2 = parseFloat(prompt("Digite o segundo numero"))
let numero3 = parseFloat(prompt("Digite o terceiro numero"))
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    alert("Texto inserido! Operação inválida")
} 
else if (numero1 > numero2 && numero1 > numero3){
    alert("O maior numero é: "+numero1+".")
}
else if(numero2 > numero1 && numero2 > numero3){
    alert("O maior numero é: "+numero2+".")
}
else if(numero3 > numero1 && numero3 > numero2){
    alert("O maior numero é: "+numero3+".")
}
else{
    alert("Numeros repetidos digitados! Operação invalida!")
}