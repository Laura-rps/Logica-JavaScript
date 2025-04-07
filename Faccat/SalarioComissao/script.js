alert("Calculo de salario total")
let salario_inicial = parseFloat(prompt("Digite o valor do seu salario sem as comissões"))
let vendas = parseFloat(prompt("Digite o valor total das vendas que você efetuou"))
let salario_final
if(isNaN(salario_inicial) || isNaN(vendas)){
    alert("Texto inserido! Operação inválida")
} 
else if (vendas<=1500){
    salario_final = salario_inicial + (vendas * 0.03)
}
else{
    salario_final = salario_inicial + (vendas * 0.05)
}
alert("O salario final é: R$"+salario_final.toFixed(2)+".")