alert("Antecessor e sucessor")
let numero = parseInt(prompt("Digite um numero"))
if (isNaN(numero)){
    alert("Texto inserido!")
}
else{
    let sucessor = numero + 1
    let antecessor = numero - 1
    alert("O sucessor do numero digitado é "+sucessor+ " e o antecessor é "+antecessor+".")
}