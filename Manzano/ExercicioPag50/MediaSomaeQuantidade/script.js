let soma = 0
let quantidade = 0
let numero

alert("Para encerrar digite um valor negativo")


do{
    numero = parseFloat(prompt("Digite um valor positivo")) 
    if(numero >= 0){
        soma += numero
        quantidade += 1
    }
} while (numero > 0)
if(quantidade > 0){
    let media = soma / quantidade
    document.write("Total de valores lidos: "+ quantidade+ "<br>")
    document.write("Somatório: "+ soma+ "<br>")
    document.write("Média aritmética: "+ media.toFixed(2))
}    
else{
    document.write("Nenhum valor positivo foi informado.")
}