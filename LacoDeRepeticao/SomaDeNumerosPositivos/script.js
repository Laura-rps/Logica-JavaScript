let resultado = 0
alert("Se quiser parar o somador, coloque um número negativo")
let numero = parseFloat(prompt("Digite um numero positivo"))

do {
    resultado = resultado + numero
    alert("Soma total é: " + resultado + ".")
    numero = parseFloat(prompt("Digite outro número positivo (ou um número negativo para parar):"))
} while (numero >= 0)

alert("Programa finalizado! A soma total dos números positivos é: " + resultado + ".")
