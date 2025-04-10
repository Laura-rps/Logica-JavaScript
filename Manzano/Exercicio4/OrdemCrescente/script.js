let A = parseFloat(prompt("Digite o número A:"))
let B = parseFloat(prompt("Digite o número B:"))
let C = parseFloat(prompt("Digite o número C:"))

if (isNaN(A) || isNaN(B) || isNaN(C)) {
    alert("Valor inserido inválido! Digite apenas números.")
} else {
    if (A <= B && B <= C) {
        alert(A + ", " + B + ", " + C)
    } 
    else if (A <= C && C <= B) {
        alert(A + ", " + C + ", " + B)
    } 
    else if (B <= A && A <= C) {
        alert(B + ", " + A + ", " + C)
    } 
    else if (B <= C && C <= A) {
        alert(B + ", " + C + ", " + A)
    } 
    else if (C <= A && A <= B) {
        alert(C + ", " + A + ", " + B)
    } 
    else {
        alert(C + ", " + B + ", " + A)
    }
}
