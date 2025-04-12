let quociente = 0
let dividendo = parseFloat(prompt("Digite o valor do dividendo"))
let divisor = parseFloat(prompt("Digite o valor do divisor"))

do{
    dividendo = dividendo - divisor
    quociente += 1
    } while (dividendo >= divisor)

document.write("O resultado inteiro da divisão é: "+ quociente)     