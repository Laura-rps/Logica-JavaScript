let fatorial = 1
let numero = parseFloat(prompt("Digite um numero"))
while (numero>=1){
    fatorial = fatorial * numero
    numero = numero - 1
}
alert("O fatorial é: "+fatorial+".")