alert("Diz se um triangulo pode ser formado e diz qual tipo de triangulo pode ser formado")
let a = parseFloat(prompt("Digite o lado A do triangulo"))
let b = parseFloat(prompt("Digite o lado B do triangulo"))
let c = parseFloat(prompt("Digite o lado C do triangulo"))
if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("Texto inserido! Operação invalida")
}
else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }
} else {
    alert("Os valores digitados NÃO formam um triângulo.");
}