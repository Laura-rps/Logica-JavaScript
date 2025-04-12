let soma = 0 
for(let contador = 1; contador <= 500; contador++){
    if (contador % 2 == 0){
        soma = soma+contador
    }
}
document.write("A soma dos números pares de 1 até 500 é: "+soma)