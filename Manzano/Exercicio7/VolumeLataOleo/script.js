alert("Calculo do volume de uma lata")
let pi = 3.1415
let volume
let raio = parseFloat(prompt("Digite o raio da lata (em cm)"))
let altura = parseFloat(prompt("Digite a altura da lata (em cm):"))
if(isNaN(raio) || isNaN(altura)){
    alert("Texto inserido! Operação inválida")
}
else{
    volume = pi * raio * raio * altura
    alert("O volume da lata de óleo é: " + volume.toFixed(2) + " cm³.")
}