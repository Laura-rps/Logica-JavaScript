let numero = parseFloat(prompt("Digite um numero"))

if(isNaN(numero)){
    alert("Valor inserido inválido! Digite apenas números.") 
}
else if (numero % 2==0){
    alert ("Esse numero é par!")
}
else{
    alert ("Esse numero é impar!")
}