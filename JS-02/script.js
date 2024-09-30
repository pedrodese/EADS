let animais = [];
animais.push("cachorro");
animais.push("gato");
animais.push("elefante");
console.log("Array após adicionar animais com push:", animais);

animais.shift();
console.log("Array após remover o primeiro elemento com shift:", animais);

animais.unshift("leão", "tigre");
console.log("Array após adicionar animais no início com unshift:", animais);

animais[1] = "girafa";
console.log("Array após alterar o segundo elemento para 'girafa':", animais);

let frutas = ["maçã", "banana", "laranja", "uva"];
console.log("Número total de frutas no array:", frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}
