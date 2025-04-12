let soma = 0
let qtdPares = 0

for(let contador = 50; contador <= 70; contador++){
    if (contador % 2 == 0){
        soma += contador
        qtdPares++
    }

}
let media = soma / qtdPares

document.write("Soma dos números pares de 50 a 70: "+ soma + "<br>")
document.write("Média dos números pares: "+ media)