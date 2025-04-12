let soma = 0
let valor
for(let contador = 1; contador <= 10;contador++){
    valor = parseFloat(prompt("Digite o "+contador+"º valor"))
    soma += valor 
}
let media = soma / 10

document.write("Somatório dos valores: "+ soma+"<br>")
document.write("Média aritmética: "+ media)
