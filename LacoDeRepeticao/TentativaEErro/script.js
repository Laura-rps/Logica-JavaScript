let numero
do {
    numero = parseInt(prompt("Digite um número entre 1 a 10!"))
    if (numero !== 7) {
        alert("Errado! Tente novamente.")
    }
} while (numero !== 7)

alert("Parabéns! Você acertou o número!")