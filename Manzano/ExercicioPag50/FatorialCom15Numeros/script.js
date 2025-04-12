let somaFatorial = 0
let contador = 1
do{
    let numero = parseFloat(prompt("Digite o "+ contador+ "º número"))
    let fatorial = 1
    contador1 = 1
    
    for(contador1 = 1; contador1 <= numero; contador1++){
        fatorial = fatorial * contador1
    }
    somaFatorial = somaFatorial + fatorial
    contador += 1
} while (contador <= 15)

    document.write("A soma dos fatoriais é: "+ somaFatorial)    