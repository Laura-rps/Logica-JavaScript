let senha
do{
    senha = prompt("Digite a senha")
    if (senha !== "0709"){
        alert("Senha incorreta! tente novamente")
    }
} while (senha !== "0709")
    alert("Senha correta! Acesso permitido.")