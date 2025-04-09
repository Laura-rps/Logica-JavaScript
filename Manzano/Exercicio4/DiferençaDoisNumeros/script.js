let numero1 = parseFloat(prompt("Digite o primeiro numero"))
let numero2 = parseFloat(prompt("Digite o segundo numero"))
let resultado
if(isNaN(numero1) || isNaN(numero2)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
else{
    if(numero1>numero2){
   resultado = numero1 - numero2
   document.write("A diferença dos números "+ numero1+ " e "+ numero2+ " é "+ resultado+ ".")
}
else if(numero2>numero1){
    resultado = numero2 - numero1
    document.write("A diferença dos números "+ numero2+ " e "+ numero1+ " é "+ resultado+ ".")
}
else{
    alert("Os dois numeros sao iguais!")
}
}