let base = parseFloat(prompt("Digite o valor da base:"))
let expoente = parseInt(prompt("Digite o valor do expoente (inteiro e positivo):"))

let resultado = 1

for (let contador = 1; contador <= expoente; contador++) {
  resultado *= base
}

document.write(base + " elevado a " + expoente + " = " + resultado)