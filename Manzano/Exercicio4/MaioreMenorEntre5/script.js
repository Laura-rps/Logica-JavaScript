let n1 = parseFloat(prompt("Digite o primeiro número:"))
let n2 = parseFloat(prompt("Digite o segundo número:"))
let n3 = parseFloat(prompt("Digite o terceiro número:"))
let n4 = parseFloat(prompt("Digite o quarto número:"))
let n5 = parseFloat(prompt("Digite o quinto número:"))

let maior = n1
let menor = n1

if(n2>maior){maior = n2}
if(n3>maior){maior = n3}
if(n4>maior){maior = n4}
if(n5>maior){maior = n5}

if(n2<menor){menor = n2}
if(n3<menor){menor = n3}
if(n4<menor){menor = n4}
if(n5<menor){menor = n5}

document.write("O maior numero é: "+maior+".<br>")
document.write("O menor numero é: "+menor+".")
