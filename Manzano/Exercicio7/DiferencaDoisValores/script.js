let numero1 = parseFloat(prompt("Digite o primeiro numero"))
let numero2 = parseFloat(prompt("Digite o segundo numero"))
let diferenca
if(isNaN(numero1) || isNaN(numero2)){
    alert("Texto inserido! Operação inválida")
}
else if(numero1 === numero2){
    alert("Os dois numeros sao iguais!")
}
else{
    if (numero1>numero2){
        diferenca = numero1 - numero2
        alert("A diferença dos numeros "+numero1+" e "+numero2+" é "+diferenca+".")
    }
    else{
        diferenca = numero2 - numero1
        alert("A diferença dos numeros "+numero1+" e "+numero2+" é "+diferenca+".")
    }
}