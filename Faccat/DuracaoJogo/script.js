alert("Calculo da duração de um jogos em horas")
let dia_inicio = parseFloat(prompt("Digite o dia do inicio do jogo"))
let hora_inicio = parseFloat(prompt("Digite a hora que o jogo foi iniciado"))
let dia_fim = parseFloat(prompt("Digite o dia do final do jogo"))
let hora_fim = parseFloat(prompt("Digite a hora que o jogo foi encerrado"))
let duracao
if (isNaN(dia_inicio) || isNaN(hora_inicio) || isNaN(dia_fim) || isNaN(hora_fim)){
    alert("Texto inserido! Operação inválida")
}
else{
    if (dia_inicio === dia_fim) {
        if (hora_inicio < hora_fim) {
            duracao = hora_fim - hora_inicio
        } else {
            duracao = (24 - hora_inicio) + hora_fim
        }
    } else {
        duracao = (24 - hora_inicio) + hora_fim + ((dia_fim - dia_inicio - 1) * 24)
    }

    alert("O jogo começou no dia " + dia_inicio + " às " + hora_inicio + "h e terminou no dia " + dia_fim + " às " + hora_fim + "h.")
    alert("A duração total foi de " + duracao + " hora(s).")
}
