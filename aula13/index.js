let umaString = "Texto qualquer"; // strings sao indexadas

console.log(umaString[4]);
console.log(umaString.charAt(4)); // faz a mesma coisa que a linha 3
console.log(umaString.concat(4)); // concatena o valor entre () ao final da string

console.log(umaString.indexOf('qualquer')); // retorna o indice no qual a string entre () se inicia

console.log(umaString.indexOf('quer', 10)); // retorna o indice onde a string ou substring se inicia, verificando a partir do indice definido

console.log(umaString.lastIndexOf('uer', 11)); // retorna o indice no qual a string entre () se inicia, mas procurando da direita pra esquerda

console.log(umaString.match(/[a-z]/g)); // '/[a-z]/' eh uma expressao regular :)
// a flag "g" indica que sera considerado o grupo de letras da expressao regular, nao apenas uma unica instancia
console.log(umaString.search(/x/)); // faz o mesmo que 'indexOf', mas suporta expressoes regulares

console.log(umaString.replace('Texto', 'String')); // substitui o texto do primeiro parametro pelo do segundo, mas nao atribui. Suporta expressoes regulares
console.log(umaString);

console.log(umaString.length); // retorna o comprimento (num de caracteres) de uma string

console.log(umaString.slice(6, 14)); // corta a string a partir do indice do 1º parametro ate o indice do 2º parametro menos 1

console.log(umaString.slice(-8)); // 'slice' aceita indices negativos (similar ao python)
console.log(umaString.substring(6, 11)); // funciona da mesma forma que o 'slice' com indices positivos, mas nao aceita valores negativos

console.log(umaString.split('e', 2)) // o caractere usado para dividir a string nao eh considerado
/** 
 * O segundo parametro indica o numero de vezes que a string sera dividida
 * Caso esse valor seja menor que o maximo de vezes possivel que a string pode ser dividida, alguns pedacos nao serao colocados no array retornado
 * */

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());