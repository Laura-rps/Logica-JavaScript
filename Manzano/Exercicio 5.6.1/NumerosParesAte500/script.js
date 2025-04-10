let resultado = "Números pares de 0 a 500:<br><br>"

for (let numero = 0; numero <= 500; numero++) {
  if (numero % 2 === 0) {
    resultado += numero + "<br>"
  }
}

document.write(resultado)