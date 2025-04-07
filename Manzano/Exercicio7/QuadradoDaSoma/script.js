let A = parseFloat(prompt("Digite o valor de A"))
let B = parseFloat(prompt("Digite o valor de B"))
let C = parseFloat(prompt("Digite o valor de C"))
let resultado

if(isNaN(A) || isNaN(B) || isNaN(C)){
    alert("Texto inserido! Operação inválida")
}
else{
    resultado = (A + B + C) * (A + B + C)
    alert("O quadrado da soma é: "+resultado+".")
}