alert("Fahrenheit Para Celsius")
let temperaturaF = parseFloat(prompt("Digite a temperatura em Fahrenheit"))
if(isNaN(temperaturaF)) {
    alert("Texto inserido! Operação inválida")
}
else{
    let temperaturaC1 = (temperaturaF - 32) / 9
    let temperaturaC2 = temperaturaC1 * 5
    alert("A temepratura inserida se convertida em graus Celsius é: "+temperaturaC2+".")
}

