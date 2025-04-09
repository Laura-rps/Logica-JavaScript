let n1 = parseFloat(prompt("Digite a primeira nota"))
let n2 = parseFloat(prompt("Digite a segunda nota"))
let n3 = parseFloat(prompt("Digite a terceira nota"))
let n4 = parseFloat(prompt("Digite a quarta nota"))
let media = (n1 + n2 + n3 + n4) / 4
if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
if (media>=5){
    alert ("Parabens! Você foi aprovado!")
    alert ("Sua media escolar é: "+media+".")
} 
else{
    alert("Você foi reprovado!")
    alert("Sua media escolar é: "+media+".")
}