let base = 3;

for (let expoente = 0; expoente <= 15; expoente++) {
  let resultado = 1;

  for (let contador = 1; contador <= expoente; contador++) {
    resultado *= base;
  }

  document.write("3 elevado a " + expoente + " = " + resultado + "<br>");
}