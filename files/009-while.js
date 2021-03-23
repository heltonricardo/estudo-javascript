console.log("Trabalhando com Loops")

const cidades = new Array("Curitiba", "Salvador", "São Paulo", "Rio de Janeiro");
console.log(cidades)

const destino = "Salvador"
console.log("Cidade procurada:", destino)

let contador = 0
let destinoExiste = false

while (contador < 3) {
    if (cidades[contador] == destino) {
        destinoExiste = true
        break
    }
    contador += 1
}

console.log("Destino existe?:", destinoExiste)