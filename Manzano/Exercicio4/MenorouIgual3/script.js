let numero = parseFloat(prompt("Digite um numero menor ou igual a 3."))

if(isNaN(numero)){
   alert ("Valor inserido invalido! Digite apenas numeros") 
}
else if(numero<=3){
    alert("Seu numero é: "+numero+".")
}
else{
    alert("O numero inserido é maior que 3")
}