document.write("Tabuada<br><br>")

let numero = parseInt(prompt("Digite o número"))

for (let contador = 1; contador <= 10; contador++) {
  document.write(numero + " x " + contador + " = " + (numero * contador) + "<br>")
}
