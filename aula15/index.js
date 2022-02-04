let num1 = 9.6515461;
let num2 = Math.floor(num1); // funcao piso
console.log(num2);

num2 = Math.ceil(num1); // funcao teto
console.log(num2);

num2 = Math.round(num1); // arredonda para o valor mais proximo (9.65 eh mais proximo de 10)
console.log(num2);

console.log(Math.max(1,2,3,4,5,9,7,50,8,9)); // retorna o maior numero da sequencia
console.log(Math.min(1,2,3,4,5,9,7,50,8,9)); // retorna o menor numero da sequencia

console.log(Math.random()); // retorna um numero aleatorio entre 0 e 1 (o 1 nao eh incluido)

let aleatorio = Math.random() * (10-5)+5; // o "(10-5)+5" define um intervalo de 5 a 10 -> sera gerado um numero aleatorio entre 5 e 10
console.log(aleatorio);

console.log(Math.PI);

console.log(Math.pow(2, 10)); // eleva 2 a 10
//outra forma de fazer potenciacao
console.log(2 ** 10); // igual em pitao aha

// Uma forma de fazer raiz quadrada
console.log(64 ** (1/2));
console.log(64 ** 0.5);

console.log(100/0); // nao gera erro
// se for dividido por um numero pequeno o suficiente, o resultado tambem sera Infinity