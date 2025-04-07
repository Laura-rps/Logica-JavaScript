alert("Soma dos dois numeros maiores.")
let num1 = parseFloat(prompt("Digite o primeiro numero"))
let num2 = parseFloat(prompt("Digite o segundo numero"))
let num3 = parseFloat(prompt("Digite o terceiro valor"))
let maior1
let maior2
if(isNaN(numero1) || isNaN(numero2) || (isNaN(numero3))){
    alert("Texto inserido! Operação inválida")
}
if (num1 > num2 && num1 > num3) {
    maior1 = num1
    if (num2 > num3) {
      maior2 = num2
    } else {
      maior2 = num3
    }
  } else if (num2 > num1 && num2 > num3) {
    maior1 = num2
    if (num1 > num3) {
      maior2 = num1
    } else {
      maior2 = num3
    }
  } else {
    maior1 = num3
    if (num1 > num2) {
      maior2 = num1
    } else {
      maior2 = num2
    }
  }

  let soma = maior1 + maior2
  alert("A soma dos dois maiores números é: " + soma)
