alert("Resultado de um jogo entre dois times.")
let nome1 = prompt("Digite o nome do primeiro time")
let ponto1 = parseInt(prompt("Digite a pontuação do primeiro time"))
let nome2 = prompt("Digite o nome do segundo time")
let ponto2 = parseInt (prompt("Digite a pontuação do segundo time"))
if(isNaN(ponto1) || isNaN(ponto2)){
    alert("Texto inserido! Operação inválida")
}
else{
    if(ponto1>ponto2){
        alert(nome1+ " venceu por "+ponto1+" x "+ponto2+" contra "+nome2+"." )
    }
    else if(ponto2>ponto1){
        alert(nome2+ " venceu por "+ponto2+" x "+ponto1+" contra "+nome1+"." )
    }
    else{
       alert("Empate!") 
    }
}