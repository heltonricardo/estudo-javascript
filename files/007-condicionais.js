console.log("Trabalhando com Condicionais")

const cidades = new Array("Curitiba", "Salvador", "São Paulo", "Rio de Janeiro");
console.log(cidades)

const idadeComprador = 15;

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade")
    cidades.splice(2, 1)
} else {
    console.log("Comprador não é maior de idade")
}
console.log(cidades)