let areaTotal = 0
let resposta
do{
    let nomeComodo = prompt("Digite o nome do cômodo")
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros)")) 
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros)"))

    let areaComodo = largura * comprimento
    areaTotal = areaTotal + areaComodo

    alert("Área do "+ nomeComodo+ ": "+ areaComodo+ " m²")
    resposta = prompt("Deseja adicionar outro cômodo? (SIM/NAO)")
} while (resposta.toUpperCase() !== "NAO")
    document.write("Área total da residência: "+ areaTotal+ " m²")