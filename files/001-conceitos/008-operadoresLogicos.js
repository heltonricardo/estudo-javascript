console.log("Trabalhando com Operadores Lógicos")

const cidades = new Array("Curitiba", "Salvador", "São Paulo", "Rio de Janeiro")
console.log(cidades)

const idadeComprador = 15
const compradorAcompanhado = false

if (idadeComprador >= 18 || compradorAcompanhado) {
    console.log("Boa viagem!")
    cidades.splice(2, 1)
} else {
    console.log("Comprador não é maior de idade e não está acompanhado")
}

console.log(cidades)