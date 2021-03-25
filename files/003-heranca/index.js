import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("José das Covas", 12345678945)
const cliente2 = new Cliente("Maria Fernanda", 98765432100)

const contaCorrente1 = new ContaCorrente(1234, cliente1)
console.log(contaCorrente1)
console.log()

const contaCorrente2 = new ContaCorrente(4321, cliente2)
console.log(contaCorrente2)
console.log()

let valorDeposito = 9999.99
const valorDepositado = contaCorrente1.depositar(valorDeposito)
console.log("Valor depositado: R$", valorDepositado)
console.log(contaCorrente1)

let valorSaque = 3210.98
const valorSacado = contaCorrente1.sacar(valorSaque)
console.log("Valor sacado: R$", valorSacado)
console.log(contaCorrente1)

console.log()

contaCorrente1.transferir(5000, contaCorrente2)
console.log(contaCorrente1)
console.log(contaCorrente2)
console.log("Número de contas:", ContaCorrente.numeroDeContas)