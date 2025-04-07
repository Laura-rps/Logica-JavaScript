alert("Celsius para Fahrenheit.")
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius"))
if(isNaN(celsius)){
    alert("Texto inserido! Operação inválida")
}
else{
    let fahrenheit = (9 * celsius + 160) / 5
    alert("A temperatura em graus Fahrenheit é: "+fahrenheit+".")
}