function soma(x, y){
    const resultado = x+y;
    return resultado;
}

function saudacao(nome){
    console.log(`Bom dia, ${nome}. Ola Mundo!`);
}

let variavel = saudacao('cafe'); // qualquer funcao em JS retorna 'undefined' por padrao
console.log(variavel);

variavel = soma(5, 7);
console.log(variavel);

console.log(soma()); // exibe NaN, pois nao foram passados valores numericos para os parametros, que serao 'undefined'
// se forem passadas strings, elas serao concatenadas

/**
 * Eh possivel atribuir valores padroes aos parametros de uma funcao em JS
 * Os parametros terao esses valores padroes caso nao sejam passados valores na chamada da funcao
 */
function soma2(x = 1, y = 7){
    return x+y;
}
console.log(soma2());
console.log(soma2(5)); // apenas o primeiro parametro passado -> o segundo tera o valor padrao definido

/**
 * Eh possivel atribuir uma funcao a uma variavel
 */
const raiz = function (n) {
    return n**0.5;
}
console.log(raiz(9));
console.log(raiz(25));

//Arrow Function!
const quadrado = (n) => {return n**2};
/** 
 * por ter apenas um parametro, os parenteses podem ser omitidos (apenas na arrow function)
 * por ter apenas uma linha, as chaves podem ser omitidas, mas somente se 'return' for omitida tambem
 * const quadrado = n => n**2
 * 
 * pode ser escrita como uma funcao comum, mas trocando a palavra 'function' pela seta
 */
const quadrado2 = n => {
    const resultado = n*n;
    return resultado;
};

console.log(quadrado(5));
console.log(quadrado2(5));