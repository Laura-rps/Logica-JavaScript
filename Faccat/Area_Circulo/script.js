alert("Calculo da area de um circulo")
let raio = parseFloat(prompt("Digite o raio do circulo"))
if (isNaN(raio)){
    alert("Texto inserido!")
}
else{
    let area = 3.1416 * (raio * raio)
    alert("A area do circulo é: "+area+ ".")
}