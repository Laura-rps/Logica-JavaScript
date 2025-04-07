alert("Calculo do salario total de um funcionario.")
let horas_trab = parseFloat(prompt("Digite o número de horas trabalhadas no mês"))
let salario_hora = parseFloat(prompt("Digite o salário por hora"))
let horas_semanais = parseFloat(prompt("Digite a quantidade de horas semanais padrão"))
let semanas_mes = 4.0
let horas_mensais = horas_semanais * semanas_mes
if(isNaN(horas_trab) || isNaN(salario_hora) || isNaN(horas_semanais)){
    alert("Texto inserido! Operação inválida")
}
else{
    if (horas_trab>horas_mensais){
        let horas_extras = horas_trab - horas_mensais
        let valor_horas_extras = salario_hora * 1.5
        let salario_final = (horas_mensais * salario_hora) + (horas_extras * valor_horas_extras)
        alert("O salario atual do funcionario é: R$"+salario_final+".")
    }
    else{
        salario_final = horas_trab * salario_hora
        alert("O salario atual do funcionario é: R$"+salario_final+".")
    }
}
