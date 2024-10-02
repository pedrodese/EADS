let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
console.log(carro.modelo);

carro.cor = "Azul";
carro.ano = 2021;
console.log(carro);

let calculadora = {
    soma: function(a, b) {
        return a + b;
    }
};
console.log(calculadora.soma(5, 3));

for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}

let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien"
};
let outroLivro = livro;
outroLivro.titulo = "O Hobbit";
console.log(livro.titulo);

console.log(Object.keys(carro));
console.log(Object.values(carro));
