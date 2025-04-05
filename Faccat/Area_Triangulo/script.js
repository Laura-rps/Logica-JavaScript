alert("Calculo da area de um triangulo")
let base = parseFloat(prompt("Digite o valor da base: "))
let altura = parseFloat(prompt("Digite o valor da altura: "))
if (isNaN(base) || base<=0 || isNaN(altura) || altura<=0){
    alert("Número inválido ou texto foi inserido!")
}
else{
    let area = (base * altura) / 2
    alert("O valor da area é: "+area+".")
}