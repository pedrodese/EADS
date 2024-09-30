function classificarIdade(idade) {
    if (idade < 13) {
        return "criança";
    } else if (idade >= 13 && idade <= 17) {
        return "adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "adulto";
    } else {
        return "idoso";
    }
}

console.log(classificarIdade(10));
console.log(classificarIdade(15));
console.log(classificarIdade(30));
console.log(classificarIdade(70));

function jogoAdivinhacao(numero) {
    let escolha = 3;

    switch (numero) {
        case 1:
        case 2:
        case 4:
        case 5:
            console.log("Você errou! Tente novamente.");
            break;
        case 3:
            console.log("Parabéns! Você acertou.");
            break;
        default:
            console.log("Número inválido.");
    }
}

jogoAdivinhacao(2);
jogoAdivinhacao(3); 

function avaliarNota(nota) {
    switch (true) {
        case nota < 6:
            return "Reprovado";
        case nota >= 6 && nota <= 7:
            return "Recuperação";
        case nota > 7:
            return "Aprovado";
        default:
            return "Nota inválida";
    }
}

console.log(avaliarNota(5));
console.log(avaliarNota(6.5));
console.log(avaliarNota(8));
