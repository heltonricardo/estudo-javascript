/*
 * Em JS é uma boa prática "declarar" os atributos diretamente no construtor.
 *
 * Não existe encapsulamento em JS mas, por convensão, atributos que começam
 * com underline são privados e não devem ser alterados fora dos métodos
 * acessores.
 * 
 * O lançamento no construtor serve para tornar a classe abstrata
*/
export class Conta {
    
    constructor(saldo, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Não instancie objetos da classe Conta!")
        }
        this._saldo = saldo
        this._cliente = cliente
        this._agencia = agencia
    }

    get saldo() {
        return this._saldo
    }
    
    get cliente() {
        return this._cliente
    }

    get agencia() {
        return this._agencia
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
            return valor
        }
        return 0
    }
    
    sacar(porcentagemTaxa, valor) {
        const taxa = porcentagemTaxa / 100 * valor
        if (this._saldo >= valor + taxa) {
            this._saldo -= valor + taxa
            return valor
        }
        return 0
    }

    transferir(valor, conta) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            conta.depositar(valor)
            return valor
        }
        return 0
    }
}