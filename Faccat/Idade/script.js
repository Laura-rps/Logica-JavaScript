alert("Programa que calcula sua idade em dias")
let anos = parseInt(prompt("Digite a idade em anos"))
let meses = parseInt(prompt("Digite quantos meses se passaram do seu aniversario"))
let dias = parseInt(prompt("Digite quantidade de dias que se passou do seu ultimo mesversario"))
if (isNaN(anos) || isNaN(meses) || isNaN(dias)){
    alert("Texto inserido! Operação inválida")
}
else{
    let resultado = (anos * 365) + (meses * 30) + dias
    alert("A sua idade expressa em dias é: "+resultado+".")
}