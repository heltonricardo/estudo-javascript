import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678945)
diretor.cadastrarSenha("a1b2c3")
const diretorLogado = SistemaAutenticacao.login(diretor, "a1b2c3")

const gerente = new Gerente("Ricardo",  5000, 98765432100)
gerente.cadastrarSenha("abc1234")
const gerenteLogado = SistemaAutenticacao.login(gerente, "abc123")

const cliente = new Cliente("Lais", 11111111111, "123")
const clienteLogado = SistemaAutenticacao.login(cliente, "123")

console.log("O Diretor está logado?", diretorLogado)
console.log("O Gerente está logado?", gerenteLogado)
console.log("O Cliente está logado?", clienteLogado)