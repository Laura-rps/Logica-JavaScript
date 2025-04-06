alert("Maior,menor ou iguais?")
let primeiro = parseFloat(prompt("Digite o primeiro numero"))
let segundo = parseFloat(prompt("Digite o segundo numero"))
if(isNaN(primeiro) || isNaN(segundo)){
    alert("Texto inserido! Operação inválida")
}
else if (primeiro === segundo){
    alert("Os dois numeros sao iguais!") 
}
else if (primeiro > segundo){
    alert("O maior numero é: "+primeiro+".")
}
else{
    alert("O maior numero é: "+segundo+".")
}