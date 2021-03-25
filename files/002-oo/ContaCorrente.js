import { Cliente } from "./Cliente.js"

// Por convensão, atributos que começam com underline são privados

export class ContaCorrente {
    static numeroDeContas = 0

    agencia
    _cliente
    _saldo

    constructor(agencia, cliente) {
        this.agencia = agencia
        // usando o método set e não atribuindo diretamente:
        this.cliente = cliente
        this._saldo = 0.0
        ContaCorrente.numeroDeContas++
    }

    get cliente() {
        this._cliente
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente
        }
    }

    get saldo() {
        return this._saldo
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
            return valor
        }
    }
    
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }

    transferir(valor, conta) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            conta.depositar(valor)
            return valor
        }
    }
}