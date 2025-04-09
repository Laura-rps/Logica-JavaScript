let A = parseFloat(prompt("Digite o valor de A:"))

if (A === 0) {
  alert("Não é uma equação do segundo grau. A deve ser diferente de zero.")
} else {
  let B = parseFloat(prompt("Digite o valor de B:"))
  let C = parseFloat(prompt("Digite o valor de C:"))

  let delta = (B * B) - (4 * A * C);

  if (delta < 0) {
    alert("A equação não possui raízes reais.")
  } else {
    let x1 = (-B + Math.sqrt(delta)) / (2 * A)
    let x2 = (-B - Math.sqrt(delta)) / (2 * A)

    alert("As raízes da equação são:\n" +
          "x1 = " + x1.toFixed(2) + "\n" +
          "x2 = " + x2.toFixed(2));
  }
}