const alunos = ['Luiz', 'Maria', 'Joao'];
const nome = ['i', 'a', 'g', 'o'];
//const alunos = ['Luiz', 'Maria', 'Joao', 1, true, null]; // Arrays em JS podem guardar dados de varios tipos diferentes, mas fazer isso nao eh uma boa pratica

console.log(`Meu nome eh ${nome}`); // exibe cada caractere separando-os por virgula. Talvez strings nao sejam arrays de caracteres como em C
console.log('Meu nome eh ' + nome); // exibe o mesmo que a linha 5

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
console.log(alunos[0]);

alunos[3] = 'Luiza'; // como o indice 3 (posicao 4) nao existe no array, ele sera criado!
/**
 * Problema da linha 16 -> eh necessario saber o tamanho do array
 * Basta usar o 'length' para saber o tamanho do array
 * Observe:
 * */

alunos[alunos.length] = 'Luana'; /* o 'length' retornara o numero de elementos atual do array, que nao eh baseado em 0.
* Assim o 'length' sempre podera ser usado para indicar um novo indice
* */

console.log(alunos);

alunos.push('Pedro'); // adiciona um elemento ao final do array (topo da pilha)
alunos.unshift('Luiz'); // adiciona um elemento no inicio do array (no indice 0)
console.log(alunos);

let removido = alunos.pop(); // remove o elemento que esta no final do array (topo da pilha) -> desempilha
// retorna o elemento removido!
console.log(alunos);
console.log(`O aluno removido foi ${removido}`);

removido = alunos.shift(); // remove um elemento do inicio do array
// retorna o elemento removido!
console.log(`O aluno removido foi ${removido}`);
console.log(alunos);

/**
 * Os indices sao alterados com cada remocao feita por meio de um dos metodos vistos acima
 * Usar 'shift' ou 'unshift' nao eh muito recomendado, pois todos os indices do array serao alterados, prejudicando o desempenho
 * Para remover um elemento sem alterar os indices, eh utilizada a palavra reservada 'delete'
 * Observe
 */

delete alunos[0];
console.log(alunos); // execute o codigo e veja o que eh exibido
// acessar a posicao vazia retornara 'undefined'
console.log(alunos[0]);

// acessar um indice que nao existe tambem retorna 'undefined'
console.log(alunos[50]);

/**
 * Algumas das funcoes usadas para strings tambem funcionam com arrays
 */
console.log(alunos.slice(0, -1)); // relembrando: o metodo 'slice' exibe apenas ate o elemento que vem antes do indicado pelo segundo parametro

/**
 * Arrays sao considerados como objetos, porem indexados automaticamente
 */
console.log(typeof alunos);
// Para verificar se o objeto eh um array mesmo, pode-se usar o comando 'instanceof'
console.log(alunos instanceof Array);
