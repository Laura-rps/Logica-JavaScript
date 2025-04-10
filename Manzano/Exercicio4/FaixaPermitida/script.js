let numero = parseFloat(prompt("Digite numero entre 1 e 9"))
if (isNaN(numero)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
else if(numero>=1 && numero<=9){
    alert("O valor esta na faixa permitida")
}
else{
    alert("O valor não esta na faixa permitida")
}