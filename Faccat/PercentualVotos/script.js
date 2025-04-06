alert("Calculo da porcentagem de votos")

let total_eleitores = parseFloat(prompt("Digite o total de eleitores"))
let votos_brancos = parseFloat(prompt("Digite o total de votos brancos"))
let votos_nulos = parseFloat(prompt("Digite o total de votos nulos"))
let votos_validos = parseFloat(prompt("Digite o total de votos validos")) 

if(isNaN(total_eleitores) || isNaN(votos_brancos) || isNaN(votos_nulos)|| isNaN(votos_validos)){
    alert("Texto inserido! Operação inválida")
}
else{
let perc_brancos = (votos_brancos / total_eleitores) * 100
let perc_nulos = (votos_brancos / total_eleitores) * 100
let perc_validos = (votos_validos / total_eleitores) * 100

alert("Percentual de votos brancos "+perc_brancos.toFixed(2)+"%")
alert("Percentual de votos nulos "+perc_nulos.toFixed(2)+"%")
alert("Percentual de votos validos "+perc_validos.toFixed(2)+"%")}
