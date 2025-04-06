alert("Calculo de peso ideal")
let nome = prompt("Digite seu nome")
let genero = prompt("Digite o gênero que você se identifica (M/F)")
let altura = parseFloat(prompt("Digite sua altura em metros (exemplo: 1.60)"))
let peso_ideal
if (isNaN(altura)){
    alert("Texto inserido! Operação inválida")
}
else{
    if(genero.toUpperCase() === "M"){
    peso_ideal = (72.7 * altura) - 58
    }
    else if(genero.toUpperCase() === "F"){
        peso_ideal = (62.1 * altura) - 44.7
    }
    else{
        alert("Genero invalido selecionad0! Digite M ou F!")
    }
}
alert(nome+" seu peso ideal é "+peso_ideal.toFixed(2)+".")