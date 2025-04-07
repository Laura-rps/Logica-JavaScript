let nota, soma = 0
let contador = 0
do{
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10."))

    if (nota>=0 && nota<=10){
        soma += nota
        contador++
    }
} while(nota>=0 && nota<=10)

if(contador>=0){
    let media = soma / contador
    alert("A média das notas válidas é: " + media.toFixed(2))
} else {
    alert("Nenhuma nota válida foi inserida.")
}
    