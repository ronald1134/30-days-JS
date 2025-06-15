class ContaBancaria {
    constructor(cliente, saldo = 0) {
        this.cliente = cliente;  // Nome do cliente
        this.saldo = saldo;  // Saldo da conta
    }
    // Método para depositar dinheiro na conta
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;  // Adiciona o valor ao saldo
            console.log(`Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`);
        } else {
            console.log("❌ Valor de depósito inválido. O valor deve ser maior que zero.");
        }
    }

    // Método para sacar dinheiro da conta
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;  // Subtrai o valor do saldo
            console.log(`Saque de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}🟩`);
        } else if (valor > this.saldo) {
            console.log("❌ Saldo insuficiente para realizar o saque.");
        }
    }
    // Método para exibir o saldo atual da conta
    exibirSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Criando uma instância da classe 'ContaBancaria' e testando os métodos
const minhaConta = new ContaBancaria("Ronald Oliveira", 1000);
// Testando os métodos
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.exibirSaldo();
minhaConta.sacar(1500);
minhaConta.sacar(-100); 