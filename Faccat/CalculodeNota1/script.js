alert("Calculo de notas com media ponderada.")
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))
let calc_nota1 = nota1 * 2
let calc_nota2 = nota2 * 3
let calc_nota3 = nota3 * 5
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    alert("Texto invalido inserido!")
}
else{
let nota_final = (calc_nota1 + calc_nota2 + calc_nota3) / 10
    alert ("Sua nota final é: "+nota_final+ ".")
}

