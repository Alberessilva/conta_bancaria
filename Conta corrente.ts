abstract class Conta {
    private _titular: String;
    private _saldo: number;

    protected xpto: number = 0;

    constructor (titular: String) {
        this._titular = titular;
        this._saldo = 0;
    }

    get Titular(): String {
        return this._titular;
    }

    set titular(titular: String){
        this._titular = titular;
    }

    get Saldo(): number{
        return this._saldo;
    }


    public depositar(valor: number): void {
        if(valor > 0){
            this._saldo = this._saldo + valor;
        }
    }

    public sacar(valor: number): void {
        if(valor > 0 && valor <= this._saldo){
            this._saldo = this._saldo - valor;
        }
    }
}


class contaCorrente extends Conta {
    public override sacar(valor: number): void {
        let acrescimo = (1/100) * valor;
        let valorTotal = valor + acrescimo;
        super.sacar(valorTotal); 
    }
}


class contaPoupaca extends Conta {
    public override depositar(valor: number): void {
        let acrescimo = (1/100) * valor;
        let valorTotal = valor + acrescimo;
        super.depositar(valorTotal);
    }
}


let conta2 = new contaCorrente("Elton");
let conta3 = new contaPoupaca("Amauri");

conta2.depositar(200);
conta2.sacar(100);
console.log(conta2.Saldo);

conta3.depositar(100);
conta3.sacar(50);
console.log(conta3.Saldo);