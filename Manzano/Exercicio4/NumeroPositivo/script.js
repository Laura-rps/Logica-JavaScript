let numero = parseFloat(prompt("Digite um numero positivo"))
let resultado

if(isNaN(numero)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
else if(numero>0){
    alert("Seu numero é: "+numero+".")
} 
else{
    resultado = numero * -1
    alert("Seu numero positivo é: "+resultado+".")
}