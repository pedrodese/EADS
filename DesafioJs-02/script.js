// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a, b) {
    return a + b;
  }
  
  // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
  let resultado = somar(3, 7) + 5;
  
  // Qual o valor atualizado dessa variável?
  console.log(resultado); // O valor é 15
  
  // Declare uma nova variável, sem valor.
  let novaVariavel;
  
  /*
  Crie uma função que adicione um valor à variável criada acima, e retorne a string:
  O valor da variável agora é VALOR.
  Onde VALOR é o novo valor da variável.
  */
  function adicionarValor(valor) {
    novaVariavel = valor;
    return `O valor da variável agora é ${novaVariavel}.`;
  }
  
  // Invoque a função criada acima.
  console.log(adicionarValor(42));
  
  // Qual o retorno da função? (Use comentários de bloco).
  /*
  O valor da variável agora é 42.
  */
  
  /*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos;
  2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
  Preencha todos os valores corretamente!
  3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
  */
  function multiplicarTres(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
      return "Preencha todos os valores corretamente!";
    }
    return (a * b * c) + 2;
  }
  
  // Invoque a função criada acima, passando só dois números como argumento.
  console.log(multiplicarTres(2, 3)); // Preencha todos os valores corretamente!
  
  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  /*
  "Preencha todos os valores corretamente!"
  */
  
  // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
  console.log(multiplicarTres(2, 3, 4)); // O valor será 26
  
  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  /*
  26
  */
  
  /*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos.
  2. Se somente um argumento for passado, retorne o valor do argumento.
  3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
  4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
  5. Se nenhum argumento for passado, retorne o valor booleano `false`.
  6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
  */
  function verificarArgs(a, b, c) {
    if (a === undefined && b === undefined && c === undefined) {
      return false;
    }
    if (a !== undefined && b === undefined && c === undefined) {
      return a;
    }
    if (a !== undefined && b !== undefined && c === undefined) {
      return a + b;
    }
    if (a !== undefined && b !== undefined && c !== undefined) {
      return (a + b) / c;
    }
    return null;
  }
  
  // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.)
  console.log(verificarArgs());         // false
  console.log(verificarArgs(5));        // 5
  console.log(verificarArgs(5, 10));    // 15
  console.log(verificarArgs(5, 10, 3)); // 5
  