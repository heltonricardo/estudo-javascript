console.log("Atribuição e Imutabilidade")

// Variável mutável
let nome = "Helton"

// Variável imutável
const sobrenome = "Santos"

console.log(nome + " " + sobrenome)

console.log(nome, sobrenome)

console.log(`Interpolação: ${nome} ${sobrenome}.`)

nome += " " + sobrenome

console.log(nome)