alert("Calculo de media")
let n1 = parseInt(prompt("Digite a primeira nota"))
let n2 = parseInt(prompt("Digite a segunda nota"))
let n3 = parseInt(prompt("Digite a terceira nota"))
let n4 = parseInt(prompt("Digite a quarta nota"))
if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
let media = (n1 + n2 + n3 + n4) / 4
let nova_media
if (media>=7){
    alert("Sua media é: "+media+".")
    alert("Você foi aprovado!")
    }
else{
    alert("Sua media é: "+media+".")
    alert("Você está abaixo da média! Você deve fazer o exame de recuperação.")
    let exame = parseInt(prompt("Insira a nota do seu exame de recuperação"))
    nova_media = (media + exame) / 2
}
if (nova_media>=5){
    alert("Você foi aprovado pelo exame!")
    alert("Sua media é: "+media+".")
    }
    else{
        alert("Você foi reprovado pelo exame!")
        alert("Sua media é: "+media+".")
    }