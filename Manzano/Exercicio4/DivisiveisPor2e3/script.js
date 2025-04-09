let n1 = parseFloat(prompt("Digite o primeiro numero"))
let n2 = parseFloat(prompt("Digite o segundo numero"))
let n3 = parseFloat(prompt("Digite o terceiro numero"))
let n4 = parseFloat(prompt("Digite o quarto numero"))

if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
    alert ("Valor inserido invalido! Digite apenas numeros")
}
else{
    if(n1 % 2==0 && n1 % 3==0){
        alert("O numero divisivel por 2 e 3 é: "+n1)
    }
    else if(n2 % 2==0 && n2 % 3==0){
        alert("O numero divisivel por 2 e 3 é: "+n2)
    }
    else if(n3 % 2==0 && n3 % 3==0){
        alert("O numero divisivel por 2 e 3 é: "+n3)
    }
    else if(n4 % 2==0 && n4 % 3==0){
        alert("O numero divisivel por 2 e 3 é: "+n4)
    }
}