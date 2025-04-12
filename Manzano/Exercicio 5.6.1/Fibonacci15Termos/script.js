let termo1 = 1
let termo2 = 1

document.write("Série de Fibonacci até o 15º termo:")
document.write(termo1+"<br>")
document.write(termo2+"<br>")

for (let contador = 3; contador<= 15; contador++){
    let proximo = termo1 + termo2
    document.write(proximo+"<br>")
    termo1 = termo2
    termo2 = proximo
} 

