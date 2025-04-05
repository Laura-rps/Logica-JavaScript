let ano_atual = 2025;
alert("Digite o código do empregado:");
let ano_nascimento = parseInt(prompt("Digite o ano de nascimento:"));
let ano_ingresso = parseInt(prompt("Digite o ano de entrada na empresa:"));
let idade = ano_atual - ano_nascimento;
let tempo_trabalho = ano_atual - ano_ingresso;

if (idade >= 65 || tempo_trabalho >= 30 || (idade >= 60 && tempo_trabalho >= 25)) {
    alert("Sua idade é " + idade + " anos");
    alert("Seu tempo de trabalho é " + tempo_trabalho + " anos");
    alert("Requerer aposentadoria");
} else {
    alert("Sua idade é " + idade + " anos");
    alert("Seu tempo de trabalho é " + tempo_trabalho + " anos");
    alert("Não requerer aposentadoria");
}