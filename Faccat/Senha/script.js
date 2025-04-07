let usuario = parseInt(prompt("Digite o numero de usuario"))
let senha = parseInt(prompt("Digite a senha numerica"))
if(isNaN(usuario) || isNaN(senha) || senha !== 9999 || usuario !== 1234){
    alert("Dados inseridos invalidos!")
}
else{
  alert("Login confirmado!")
}