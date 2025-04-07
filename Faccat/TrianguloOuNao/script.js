let A = parseFloat(prompt("Digite o lado A"))
let B = parseFloat(prompt("Digite o lado B"))
let C = parseFloat(prompt("Digite o lado C"))
if(isNaN(A) || isNaN(B) || isNaN(C)){
    alert("Texto inserido! Operação inválida")
}
else if ((A<B+C) || (B<C+A) || (C<B+A)){
    alert("Os valores formam um triangulo!")
}
else{
    alert("Os valores nao formam um triangulo!")
}