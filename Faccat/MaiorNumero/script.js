alert("Qual o maior?")
let primeiro = parseFloat(prompt("Digite o primeiro numero"))
let segundo = parseFloat(prompt("Digite o segundo numero"))
if(isNaN(primeiro) || isNaN(segundo)){
    alert("Texto inserido! Operação inválida")
}
else if (primeiro === segundo){
    alert("Numeros repetidos digitados! Operação invalida!") 
}
else if (primeiro > segundo){
    alert("O maior numero é: "+primeiro+".")
}
else{
    alert("O maior numero é: "+segundo+".")
}