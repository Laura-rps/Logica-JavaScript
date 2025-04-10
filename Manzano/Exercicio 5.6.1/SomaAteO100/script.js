document.write("Soma até o 100<br><br>")

let soma = 0

for (let contador = 1; contador <= 100; contador++) {
  soma = soma + contador
  document.write(soma + "<br>")
}

document.write("<br>A soma dos 100 primeiros números inteiros é: " + soma)
