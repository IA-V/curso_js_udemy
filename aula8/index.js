const nome = `Luis Otavio Miranda`;
let idade = 30;
let peso = 84.0;
const altura = 1.8;
let imc = peso/(altura*altura);
const anoNascimento = 2022 - 33;

console.log(nome, 'tem', idade, 'anos' + ', tem', peso, 'quilos,', altura + 'm de altura', 'e nasceu em', anoNascimento + '.\nSeu IMC eh', imc);

// TEMPLATE STRINGS
console.log(`${nome} tem ${idade} anos, tem ${peso} quilos, ${altura}m de altura e nasceu em ${anoNascimento}.\nSeu IMC eh de ${imc}`);