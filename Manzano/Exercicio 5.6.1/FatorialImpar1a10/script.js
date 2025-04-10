let mensagem = "";

for (let numero = 1; numero <= 10; numero++) {
  if (numero % 2 !== 0) {
    let fatorial = 1;

    for (let contador = 1; contador <= numero; contador++) {
      fatorial *= contador;
    }

    mensagem += `Fatorial de ${numero} = ${fatorial}\n`;
  }
}

alert(mensagem);