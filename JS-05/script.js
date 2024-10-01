function calculaAreaRetangulo(largura, altura) {
    return largura * altura;
}


function verificaNumeroPar(numero) {
    return numero % 2 === 0;
}


function convertePolegadasEmCentimetros(polegadas) {
    return polegadas * 2.54;
}


function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}

function converteParaMinusculas(texto) {
    return texto.toLowerCase();
}


const multiplicaPorDez = (numero) => numero * 10;


console.log(calculaAreaRetangulo(5, 10)); // Exemplo: 50
console.log(verificaNumeroPar(4)); // Exemplo: true
console.log(convertePolegadasEmCentimetros(10)); // Exemplo: 25.4
console.log(calculaIMC(70, 1.75)); // Exemplo: 22.86
console.log(converteParaMinusculas("EXEMPLO")); // Exemplo: "exemplo"
console.log(multiplicaPorDez(7)); // Exemplo: 70
