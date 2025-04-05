alert("Calculo da area de um trapezio")
let baseMenor = parseFloat(prompt("Digite o valor da base menor: "))
let baseMaior = parseFloat(prompt("Digite o valor da base maior: "))
let altura = parseFloat(prompt("Digite no valor da altura: "))
if (isNaN(baseMenor) || baseMenor<=0 || isNaN(baseMaior) || baseMaior<=0 || isNaN(altura) || altura<=0){
    alert("Número inválido ou texto foi inserido!")
}
else{
    let area = ((baseMaior + baseMenor) * altura) / 2
    alert("A area do trapezio é: "+area+ ".")
}