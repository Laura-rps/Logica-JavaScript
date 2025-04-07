let comprimento = parseFloat(prompt("Digite o comprimento da caixa"))
let altura = parseFloat(prompt("Digite a altura da caixa"))
let largura = parseFloat(prompt("Digite a largura"))
let volume
if(isNaN(comprimento) || isNaN(altura) || isNaN(largura)){
    alert("Texto inserido! Operação inválida")
}
else{
    volume = comprimento * largura * altura
    alert("O volume da caixa retangular é: "+volume+".")
}