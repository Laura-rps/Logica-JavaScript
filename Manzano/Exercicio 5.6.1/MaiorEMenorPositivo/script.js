let valor = parseFloat(prompt("Digite um valor inteiro positivo (ou negativo para encerrar)")) 
let maior
let menor
if (valor < 0){
    alert("Nenhum valor válido foi informado.")
}
else{
    maior = valor
    menor = valor

    do{
        valor = parseFloat(prompt("Digite outro valor (ou negativo para encerrar):"))
        if (valor>=0){
            if (valor > maior){
                maior = valor
            }
        }
        if(valor<menor){
            menor = valor
        }
    } while (valor > 0)
}
document.write("Maior valor informado: "+ maior+"<br>")
document.write("Menor valor informado: "+ menor)

