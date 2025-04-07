let duracao = parseFloat(prompt("Digite o tempo gasto na viagem (em horas)"))
let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h)"))
let distancia
let litros_usados
if(isNaN(duracao) || isNaN(velocidade)){
    alert("Texto inserido! Operação inválida") 
}
else{
    distancia = duracao * velocidade
    litros_usados = distancia / 12
    document.write("Velocidade media: "+velocidade+ " km/h.<br>")
    document.write("Tempo gasto: "+duracao.toFixed(2)+" horas.<br>")
    document.write("Distancia percorrida: "+distancia.toFixed(2)+" km.<br>")
    document.write("Litros de combustível utilizados: "+litros_usados.toFixed(2)+" litros.<br>")
}