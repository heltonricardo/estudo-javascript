console.log("Trabalhando com Listas")

// const cidade1 = "Salvador"
// const cidade2 = "São Paulo"
// const cidade3 = "Rio de Janeiro"

const cidades = new Array("Salvador", "São Paulo", "Rio de Janeiro")
console.log(cidades)

// Adiciona itens à lista
// A lista é const(ante) mas os itens dentro dela podem ser alterados
cidades.push("Curitiba")
console.log(cidades)

// Remove, a partir do item 2, um elemento
cidades.splice(2, 1)
console.log(cidades)

// Exibe um item da lista
console.log(cidades[1])