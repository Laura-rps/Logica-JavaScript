let numero = parseFloat(prompt("Digite um numero de 0 a 20."))
if(isNaN(numero)){
    alert("Texto inserido! Operação inválida")
}
else if(numero>20){
    alert("Numero maior que 20 digitado!")
}
else{
do{
    document.write(numero + "<br>")
    numero = numero +2
} while (numero<=20)
    document.write("Fim da contagem!")}