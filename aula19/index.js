/*
Tipos primitivos (imutaveis) - string, number, boolean, undefined,
null (bigint, symbol) - valores copiados
*/

let a = 'A';
let b = a; // copia -> ocorre sempre que a atribuicao for feita com valores primitivos
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

/** 
 * Uma string eh imutavel porque, embora seja possivel exibir um de
 * seus caracteres separadamente, nao eh possivel altera-lo
 */

console.log(a[1]); // exibe 'u'
a[1] = 'i';
console.log(a[1]); // continua exibindo 'u'

/*
Tipos de referencia (mutaveis) - array, object, function - valores passados por referencia
*/
let c = [1,2,3];
let d = c; // referencia -> ocorre sempre que a atribuicao for feita com valores de referencia
// alteracoes feitas em 'd' sao refletidas em 'c' e vice-versa
console.log(c, d);

c.push(4); // adiciona '4' ao final de 'c' e 'd'
console.log(c, d);

d.shift();
console.log(c, d);

/**
 * Para fazer uma copia do array, e nao passar por referencia,
 * faz-se o seguinte
 */

let e = [...c]; // array de 'c' apenas copiado para 'e' -> 'spread'
console.log(c, e);

c.unshift(11);
console.log(c, e);


const pessoa = {
    nome: 'Iago',
    sobrenome: 'Victor'
};
const outraPessoa = pessoa;
console.log(pessoa.nome, outraPessoa.nome);

outraPessoa.nome = 'Andre';
console.log(pessoa.nome, outraPessoa.nome);

const maisOutraPessoa = {...pessoa}; // spread -> apenas copia
console.log(pessoa.nome, outraPessoa.nome, maisOutraPessoa.nome);

outraPessoa.nome = 'PV';
console.log(pessoa.nome, outraPessoa.nome, maisOutraPessoa.nome);