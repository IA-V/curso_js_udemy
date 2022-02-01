var nome = 'Nome Qualquer com var';
var nome = 'Redeclaracao da variavel do Nome Qualquer com var';
//let nome = 'Redeclaracao da variavel do Nome Qualquer com let'; <-- gera erro, pois 'nome' ja foi declarada
// 'var' permite a redeclaracao, mas let nao

idade = 15;
//let idade; <-- gera erro, pois o interpretador identificara como uma declaracao apos a inicializacao
//eh possivel criar variaveis sem 'let' ou 'var', mas isso fara com que ela seja global
console.log(nome);
console.log(idade);