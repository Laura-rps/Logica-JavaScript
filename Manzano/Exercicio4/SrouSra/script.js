let nome = prompt("Digite seu nome")
let genero = prompt("Digite seu genero (M/F)")
let saudacao
genero = genero.toUpperCase

if(genero = "F"){
   saudacao = "Sra."
}
else if(genero = "M"){
    saudacao = "Sr."
}
document.write(saudacao+ nome+" seu cadastro foi feito com sucesso")