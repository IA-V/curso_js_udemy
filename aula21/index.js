/**
 * Operadores de comparacao
 * 
 * > maior que
 * < menor que
 * >= maior ou igual a
 * <= menor ou igual a
 * == igualdade (verifica apenas valor -> nao recomendado)
 * === igualdade estrita (verifica valor e tipo)
 * != diferente (verifica apenas valor -> nao recomendado)
 * !== diferente estrito (verifica valor e tipo)
 */

console.log(10 > 5);

let comp = 5 > 10; // eh possivel atribuir o resultado de uma comparacao a uma variavel
console.log(comp);

const num1 = 10;
const num2 = '10';

comp = num1 == num2; // retorna 'true', mesmo sendo de tipos diferentes -> errado
// foi feita uma 'coercao'
console.log(comp);

comp = num1 === num2; // retorna 'false', pois os tipos sao diferentes -> correto
console.log(comp);

// diferenca estrita funciona da mesma forma
comp = num1 != num2; // retorna 'false'
console.log(comp);

comp = num1 !== num2; // retorna 'true'
console.log(comp);