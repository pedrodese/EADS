let frutas = new Set();
frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Laranja");
frutas.add("Maçã");

console.log(frutas.has("Banana"));

frutas.delete("Laranja");

frutas.clear();

let numeros = new Set([1, 2, 3, 4, 5, 6]);
console.log(numeros.size);

for (let valor of numeros) {
    console.log(valor);
}

let arrayDuplicado = [1, 2, 2, 3, 4, 4, 5];
let setSemDuplicatas = new Set(arrayDuplicado);
console.log(setSemDuplicatas);
