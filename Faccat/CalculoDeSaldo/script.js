alert("Calculo de saldo")
let saldo = parseFloat(prompt("Digite o seu saldo atual: "))
let credito = parseFloat(prompt("Digite o seu credito atual: "))
let debito = parseFloat(prompt("Digite o seu debito atual: "))
let saldo_final = saldo + credito - debito
if (isNaN(saldo) || isNaN(credito) || isNaN(debito)){
    alert("Texto inserido! Utilize numeros.")
}
else if (saldo_final>=0){
    alert("Seu saldo é positivo.")
}
else{
    alert("Seu saldo é negativo.")
}
alert("Seu saldo atual é: "+saldo_final+".")