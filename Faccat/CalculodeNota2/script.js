alert("Calculo com media aritmedica simples de duas notas")
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let resultado = (nota1 + nota2) / 2
if (isNaN(nota1) || isNaN(nota2)){
    alert("Texto inserido invalido!")
}
else if (resultado>= 6){
    alert("Parabens! Voce foi aprovado!") 
}
else{
    alert("Você foi reprovado!")
}
alert("Sua media é "+resultado+".")