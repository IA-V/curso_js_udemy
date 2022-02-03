let num1 = 15;

num1 = num1.toString();
console.log(num1+15);

let num2 = 10.655000001;
console.log(num2.toFixed(2)); //limita o numero de casas decimais e arrendonda o valor
// acima sera exibido 10.66, pois o '1' ao final do valor faz com que '5000001' seja maior que a metade de '655000000'

num2 = 10.655000000;
console.log(num2.toFixed(2)); //limita o numero de casas decimais e arrendonda o valor
// acima sera exibido 10.65, pela razao oposta a do exemplo anterior

console.log(Number.isInteger(num1)); // retorna valor booleano
console.log(Number.isInteger(num2));

let temp = num1 * 'cafe';
console.log(Number.isNaN(temp));

temp = num1 + '5';
console.log(Number.isNaN(temp));

console.log(typeof temp);

/**
 * Javascript segue o padrao IEEE 754-2008 para a determinacao da precisao de um numero
 * Esse padrao tras um problema de imprecisao em numeros de ponto flutuante
 */

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4; // problema de precisao
num3 += num4;
console.log(num3); // exibira 0.9999... que, mesmo sendo arredondado, nao sera considerado como inteiro!!!

// testando afirmacao anterior
num3 = num3.toFixed(2);
console.log(Number.isInteger(num3)); // retorna false, pois os binarios sao verificados

// Uma forma de resolver o problema
num3 = parseFloat(num3); // isso ou fazer a conversao diretamente na linha 38
// parseFloat(valor) OU Number(valor)
console.log(Number.isInteger(num3));
console.log(num3);

/**
 * Outra forma de resolver o problema eh nao trabalhar com numeros decimais
 * Multiplicando os valores decimais por 10 ou 100... e dividindo o resultado por 10 ou 100 novamente
 * */