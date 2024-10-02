let objeto = {};

let pessoa = {
  nome: "João",
  sobrenome: "Silva",
  sexo: "Masculino",
  idade: 30,
  altura: 1.75,
  peso: 70,
  andando: false,
  caminhouQuantosMetros: 0
};

pessoa.fazerAniversario = function() {
  this.idade += 1;
};

pessoa.andar = function(metros) {
  this.caminhouQuantosMetros += metros;
  this.andando = true;
};

pessoa.parar = function() {
  this.andando = false;
};

pessoa.nomeCompleto = function() {
  return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
};

pessoa.mostrarIdade = function() {
  return `Olá, eu tenho ${this.idade} anos!`;
};

pessoa.mostrarPeso = function() {
  return `Eu peso ${this.peso}Kg.`;
};

pessoa.mostrarAltura = function() {
  return `Minha altura é ${this.altura}m.`;
};

console.log(pessoa.nomeCompleto()); // Olá! Meu nome é João Silva!
console.log(pessoa.mostrarIdade()); // Olá, eu tenho 30 anos!
console.log(pessoa.mostrarPeso());  // Eu peso 70Kg.
console.log(pessoa.mostrarAltura()); // Minha altura é 1.75m.

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

console.log(pessoa.idade); // 33

pessoa.andar(10);
pessoa.andar(20);
pessoa.andar(5);

console.log(pessoa.andando); // true

pessoa.parar();

console.log(pessoa.andando); // false
console.log(pessoa.caminhouQuantosMetros); // 35

pessoa.apresentacao = function() {
  let artigo = this.sexo === "Feminino" ? "a" : "o";
  let anos = this.idade === 1 ? "ano" : "anos";
  let metros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";

  return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`;
};

console.log(pessoa.apresentacao());
