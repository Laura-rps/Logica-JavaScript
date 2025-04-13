let numero = parseFloat(prompt("Digite um valor positivo (ou negativo para encerrar)"))
let menor
let maior

if (numero < 0){
    document.write("Nenhum valor positivo foi informado.")
}
else{
    maior = numero
    menor = numero

    do{
    numero = prompt("Digite outro valor (ou negativo para encerrar)")
    if (numero >= 0){
       if(numero > maior){
        maior = numero
       }
    }
    if (numero < menor){
        menor = numero
    }
    } while (numero > 0)
}
document.write("Maior valor informado: "+ maior+ "<br>")
document.write("Menor valor informado: "+ menor)
