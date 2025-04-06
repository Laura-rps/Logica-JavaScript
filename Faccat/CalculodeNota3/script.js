alert("Calculo de media e determinação de conceito")
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))
let media_exer = parseFloat(prompt("Digite a media dos exercicios"))
let media_aprov = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3) + (media_exer * 1)) / 7
let conceito
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(media_exer)){
    alert("Valor inserido invalido!")
  }
else if (media_aprov>= 9){
   conceito = "A" 
}   
else if (media_aprov>= 7.5){
    conceito = "B"
}
else if (media_aprov>= 6){
    conceito = "C"
}
else{
    conceito = "D"
} 
alert("Sua media de aproveitamento é: "+media_aprov.toFixed(2)+ ".")
alert("Seu conceito é: "+conceito+".")