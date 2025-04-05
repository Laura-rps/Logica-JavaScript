alert("Calculo do preço da gasolina.")
let combustivel = (prompt("Digite o tipo de combustível (A - Álcool ou G - Gasolina): "))
let litros = parseFloat(prompt("Digite a quantidade de litros: "))
let precoLitro, desconto
if (isNaN(litros) || combustivel !== "A" && combustivel !== "a" && combustivel !== "g" && combustivel !== "G"){
    alert("Valores invalidos!")
}
 if(combustivel === "a" || combustivel === "A"){
   precoLitro = 2.90    
 
if (litros <=20){
    desconto = 0.03
}
else{
    desconto = 0.06
} 
}else if(combustivel ==="g" || combustivel ==="G"){
    precoLitro = 3.30
    if (litros <=20){
        desconto = 0.04
    }
    else{
        desconto = 0.06
    }
}
let valorBruto = litros * precoLitro
let valorFinal = valorBruto - (valorBruto * desconto)

alert("O valor a ser pago é R$: "+valorFinal.toFixed(2)+".")
