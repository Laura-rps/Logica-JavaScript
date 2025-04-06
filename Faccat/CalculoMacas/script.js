alert("Calculo do preço das maças.")
let maca = parseInt("Quantas maças voce comprou?")
let resultado
if (isNaN(maca)){
    alert("Texto inserido! Operação invalida")
}
else if (maca<12){
resultado = maca * 1.30
}
else{
    resultado = maca * 1
}
alert("O custo final das maças é: R$ "+resultado+".")