class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(this.som);
    }
}

class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descrever() {
        console.log(`${this.marca} ${this.modelo}, Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

class Estudante {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

class Utilitario {
    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

class Jogo {
    static adivinhar(numeroUsuario) {
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        return numeroUsuario === numeroAleatorio ? "Acertou!" : `Errou! Número correto era ${numeroAleatorio}`;
    }
}

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}
