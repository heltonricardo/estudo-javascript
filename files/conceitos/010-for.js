console.log("Trabalhando com Loops")

const cidades = new Array("Curitiba", "Salvador", "São Paulo", "Rio de Janeiro");
console.log(cidades)

const destino = "Salvador"
console.log("Cidade procurada:", destino)

let destinoExiste = false

for (let contador = 0; contador < 3 && !destinoExiste; contador++) {
    if (cidades[contador] == destino) {
        destinoExiste = true
    }
}

console.log("Destino existe?:", destinoExiste)