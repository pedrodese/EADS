let livros = new Map();
livros.set("O Senhor dos Anéis", "J.R.R. Tolkien");
livros.set("1984", "George Orwell");
livros.set("Dom Quixote", "Miguel de Cervantes");

console.log(livros.get("1984"));

for (let [titulo, autor] of livros) {
    console.log(titulo + ": " + autor);
}

console.log(livros.size);
livros.delete("1984");
console.log(livros.has("1984"));

let colecao = new Map();
colecao.set("chaveString", "Valor 1");
colecao.set(42, "Valor 2");
colecao.set({id: 1}, "Valor 3");
console.log(colecao);
