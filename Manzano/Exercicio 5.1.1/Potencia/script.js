let base = 3
let resultado

for(let expoente = 3; expoente <= 15; expoente++){
    resultado = 1
    for(let contador = 1; contador <= expoente; contador++){
        resultado *= base
    }
    document.write("3 elevado a "+ expoente+ " = "+ resultado + "<br>")
}